class ForgotPasswordPage {

    get personalNumberInput () { return '#usrname' };
    get logInButton () {return '//button[@value="login"]'};
    get errorValue () { return 'p.text-error'}
    
  };
  
  module.exports = new ForgotPasswordPage()