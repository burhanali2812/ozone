import mongoose from "mongoose";

const StockSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      unique: true, // one stock record per product
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
  },
  { timestamps: true }
);

const Stock = mongoose.models.Stock || mongoose.model("Stock", StockSchema);
export default Stock;