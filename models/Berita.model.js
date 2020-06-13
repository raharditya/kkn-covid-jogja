const mongoose = require("mongoose");
const Berita = mongoose.Schema({
  source: {
    detik: [
      {
        title: String,
        excerpt: String,
        url: String,
        thumbnail: String,
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    suara: [
      {
        title: String,
        excerpt: String,
        url: String,
        thumbnail: String,
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    tribunnews: [
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
    kompas: [
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
    cnbc: [
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
