const cheerio = require("cheerio");
const request = require("request");

let detikNews = [];

request(
  "https://www.detik.com/tag/corona-di-yogyakarta?tag_from=pandemi-corona",
  (err, res, html) => {
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

      console.log(detikNews);
    }
  }
);
