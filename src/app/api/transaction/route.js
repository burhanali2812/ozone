import { NextResponse } from "next/server";
import connectDB from "../../../../lib/db";
import Transaction from "../../../../models/Transaction";

export async function POST(request) {
  try {
    await connectDB();
    const { amount, doBy, purpose } = await request.json();
    if (!amount || !doBy || !purpose) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    const newTransaction = new Transaction({
      amount,
      doBy,
        purpose,
    });
    await newTransaction.save();
    return NextResponse.json({ message: "Transaction recorded successfully.", data: newTransaction, success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to record transaction.", error: error.message }, { status: 500 });
  }
}

export async function GET(request) {
    try {
        await connectDB();
        const transactions = await Transaction.find().sort({ createdAt: -1 });
        return NextResponse.json({ success : true, message: "Transactions fetched successfully", data:transactions }, { status: 200 });
    } catch (error) {
        console.error("Error fetching transactions:", error);
        return NextResponse.json(
            { success: false, message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
