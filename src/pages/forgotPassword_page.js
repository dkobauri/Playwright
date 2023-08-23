class ForgotPasswordPage {

    get personalNumberInput () { return '#usrname' };
    get logInButton () { return '//button[@value="login"]' };
    get errorHint () { return 'p.text-error' };
    get otp1 () { return '//form//div[1]/input' };
    get otp2 () { return '//form//div[2]/input' };
    get otp3 () { return '//form//div[3]/input' };
    get otp4 () { return '//form//div[4]/input' };
    get otpAuthButton () { return '//button[@type = "submit"]' };
    get cardNumber () { return '#digits' };
    get cardExpireDate () { return '#expire' };
    get cardExpireDate () { return '#expire' };

  };
  
  module.exports = new ForgotPasswordPage()