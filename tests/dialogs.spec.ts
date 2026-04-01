import { test, Locator, expect } from '@playwright/test';
test('should handle simple alert dialog', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const simpleAlert: Locator = page.locator('#alertBtn');
    page.on('dialog', (dialog) => {
        console.log('type of dialog is :', dialog.type());
        console.log('dialog text ', dialog.message());
        dialog.accept();
    });
    await simpleAlert.click();
    await page.waitForTimeout(3000);
});

test('should handle confirmation dialog', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const confirmationDialog: Locator = page.locator('#confirmBtn');
    page.on('dialog', (dialog) => {
        console.log('dialog type is :', dialog.type());
        expect(dialog.type()).toContain('confirm');
        console.log('dialog text :', dialog.message());
        dialog.dismiss();
    });
    await confirmationDialog.click();
    const text:string=await page.locator('#demo').innerText();
    console.log('inner text is :',text)
    expect(page.locator('#demo')).toHaveText('You pressed Cancel!');
    await page.waitForTimeout(3000);
});

test('should handle prompt dialog', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const promtBtn: Locator = page.locator('#promptBtn');
    page.on('dialog', (dialog) => {
        console.log('dialog type is :', dialog.type());
        expect(dialog.type()).toContain('prompt');
        console.log('dialog text :', dialog.message());
        expect(dialog.defaultValue()).toContain('Harry Potter');//checks default values
        dialog.accept("John");
    });
    await promtBtn.click();
    await expect(page.locator('#demo')).toHaveText('Hello John! How are you today?');

    await page.waitForTimeout(3000);
});
