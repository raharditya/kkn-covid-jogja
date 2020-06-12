const express = require("express");
const App = express();

const berita = require("./routes/api/Berita");

App.use("/", berita);
