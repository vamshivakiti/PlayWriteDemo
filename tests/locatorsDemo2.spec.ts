import { expect , test, Locator} from "@playwright/test"



test("This is Locators Demo",async({page})=>{
    await page.goto("https://www.opencart.com/index.php?route=account/register");
    const title :Locator= page.getByTitle("OpenCart - Account Register");
    await expect(title).toBeVisible;


})