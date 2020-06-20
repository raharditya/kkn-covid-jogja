const express = require("express");
const router = express.Router();

const Berita = require("../../models/Berita.model");

router.get("/", async (req, res) => {
  try {
    const news = await Berita.find();

    res.json(news);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/:source", async (req, res) => {
  try {
    const news = await Berita.findOne({ source: req.params.source });

    res.json(news);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
