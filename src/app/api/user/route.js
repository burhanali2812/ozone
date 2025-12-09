import connectionDb from "../../../../lib/db";

import { NextResponse } from "next/server";
import User from "../../../../models/User";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    await connectionDb();

    const { name, phone, role, password } = await request.json();

    // const existingUser = await User.findOne({ phone });

    // if (existingUser) {
    //   return NextResponse.json(
    //     { success: false, message: "User already exists" },
    //     { status: 400 }
    //   );
    // }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      phone,
      role,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json(
      { success: true, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in user registration:", error.message);

    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
