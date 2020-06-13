const cheerio = require("cheerio");
const request = require("request");

let suaraNews = [];

request("https://www.suara.com/tag/corona-jogja", (err, res, html) => {
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

    console.log(suaraNews);
  }
});
