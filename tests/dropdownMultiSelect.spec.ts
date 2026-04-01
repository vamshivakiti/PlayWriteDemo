import{test,expect, Locator} from '@playwright/test'
test('Static drop down select',async({page})=>{
   await page.goto('https://testautomationpractice.blogspot.com/');

   //await page.locator("#colors").selectOption(['Red','Blue','Green']);// using visible text
await page.locator("#colors").selectOption(['red','green','white']); //select by value

//Checking the options count
const dropdownOptions:Locator=page.locator('#colors > option');
await expect(dropdownOptions).toHaveCount(7);
   await page.waitForTimeout(5000);

 //Check Option in Drop down
   const optionsText:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
    expect(optionsText).toContain('Green');

    for(const options of optionsText){
        console.log(options)
    }
})