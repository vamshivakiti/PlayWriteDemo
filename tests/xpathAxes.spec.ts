import{test,expect,Locator} from'@playwright/test';

test("xapth axes demo", async({page})=>{
 await page.goto("https://www.w3schools.com/html/html_tables.asp");
 //self element.
 const germanyCell:Locator=page.locator("//td[normalize-space()='Germany']/self::td");
await expect(germanyCell).toHaveText("Germany");
  
const germanyParent:Locator=page.locator("//td[normalize-space()='Germany']/parent::tr");
await expect(germanyParent).toContainText("Maria Anders");
await expect(germanyParent).toContainText("Germany");
//await expect(germanyParent).toContainText("Sales Representative");
await console.log(germanyParent.textContent());
const table:Locator=page.locator("//td[text()='Germany']/ancestor::table");
 await expect(table).toHaveAttribute('id','customers');
 const tableAncestorElements:Locator=page.locator("//table[@id='customers']/descendant::td");
 await expect(tableAncestorElements).toHaveCount(18);
 console.log("How I am doing ?");
})