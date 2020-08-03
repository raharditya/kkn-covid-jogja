const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const startScrape = require("../../scrapers/startScrape");
const covidScrape = require("../../scrapers/covidScraper");
const covidProvFetch = require("../../scrapers/covidProvFetch");

router.post("/", auth, (req, res) => {
  switch (req.body.trigger) {
    case "news":
      startScrape();
      res.send("News scraper is starting...");

    case "covidKab":
      covidScrape();
      res.send("Covid kabupaten scraper is starting...");

    case "covidProv":
      covidProvFetch();
      res.send("Covid provinsi fetch is starting...");

    default:
    //   res.status(400).send("Trigger not specified!");
  }
});

module.exports = router;
