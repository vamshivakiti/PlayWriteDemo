import{test,expect,Locator} from'@playwright/test';
test('this is demo test for practice of locators',async({page})=>{ 
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");
    //getByaltText().
     const Logo:Locator= page.getByAltText("nopCommerce demo store")
     await expect(Logo).toBeVisible();
//getByText();-- Used to inspect non interactive elements like headings, inner text etc..
//const WelcomeMessage:Locator=page.getByText("Welcome to our store");
//await expect(WelcomeMessage).toBeVisible(); 
await expect(page.getByText("Welcome to")).toBeVisible({timeout:10000});
//getByRole: Used for the intractive elements, Buttins,Links,dropdown,checkboxes etc..
page.getByRole('link',{name:'Register'}).click();
await expect(page.getByRole('heading',{name:'Register'})).toBeVisible();
//getByLable- This locator is used to inspect the forms, with lable tag for input text feilds.
await page.getByLabel('First name:').fill('Vamshi Krishna');
await page.getByLabel('Last name:').fill('Vakiti');
await page.getByLabel('Email').fill('vamshi@gmail.com');    

//getByPlaceHolder- it is a element to locate with attribute place holder,specially for text boxes, buttons etc..
const textInput :Locator=page.getByPlaceholder('Search store');
textInput.fill('Apple mack book');
    })