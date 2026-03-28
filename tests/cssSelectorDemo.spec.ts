import{test,expect} from'@playwright/test';

test("css selectors demo", async({page})=>{
    page.goto("https://petstore.octoperf.com/actions/Catalog.action");
    
})