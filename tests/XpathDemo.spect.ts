import {test, expect, Locator} from "@playwright/test";

test("Xpath locator demo", async({page})=>{
    page.goto("https://demowebshop.tricentis.com/");
  const logo :Locator= page.getByAltText("//img[@alt='Tricentis Demo Web Shop']");
   await expect(logo).toBeVisible;
   

})