import* as test from"@playwright/test"
test.test("actions demo", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    const textBox:test.Locator=page.locator('#name');
    await test.expect(textBox).toBeVisible();
    await test.expect(textBox).toBeEnabled();
    //await textBox.fill("Playwright");
  //  const  MaxLength:any =await textBox.getAttribute("maxlength");//return max length of the element
  // expect(MaxLength).toBe("15");
    await textBox.fill("John Kennedy");
   
   const inputValue = await textBox.inputValue();
   console.log("Input Value of the text box:",inputValue);
     await page.waitForTimeout(3000);
     test.expect(inputValue).toBe("John Kennedy");
//radio Buttons:

        const maleRB:test.Locator=  page.locator('#male');
    test.expect(await maleRB.isChecked()).toBe(false);
 await  maleRB.click();
     await test.expect(maleRB).toBeChecked();//Prefferable
     //--------------------------------------------------//
//Check boxes
// Selecting One / Specific checkbox-->      
     const sundayCheckbox:test.Locator=page.getByLabel('Sunday');
     await sundayCheckbox.check();
     await test.expect(sundayCheckbox).toBeAttached();
     await page.waitForTimeout(1000);
      await sundayCheckbox.check();
 // Select all Check boxes------->
 //Capture all checkboxes

 const days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
   const checkBoxes:test.Locator[]=days.map( index => page.getByLabel(index));
 test.expect(checkBoxes.length).toBe(7);

 //Select all the check bboxs

 for(const checkBox of checkBoxes){
 await checkBox.check();
 test.expect(checkBox).toBeChecked();
 }

 //unsect select last three check boxes
await page.waitForTimeout(2000);
 for(let i=4;i<checkBoxes.length;i++){
  await checkBoxes[i].uncheck();
 }

//select last check boxes using slice method
await page.waitForTimeout(2000);
for(const checkbox of checkBoxes.slice(-3)){
  await checkbox.check();
}
 
 

    

})
