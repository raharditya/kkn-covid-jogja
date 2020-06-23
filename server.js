const express = require("express");
const App = express();
const mongoose = require("mongoose");
const CronJob = require("cron").CronJob;
require("dotenv").config();

const startScrape = require("./scrapers/startScrape");
const covidScrape = require("./scrapers/covidScraper");
const berita = require("./routes/api/berita");
const covid = require("./routes/api/covid");

const PORT = process.env.PORT || 4500;

(async function dbConnect() {
  try {
    mongoose.connect(
      process.env.DB_SECRET,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
      () => console.log(`DB Connected!`)
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

const newsScrapeCron = new CronJob(
  "0 0 0,2,4,6,8,10,12,14,16,18,20,22 * * *",
  () => startScrape(),
  null,
  false,
  "Asia/Jakarta"
);
const covidScrapeCron = new CronJob(
  "0 0 17 * * *",
  () => covidScrape(),
  null,
  false,
  "Asia/Jakarta"
);
newsScrapeCron.start();
covidScrapeCron.start();

App.use("/api/berita", berita);
App.use("/api/covid", covid);

App.listen(PORT, () => console.log(`Server started at ${PORT}`));
