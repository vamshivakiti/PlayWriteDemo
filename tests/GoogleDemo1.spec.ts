import{test,expect} from "@playwright/test";
test('This page is for goolgedemo',async({page})=>
    {
        await page.goto("https://www.google.com");
        let title :String=await page.title(); 
        console.log("Page Title is",title); 

    })