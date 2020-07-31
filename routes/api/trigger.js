const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const startScrape = require("../../scrapers/startScrape");
const covidScrape = require("../../scrapers/covidScraper");

router.post("/", auth, (req, res) => {
  switch (req.body.trigger) {
    case "news":
      startScrape();
      res.send("News scraper is starting...");

    case "covid":
      covidScrape();
      res.send("Covid scraper is starting...");

    default:
    //   res.status(400).send("Trigger not specified!");
  }
});

module.exports = router;
