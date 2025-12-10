import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    size: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    shopName: {
      type: String,
      required: true,
      trim: true,
    },

    shopAddress: {
      type: String,
      required: true,
      trim: true,
    },

    shopContact: {
      type: String,
      required: true,
      trim: true,
    },

    orderItems: {
      type: [orderItemSchema], // ⬅ MULTIPLE ITEMS HERE
      required: true,
      validate: {
        validator: (items) => items.length > 0,
        message: "Order must include at least 1 item.",
      },
    },

    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },

    paymentStatus: {
      type: String,
      enum: ["unpaid", "paid", "partially-paid"],
      default: "unpaid",
    },

    remainingAmount: {
      type: Number,
      min: 0,
      default: 0,
      validate: {
        validator: function (value) {
          if (this.paymentStatus === "partially-paid") {
            return value > 0;
          }
          return true;
        },
        message:
          "Remaining amount must be greater than 0 when status is partially-paid.",
      },
    },

    status: {
      type: String,
      enum: ["pending", "in-transit", "completed", "canceled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
