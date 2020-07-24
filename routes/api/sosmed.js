const express = require("express");
const router = express.Router();
const cheerio = require("cheerio");
const request = require("request");

router.get("/", async (req, res) => {
  request(
    "https://www.instagram.com/kkncoviduns.jogja/",
    async (err, response, html) => {
      if (!err && response.statusCode === 200) {
        try {
          const $ = cheerio.load(html);

          const img = $("meta[property='og:image']").attr("content");
          const desc = $("meta[property='og:description']").attr("content");

          const descSplit = desc.split("-");
          const profileInfo = descSplit[0].split(",");

          const posts = profileInfo[2].trim();
          const following = profileInfo[1].trim();
          const followers = profileInfo[0].trim();

          res.json({ img, posts, followers, following });
        } catch (err) {
          console.error(err);
          res.status(500).send("Internal server error");
        }
      }
    }
  );
});

module.exports = router;
