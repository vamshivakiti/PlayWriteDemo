import {test,expect,Locator} from"@playwright/test"
test("css demo test ", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    // css with tag and id
    // const searchBox:Locator =page.locator("//input[@id='c']");
    // await searchBox.fill("Mac mini");
     await expect(page.locator("//input[@id='c']")).toBeVisible();
     await page.locator("//input[@id='c']").fill("mac mini");
     await page.waitForTimeout(3000);

})