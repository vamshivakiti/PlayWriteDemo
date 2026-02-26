//This is demo for buildin locators of Palywright
import{test,expect,Locator} from '@playwright/test';

test("Playwright locators",async({page})=>{
await page.goto("https://demo.nopcommerce.com/");
//use ALtText()- locator to capture logo/images.

const logo :Locator=  page.getByAltText("nopCommerce demo store");
 
await expect(logo).toBeVisible;

// getByText(); This locator is used to ispect non-interactive elements ,like headings , inner text etc...

const text :Locator =page.getByText("Welcome to our store"); // Provided  full String

const text2 :Locator =page.getByText("Welcome to"); //Provided sub String

 await expect(text2).toBeVisible();

 //getByRole()- introduced very recently, this locator is used to inspect with interactive elements , like button, links checkboxes,tables etc...
 // Role is not an attribute, but it is the behaviour(role) of an perticular element.
 
     await page.getByRole("link",{name:'Register'}).click();
     await expect(page.getByRole("heading",{name:'Register'})).toBeVisible(); // We can also use get by text here..
//getByLable- This locator is used to inspect the forms, with lable tag for input text feilds.
await page.getByLabel('First name:').fill("Vamshi Krishna");
await page.getByLabel('Last name:').fill("Vakiti");
await page.getByLabel('Email:').fill("VamshiKrishna@gmail.com");

//getByPlaceHolder- it is a element to locate with attribute place holder,specially for text boxes, buttons etc..

await page.getByPlaceholder("Search store").fill('Apple Mac book');

await page.getByRole("button",{name:'Register'}).click();
await expect(page.getByText('Password is required.')).toBeVisible();

})