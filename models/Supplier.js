import mongoose from "mongoose";

const items = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const supplierSchema = new mongoose.Schema({
  supplierName: {
    type: String,
    required: true,
    trim: true,
  },
  contactEmail: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  contact: {
    type: String,
    required: true,
    trim: true,
  },
  suppliedItems: {
    type: [items], 
    required: true,
    validate: {
      validator: (items) => items.length > 0,
      message: "At least one item must be supplied.",
    },
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

const Supplier = mongoose.model("Supplier", supplierSchema);
export default Supplier;