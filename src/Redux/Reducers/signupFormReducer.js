import Utils from "../../Utils";

const { SET_FORM_DATA} = Utils.actionName;
const initialState = {
  formData: {
    userType: "",
    user: "",
    fullName: "",
    phone: "",
    email: "",
    password: "",
  },
};

const signupFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_DATA:
      return {
        ...state,
        formData: action.payload,
      };
    default:
      return state;
  }
};

export default signupFormReducer;
