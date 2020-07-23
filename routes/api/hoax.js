const express = require("express");
const router = express.Router();

const auth = require("../../middleware/auth");
const Hoax = require("../../models/Hoax.model");

router.get("/", async (req, res) => {
  try {
    const hoaxGet = await Hoax.find();

    res.send(hoaxGet);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", auth, async (req, res) => {
  const { title, content, source } = req.body;

  try {
    const hoaxPost = new Hoax({
      title,
      content,
      source,
    });

    await hoaxPost.save();
    res.json(hoaxPost);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
