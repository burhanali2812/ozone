import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    doBy: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    purpose: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["in", "out"],
      required: true,
    },
    balanceAfter: {
      type: Number,
      required: true,
      default: 0,
    },
    relatedOrderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      default: null,
    },
    relatedStockId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Stock",
      default: null,
    },
    category: {
      type: String,
      enum: ["sales", "purchase", "expense", "other"],
      default: "other",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Transaction =
  mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema);

export default Transaction;