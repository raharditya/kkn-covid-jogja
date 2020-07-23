const mongoose = require("mongoose");
const Hoax = mongoose.Schema({
  title: String,
  content: String,
  source: String,
});

module.exports = mongoose.model("Hoax", Hoax);
