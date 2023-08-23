const { test } = require('@playwright/test');
const Data = require('../src/config/config');
const CommonMethods = require('../src/support/commonMethods');
const RegistrationPage = require('../src/pages/registration_page');


test.describe('რეგისტრაცია', () => {

  test('რეგისტრაცია - ცარიელი ველებით', async ({ page }) => {
  
    // Registration Page
    await CommonMethods.openWebPage(page, Data.TestRegistrationURL);
    await CommonMethods.checkTitle(page, 'ReBank'); 
    await CommonMethods.checkEmpty(page, RegistrationPage.mobileNumberInput);
    await CommonMethods.checkEmpty(page, RegistrationPage.personalNumberInput);
    await CommonMethods.checkEmpty(page, RegistrationPage.emailImpiut);
    await CommonMethods.checkDisabled(page, RegistrationPage.logInButton);

  });

  test('რეგისტრაცია - სამივე შევსებული ველით', async ({ page }) => {
  
    // Registration Page
    await CommonMethods.openWebPage(page, Data.TestRegistrationURL);
    await CommonMethods.checkTitle(page, 'ReBank'); 
    await CommonMethods.fillInput(page, RegistrationPage.mobileNumberInput, '000000');
    await CommonMethods.checkValue(page, RegistrationPage.mobileNumberInput, '000000');
    await CommonMethods.fillInput(page, RegistrationPage.personalNumberInput, '00000000000');
    await CommonMethods.checkValue(page, RegistrationPage.personalNumberInput, '00000000000');
    await CommonMethods.fillInput(page, RegistrationPage.emailImpiut, '-@example.com');
    await CommonMethods.checkValue(page, RegistrationPage.emailImpiut, '-@example.com');
    await CommonMethods.checkEnabled(page, RegistrationPage.logInButton);

  });

  test('რეგისტრაცია - ერთი შევსებული ველით (მობილური)', async ({ page }) => {
  
    // Registration Page
    await CommonMethods.openWebPage(page, Data.TestRegistrationURL);
    await CommonMethods.checkTitle(page, 'ReBank'); 
    await CommonMethods.fillInput(page, RegistrationPage.mobileNumberInput, '000000');
    await CommonMethods.checkValue(page, RegistrationPage.mobileNumberInput, '000000');
    await CommonMethods.checkDisabled(page, RegistrationPage.logInButton);

  });

  test('რეგისტრაცია - ერთი შევსებული ველით (პირადი ნომერი)', async ({ page }) => {
  
    // Registration Page
    await CommonMethods.openWebPage(page, Data.TestRegistrationURL);
    await CommonMethods.checkTitle(page, 'ReBank'); 
    await CommonMethods.fillInput(page, RegistrationPage.personalNumberInput, '00000000000');
    await CommonMethods.checkValue(page, RegistrationPage.personalNumberInput, '00000000000');
    await CommonMethods.checkDisabled(page, RegistrationPage.logInButton);

  });

  test('რეგისტრაცია - ერთი შევსებული ველით (ელ. ფოსტა)', async ({ page }) => {
  
    // Registration Page
    await CommonMethods.openWebPage(page, Data.TestRegistrationURL);
    await CommonMethods.checkTitle(page, 'ReBank'); 
    await CommonMethods.fillInput(page, RegistrationPage.emailImpiut, '-@example.com');
    await CommonMethods.checkValue(page, RegistrationPage.emailImpiut, '-@example.com');
    await CommonMethods.checkDisabled(page, RegistrationPage.logInButton);

  });

  test('რეგისტრაცია - ორი შევსებული ველით (მობილური - პირადი ნომერი)', async ({ page }) => {
  
    // Registration Page
    await CommonMethods.openWebPage(page, Data.TestRegistrationURL);
    await CommonMethods.checkTitle(page, 'ReBank'); 
    await CommonMethods.fillInput(page, RegistrationPage.mobileNumberInput, '000000');
    await CommonMethods.checkValue(page, RegistrationPage.mobileNumberInput, '000000');
    await CommonMethods.fillInput(page, RegistrationPage.personalNumberInput, '00000000000');
    await CommonMethods.checkValue(page, RegistrationPage.personalNumberInput, '00000000000');
    await CommonMethods.checkDisabled(page, RegistrationPage.logInButton);

  });

  test('რეგისტრაცია - ორი შევსებული ველით (მობილური - ელ. ფოსტა)', async ({ page }) => {
  
    // Registration Page
    await CommonMethods.openWebPage(page, Data.TestRegistrationURL);
    await CommonMethods.checkTitle(page, 'ReBank'); 
    await CommonMethods.fillInput(page, RegistrationPage.mobileNumberInput, '000000');
    await CommonMethods.checkValue(page, RegistrationPage.mobileNumberInput, '000000');
    await CommonMethods.fillInput(page, RegistrationPage.emailImpiut, '-@example.com');
    await CommonMethods.checkValue(page, RegistrationPage.emailImpiut, '-@example.com');
    await CommonMethods.checkDisabled(page, RegistrationPage.logInButton);

  });

  test('რეგისტრაცია - ორი შევსებული ველით (პირადი ნომერი - ელ. ფოსტა)', async ({ page }) => {
  
    // Registration Page
    await CommonMethods.openWebPage(page, Data.TestRegistrationURL);
    await CommonMethods.checkTitle(page, 'ReBank'); 
    await CommonMethods.fillInput(page, RegistrationPage.personalNumberInput, '00000000000');
    await CommonMethods.checkValue(page, RegistrationPage.personalNumberInput, '00000000000');
    await CommonMethods.fillInput(page, RegistrationPage.emailImpiut, '-@example.com');
    await CommonMethods.checkValue(page, RegistrationPage.emailImpiut, '-@example.com');
    await CommonMethods.checkDisabled(page, RegistrationPage.logInButton);

  });
})
