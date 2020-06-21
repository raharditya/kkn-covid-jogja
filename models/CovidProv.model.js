const mongoose = require("mongoose");
const CovidProv = mongoose.Schema({
  activeProv: Number,
  recoveredProv: Number,
  deathProv: Number,
  daily: [
    {
      activeDaily: Number,
      recoveredDaily: Number,
      deathDaily: Number,
    },
  ],
});

module.exports = mongoose.model("CovidProv", CovidProv);
