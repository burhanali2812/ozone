import { NextResponse } from "next/server";
import connectDB from "../../../../lib/db";
import Worker from "../../../../models/Worker";

// GET all workers or single worker by ID
export async function GET(request) {
  try {
    await connectDB ();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      const worker = await Worker.findById(id);
      if (!worker) {
        return NextResponse.json(
          { error: "Worker not found" },
          { status: 404 },
        );
      }
      return NextResponse.json(worker);
    }

    const workers = await Worker.find().sort({ createdAt: -1 });
    return NextResponse.json(workers);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch workers", details: error.message },
      { status: 500 },
    );
  }
}

// POST - Create new worker
export async function POST(request) {
  try {
    await connectDB ();
    const data = await request.json();

    const worker = await Worker.create(data);
    return NextResponse.json(
      { message: "Worker created successfully", worker },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create worker", details: error.message },
      { status: 500 },
    );
  }
}

// PUT - Update worker
export async function PUT(request) {
  try {
    await connectDB ();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Worker ID is required" },
        { status: 400 },
      );
    }

    const data = await request.json();
    const worker = await Worker.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!worker) {
      return NextResponse.json({ error: "Worker not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Worker updated successfully",
      worker,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update worker", details: error.message },
      { status: 500 },
    );
  }
}

// DELETE - Delete worker
export async function DELETE(request) {
  try {
    await connectDB ();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Worker ID is required" },
        { status: 400 },
      );
    }

    const worker = await Worker.findByIdAndDelete(id);

    if (!worker) {
      return NextResponse.json({ error: "Worker not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Worker deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete worker", details: error.message },
      { status: 500 },
    );
  }
}
