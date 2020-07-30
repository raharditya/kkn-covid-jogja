const mongoose = require("mongoose");
const Berita = mongoose.Schema({
  source: String,
  news: [
    {
      _id: false,
      title: String,
      date: String,
      label: String,
      excerpt: String,
      url: String,
      thumbnail: String,
    },
  ],
  timeFetched: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Berita", Berita);
