const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

const bantulPostal = require("../data/bantul-postal.json");
// const data = JSON.parse(bantulPostal);

async function scrape() {
  const browser = await puppeteer.launch({ headless: false });

  for (let i = 0; i < bantulPostal.kecamatan.length; i++) {
    const page = await browser.newPage();
    await page.goto("https://sebaran-covid19.jogjaprov.go.id/kodepos");
    await page.type("#fname", bantulPostal.kecamatan[i].kodePos.toString());

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
      kecamatan: bantulPostal.kecamatan[i].namaKecamatan,
      positif,
      odp,
      pdp,
    };

    console.log(push);
    // console.log(bantulPostal.nama);
    //   await page.screenshot({ path: "kode-pos.png" });
    page.close();
  }
  await browser.close();
}

scrape();
