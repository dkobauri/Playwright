// const BasePage = new Page(page);
const { expect } = require('@playwright/test');

class CommonMethods {
  
  async openWebPage (page, url) {
    await page.goto(url);
  };

  async findElement (page, selector) {
    const element = await page.locator(selector);
    return element;
  }

  async clickButton (page, button) {
    const selector = await this.findElement(page, button);
    await selector.click();
  };

  async fillInput(page, input, value) {
    const selector = await this.findElement(page, input);
    await selector.fill(value);
  }

  async checkValue (page, element, value) {
    const selector = await this.findElement(page, element);
    await expect(selector).toHaveValue(value);
  };

  async checkText (page, element, text) {
    const selector = await this.findElement(page, element);
    await expect(selector).toHaveText(text);
  };

  async checkTitle (page, value) {
    await expect(page).toHaveTitle(value);
  };

  async checkURL (page, value) {
    await expect(page).toHaveURL(value);
  };

  async checkDisabled (page, element) {
    const selector = await this.findElement(page, element);
    await expect(selector).toBeDisabled();  
  };

  async checkEnabled (page, element) {
    const selector = await this.findElement(page, element);
    await expect(selector).toBeEnabled();  
  };

  async checkEmpty (page, element) {
    const selector = await this.findElement(page, element);
    await expect(selector).toBeEmpty();  
  };
}

module.exports = new CommonMethods()