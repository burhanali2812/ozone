import { NextResponse } from "next/server";
import connectDB from "../../../../lib/db";
import Order from "../../../../models/Order";
import Product from "../../../../models/Product";
import { sendOrderNotificationEmail } from "../../../../lib/emailService";

const generateTrackingID = () => {
  const prefix = "OZONE";
  const id = Math.random().toString(36).substring(2, 10).toUpperCase();
  return `${prefix}-${id}`;
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

    // Validate each item
    for (let item of orderItems) {
      if (!item.product || !item.price || !item.quantity) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Each order item must include product, price, and quantity",
          },
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
      orderItems,
      totalPrice,
      paidAmount,
      paymentStatus,
      remainingAmount,
      status,
      trackingID: generateTrackingID(),
    });

    await newOrder.save();

    // Send email notification to admin (non-blocking)
    sendOrderNotificationEmail(newOrder).catch((err) => {
      console.error("Failed to send order notification email:", err);
      // Don't fail the order creation if email fails
    });

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

    // Search by tracking ID and contact number
    if (trackingId && contact) {
      const order = await Order.findOne({
        trackingID: trackingId,
        shopContact: contact,
        isDeleted: { $ne: true },
      }).populate("orderItems.product");

      if (!order) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Order not found with the provided tracking ID and contact number",
          },
          { status: 404 }
        );
      }

      return NextResponse.json(
        { success: true, message: "Order found", order },
        { status: 200 }
      );
    }

    // Fetch all orders (existing functionality)
    let orders;
    if (action === "deleted") {
      orders = await Order.find({ isDeleted: true })
        .populate("orderItems.product")
        .sort({ createdAt: -1 });
    } 
    else if(action === "top20"){
      orders = await Order.find({ isDeleted: { $ne: true } })
        .populate("orderItems.product")
        .sort({
          createdAt: -1,
        })
        .limit(20);
    }
    else {
      orders = await Order.find({ isDeleted: { $ne: true } })
        .populate("orderItems.product")
        .sort({
          createdAt: -1,
        });
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
      return NextResponse.json(
        { success: false, message: "orderId is required" },
        { status: 400 }
      );
    }

    let finalUpdate = {};

    //  Soft delete
    if (action === "delete") {
      finalUpdate.isDeleted = true;
    }

    //  Normal update
    if (action === "update") {
      finalUpdate = updateData;
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { $set: finalUpdate },
      { new: true }
    );

    if (!updatedOrder) {
      return NextResponse.json(
        { success: false, message: "Order not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Order updated", order: updatedOrder },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
