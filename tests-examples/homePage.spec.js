const { test} = require('@playwright/test');
const CommonMethods = require('../src/support/commonMethods');
const HomePage = require('../src/pages/home_page');
const LoginPage = require('../src/pages/login_page');

test.describe('ავტორიზაცია', () => {

  test('[Internet Banking]', async ({ page }) => {

    // Home Page
    await CommonMethods.openWebPage(page, 'https://rebank.ge/');
    await CommonMethods.checkTitle(page, 'რებანკი - ტოპქარდი, სესხი, რეფინანსირება, ანაბარი');
    await CommonMethods.clickButton(page, HomePage.InternetBankLogInButton);
    const pagePopUp = page.waitForEvent('popup');
    
    // Internet Bank Page
    const newPageIB = await pagePopUp;
    await CommonMethods.openWebPage(newPageIB, 'https://id.rebank.ge/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dibank_web_client%26redirect_uri%3Dhttps%253A%252F%252Fibank.rebank.ge%252F%26response_type%3Dcode%26scope%3Demail%2520rb_mb_api%2520identity_api%2520profile%2520openid%2520offline_access%26state%3D95c748d2f2874ac7838ea926ccf5d1bb%26code_challenge%3DKGXc3Yahsnbd466lGxxzJ8ClYRYIc8diK-0zxx-zi4Q%26code_challenge_method%3DS256%26response_mode%3Dquery');
    await CommonMethods.checkTitle(newPageIB, 'ReBank');
    await CommonMethods.fillInput(newPageIB, LoginPage.userNameInput, 'test');
    await CommonMethods.checkValue(newPageIB, LoginPage.userNameInput, 'test');
    await CommonMethods.fillInput(newPageIB, LoginPage.passwordInput, 'testera');
    await CommonMethods.checkValue(newPageIB, LoginPage.passwordInput, 'testera');

  });


})





