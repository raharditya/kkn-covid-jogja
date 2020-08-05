const express = require("express");
const App = express();
const mongoose = require("mongoose");
const CronJob = require("cron").CronJob;
const path = require("path");
require("dotenv").config();
const cors = require("cors");

const startScrape = require("./scrapers/startScrape");
const covidScrape = require("./scrapers/covidScraper");
const covidProvFetch = require("./scrapers/covidProvFetch");
const berita = require("./routes/api/Berita" || "./routes/api/berita");
const covid = require("./routes/api/covid");
const hoax = require("./routes/api/hoax");
const login = require("./routes/api/login");
const sosmed = require("./routes/api/sosmed");
const trigger = require("./routes/api/trigger");

App.use(express.json());
App.use(cors());

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
  "0 0 18 * * *",
  () => covidScrape(),
  null,
  false,
  "Asia/Jakarta"
);
const provFetchCron = new CronJob(
  "0 15 17 * * *",
  () => covidProvFetch(),
  null,
  false,
  "Asia/Jakarta"
);
newsScrapeCron.start();
covidScrapeCron.start();
provFetchCron.start();

const now = new Date();
console.log(
  `Current time: ${now.getHours()}:${now.getMinutes()} ${now.getDate()}/${now.getMonth()}`
);

// startScrape();
// covidScrape();
// covidProvFetch();

// App.get("/", (req, res) => {
//   res.send(
//     "Welcome to the backend for my next project. \nGo to /api/berita for the news API \nGo to /api/covid/provinsi for covid data by Province in Yogyalarta \nGo to /api/covid/kabupaten for covid data by Regency in Yogyalarta"
//   );
// });

App.get("/api", (req, res) => {
  res.json({
    newsApi: "./berita",
    covidProvinceApi: "./covid/provinsi",
    covidRegencyApi: "./covid/kabupaten",
  });
});

App.use("/api/berita", berita);
App.use("/api/covid", covid);
App.use("/api/hoax", hoax);
App.use("/api/login", login);
App.use("/api/sosmed", sosmed);
App.use("/api/trigger", trigger);

if (process.env.NODE_ENV === "production") {
  App.use(express.static("client/build"));

  App.get("*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

App.listen(PORT, () => console.log(`Server started at ${PORT}`));
