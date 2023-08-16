const { test} = require('@playwright/test');
const CommonMethods = require('../src/support/commonMethods');
const ForgotPasswordPage = require('../src/pages/forgotPassword_page');

test.describe('პაროლის აღდგენა', () => {

  test('პაროლის აღდგენა - მცდარი მონაცემით', async ({ page }) => {
  
    // Forgot Password Page
    await CommonMethods.openWebPage(page, 'https://id.rebank.ge/Account/ForgotPassword');
    await CommonMethods.checkTitle(page, 'ReBank');
    await CommonMethods.fillInput(page, ForgotPasswordPage.personalNumberInput, '00000000000')
    await CommonMethods.checkValue(page, ForgotPasswordPage.personalNumberInput, '00000000000');
    await CommonMethods.clickButton(page, ForgotPasswordPage.logInButton);
  });

  test('რეგისტრაცია - ცარიელი ველით', async ({ page }) => {
  
    // Forgot Password Page
    await CommonMethods.openWebPage(page, 'https://id.rebank.ge/Account/ForgotPassword');
    await CommonMethods.checkTitle(page, 'ReBank');
    await CommonMethods.checkEmpty(page, ForgotPasswordPage.personalNumberInput);
    await CommonMethods.clickButton(page, ForgotPasswordPage.logInButton);
  });

})


