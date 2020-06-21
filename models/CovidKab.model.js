const mongoose = require("mongoose");
const CovidKab = mongoose.Schema({
  nameKab: String,
  activeKab: Number,
  odpKab: Number,
  pdpKab: Number,
  kecamatan: [
    {
      nameKec: String,
      activeKec: Number,
      odpKec: Number,
      pdpKec: Number,
    },
  ],
  lastUpdate: String,
});

module.exports = mongoose.model("CovidKab", CovidKab);
