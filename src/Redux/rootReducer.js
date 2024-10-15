import { combineReducers } from "redux";
import {
  signupReducer,
  verifyMobileOtpSignupReducer,
  loginReducer,
  sendMobileOtpSignupReducer,
  sendMobileOtpLoginReducer,
  verifyMobileOtpLoginReducer,
  
} from "./Reducers";
import loginFormReducer from "./Reducers/signupFormReducer";
import { HomeReducer, getCategoryWithProductReducer,productReducer, } from "./Reducers/HomeReducers";

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
};

const rootReducer = combineReducers({
  ...reducers,
  // demoData: demoReducer,
});
export default rootReducer;
