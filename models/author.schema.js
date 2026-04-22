const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  books: { type: [mongoose.Schema.Types.ObjectId], default: [], ref: "Book" },
});

const author = mongoose.model("author", authorSchema);
module.exports = author;
