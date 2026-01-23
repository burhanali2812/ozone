import mongoose from "mongoose";

const StockLogSchema = new mongoose.Schema(
  {
    productSize: {
      type: String,
      required: true,
    },
    producyType: {
      type: String,
      required: true,
      enum: ["bottle", "pet"],
    },
    bottleQuality: {
      type: String,
      required: true,
      enum: ["pure", "mix"],
    },
    actionType: {
      type: String,
      required: true,
      enum: ["add", "reduce", "order_delivered"],
    },
    quantityChanged: {
      type: Number,
      required: true,
    },
    previousQuantity: {
      type: Number,
      required: true,
    },
    newQuantity: {
      type: Number,
      required: true,
    },
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
    reason: {
      type: String,
      default: "",
    },
    performedBy: {
      type: String,
      default: "System",
    },
  },
  { timestamps: true },
);

const StockLog =
  mongoose.models.StockLog || mongoose.model("StockLog", StockLogSchema);
export default StockLog;
