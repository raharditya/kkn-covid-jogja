const cheerio = require("cheerio");
const request = require("request");
const Berita = require("../models/Berita.model");

let suaraNews = [];

function suaraScraper() {
  request("https://www.suara.com/tag/corona-jogja", async (err, res, html) => {
    if (!err && res.statusCode === 200) {
      const $ = cheerio.load(html);

      $(".item").each((i, el) => {
        const title = $(el).find(".post-title").children("a").text();
        const excerpt = $(el).find("p").text();
        const url = $(el).find(".post-thumb").children("a").attr("href");
        const thumbnail = $(el)
          .find(".post-thumb")
          .children("a")
          .children("img")
          .attr("src");

        suaraNews.push({
          title: title,
          excerpt: excerpt,
          url: url,
          thumbnail: thumbnail,
        });
      });

      suaraNews.splice(21);

      try {
        await Berita.findOneAndUpdate(
          { source: "Suara News" },
          {
            source: "Suara News",
            news: suaraNews,
          },
          { upsert: true }
        );

        console.log("SuaraNews saved to database");
      } catch (err) {
        console.error(err);
      }
    }
  });
}

module.exports = suaraScraper;
