const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

const bantulPostal = require("../data/bantul-postal.json");
const gunungkidulPostal = require("../data/gunungkidul-postal.json");
const kulonprogoPostal = require("../data/kulonprogo-postal.json");
const slemanPostal = require("../data/sleman-postal.json");
const yogyakartaPostal = require("../data/yogyakarta-postal.json");

const scrapeAll = [
  bantulPostal,
  gunungkidulPostal,
  kulonprogoPostal,
  slemanPostal,
  yogyakartaPostal,
];

async function scrape() {
  const browser = await puppeteer.launch();

  for (let curr = 0; curr < scrapeAll.length; curr++) {
    for (let i = 0; i < scrapeAll[curr].kecamatan.length; i++) {
      const page = await browser.newPage();
      await page.goto("https://sebaran-covid19.jogjaprov.go.id/kodepos");
      await page.type(
        "#fname",
        scrapeAll[curr].kecamatan[i].kodePos.toString()
      );

      await Promise.all([
        page.click(".btn"),
        page.waitForNavigation({ waitUntil: "networkidle0" }),
      ]);

      let bodyHTML = await page.evaluate(() => document.body.innerHTML);

      const $ = cheerio.load(bodyHTML);

      const positif = $("#positif").text();
      const odp = $("#odp").text();
      const pdp = $("#pdp").text();

      const push = {
        kecamatan: scrapeAll[curr].kecamatan[i].namaKecamatan,
        positif,
        odp,
        pdp,
      };

      console.log(push);
      await page.close();
    }
  }

  await browser.close();
}

scrape();
