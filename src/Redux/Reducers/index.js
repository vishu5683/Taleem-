import Utils from "../../Utils";
const { sendMobileOtpSignup,expertise, verifyMobileOtpSignup, signup ,login,verifyMobileOtpLogin,sendMobileOtpLogin,forgetPassword} = Utils.actionName;
let initialState = [];

export const expertiseReducer = (state = initialState, action) => {
  switch (action.type) {
    case expertise:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const verifyMobileOtpSignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case verifyMobileOtpSignup:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const verifyMobileOtpLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case verifyMobileOtpLogin:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case signup:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case login:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const sendMobileOtpLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case sendMobileOtpLogin:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const forgetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case forgetPassword:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};


export const sendMobileOtpSignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case sendMobileOtpSignup:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

