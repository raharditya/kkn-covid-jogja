const Berita = require("../models/Berita.model");

const detikNews = require("./detikScraper");
const cnbcNews = require("./cnbcScraper");
const kompasNews = require("./kompasScraper");
const suaraNews = require("./suaraScraper");
const tribunNews = require("./tribunScraper");

async function startScrape() {
  detikNews();
  cnbcNews();
  kompasNews();
  suaraNews();
  tribunNews();
}

module.exports = startScrape;
