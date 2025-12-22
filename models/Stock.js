import mongoose from "mongoose";

const StockSchema = new mongoose.Schema({
    productSize: {
        type: String,
        required: true, 
    },
    producyType: {
        type: String,
        required: true,
        enum: ["bottle", "pet"],
    },
    quantity: {
        type: Number,
        required: true,
        default: 0,
    },
    costPerType: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const Stock = mongoose.models.Stock || mongoose.model("Stock", StockSchema);
export default Stock;
