class RegistrationPage {

    get mobileNumberInput () { return '#PhoneNumber' };
    get personalNumberInput () { return '#PersonalNumber' };
    get emailImpiut () { return '#Email'}
    get logInButton () {return '//button[@value="login"]'};

  };
  
  module.exports = new RegistrationPage()