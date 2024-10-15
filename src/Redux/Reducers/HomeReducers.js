import Utils from "../../Utils";
const {getCategoryWithProduct,Home,getProduct} = Utils.actionName;

let initialState=[];

export const getCategoryWithProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case getCategoryWithProduct:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };

  export const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
      case Home:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };

  export const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case getProduct:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };