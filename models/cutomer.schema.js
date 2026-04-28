const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobileNumber: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
});
const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
