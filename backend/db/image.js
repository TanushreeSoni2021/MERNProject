const mongoose = require("mongoose");
// Create a schema for storing image data
const imageSchema = new mongoose.Schema({
    filename: String
});
module.exports = mongoose.model("images", imageSchema)