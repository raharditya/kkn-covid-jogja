const mongoose = require("mongoose");
const Covid = mongoose.Schema({
  activeProvince: Number,
  recoveredProvince: Number,
  deadProvince: Number,
  kabupaten: [
    {
      name: String,
      active: Number,
      odp: Number,
      pdp: Number,
    },
  ],
  lastUpdate: String,
});

module.exports = mongoose.model("Covid", Covid);
