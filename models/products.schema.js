const mongoose = require("mongoose");
const categroy = require("./productCategory.schema");
const subCategory = require("./subCategory.schema");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
  subCategory: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: "SubCategory",
  },
  price: { type: Number, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
