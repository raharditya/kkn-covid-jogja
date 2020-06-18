const express = require("express");
const App = express();
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 4500;

(async function dbConnect() {
  try {
    mongoose.connect(
      process.env.DB_SECRET,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(`DB Connected!`)
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

const berita = require("./routes/api/Berita");

App.use("/", berita);

App.listen(PORT, () => console.log(`Server started at ${PORT}`));
