import mongoose from "mongoose";

const cashFlowSchema = new mongoose.Schema(
  {
    type: {
        type: String,
        required: true,
        enum: ["In", "Out"],
    },
    source: {
        type: String,
        required: true,
        trim: true,
    },
    amount: {
      type: Number,
      required: true,
        min: 0,
    },
    description: {
      type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date, 
        required: true,
        default: Date.now,
    },
  },
  { timestamps: true },
);

const CashFlow = mongoose.models.CashFlow || mongoose.model("CashFlow", cashFlowSchema);

export default CashFlow;