class LoginPage {

  get userNameInput () { return '//input[@placeholder="მომხმარებელი"]' };
  get passwordInput () { return '//input[@placeholder="პაროლი"]' };
  get logInButton () { return '//button[@value="login"]' };
  get registrationButton () { return 'a.text-reset.bold' };
  get errorHint () { return 'div.error-login' };
  get otp1 () { return '//*[@id="loginWith2Fa"]//div[1]/input' };
  get otp2 () { return '//*[@id="loginWith2Fa"]//div[2]/input' };
  get otp3 () { return '//*[@id="loginWith2Fa"]//div[3]/input' };
  get otp4 () { return '//*[@id="loginWith2Fa"]//div[4]/input' };
  get otpAuthButton () { return '//button[@type = "submit"]' };
  get greeting () { return 'div.flex.flex-col.items-start' }
};

module.exports = new LoginPage()