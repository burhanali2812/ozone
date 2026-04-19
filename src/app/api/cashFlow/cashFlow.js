import { NextResponse } from "next/server";
import connectDB from "../../../../lib/db";
import CashFlow from "../../../../models/CashFlow";

export async function POST(request) {
  try {
    await connectDB();
    const { type, source, amount, description, date } = await request.json();
    const cashFlow = new CashFlow({ type, source, amount, description, date });
    await cashFlow.save();
    return NextResponse.json({ message: "Cash flow added successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error adding cash flow:", error);
    return NextResponse.json({ message: "Error adding cash flow" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const cashFlows = await CashFlow.find().sort({ date: -1 });
    return NextResponse.json(cashFlows, { status: 200 });
  } catch (error) {
    console.error("Error fetching cash flows:", error);
    return NextResponse.json({ message: "Error fetching cash flows" }, { status: 500 });
  }
}