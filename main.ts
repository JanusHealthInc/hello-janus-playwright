import { chromium } from "playwright";
import { wait } from "./wait";

async function main () {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
  
    await page.goto('https://www.janus-ai.com')
    // wait - for easy debugging
    await wait(5000)
}

void main()
  .then(() => {
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });