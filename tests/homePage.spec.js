const { test, expect } = require('@playwright/test');
const { HomePage } = require('../src/pages/home_page');
const { InternetBankPage } = require('../src/pages/internetBank_page');


test.describe('ReBank Home Page', () => {

  test('Open Web Page And click on [Internet Banking]', async ({ page }) => {

    const Home_Page = new HomePage(page);
    const Internet_Bank_Page = new InternetBankPage(page);
    
    await Home_Page.goto();
    const pagePopUp = page.waitForEvent('popup');

    await Home_Page.internetBankLogIn();
    
    const newPageIB = await pagePopUp;

    // await newPageIB.Internet_Bank_Page.fillUserName();
    // await newPageIB.Internet_Bank_Page.fillPassword();

   
      await newPageIB.goto('https://id.rebank.ge/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dibank_web_client%26redirect_uri%3Dhttps%253A%252F%252Fibank.rebank.ge%252F%26response_type%3Dcode%26scope%3Demail%2520rb_mb_api%2520identity_api%2520profile%2520openid%2520offline_access%26state%3D95c748d2f2874ac7838ea926ccf5d1bb%26code_challenge%3DKGXc3Yahsnbd466lGxxzJ8ClYRYIc8diK-0zxx-zi4Q%26code_challenge_method%3DS256%26response_mode%3Dquery');
      await newPageIB.getByPlaceholder('მომხმარებელი').click();
      await newPageIB.getByPlaceholder('მომხმარებელი').fill('test');
      await newPageIB.getByPlaceholder('პაროლი').click();
      await newPageIB.getByPlaceholder('პაროლი').fill('testera');
      await newPageIB.getByRole('button', { name: 'ავტორიზაცია' }).click();
      await newPageIB.getByText('არასწორი მომხმარებელი ან პაროლი').click();

  });
  
  // test('should show Page Object Model article', async ({ page }) => {
  //   const Home_Page = new HomePage(page);
  //   await Home_Page.goto();
  //   await Home_Page.pageObjectModel();
  //   await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');
  // });
  
})
