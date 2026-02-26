// Test: To run the tests Vs Expect: To validate test results(Assertions)
// These tow package are mandatory to import before writing any tests.
import{test,expect} from "@playwright/test";
import { title } from "node:process";

//Syntax to write test is;
test("test1",()=>{
console.log("This is only empty test");
})
test('Open website and validate page title', async ({ page }) => {

  // 1️⃣ Navigate to website
  await page.goto('https://example.com');

  // 2️⃣ Validate page title
  await expect(page).toHaveTitle('Example Domain');})


//Fixture: A global variable
//ex: Page, Browser.. etc..
test("Verify Page Title",async({page})=>{
await page.goto("https://www.opencart.com/index.php?route=cms/demo");
let title:String=await page.title();
console.log("Title",title);

 await expect(page).toHaveTitle("OpenCart - Demo");

})
test("Verify google page title" ,async({page})=>{
await page.goto("https://www.google.com/");
let title :String=await page.title();
console.log("Page Title is",title);

await expect(page).toHaveTitle("Google");
})



