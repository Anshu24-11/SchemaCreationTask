const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
});

const Categroy = mongoose.model("Category", categorySchema);
module.exports = Category;
