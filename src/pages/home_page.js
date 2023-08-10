const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.InternetBankLogInButton = page.getByRole('button', { name: 'ინტერნეტ ბანკი link' });
  }

  async goto() {
    await this.page.goto('https://rebank.ge/');
    await expect(this.page).toHaveTitle('რებანკი - ტოპქარდი, სესხი, რეფინანსირება, ანაბარი');
  }

  async internetBankLogIn() {
    await this.InternetBankLogInButton.click();
  }

};