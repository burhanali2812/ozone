import { NextResponse } from "next/server";
import connectDB from "../../../../lib/db";
import Order from "../../../../models/Order";
import Product from "../../../../models/Product";
import { adjustStockForOrder } from "../../../../lib/stockHelpers";

const generateTrackingID = () => {
  const prefix = "OZONE";
  const id = Math.random().toString(36).substring(2, 10).toUpperCase();
  return `${prefix}-${id}`;
};

// Ensure orderItems.product is always a plain ObjectId string, even if the
// client sends back a populated product object (e.g. re-submitting a fetched order).
const normalizeOrderItems = (items) => {
  if (!Array.isArray(items)) return items;
  return items.map((item) => {
    const rawProduct = item?.product;
    const productId =
      rawProduct && typeof rawProduct === "object"
        ? rawProduct._id || rawProduct.id
        : rawProduct;
    return {
      ...item,
      product: productId,
    };
  });
};

export async function POST(request) {
  try {
    await connectDB();

    const {
      shopName,
      shopAddress,
      shopContact,
      orderItems,
      paidAmount,
      totalPrice,
      paymentStatus,
      remainingAmount,
      status,
    } = await request.json();

    if (!shopName || !shopAddress || !shopContact) {
      return NextResponse.json(
        { success: false, message: "Shop details are required" },
        { status: 400 }
      );
    }

    if (!Array.isArray(orderItems) || orderItems.length === 0) {
      return NextResponse.json(
        { success: false, message: "Order must contain at least 1 item" },
        { status: 400 }
      );
    }

    const normalizedItems = normalizeOrderItems(orderItems);

    for (let item of normalizedItems) {
      if (!item.product || !item.price || !item.quantity || item.discountedPrice === undefined) {
        return NextResponse.json(
          { success: false, message: "Each order item must include product, price, quantity, and discountedPrice" },
          { status: 400 }
        );
      }
    }

    if (totalPrice === undefined) {
      return NextResponse.json(
        { success: false, message: "totalPrice is required" },
        { status: 400 }
      );
    }

    const newOrder = new Order({
      shopName,
      shopAddress,
      shopContact,
      orderItems: normalizedItems,
      totalPrice,
      paidAmount,
      paymentStatus,
      remainingAmount,
      status,
      trackingID: generateTrackingID(),
    });

    await newOrder.save();

    // Reduce stock for every item. Order-driven changes are attributed to
    // "System" (no performedBy passed here on purpose). If anything is
    // short, the order is rolled back.
    try {
      await adjustStockForOrder({
        oldItems: [],
        newItems: normalizedItems,
        orderId: newOrder._id,
        reason: `Order ${newOrder.trackingID} placed`,
      });
    } catch (stockError) {
      await Order.findByIdAndDelete(newOrder._id);
      if (stockError.code === "INSUFFICIENT_STOCK") {
        return NextResponse.json(
          {
            success: false,
            message: "Order not placed — insufficient stock",
            productId: stockError.productId,
            available: stockError.available,
            requested: stockError.requested,
          },
          { status: 400 }
        );
      }
      throw stockError;
    }

    return NextResponse.json(
      { success: true, message: "Order placed successfully", order: newOrder },
      { status: 201 }
    );
  } catch (error) {
    console.error("Order creation error:", error);
    return NextResponse.json(
      { success: false, message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await connectDB();
    const action = request.nextUrl.searchParams.get("action");
    const trackingId = request.nextUrl.searchParams.get("trackingId");
    const contact = request.nextUrl.searchParams.get("contact");

    if (trackingId && contact) {
      const order = await Order.findOne({
        trackingID: trackingId,
        shopContact: contact,
        isDeleted: { $ne: true },
      }).populate("orderItems.product");

      if (!order) {
        return NextResponse.json(
          { success: false, message: "Order not found with the provided tracking ID and contact number" },
          { status: 404 }
        );
      }

      return NextResponse.json({ success: true, message: "Order found", order }, { status: 200 });
    }

    let orders;
    if (action === "deleted") {
      orders = await Order.find({ isDeleted: true }).populate("orderItems.product").sort({ createdAt: -1 });
    } else if (action === "top20") {
      orders = await Order.find({ isDeleted: { $ne: true } })
        .populate("orderItems.product")
        .sort({ createdAt: -1 })
        .limit(20);
    } else {
      orders = await Order.find({ isDeleted: { $ne: true } }).populate("orderItems.product").sort({ createdAt: -1 });
    }
    return NextResponse.json(
      { success: true, message: "Orders fetched successfully", data: orders },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { success: false, message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    await connectDB();
    const { action, orderId, updateData } = await request.json();

    if (!orderId) {
      return NextResponse.json({ success: false, message: "orderId is required" }, { status: 400 });
    }

    const existingOrder = await Order.findById(orderId);
    if (!existingOrder) {
      return NextResponse.json({ success: false, message: "Order not found" }, { status: 404 });
    }

    let finalUpdate = {};
    // existingOrder.orderItems comes straight from the DB (unpopulated),
    // so its .product fields are already plain ObjectIds.
    let oldItems = existingOrder.orderItems;
    let newItems = existingOrder.orderItems;
    let stockReason = `Order ${existingOrder.trackingID} updated`;

    if (action === "delete") {
      // Soft delete: restore whatever stock this order was holding.
      finalUpdate.isDeleted = true;
      newItems = [];
      stockReason = `Order ${existingOrder.trackingID} cancelled`;
    } else if (action === "restore") {
      // Undo a soft delete: re-reduce stock (may fail if stock has run out since).
      finalUpdate.isDeleted = false;
      oldItems = [];
      newItems = existingOrder.orderItems;
      stockReason = `Order ${existingOrder.trackingID} restored`;
    } else if (action === "update") {
      finalUpdate = updateData;
      if (Array.isArray(updateData?.orderItems)) {
        // updateData may come from the client re-submitting a populated order,
        // where .product is a full object instead of an ObjectId string.
        newItems = normalizeOrderItems(updateData.orderItems);
        finalUpdate.orderItems = newItems;
      }
    }

    // Order-driven changes are attributed to "System" (no performedBy passed).
    try {
      await adjustStockForOrder({
        oldItems,
        newItems,
        orderId,
        reason: stockReason,
      });
    } catch (stockError) {
      if (stockError.code === "INSUFFICIENT_STOCK") {
        return NextResponse.json(
          {
            success: false,
            message: "Update failed — insufficient stock",
            productId: stockError.productId,
            available: stockError.available,
            requested: stockError.requested,
          },
          { status: 400 }
        );
      }
      throw stockError;
    }

    const updatedOrder = await Order.findByIdAndUpdate(orderId, { $set: finalUpdate }, { new: true });

    return NextResponse.json({ success: true, message: "Order updated", order: updatedOrder }, { status: 200 });
  } catch (error) {
    console.error("Order update error:", error);
    return NextResponse.json(
      { success: false, message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}