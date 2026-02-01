import mongoose from "mongoose";

const WorkerAttendanceSchema = new mongoose.Schema(
  {
    workerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Worker",
      required: [true, "Worker ID is required"],
    },
    checkIn: {
      type: Date,
      required: [true, "Check-in time is required"],
    },
    checkOut: {
      type: Date,
    },
    hoursWorked: {
      type: Number,
      default: 0,
    },
    weekNumber: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    notes: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["checked-in", "checked-out"],
      default: "checked-in",
    },
  },
  {
    timestamps: true,
  },
);

// Index for efficient querying
WorkerAttendanceSchema.index({ workerId: 1, weekNumber: 1, year: 1 });
WorkerAttendanceSchema.index({ workerId: 1, date: 1 });

export default mongoose.models.WorkerAttendance ||
  mongoose.model("WorkerAttendance", WorkerAttendanceSchema);
