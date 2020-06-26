const cheerio = require("cheerio");
const request = require("request");
const Berita = require("../models/Berita.model");

let kompasNews = [];

function kompasScraper() {
  request(
    "https://www.kompas.com/tag/virus+corona+di+indonesia",
    async (err, res, html) => {
      if (!err && res.statusCode === 200) {
        const $ = cheerio.load(html);

        const headline = {};
        const headlineDOM = $(".col-bs9-6");

        headline.title = headlineDOM.find(".article__link").text();
        headline.date = headlineDOM.find(".article__date").text();
        headline.excerpt = headlineDOM.find(".article__lead").text();
        headline.url = headlineDOM
          .find(".article__asset")
          .children()
          .attr("href");
        headline.thumbnail = headlineDOM
          .find(".article__asset")
          .find("img")
          .attr("src");

        kompasNews.push(headline);

        $(".col-bs9-3").each((i, el) => {
          const title = $(el).find(".article__link").text();
          const date = $(el).find(".article__date").text();
          const excerpt = $(el).find(".article__lead").text();
          const url = $(el).find(".article__asset").find("a").attr("href");
          const thumbnail = $(el)
            .find(".article__asset")
            .find("img")
            .attr("src");

          kompasNews.push({
            title: title.trim(),
            date,
            excerpt,
            url,
            thumbnail,
          });
        });

        try {
          await Berita.findOneAndUpdate(
            { source: "Kompas News" },
            {
              source: "Kompas News",
              news: kompasNews,
              timeFetched: new Date(),
            },
            { upsert: true }
          );

          console.log("KompasNews saved to database");
        } catch (err) {
          console.error(err);
        }
      }
    }
  );
}

module.exports = kompasScraper;
