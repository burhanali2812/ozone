import { NextResponse } from "next/server";
import connectDB from "../../../../../lib/db";
import WorkerAttendance from "../../../../../models/WorkerAttendance";
import Worker from "../../../../../models/Worker";

// Helper function to get week number
function getWeekNumber(date) {
  const d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
  );
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
}

// GET attendance records
export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const workerId = searchParams.get("workerId");
    const weekNumber = searchParams.get("weekNumber");
    const year = searchParams.get("year");
    const id = searchParams.get("id");

    console.log("GET attendance - Params:", { workerId, weekNumber, year, id });

    // Get single attendance record
    if (id) {
      const attendance =
        await WorkerAttendance.findById(id).populate("workerId");
      if (!attendance) {
        return NextResponse.json(
          { error: "Attendance record not found" },
          { status: 404 },
        );
      }
      return NextResponse.json(attendance);
    }

    // Build query
    let query = {};
    if (workerId) query.workerId = workerId;
    if (weekNumber) query.weekNumber = parseInt(weekNumber);
    if (year) query.year = parseInt(year);

    console.log("Attendance query:", query);

    const attendances = await WorkerAttendance.find(query)
      .populate("workerId")
      .sort({ checkIn: -1 });

    console.log("Found attendances:", attendances.length);

    // Calculate total hours for the week if filtering by worker and week
    if (workerId && weekNumber && year) {
      const totalHours = attendances.reduce(
        (sum, att) => sum + (att.hoursWorked || 0),
        0,
      );
      const remainingHours = Math.max(0, 45 - totalHours);

      const result = {
        attendances,
        totalHours,
        remainingHours,
        requiredHours: 45,
      };
      console.log("Returning weekly stats:", result);
      return NextResponse.json(result);
    }

    return NextResponse.json(attendances);
  } catch (error) {
    console.error("GET attendance error:", error);
    return NextResponse.json(
      { error: "Failed to fetch attendance records", details: error.message },
      { status: 500 },
    );
  }
}

// POST - Check in or create attendance record
export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    const { workerId, checkIn, notes } = data;

    console.log("POST check-in - Data received:", { workerId, checkIn, notes });

    if (!workerId) {
      return NextResponse.json(
        { error: "Worker ID is required" },
        { status: 400 },
      );
    }

    // Verify worker exists
    const worker = await Worker.findById(workerId);
    if (!worker) {
      return NextResponse.json({ error: "Worker not found" }, { status: 404 });
    }

    const checkInDate = checkIn ? new Date(checkIn) : new Date();
    const weekNumber = getWeekNumber(checkInDate);
    const year = checkInDate.getFullYear();
    const date = new Date(
      checkInDate.getFullYear(),
      checkInDate.getMonth(),
      checkInDate.getDate(),
    );

    console.log("Calculated values:", { checkInDate, weekNumber, year, date });

    // Check if worker is already checked in today
    const existingAttendance = await WorkerAttendance.findOne({
      workerId,
      date,
      status: "checked-in",
    });

    if (existingAttendance) {
      console.log("Worker already checked in:", existingAttendance);
      return NextResponse.json(
        { error: "Worker is already checked in today" },
        { status: 400 },
      );
    }

    const attendance = await WorkerAttendance.create({
      workerId,
      checkIn: checkInDate,
      weekNumber,
      year,
      date,
      notes,
      status: "checked-in",
    });

    console.log("Attendance created:", attendance);

    return NextResponse.json(
      { message: "Checked in successfully", attendance },
      { status: 201 },
    );
  } catch (error) {
    console.error("POST check-in error:", error);
    return NextResponse.json(
      { error: "Failed to check in", details: error.message },
      { status: 500 },
    );
  }
}

// PUT - Check out or update attendance
export async function PUT(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Attendance ID is required" },
        { status: 400 },
      );
    }

    const data = await request.json();
    const attendance = await WorkerAttendance.findById(id);

    if (!attendance) {
      return NextResponse.json(
        { error: "Attendance record not found" },
        { status: 404 },
      );
    }

    // If checking out, calculate hours worked
    if (data.checkOut) {
      const checkOut = new Date(data.checkOut);
      const checkIn = new Date(attendance.checkIn);
      const hoursWorked = (checkOut - checkIn) / (1000 * 60 * 60); // Convert to hours

      attendance.checkOut = checkOut;
      attendance.hoursWorked = parseFloat(hoursWorked.toFixed(2));
      attendance.status = "checked-out";
    }

    if (data.notes !== undefined) {
      attendance.notes = data.notes;
    }

    await attendance.save();

    return NextResponse.json({
      message: "Attendance updated successfully",
      attendance,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update attendance", details: error.message },
      { status: 500 },
    );
  }
}

// DELETE - Delete attendance record
export async function DELETE(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Attendance ID is required" },
        { status: 400 },
      );
    }

    const attendance = await WorkerAttendance.findByIdAndDelete(id);

    if (!attendance) {
      return NextResponse.json(
        { error: "Attendance record not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      message: "Attendance record deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete attendance record", details: error.message },
      { status: 500 },
    );
  }
}
