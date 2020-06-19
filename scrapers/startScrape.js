const Berita = require("../models/Berita.model");

const detikNews = require("./detikScraper");

async function startScrape() {
  detikNews();
}

module.exports = startScrape;
