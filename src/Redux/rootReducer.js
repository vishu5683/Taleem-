import { combineReducers } from "redux";
import {
  signupReducer,
  verifyMobileOtpSignupReducer,
  loginReducer,
  sendMobileOtpSignupReducer,
  sendMobileOtpLoginReducer,
  verifyMobileOtpLoginReducer,
  expertiseReducer,
  curriculumsReducer,
  gradesReducer,
  qualificationsReducer,
  getProfileReducer,
  getTutorProfileReducer,
  getStudentProfileReducer,
} from "./Reducers";
import loginFormReducer from "./Reducers/signupFormReducer";
import {
  HomeReducer,
  getCategoryWithProductReducer,
  productReducer,
} from "./Reducers/HomeReducers";

let reducers = {
  verifyMobileOtpSignupReducer,
  signupReducer,
  loginReducer,
  sendMobileOtpSignupReducer,
  loginFormReducer,
  sendMobileOtpLoginReducer,
  verifyMobileOtpLoginReducer,
  getCategoryWithProductReducer,
  HomeReducer,
  productReducer,
  expertiseReducer,
  curriculumsReducer,
  qualificationsReducer,
  getProfileReducer,
  gradesReducer,
  getTutorProfileReducer,
  getStudentProfileReducer,
};

const rootReducer = combineReducers({
  ...reducers,
  // demoData: demoReducer,
});
export default rootReducer;
