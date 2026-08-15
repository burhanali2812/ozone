import Stock from "../models/Stock";
import StockLog from "../models/StockLog";

/** Reduce stock for a product. Throws if insufficient.
 *  Reduces are always system/order-driven (stock going out), so unless a
 *  caller explicitly overrides it, performedBy is recorded as "System".
 */
export async function reduceStock({ productId, quantity, orderId, performedBy, reason }) {
  if (quantity <= 0) return;

  const stock = await Stock.findOne({ product: productId });
  const previousQuantity = stock ? stock.quantity : 0;

  if (previousQuantity < quantity) {
    const err = new Error(
      `Insufficient stock. Available: ${previousQuantity}, requested: ${quantity}`
    );
    err.code = "INSUFFICIENT_STOCK";
    err.productId = productId;
    err.available = previousQuantity;
    err.requested = quantity;
    throw err;
  }

  stock.quantity = previousQuantity - quantity;
  await stock.save();

  await StockLog.create({
    product: productId,
    actionType: "reduce",
    quantityChanged: quantity,
    previousQuantity,
    newQuantity: stock.quantity,
    orderId: orderId || undefined,
    reason: reason || "Order placed",
    performedBy: performedBy || "System",
  });
}

/** Add stock back for a product.
 *  For a genuine worker restock (via the Add Stock form), pass the real
 *  user's name as performedBy. For system-driven restores (an order being
 *  edited down or cancelled), leave performedBy unset so it logs as "System".
 */
export async function addStock({ productId, quantity, orderId, performedBy, reason }) {
  if (quantity <= 0) return;

  let stock = await Stock.findOne({ product: productId });
  const previousQuantity = stock ? stock.quantity : 0;

  if (!stock) {
    stock = new Stock({ product: productId, quantity: 0 });
  }

  stock.quantity = previousQuantity + quantity;
  await stock.save();

  await StockLog.create({
    product: productId,
    actionType: "add",
    quantityChanged: quantity,
    previousQuantity,
    newQuantity: stock.quantity,
    orderId: orderId || undefined,
    reason: reason || "Stock added",
    performedBy: performedBy || "System",
  });
}

/**
 * Diffs oldItems vs newItems (both [{product, quantity}]) and reduces/adds
 * stock for whatever changed. Use oldItems=[] for a new order, and
 * newItems=[] to fully restore stock (order cancelled / soft-deleted).
 *
 * This is always triggered by order creation/edit/cancellation, so every
 * resulting log entry is attributed to "System" — pass performedBy only if
 * you deliberately want to attribute it to a specific person instead.
 *
 * All insufficient-stock checks happen BEFORE any write, so an order that
 * can't be fulfilled never partially touches stock.
 */
export async function adjustStockForOrder({ oldItems = [], newItems = [], orderId, performedBy, reason }) {
  const oldMap = new Map();
  oldItems.forEach((i) => {
    const id = String(i.product);
    oldMap.set(id, (oldMap.get(id) || 0) + Number(i.quantity));
  });

  const newMap = new Map();
  newItems.forEach((i) => {
    const id = String(i.product);
    newMap.set(id, (newMap.get(id) || 0) + Number(i.quantity));
  });

  const productIds = new Set([...oldMap.keys(), ...newMap.keys()]);
  const deltas = [];

  for (const id of productIds) {
    const oldQty = oldMap.get(id) || 0;
    const newQty = newMap.get(id) || 0;
    const delta = newQty - oldQty; // >0 => reduce stock, <0 => add back
    if (delta !== 0) deltas.push({ productId: id, delta });
  }

  // Pre-check every increase so we never partially apply an order.
  for (const { productId, delta } of deltas) {
    if (delta > 0) {
      const stock = await Stock.findOne({ product: productId });
      const available = stock ? stock.quantity : 0;
      if (available < delta) {
        const err = new Error(
          `Insufficient stock for product ${productId}. Available: ${available}, requested: ${delta}`
        );
        err.code = "INSUFFICIENT_STOCK";
        err.productId = productId;
        err.available = available;
        err.requested = delta;
        throw err;
      }
    }
  }

  for (const { productId, delta } of deltas) {
    if (delta > 0) {
      await reduceStock({ productId, quantity: delta, orderId, performedBy, reason });
    } else {
      await addStock({ productId, quantity: -delta, orderId, performedBy, reason });
    }
  }
}