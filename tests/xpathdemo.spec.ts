import { expect, test,Locator } from "@playwright/test";

test("Xpath demo test program",async({page})=>{
    //relative Xpath
page.goto("https://demowebshop.tricentis.com/");
 const logo:Locator=page.locator("//img[@alt='Tricentis Demo Web Shop']");
await expect(logo).toBeVisible();
})