const request = require("request");
const CovidProvModel = require("../models/CovidProv.model");

let dailyPush = {};

const covidProvFetch = () => {
  console.log(dailyPush);
  request(
    "https://indonesia-covid-19.mathdro.id/api/provinsi",
    async (err, res, html) => {
      if (!err && res.statusCode === 200) {
        const provNasional = JSON.parse(res.body);

        const provData = provNasional.data.find(
          (prov) => prov.kodeProvi === 34
        );

        const monthName = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Mei",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Okt",
          "Nov",
          "Des",
        ];

        const patientDaily =
          provData.kasusPosi - (provData.kasusSemb + provData.kasusMeni);

        const now = new Date();
        const date = `${now.getDate()} ${monthName[now.getMonth()]} 20`;

        dailyPush = {
          activeDaily: provData.kasusPosi,
          recoveredDaily: provData.kasusSemb,
          deathDaily: provData.kasusMeni,
          patientDaily,
          date,
        };

        try {
          let covidData = await CovidProvModel.findOne({ nameProv: "DIY" });

          if (!covidData) {
            covidData = new CovidProvModel({
              nameProv: "DIY",
              activeProv: provData.kasusPosi,
              recoveredProv: provData.kasusSemb,
              deathProv: provData.kasusMeni,
              daily: [dailyPush],
            });

            await covidData.save();
            dailyPush = {};
            console.log(dailyPush);
          } else {
            covidData.activeProv = provData.kasusPosi;
            covidData.recoveredProv = provData.kasusSemb;
            covidData.deathProv = provData.kasusMeni;
            covidData.daily.push(dailyPush);

            await covidData.save();
            console.log("Covid Prov data updated to DB");
            dailyPush = {};
            console.log(dailyPush);
          }
        } catch (err) {
          console.error(err);
          dailyPush = {};
          console.log(dailyPush);
        }
      }
    }
  );
};

module.exports = covidProvFetch;
