const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  category: String,
  userId: String,
  company: String,
  filename: String,
  filepath: String,
});
module.exports = mongoose.model("products", productSchema);
