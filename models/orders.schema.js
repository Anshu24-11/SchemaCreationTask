const mongoose = require("mongoose");
const { statusEnum } = require("../constant");

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },
  amount: { type: Number, required: true },
});

const ordersSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    products: { type: [orderItemSchema], required: true },
    status: {
      type: String,
      enum: Object.values(statusEnum),
      default: statusEnum.PLACED,
    },
    total: { type: Number, required: true },
  },
  { timestamps: true },
);

const Order = mongoose.model("Order", ordersSchema);
module.exports = Order;
