const cheerio = require("cheerio");
const request = require("request");
const Berita = require("../models/Berita.model");

let suaraNews = [];

function suaraScraper() {
  request("https://www.suara.com/tag/corona-jogja", async (err, res, html) => {
    if (!err && res.statusCode === 200) {
      const $ = cheerio.load(html);

      $(".item").each((i, el) => {
        let title;
        let url;
        let thumbnail;
        if (i === 0) {
          title = $(el).find(".post-title").text();
          url = $(el).find("a").attr("href");
          thumbnail = $(el).find(".post-thumb").children("img").attr("src");
        } else {
          title = $(el).find(".post-title").children("a").text();
          url = $(el).find(".post-thumb").children("a").attr("href");
          thumbnail = $(el)
            .find(".post-thumb")
            .children("a")
            .children("img")
            .attr("src");
        }
        const excerpt = $(el).find("p").text();

        suaraNews.push({
          title,
          excerpt,
          url,
          thumbnail,
        });
      });

      suaraNews.splice(21);

      try {
        await Berita.findOneAndUpdate(
          { source: "Suara News" },
          {
            source: "Suara News",
            news: suaraNews,
            timeFetched: new Date(),
          }
        );

        console.log("SuaraNews saved to database");
      } catch (err) {
        console.error(err);
      }
    }
  });
}

module.exports = suaraScraper;
