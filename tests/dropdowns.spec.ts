import{test,expect, Locator} from '@playwright/test'
test('Static drop down select',async({page})=>{
   await page.goto('https://testautomationpractice.blogspot.com/');
  // const dropDown:Locator= page.locator('#country');

 /*  //Approach 1- visible text
   await dropDown.selectOption('India');

   //Approach 2- by value
   await dropDown.selectOption({value:'uk'});

   // Approach 3 - By lable
   await dropDown.selectOption({label:'India'}); 

   // Approach index
   await dropDown.selectOption({index:3});
   */

  // Count options in the dropdown.

const dropDownOptions:Locator= page.locator('#country > option');
  await expect(dropDownOptions).toHaveCount(10);

  //check an option in the dropdown
const optionText:string[]=(await dropDownOptions.allTextContents()).map(text =>text.trim());
console.log(optionText)


expect(optionText).toContain('Japan');

//Printing options from dd
for (const options of optionText){
    console.log(options)
}
   
   

})