import mongoose from "mongoose";

const WorkerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Worker name is required"],
      trim: true,
    },
    fatherName: {
      type: String,
      required: [true, "Father name is required"],
      trim: true,
    },
    contact: {
      type: String,
      required: [true, "Contact is required"],
      trim: true,
    },
    fatherContact: {
      type: String,
      trim: true,
    },
    dateOfJoin: {
      type: Date,
      required: [true, "Date of join is required"],
      default: Date.now,
    },
    weeklyPayment: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    address: {
      type: String,
      trim: true,
    },
    cnicNumber: {
      type: String,
      trim: true,
    },
    emergencyContact: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Worker || mongoose.model("Worker", WorkerSchema);
