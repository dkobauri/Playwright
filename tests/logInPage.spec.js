const { test} = require('@playwright/test');
const CommonMethods = require('../src/support/commonMethods');
const LoginPage = require('../src/pages/login_page');

test.describe('ავტორიზაცია', () => {

  test('ავტორიზაცია - მცდარი მონაცემებით', async ({ page }) => {
  
    // Login Page
    await CommonMethods.openWebPage(page, 'https://id.rebank.ge/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dibank_web_client%26redirect_uri%3Dhttps%253A%252F%252Fibank.rebank.ge%252F%26response_type%3Dcode%26scope%3Demail%2520rb_mb_api%2520identity_api%2520profile%2520openid%2520offline_access%26state%3D95c748d2f2874ac7838ea926ccf5d1bb%26code_challenge%3DKGXc3Yahsnbd466lGxxzJ8ClYRYIc8diK-0zxx-zi4Q%26code_challenge_method%3DS256%26response_mode%3Dquery');
    await CommonMethods.checkTitle(page, 'ReBank');
    await CommonMethods.fillInput(page, LoginPage.userNameInput, 'test');
    await CommonMethods.checkValue(page, LoginPage.userNameInput, 'test');
    await CommonMethods.fillInput(page, LoginPage.passwordInput, 'testera');
    await CommonMethods.checkValue(page, LoginPage.passwordInput, 'testera');
    await CommonMethods.clickButton(page, LoginPage.logInButton)

  });

  test('ავტორიზაცია - ცარიელი ველებით', async ({ page }) => {
  
    // Login Page
    await CommonMethods.openWebPage(page, 'https://id.rebank.ge/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dibank_web_client%26redirect_uri%3Dhttps%253A%252F%252Fibank.rebank.ge%252F%26response_type%3Dcode%26scope%3Demail%2520rb_mb_api%2520identity_api%2520profile%2520openid%2520offline_access%26state%3D95c748d2f2874ac7838ea926ccf5d1bb%26code_challenge%3DKGXc3Yahsnbd466lGxxzJ8ClYRYIc8diK-0zxx-zi4Q%26code_challenge_method%3DS256%26response_mode%3Dquery');
    await CommonMethods.checkTitle(page, 'ReBank');
    await CommonMethods.clickButton(page, LoginPage.logInButton)

  });

  test('ავტორიზაცია - ერთი შევსებული ველით (მომხმარებელი)', async ({ page }) => {
  
    // Login Page
    await CommonMethods.openWebPage(page, 'https://id.rebank.ge/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dibank_web_client%26redirect_uri%3Dhttps%253A%252F%252Fibank.rebank.ge%252F%26response_type%3Dcode%26scope%3Demail%2520rb_mb_api%2520identity_api%2520profile%2520openid%2520offline_access%26state%3D95c748d2f2874ac7838ea926ccf5d1bb%26code_challenge%3DKGXc3Yahsnbd466lGxxzJ8ClYRYIc8diK-0zxx-zi4Q%26code_challenge_method%3DS256%26response_mode%3Dquery');
    await CommonMethods.checkTitle(page, 'ReBank');
    await CommonMethods.fillInput(page, LoginPage.userNameInput, 'test');
    await CommonMethods.checkValue(page, LoginPage.userNameInput, 'test');
    await CommonMethods.clickButton(page, LoginPage.logInButton)

  });

  test('ავტორიზაცია - ერთი შევსებული ველით (პაროლი)', async ({ page }) => {
  
    // Login Page
    await CommonMethods.openWebPage(page, 'https://id.rebank.ge/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dibank_web_client%26redirect_uri%3Dhttps%253A%252F%252Fibank.rebank.ge%252F%26response_type%3Dcode%26scope%3Demail%2520rb_mb_api%2520identity_api%2520profile%2520openid%2520offline_access%26state%3D95c748d2f2874ac7838ea926ccf5d1bb%26code_challenge%3DKGXc3Yahsnbd466lGxxzJ8ClYRYIc8diK-0zxx-zi4Q%26code_challenge_method%3DS256%26response_mode%3Dquery');
    await CommonMethods.checkTitle(page, 'ReBank');
    await CommonMethods.fillInput(page, LoginPage.passwordInput, 'testera');
    await CommonMethods.checkValue(page, LoginPage.passwordInput, 'testera');
    await CommonMethods.clickButton(page, LoginPage.logInButton)

  });
})


