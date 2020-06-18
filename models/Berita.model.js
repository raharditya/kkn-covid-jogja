const mongoose = require("mongoose");
const Berita = mongoose.Schema({
  source: {
    detik: [
      {
        title: String,
        date: String,
        excerpt: String,
        url: String,
        thumbnail: String,
      },
    ],
    suara: [
      {
        title: String,
        excerpt: String,
        url: String,
        thumbnail: String,
      },
    ],
    tribunnews: [
      {
        title: String,
        date: String,
        excerpt: String,
        url: String,
        thumbnail: String,
      },
    ],
    kompas: [
      {
        title: String,
        date: String,
        excerpt: String,
        url: String,
        thumbnail: String,
      },
    ],
    cnbc: [
      {
        title: String,
        date: String,
        label: String,
        url: String,
        thumbnail: String,
      },
    ],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Berita", Berita);
