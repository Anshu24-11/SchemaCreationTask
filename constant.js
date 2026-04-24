const statusEnum = {
  PLACED: "placed",
  SHIPPED: "shipped",
  DELIVERED: "delivered",
  CANCELLED: "cancelled",
};

const paymentMethods = {
  CASHONDELIVERY: "cash on delivery",
  UPI: "upi",
  CARD: "card",
};
const paymentStatus = {
  PENDING: "pending",
  PROCESSING: "processing",
  SUCCESS: "success",
  FAILED: "failed",
  CANCELLED: "cancelled",
  REFUNDED: "refunded",
};
module.exports = { statusEnum, paymentMethods, paymentStatus };
