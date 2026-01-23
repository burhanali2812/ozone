import connectionDb from "../../../../lib/db";
import Stock from "../../../../models/Stock";
import StockLog from "../../../../models/StockLog";

export async function POST(request) {
  try {
    await connectionDb();
    const { productSize, producyType, bottleQuality, quantity } =
      await request.json();

    if (
      !productSize ||
      !producyType ||
      !bottleQuality ||
      quantity === undefined
    ) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields are required" }),
        { status: 400 }
      );
    }

    // Check if stock with same productSize, producyType and bottleQuality already exists
    const existingStock = await Stock.findOne({ productSize, producyType, bottleQuality });

    if (existingStock) {
      const previousQuantity = existingStock.quantity;
      existingStock.quantity += Number(quantity);
      await existingStock.save();

      // Create log entry
      await StockLog.create({
        productSize,
        producyType,
        bottleQuality,
        actionType: "add",
        quantityChanged: Number(quantity),
        previousQuantity,
        newQuantity: existingStock.quantity,
        reason: "Stock replenishment",
      });

      return new Response(
        JSON.stringify({
          success: true,
          message: "Stock updated successfully",
          stock: existingStock,
          action: "updated",
        }),
        { status: 200 }
      );
    } else {
      const newStock = new Stock({
        productSize,
        producyType,
        bottleQuality,
        quantity,
      });
      await newStock.save();

      // Create log entry for new stock
      await StockLog.create({
        productSize,
        producyType,
        bottleQuality,
        actionType: "add",
        quantityChanged: Number(quantity),
        previousQuantity: 0,
        newQuantity: Number(quantity),
        reason: "Initial stock added",
      });

      return new Response(
        JSON.stringify({
          success: true,
          message: "Stock added successfully",
          stock: newStock,
          action: "created",
        }),
        { status: 201 }
      );
    }
  } catch (error) {
    console.error("Error adding stock:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    await connectionDb();
    const stocks = await Stock.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify({ success: true, stocks }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching stocks:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      {
        status: 500,
      }
    );
  }
}

export async function PATCH(request) {
  try {
    await connectionDb();
    const { productSize, producyType, quantityToReduce, orderId, reason } = await request.json();

    if (
      !productSize ||
      !producyType ||
      quantityToReduce === undefined ||
      quantityToReduce <= 0
    ) {
      return new Response(
        JSON.stringify({
          success: false,
          message:
            "Product size, product type, and valid quantity to reduce are required",
        }),
        { status: 400 }
      );
    }

    // Find the stock entry for this product size and type
    const stock = await Stock.findOne({ productSize, producyType });

    if (!stock) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "No stock found for this product",
        }),
        { status: 404 }
      );
    }

    // Check if sufficient stock is available
    if (stock.quantity < quantityToReduce) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Insufficient stock",
          available: stock.quantity,
          requested: quantityToReduce,
          error: "INSUFFICIENT_STOCK",
        }),
        { status: 400 }
      );
    }

    // Reduce the quantity
    const previousQuantity = stock.quantity;
    stock.quantity -= quantityToReduce;
    await stock.save();

    // Create log entry for stock reduction
    await StockLog.create({
      productSize,
      producyType,
      actionType: reason === "Order delivered" ? "order_delivered" : "reduce",
      quantityChanged: quantityToReduce,
      previousQuantity,
      newQuantity: stock.quantity,
      orderId: orderId || null,
      reason: reason || "Stock reduced",
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Stock reduced successfully",
        reducedQuantity: quantityToReduce,
        remainingQuantity: stock.quantity,
        updatedStock: stock,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error reducing stock:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      {
        status: 500,
      }
    );
  }
}
