const cheerio = require("cheerio");
const request = require("request");
const Berita = require("../models/Berita.model");

let tribunNews = [];

function tribunScraper() {
  request(
    "https://jogja.tribunnews.com/tag/update-corona-di-di-yogyakarta",
    async (err, res, html) => {
      if (!err && res.statusCode === 200) {
        const $ = cheerio.load(html);

        $(".ptb15").each((i, el) => {
          const title = $(el)
            .find(".mr140")
            .children("h3")
            .children("a")
            .text();
          const date = $(el).find("div").children().last().text();
          const excerpt = $(el).find(".mr140").children("h4").text();
          const url = $(el).find(".pos_rel").children("a").attr("href");
          const thumbnail = $(el)
            .find(".pos_rel")
            .children("a")
            .children("img")
            .attr("src");

          tribunNews.push({
            title: title.trim(),
            date,
            excerpt,
            url,
            thumbnail,
          });
        });

        try {
          await Berita.findOneAndUpdate(
            { source: "Tribun News" },
            {
              source: "Tribun News",
              news: tribunNews,
            },
            { upsert: true }
          );

          console.log("TribunNews saved to database");
        } catch (err) {
          console.error(err);
        }
      }
    }
  );
}

module.exports = tribunScraper;
