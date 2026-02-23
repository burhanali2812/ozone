import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  packingType: { type: String, required: true },
  size: { type: String, required: true },
  bottleQuality: { type: String, required: true, enum: ["Pure", "Mix"] },
  waterQuality: {
    type: String,
    required: true,
    enum: ["RO (Reverse Osmosis)", "Mineral"],
  },
  price: { type: Number, required: true },
  productionCost: { type: Number, required: true },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
