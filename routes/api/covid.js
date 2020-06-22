const express = require("express");
const router = express.Router();
const CovidProvModel = require("../../models/CovidProv.model");

router.post("/", async (req, res) => {
  const activeDaily = req.body.activeDaily;
  const recoveredDaily = req.body.recoveredDaily;
  const deathDaily = req.body.deathDaily;

  let dailyPush = {
    activeDaily,
    recoveredDaily,
    deathDaily,
  };

  try {
    let covidData = await CovidProvModel.find({ nameProv: "DIY" });

    if (!covidData) {
      covidData = await new CovidProvModel({
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

      covidData.daily.unshift(dailyPush);

      await covidData.save();

      res.json(covidData);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});
