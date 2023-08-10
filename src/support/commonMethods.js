// const BasePage = new Page(page);
const { expect } = require('@playwright/test');

module.exports.CommonMethods = class CommonMethods {

  constructor (page) {
    this.page = page;
  }
  
  async openWebPage (url) {
    await this.page.goto(url);
  };

  async checkTitle (value) {
    await expect(this.page).toHaveTitle(value);
  };

  async checkURL (value) {
    await expect(this.page).toHaveURL(value);
  };

  async clickButton (page, locator) {
    await [page][locator].click();
  };


  // async findElement (selector) {
  //   const element = await $(selector)
  //   return element
  // }

  // async buttonClick (element) {
  //   const selector = await this.findElement(element)
  //   await selector.waitForDisplayed({ timeout: 5000 })
  //   await selector.click()
  // };

  // async dropDownButtonClick (button1, button2) {
  //   await this.buttonClick(button1)
  //   await this.buttonClick(button2)
  // };

  // async inputFieldSetValue (input, value) {
  //   const selector = await this.findElement(input)
  //   await selector.waitForDisplayed({ timeout: 5000 })
  //   await selector.setValue(value)
  // };

  // async checkValue (field, value) {
  //   const selector = await this.findElement(field)
  //   await selector.waitForDisplayed({ timeout: 5000 })
  //   await expect(selector).toHaveTextContaining(value)
  // };

  // async check_ (element) {
  //   const selector = await this.findElement(element)
  //   await expect(await selector).toBeDisplayed({ wait: 5000 })
  // }

}
