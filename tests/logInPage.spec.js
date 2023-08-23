const { test} = require('@playwright/test');
const CommonMethods = require('../src/support/commonMethods');
const Data = require('../src/config/config');
const LoginPage = require('../src/pages/login_page');

test.describe('ავტორიზაცია', () => {

  test('ავტორიზაცია - მცდარი მონაცემებით', async ({ page }) => {
  
    // Login Page
    await CommonMethods.openWebPage(page, Data.TestLoginURL);
    await CommonMethods.checkTitle(page, 'Re|Bank');
    await CommonMethods.fillInput(page, LoginPage.userNameInput, 'test');
    await CommonMethods.checkValue(page, LoginPage.userNameInput, 'test');
    await CommonMethods.fillInput(page, LoginPage.passwordInput, 'testera');
    await CommonMethods.checkValue(page, LoginPage.passwordInput, 'testera');
    await CommonMethods.clickButton(page, LoginPage.logInButton);
    await CommonMethods.checkText(page, LoginPage.errorHint, 'არასწორი მომხმარებელი ან პაროლი');

  });

  test('ავტორიზაცია - ცარიელი ველებით', async ({ page }) => {
  
    // Login Page
    await CommonMethods.openWebPage(page, Data.TestLoginURL);
    await CommonMethods.checkTitle(page, 'Re|Bank');
    await CommonMethods.clickButton(page, LoginPage.logInButton);
    await CommonMethods.checkText(page, LoginPage.errorHint, 'მომხმარებლის ველი აუცილებელიაპაროლის ველი აუცილებელია');

  });

  test('ავტორიზაცია - ერთი შევსებული ველით (მომხმარებელი)', async ({ page }) => {
  
    // Login Page
    await CommonMethods.openWebPage(page, Data.TestLoginURL);
    await CommonMethods.checkTitle(page, 'Re|Bank');
    await CommonMethods.fillInput(page, LoginPage.userNameInput, 'test');
    await CommonMethods.checkValue(page, LoginPage.userNameInput, 'test');
    await CommonMethods.clickButton(page, LoginPage.logInButton);
    await CommonMethods.checkText(page, LoginPage.errorHint, 'პაროლის ველი აუცილებელია');
  });

  test('ავტორიზაცია - ერთი შევსებული ველით (პაროლი)', async ({ page }) => {
  
    // Login Page
    await CommonMethods.openWebPage(page, Data.TestLoginURL);
    await CommonMethods.checkTitle(page, 'Re|Bank');
    await CommonMethods.fillInput(page, LoginPage.passwordInput, 'testera');
    await CommonMethods.checkValue(page, LoginPage.passwordInput, 'testera');
    await CommonMethods.clickButton(page, LoginPage.logInButton);
    await CommonMethods.checkText(page, LoginPage.errorHint, 'მომხმარებლის ველი აუცილებელია');

  });

  test('ავტორიზაცია - სწორი მონაცემებით მაგრამ მცდარი OTP -თი', async ({ page }) => {
  
    // Login Page
    await CommonMethods.openWebPage(page, Data.TestLoginURL);
    await CommonMethods.checkTitle(page, 'Re|Bank');
    await CommonMethods.fillInput(page, LoginPage.userNameInput, 'ananemsadze');
    await CommonMethods.checkValue(page, LoginPage.userNameInput, 'ananemsadze');
    await CommonMethods.fillInput(page, LoginPage.passwordInput, 'Test222!');
    await CommonMethods.checkValue(page, LoginPage.passwordInput, 'Test222!');
    await CommonMethods.clickButton(page, LoginPage.logInButton);
    await CommonMethods.fillInput(page, LoginPage.otp1, '1');
    await CommonMethods.fillInput(page, LoginPage.otp2, '1');
    await CommonMethods.fillInput(page, LoginPage.otp3, '1');
    await CommonMethods.fillInput(page, LoginPage.otp4, '1');
    await CommonMethods.clickButton(page, LoginPage.otpAuthButton);
    await CommonMethods.checkText(page, LoginPage.errorHint, 'ერთჯერადი კოდი არასწორია')
  });

  test('ავტორიზაცია - სწორი მონაცემებით და სწორი OTP -თი', async ({ page }) => {
  
    // Login Page
    await CommonMethods.openWebPage(page, Data.TestLoginURL);
    await CommonMethods.checkTitle(page, 'Re|Bank');
    await CommonMethods.fillInput(page, LoginPage.userNameInput, 'ananemsadze');
    await CommonMethods.checkValue(page, LoginPage.userNameInput, 'ananemsadze');
    await CommonMethods.fillInput(page, LoginPage.passwordInput, 'Test222!');
    await CommonMethods.checkValue(page, LoginPage.passwordInput, 'Test222!');
    await CommonMethods.clickButton(page, LoginPage.logInButton);
    await CommonMethods.fillInput(page, LoginPage.otp1, '0');
    await CommonMethods.fillInput(page, LoginPage.otp2, '0');
    await CommonMethods.fillInput(page, LoginPage.otp3, '0');
    await CommonMethods.fillInput(page, LoginPage.otp4, '0');
    await CommonMethods.clickButton(page, LoginPage.otpAuthButton);
    await CommonMethods.checkText(page, LoginPage.greeting, 'გამარჯობა,ananemsadze')
  });
})
