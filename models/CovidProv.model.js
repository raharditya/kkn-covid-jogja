const mongoose = require("mongoose");
const CovidProv = mongoose.Schema({
  nameProv: String,
  activeProv: Number,
  recoveredProv: Number,
  deathProv: Number,
  daily: [
    {
      activeDaily: Number,
      recoveredDaily: Number,
      deathDaily: Number,
      patientDaily: Number,
      date: String,
    },
  ],
});

module.exports = mongoose.model("CovidProv", CovidProv);
