import Utils from "../../Utils";
const { sendMobileOtpSignup,expertise,getProfile, verifyMobileOtpSignup, signup ,getTutorProfile,getStudentProfile,login,verifyMobileOtpLogin,sendMobileOtpLogin,forgetPassword,qualifications,grades,curriculums} = Utils.actionName;
let initialState = [];

export const expertiseReducer = (state = initialState, action) => {
  switch (action.type) {
    case expertise:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const getProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case getProfile:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const getTutorProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case getTutorProfile:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const getStudentProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case getStudentProfile:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};



export const gradesReducer = (state = initialState, action) => {
  switch (action.type) {
    case grades:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const qualificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case qualifications:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const curriculumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case curriculums:
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

