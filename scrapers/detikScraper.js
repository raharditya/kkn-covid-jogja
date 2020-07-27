const cheerio = require("cheerio");
const request = require("request");

const Berita = require("../models/Berita.model");

let detikNews = [];

function detikScraper() {
  request(
    "https://www.detik.com/tag/corona-di-yogyakarta?tag_from=pandemi-corona",
    async (err, res, html) => {
      if (!err && res.statusCode === 200) {
        const $ = cheerio.load(html);

        $("article").each((i, el) => {
          const title = $(el).find(".title").text();
          const date = $(el).find(".date").text();
          const excerpt = $(el).find(".title").next().text();
          const url = $(el).find("a").attr("href");
          const thumbnail = $(el).find("img").attr("src");

          const datePush = date.split(",");

          detikNews.push({
            title,
            date: datePush[1].trim(),
            excerpt,
            url,
            thumbnail,
          });
        });

        try {
          await Berita.findOneAndUpdate(
            { source: "Detik News" },
            {
              source: "Detik News",
              news: detikNews,
              timeFetched: new Date(),
            }
          );

          console.log("DetikNews saved to database");
        } catch (err) {
          console.error(err);
        }
      }
    }
  );
}

module.exports = detikScraper;
