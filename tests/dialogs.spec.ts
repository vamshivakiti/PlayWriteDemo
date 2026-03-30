import { test, Locator } from '@playwright/test';
test('dialog demo',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
const simpleAlert:Locator=page.locator('#alertBtn');

page.on('dialog', (dialog) => {
    console.log('type of dialog is :', dialog.type());
    console.log('dialog text ', dialog.message());
    dialog.accept();
});
await simpleAlert.click();


})