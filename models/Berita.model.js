const mongoose = require("mongoose");
const Berita = mongoose.Schema({
  source: {
    detik: [
      {
        title: String,
        excerpt: String,
        source: String,
        url: String,
        thumbnail: String,
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Berita", Berita);
