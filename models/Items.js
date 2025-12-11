import mongoose from "mongoose";

const item = new mongoose.Schema(
  {
    itemName: {
        type: String,
        required: true,
        trim: true,
    },
    quantity: {
      type: Number,
      required: true,
        min: 1,
    },
    price: {
      type: Number,
        required: true,
        min: 0,
    },
    total: {
      type: Number,
        required: true,
        min: 0,
    },
  },
  { _id: false }
);

const ItemsSchema = new mongoose.Schema(
  {
    items: {    
        type: [item], // ⬅ MULTIPLE ITEMS HERE
        required: true,
        validate: {
            validator: (items) => items.length > 0,
            message: "At least one item is required.",
        },
    },

    totalCost: {
        type: Number,
        required: true,
        min: 0,
    },

      supplierInfo:{
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
  },
  },


  { timestamps: true }

);
const Items = mongoose.models.Items || mongoose.model("Items", ItemsSchema);

export default Items;