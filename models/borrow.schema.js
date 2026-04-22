const mongoose = require("mongoose");
const borrowSchema = new mongoose.Schema({
  member: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member",
    required: true,
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: { type: Date, default: null },
});
borrowSchema.index(
  { member: 1, book: 1 },
  {
    unique: true,
    partialFilterExpression: { endDate: null },
  },
);
const borrow = new mongoose.model("Borrow", borrowSchema);
module.exports = borrow;
