const { expect } = require('@playwright/test');

exports.InternetBankPage = class InternetBankPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.userName_Field = page.getByPlaceholder('მომხმარებელი');
    this.password_Field = page.getByPlaceholder('პაროლი');
    this.login_button = page.getByRole('button', { name: 'ავტორიზაცია' });
  }

  async fillUserName() {
    await this.userName_Field.fill("test");
    await expect(userName_Field).toHaveText("tes");
  }

  async fillPassword() {
    await this.password_Field.fill("testera");
    await expect(password_Field).toHaveText("tester");
  }
};