import { signup, sendMobileOtpSignup } from "../Redux/Actions";

const ActionName = {
    sendMobileOtpSignup:"sendMobileOtpSignup",
    verifyMobileOtpSignup:"verifyMobileOtpSignup",
    signup:"signup",
    login:"emailLogin",
    SET_FORM_DATA:"SET_FORM_DATA",
    sendMobileOtpLogin:"sendMobileOtpLogin",
    verifyMobileOtpLogin:"verifyMobileOtpLogin",
    forgetPassword:"forgetPassword",
    getCategoryWithProduct:"getCategoryWithProduct",
    Home:"Home",
    getProduct:"getProduct",

     //list from admin
     expertise:"expertise",
     qualifications:"qualifications",
     grades:"grades",
     curriculums:"curriculums",
    
};

export default ActionName;