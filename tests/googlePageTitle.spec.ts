import { test, expect } from '@playwright/test';
import { title } from 'node:process';
test ("Verify the google page Title",async({page})=>{
await page.goto("https://www.google.com/");
//let title :String = await page.title();
console.log("Page title",await page.title());
await expect(page).toHaveTitle("Google");

// 2️⃣ Handle consent popup if it appears (EU/India regions)
  const acceptBtn = page.getByRole('button', { name: /accept all/i });
  if (await acceptBtn.isVisible()) {
    await acceptBtn.click();
  }
// 3️⃣ Capture search textbox (Best locator strategy)
  const searchBox = page.getByRole('combobox', { name: /search/i });

//const menuBar = await page.getByRole('menu').click;

}

);