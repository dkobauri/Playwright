const { test} = require('@playwright/test');
const CommonMethods = require('../src/support/commonMethods');
const Data = require('../src/config/config');
const ForgotPasswordPage = require('../src/pages/forgotPassword_page');

test.describe('პაროლის აღდგენა', () => {

  test('პაროლის აღდგენა - მცდარი მონაცემით', async ({ page }) => {
  
    // Forgot Password Page
    await CommonMethods.openWebPage(page, Data.TestResetPassword);
    await CommonMethods.checkTitle(page, 'Re|Bank');
    await CommonMethods.fillInput(page, ForgotPasswordPage.personalNumberInput, '00000000000')
    await CommonMethods.checkValue(page, ForgotPasswordPage.personalNumberInput, '00000000000');
    await CommonMethods.clickButton(page, ForgotPasswordPage.logInButton);
    await CommonMethods.checkText(page, ForgotPasswordPage.errorHint, 'მომხმარებელი ვერ მოიძებნა');
  });

  test('პაროლის აღდგენა - ცარიელი ველით', async ({ page }) => {
  
    // Forgot Password Page
    await CommonMethods.openWebPage(page, Data.TestResetPassword);
    await CommonMethods.checkTitle(page, 'Re|Bank');
    await CommonMethods.checkEmpty(page, ForgotPasswordPage.personalNumberInput);
    await CommonMethods.clickButton(page, ForgotPasswordPage.logInButton);
    await CommonMethods.checkText(page, ForgotPasswordPage.errorHint, 'მომხმარებელი ვერ მოიძებნა');
  });

  test('პაროლის აღდგენა - სწორი მონაცემებით მაგრამ მცდარი OTP -თი', async ({ page }) => {
  
    // Forgot Password Page
    await CommonMethods.openWebPage(page, Data.TestResetPassword);
    await CommonMethods.checkTitle(page, 'Re|Bank');
    await CommonMethods.fillInput(page, ForgotPasswordPage.personalNumberInput, '01006006923')
    await CommonMethods.checkValue(page, ForgotPasswordPage.personalNumberInput, '01006006923');
    await CommonMethods.clickButton(page, ForgotPasswordPage.logInButton);
    await CommonMethods.fillInput(page, ForgotPasswordPage.otp1, '1');
    await CommonMethods.fillInput(page, ForgotPasswordPage.otp2, '1');
    await CommonMethods.fillInput(page, ForgotPasswordPage.otp3, '1');
    await CommonMethods.fillInput(page, ForgotPasswordPage.otp4, '1');
    await CommonMethods.clickButton(page, ForgotPasswordPage.otpAuthButton);
    await CommonMethods.checkText(page, ForgotPasswordPage.errorHint, 'ერთჯერადი კოდი არასწორია');
  });

  test('პაროლის აღდგენა - სწორი მონაცემებით და OTP -თი', async ({ page }) => {
  
    // Forgot Password Page
    await CommonMethods.openWebPage(page, Data.TestResetPassword);
    await CommonMethods.checkTitle(page, 'Re|Bank');
    await CommonMethods.fillInput(page, ForgotPasswordPage.personalNumberInput, '01006006923')
    await CommonMethods.checkValue(page, ForgotPasswordPage.personalNumberInput, '01006006923');
    await CommonMethods.clickButton(page, ForgotPasswordPage.logInButton);
    await CommonMethods.fillInput(page, ForgotPasswordPage.otp1, '0');
    await CommonMethods.fillInput(page, ForgotPasswordPage.otp2, '0');
    await CommonMethods.fillInput(page, ForgotPasswordPage.otp3, '0');
    await CommonMethods.fillInput(page, ForgotPasswordPage.otp4, '0');
    await CommonMethods.clickButton(page, ForgotPasswordPage.otpAuthButton);
    await CommonMethods.checkDisabled(page, ForgotPasswordPage.logInButton);
  });

  test('პაროლის აღდგენა - სწორი მონაცემებით და OTP -თი მაგრამ მცდარი ბარათის მონაცემებით', async ({ page }) => {
  
    // Forgot Password Page
    await CommonMethods.openWebPage(page, Data.TestResetPassword);
    await CommonMethods.checkTitle(page, 'Re|Bank');
    await CommonMethods.fillInput(page, ForgotPasswordPage.personalNumberInput, '01006006923')
    await CommonMethods.checkValue(page, ForgotPasswordPage.personalNumberInput, '01006006923');
    await CommonMethods.clickButton(page, ForgotPasswordPage.logInButton);
    await CommonMethods.fillInput(page, ForgotPasswordPage.otp1, '0');
    await CommonMethods.fillInput(page, ForgotPasswordPage.otp2, '0');
    await CommonMethods.fillInput(page, ForgotPasswordPage.otp3, '0');
    await CommonMethods.fillInput(page, ForgotPasswordPage.otp4, '0');
    await CommonMethods.clickButton(page, ForgotPasswordPage.otpAuthButton);
    await CommonMethods.checkDisabled(page, ForgotPasswordPage.logInButton);
    await CommonMethods.fillInput(page, ForgotPasswordPage.cardNumber, '1111111111');
    await CommonMethods.fillInput(page, ForgotPasswordPage.cardExpireDate, '1111');
    await CommonMethods.clickButton(page, ForgotPasswordPage.logInButton);
    await CommonMethods.checkText(page, ForgotPasswordPage.errorHint, 'ბარათის იდენტიფიკაცია ვერ მოხერხდა');
  });

})
