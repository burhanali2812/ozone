import { NextResponse } from "next/server";
import connectDB from "../../../../lib/db";
import Order from "../../../../models/Order";

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


    if (!shopName || !shopAddress || !shopContact ) {
      return NextResponse.json(
        { message: "Shop details are required" },
        { status: 400 }
      );
    }

    if (!Array.isArray(orderItems) || orderItems.length === 0) {
      return NextResponse.json(
        { message: "Order must contain at least 1 item" },
        { status: 400 }
      );
    }

    // Validate each item
    for (let item of orderItems) {
      if (!item.size || !item.price || !item.quantity ) {
        return NextResponse.json(
          { message: "Each order item must include size, price, and quantity" },
          { status: 400 }
        );
      }
    }

    if (totalPrice === undefined) {
      return NextResponse.json(
        { message: "totalPrice is required" },
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
    });

    await newOrder.save();

    return NextResponse.json(
      { message: "Order placed successfully", order: newOrder },
      { status: 201 }
    );
  } catch (error) {
    console.error("Order creation error:", error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await connectDB();
    const action = request.nextUrl.searchParams.get("action");
    let orders;
    if (action === "deleted") {
      orders = await Order.find({ isDeleted: true }).sort({ createdAt: -1 });  
    } else {

     orders = await Order.find({ isDeleted: { $ne: true } }).sort({ createdAt: -1 });  
    }
    return NextResponse.json({ success : true, message: "Orders fetched successfully", data:orders }, { status: 200 });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
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
        { message: "orderId is required" },
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
        { message: "Order not found" },
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

