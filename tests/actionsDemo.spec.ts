import{test,expect,Locator} from"@playwright/test"
test("actions demo class",async({page})=>   {
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    const textBox:Locator=page.locator('#name');
    await expect(textBox).toBeVisible();
    await expect(textBox).toBeEnabled();
    //await textBox.fill("Playwright");
  //  const  MaxLength:any =await textBox.getAttribute("maxlength");//return max length of the element
  // expect(MaxLength).toBe("15");
  await textBox.fill("John Kennedy");
   
   const inputValue = await textBox.inputValue();
   console.log("Input Value of the text box:",inputValue);
     await page.waitForTimeout(3000);
     expect(inputValue).toBe("John Kennedy");

     page.locator("//input[@id='sunday']").check();

})
