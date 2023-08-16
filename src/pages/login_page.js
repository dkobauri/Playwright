class LoginPage {

  get userNameInput () { return '//input[@placeholder="მომხმარებელი"]' };
  get passwordInput () { return '//input[@placeholder="პაროლი"]' };
  get logInButton () {return '//button[@value="login"]'};
  
};

module.exports = new LoginPage()