const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://sebaran-covid19.jogjaprov.go.id/kodepos");
  await page.type("#fname", "55792");

  await Promise.all([
    page.click(".btn"),
    page.waitForNavigation({ waitUntil: "networkidle0" }),
  ]);

  let bodyHTML = await page.evaluate(() => document.body.innerHTML);
  console.log(bodyHTML);
  await page.screenshot({ path: "kode-pos.png" });
  await browser.close();
})();
