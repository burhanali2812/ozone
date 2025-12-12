import connectionDb from "../../../../lib/db";
import Supplier from "../../../../models/Supplier";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectionDb();
    const { supplierName, contactEmail, address, contact, suppliedItems } = await request.json();
    if (!supplierName || !contactEmail || !address || !contact) {
      return NextResponse.json(
        { message: "Supplier name, contact email, address, and contact are required." },
        { status: 400 }
      );
    }
    if (!Array.isArray(suppliedItems) || suppliedItems.length === 0) {
      return NextResponse.json(
        { message: "At least one supplied item is required." },
        { status: 400 }
      );
    }
    for (let item of suppliedItems) {
      if (!item.itemName || !item.price) {
        return NextResponse.json(
          { message: "Each supplied item must include item name and price." },
          { status: 400 }
        );
      }
    }
    const newSupplier = new Supplier({
      supplierName,
      contactEmail,
      address,
      contact,
      suppliedItems,
    });
    await newSupplier.save();
    return NextResponse.json({ message: "Supplier created successfully." }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to create supplier.", error: error.message }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    await connectionDb();
    const suppliers = await Supplier.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, message: "Suppliers fetched successfully", data: suppliers }, { status: 200 });
  } catch (error) {
    console.error("Error fetching suppliers:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  try {
    await connectionDb();

    const { supplierId, itemId, itemName, price } = await req.json();

    if (!supplierId || !itemId || !itemName || !price) {
      return NextResponse.json(
        { success: false, message: "All fields required" },
        { status: 400 }
      );
    }

    const supplier = await Supplier.findOneAndUpdate(
      { _id: supplierId, "suppliedItems._id": itemId },
      {
        $set: {
          "suppliedItems.$.itemName": itemName,
          "suppliedItems.$.price": price,
        },
      },
      { new: true }
    );

    if (!supplier) {
      return NextResponse.json(
        { success: false, message: "Supplier or item not found" },
        { status: 404 }
      );
    }

    const updatedItem = supplier.suppliedItems.find((i) => i._id == itemId);

    return NextResponse.json(
      { success: true, data: updatedItem },
      { status: 200 }
    );
  } catch (err) {
    console.error("Update item error:", err);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
