const request = require("request");
const CovidProvModel = require("../models/CovidProv.model");

// https://indonesia-covid-19.mathdro.id/api/provinsi
let provNasional = {};
let provData = {};
let dailyPush = {};

const covidProvFetch = () => {
  // const options = {
  //   url:
  //     "https://randommer.io/api/Text/Password?length=8&hasDigits=true&hasUppercase=true&hasSpecial=false",
  //   headers: {
  //     "X-Api-Key": "fd5c44f5bb314a5c87c7eba82d191e0f",
  //   },
  // };

  request(
    "https://indonesia-covid-19.mathdro.id/api/provinsi",
    async (err, res, html) => {
      if (!err && res.statusCode === 200) {
        provNasional = JSON.parse(res.body);

        provData = provNasional.data.find((prov) => prov.kodeProvi === 34);

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

        console.log(dailyPush);

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
            provNasional = {};
            provData = {};
            console.log(dailyPush);
          } else {
            covidData.activeProv = provData.kasusPosi;
            covidData.recoveredProv = provData.kasusSemb;
            covidData.deathProv = provData.kasusMeni;
            covidData.daily.push(dailyPush);

            await covidData.save();
            console.log("Covid Prov data updated to DB");
            dailyPush = {};
            provNasional = {};
            provData = {};
          }
        } catch (err) {
          console.error(err);
          dailyPush = {};
          provNasional = {};
          provData = {};
          console.log(dailyPush);
        }
      }
    }
  );
};

module.exports = covidProvFetch;
