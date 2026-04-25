import mongoose from "mongoose";

const accountBalanceSchema = new mongoose.Schema(
  {
    totalBalance: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    description: {
      type: String,
      default: "Company Account Balance",
    },
  },
  { timestamps: true }
);

const AccountBalance =
  mongoose.models.AccountBalance ||
  mongoose.model("AccountBalance", accountBalanceSchema);

export default AccountBalance;
