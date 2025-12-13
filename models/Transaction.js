import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    doBy:{
        type: String,
        required: true,
    },
    amount:{
        type: Number,
        required: true,
        min: 0,
    },
    purpose :{
        type: String,
        required: true,

    },
    createdAt: {
        type: Date,
        default: Date.now,
    },     
})
const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema);

export default Transaction;