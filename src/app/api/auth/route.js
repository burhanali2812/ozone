import { NextResponse } from "next/server";
import connectDB from "../../../../lib/db";
import User from "../../../../models/User";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    await connectDB();
    const {phone, password } = await request.json();
    const user = await User.findOne({ phone });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "No user found with this phone number" },
        { status: 400 }
      );
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, message: "Invalid Password!"},
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: true, message: "Login successful", user: {name: user.name, role: user.role, phone: user.phone} },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in user login:", error.message);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}