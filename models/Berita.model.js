const mongoose = require("mongoose");
const Berita = mongoose.Schema({
  title: String,
  excerpt: String,
  url: String,
  thumbnail: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Berita", Berita);
