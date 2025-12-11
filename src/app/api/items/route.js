import connectionDb from "../../../../lib/db";
import { NextResponse } from "next/server";
import Item from "../../../../models/Items";

export async function POST(request) {
  try {
    await connectionDb();
    const { items, supplierInfo } = await request.json();
    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { message: "At least one item is required to create an order." },
        { status: 400 }
      );
    }
    let totalCost = 0;
    for (let item of items) {
      if ( !item.itemName || !item.quantity || !item.price || !item.total ) {
        return NextResponse.json(
          { message: "Each item must include name, quantity, price, and total." },
            { status: 400 }
        );
      }
        totalCost += item.total;
    }

    const newItemEntry = new Item({
      items,
      totalCost,
      supplierInfo,
    });
    await newItemEntry.save();

    return NextResponse.json(
      { success: true, message: "Items added successfully", item: newItemEntry },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in adding items:", error.message);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
    try {
        await connectionDb();
        const items = await Item.find().sort({ createdAt: -1 });
        return NextResponse.json({ success : true, message: "Items fetched successfully", data:items }, { status: 200 });
    } catch (error) {
        console.error("Error fetching items:", error);
        return NextResponse.json(
            { success: false, message: "Internal Server Error" },
            { status: 500 }
        );
    }
}