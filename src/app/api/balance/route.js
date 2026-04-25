import { NextResponse } from "next/server";
import connectDB from "../../../../lib/db";
import AccountBalance from "../../../../models/AccountBalance";
import Transaction from "../../../../models/Transaction";
import Order from "../../../../models/Order";

// Get current balance
export async function GET(request) {
  try {
    await connectDB();
    const action = request.nextUrl.searchParams.get("action");

    if (action === "recalculate") {
      // Recalculate balance from orders and transactions
      // Formula: Total Sales - Ozone Expenses = Balance
      
      // Get all paid and partially-paid orders (sales)
      const orders = await Order.find({
        paymentStatus: { $in: ["paid", "partially-paid"] },
        isDeleted: { $ne: true },
      });

      const totalSales = orders.reduce((sum, order) => sum + (order.totalPrice || 0), 0);

      // Get all transactions with type "out" and doBy "Ozone" (expenses)
      const ozoneTransactions = await Transaction.find({
        type: "out",
        doBy: "Ozone",
      });

      const ozoneExpenses = ozoneTransactions.reduce(
        (sum, trans) => sum + (trans.amount || 0),
        0
      );

      // Calculate balance
      const calculatedBalance = totalSales - ozoneExpenses;

      // Update or create balance record
      let balance = await AccountBalance.findOne();
      if (!balance) {
        balance = new AccountBalance({ totalBalance: calculatedBalance });
      } else {
        balance.totalBalance = calculatedBalance;
      }
      await balance.save();

      return NextResponse.json(
        {
          success: true,
          message: "Balance recalculated from sales and transactions",
          balance: calculatedBalance,
          details: {
            totalSales,
            ozoneExpenses,
            calculatedBalance,
          },
        },
        { status: 200 }
      );
    }

    // Get current balance
    let balance = await AccountBalance.findOne();

    if (!balance) {
      balance = new AccountBalance({ totalBalance: 0 });
      await balance.save();
    }

    return NextResponse.json(
      { success: true, balance: balance.totalBalance },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching balance:", error);
    return NextResponse.json(
      { success: false, message: "Error fetching balance" },
      { status: 500 }
    );
  }
}

// Update balance and create transaction record
export async function POST(request) {
  try {
    await connectDB();
    const { amount, type, doBy, purpose, category, relatedOrderId, relatedStockId } =
      await request.json();

    if (!amount || !type || !doBy || !purpose) {
      return NextResponse.json(
        { success: false, message: "All required fields must be provided" },
        { status: 400 }
      );
    }

    if (!["in", "out"].includes(type)) {
      return NextResponse.json(
        { success: false, message: "Type must be 'in' or 'out'" },
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

    // Create transaction record
    const transaction = new Transaction({
      amount,
      type,
      doBy,
      purpose,
      category: category || "other",
      balanceAfter: newBalance,
      relatedOrderId: relatedOrderId || null,
      relatedStockId: relatedStockId || null,
    });

    await transaction.save();

    return NextResponse.json(
      {
        success: true,
        message: "Transaction recorded successfully",
        transaction,
        newBalance,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error updating balance:", error);
    return NextResponse.json(
      { success: false, message: "Error processing transaction" },
      { status: 500 }
    );
  }
}
