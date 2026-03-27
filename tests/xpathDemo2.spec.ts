import {test,expect,Locator} from"@playwright/test";

test("Xpath demo practicing",async({page})=>{
await page.goto("https://demo.nopcommerce.com/");
//absolute xpath
 const Logo:Locator =page.locator("//img[@alt='nopCommerce demo store']");
 await expect(Logo).toBeVisible();
 //COntains xpath example
await page.locator('input[name="q"]').fill('Apple');
await page.getByRole('button', { name: 'Search' }).click();
 const allAppleprods : Locator =page.locator("//h2//a[contains(@href,'apple')]");
const prodCount:number =await allAppleprods.count();
//expect(prodCount).toBeGreaterThan(0);
console.log("Total Apple count are :",prodCount);
console.log("Product name: ",await allAppleprods.nth(0).textContent());
let prodTitle:String[] = await allAppleprods.allTextContents();
//console.log("All product titles: ",prodTitle);
for(let pt of prodTitle){
    console.log(pt)
} 
for(let i=0;i<prodCount;i++){
    console.log(await allAppleprods.nth(i).textContent());
    }})