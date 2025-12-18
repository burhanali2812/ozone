import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    contact: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        required: true,
        trim: true, 
    },
    coins: {
        type: Number,
        required: true,
        default: 0,
        min: 0,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
});
const Customer = mongoose.model('Customer', customerSchema);

export default Customer;