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
          //   const excerptPush = excerpt.split(",");
          const url = $(el).find("a").attr("href");
          const thumbnail = $(el).find("img").attr("src");

          detikNews.push({
            title: title,
            date: date,
            excerpt: excerpt,
            url: url,
            thumbnail: thumbnail,
          });
        });

        try {
          const detikPush = new Berita({
            source: {
              detik: detikNews,
            },
          });

          detikPush.save();

          console.log("Data saved to database");
        } catch (err) {
          console.error(err);
        }

        console.log(detikNews);
      }
    }
  );
}

module.exports = detikScraper;
