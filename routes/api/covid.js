const express = require("express");
const router = express.Router();
const CovidProvModel = require("../../models/CovidProv.model");
const CovidKabModel = require("../../models/CovidKab.model");
const auth = require("../../middleware/auth");
const { findOneAndUpdate } = require("../../models/CovidKab.model");

router.get("/provinsi", async (req, res) => {
  try {
    const covidProv = await CovidProvModel.findOne({ nameProv: "DIY" });

    res.json(covidProv);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/kabupaten", async (req, res) => {
  try {
    const covidKab = await CovidKabModel.find();

    res.json(covidKab);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", auth, async (req, res) => {
  const activeDaily = req.body.activeDaily;
  const recoveredDaily = req.body.recoveredDaily;
  const deathDaily = req.body.deathDaily;
  const date = req.body.date;
  const patientDaily = activeDaily - (recoveredDaily + deathDaily);

  let dailyPush = {
    activeDaily,
    recoveredDaily,
    deathDaily,
    patientDaily,
    date,
  };

  try {
    console.log(req.body);
    let covidData = await CovidProvModel.findOne({ nameProv: "DIY" });

    if (!covidData) {
      covidData = new CovidProvModel({
        nameProv: "DIY",
        activeProv: activeDaily,
        recoveredProv: recoveredDaily,
        deathProv: deathDaily,
        daily: [dailyPush],
      });

      await covidData.save();
      res.json(covidData);
    } else {
      covidData.activeProv = activeDaily;
      covidData.recoveredProv = recoveredDaily;
      covidData.deathProv = deathDaily;
      covidData.daily.push(dailyPush);

      await covidData.save();

      res.json(covidData);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
