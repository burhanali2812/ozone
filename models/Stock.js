import mongoose from "mongoose";

const StockSchema = new mongoose.Schema(
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
      default: "pure",
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true },
);

const Stock = mongoose.models.Stock || mongoose.model("Stock", StockSchema);
export default Stock;
