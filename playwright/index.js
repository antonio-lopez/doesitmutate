import pw from "playwright";
import fs from "fs/promises";

(async () => {
  const data = [];
  console.log("Connecting to browser...");
  const browser = await pw.chromium.launch();
  console.log("Connected...");
  const page = await browser.newPage();
  try {
    await page.goto("https://doesitmutate.xyz/");
    console.log("Navigated! Scraping page content...");

    const methodClass = await page
      .locator("xpath=//div[@class='method']")
      .all();

    for (const method of methodClass) {
      const title = await method.locator("xpath=//h2/a").innerText();

      const mutation = await method.locator("xpath=//p").first().innerText();

      const description = await method
        .locator("xpath=//p", { hasText: "The" })
        .innerHTML();

      const methodLink = await method.locator("xpath=//p").nth(2).innerText();

      const codeBlock = await method.locator("xpath=//pre").innerText();

      data.push({
        title: title,
        mutation: mutation,
        description: description,
        methodLink: methodLink,
        code: codeBlock.split("\n").join(" ").split("  "),
      });
    }

    await fs.writeFile("results.json", JSON.stringify(data, null, 2));
  } catch (error) {
    throw error;
  } finally {
    await browser.close();
  }
})();
