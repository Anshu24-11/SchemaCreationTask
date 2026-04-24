const mongoose = require("mongoose");
const { paymentMethods, paymentStatus } = require("../constant");

const paymentSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Order",
    },
    status: {
      type: String,
      enum: Object.values(paymentStatus),
      default: paymentStatus.PENDING,
    },
    method: {
      type: String,
      enum: Object.values(paymentMethods),
      default: paymentMethods.CASHONDELIVERY,
    },
  },
  { timestamps: true },
);

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
