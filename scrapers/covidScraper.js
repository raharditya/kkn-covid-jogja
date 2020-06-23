const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

const CovidKab = require("../models/CovidKab.model");

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
    let kabData = {
      nameKab: `${scrapeAll[curr].jenisWilayah} ${scrapeAll[curr].namaWilayah}`,
      activeKab: 0,
      odpKab: 0,
      pdpKab: 0,
      kecamatan: [],
      lastUpdate: "",
    };

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

      const activeKec = $("#positif").text();
      const odpKec = $("#odp").text();
      const pdpKec = $("#pdp").text();
      const update = $(".dataupdate").children().closest("p").text();

      const updateProc = update.split("\n");

      kabData.kecamatan.push({
        nameKec: scrapeAll[curr].kecamatan[i].namaKecamatan,
        activeKec: parseInt(activeKec),
        odpKec: parseInt(odpKec),
        pdpKec: parseInt(pdpKec),
      });

      kabData.lastUpdate = updateProc[0].trim();
      kabData.activeKab = kabData.activeKab + parseInt(activeKec);
      kabData.odpKab = kabData.odpKab + parseInt(odpKec);
      kabData.pdpKab = kabData.pdpKab + parseInt(pdpKec);

      await page.close();
    }

    // console.log(kabData);
    try {
      await CovidKab.findOneAndUpdate({ nameKab: kabData.nameKab }, kabData, {
        upsert: true,
      });
      console.log(`${kabData.nameKab} data updated to DB`);
    } catch (err) {
      console.error(err);
    }
  }

  await browser.close();
}

module.exports = scrape;
