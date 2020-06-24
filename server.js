const express = require("express");
const App = express();
const mongoose = require("mongoose");
const CronJob = require("cron").CronJob;
require("dotenv").config();

const startScrape = require("./scrapers/startScrape");
const covidScrape = require("./scrapers/covidScraper");
const berita = require("./routes/api/Berita" || "./routes/api/berita");
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
  "0 0 */2 * * *",
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

App.get("/", (req, res) => {
  res.send(
    "Welcome to the backend for my next project. \nGo to /api/berita for the news API \nGo to /api/covid/provinsi for covid data by Province in Yogyalarta \nGo to /api/covid/kabupaten for covid data by Regency in Yogyalarta"
  );
});

App.get("/api", (req, res) => {
  res.json({
    newsApi: "./berita",
    covidProvinceApi: "./covid/provinsi",
    covidRegencyApi: "./covid/kabupaten",
  });
});

App.use("/api/berita", berita);
App.use("/api/covid", covid);

App.listen(PORT, () => console.log(`Server started at ${PORT}`));
