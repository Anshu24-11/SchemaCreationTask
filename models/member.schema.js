const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobileNumber: { type: String, required: true, unique: true },
});
const member = mongoose.model("Member", memberSchema);
module.exports = member;
