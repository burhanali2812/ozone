import connectionDb from "../../../../../lib/db";
import Supplier from "../../../../../models/Supplier";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectionDb();

    const { supplierId, itemName, price } = await req.json();

    if (!supplierId || !itemName || !price) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const newItem = {
      itemName,
      price,
    };

    const supplier = await Supplier.findByIdAndUpdate(
      supplierId,
      { $push: { suppliedItems: newItem } },
      { new: true }
    );

    if (!supplier) {
      return NextResponse.json(
        { success: false, message: "Supplier not found" },
        { status: 404 }
      );
    }

    const addedItem = supplier.suppliedItems[supplier.suppliedItems.length - 1];

    return NextResponse.json(
      { success: true, data: addedItem },
      { status: 200 }
    );
  } catch (error) {
    console.error("Add item error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
