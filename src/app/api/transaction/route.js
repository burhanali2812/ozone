import { NextResponse } from "next/server";
import connectDB from "../../../../lib/db";
import Transaction from "../../../../models/Transaction";
import AccountBalance from "../../../../models/AccountBalance";
import Stock from "../../../../models/Stock";
import Order from "../../../../models/Order";

export async function POST(request) {
  try {
    await connectDB();
    const { amount, doBy, purpose, type = "out", category = "other", relatedOrderId, relatedStockId } =
      await request.json();

    if (!amount || !doBy || !purpose) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Get or create balance
    let balance = await AccountBalance.findOne();
    if (!balance) {
      balance = new AccountBalance({ totalBalance: 0 });
    }

    // Calculate new balance
    let newBalance;
    if (type === "in") {
      newBalance = balance.totalBalance + amount;
    } else {
      newBalance = balance.totalBalance - amount;
      if (newBalance < 0) {
        return NextResponse.json(
          {
            success: false,
            message: "Insufficient balance",
            currentBalance: balance.totalBalance,
          },
          { status: 400 }
        );
      }
    }

    // Update balance
    balance.totalBalance = newBalance;
    await balance.save();

    // Create transaction
    const newTransaction = new Transaction({
      amount,
      doBy,
      purpose,
      type,
      category,
      balanceAfter: newBalance,
      relatedOrderId: relatedOrderId || null,
      relatedStockId: relatedStockId || null,
    });

    await newTransaction.save();

    return NextResponse.json(
      {
        message: "Transaction recorded successfully.",
        data: newTransaction,
        success: true,
        newBalance,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to record transaction.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await connectDB();
    const transactions = await Transaction.find().sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        message: "Transactions fetched successfully",
        data: transactions,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
