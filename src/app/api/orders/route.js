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
      orderItems, // ⬅ ARRAY
      totalPrice,
      paymentStatus,
      remainingAmount,
      status,
    } = await request.json();

    // --- VALIDATION ---
    if (!shopName || !shopAddress || !shopContact) {
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
      if (!item.size || !item.price || !item.quantity) {
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

    // --- CREATE ORDER ---
    const newOrder = new Order({
      shopName,
      shopAddress,
      shopContact,
      orderItems,
      totalPrice,
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

