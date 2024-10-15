import Utils from "../../Utils";
import toast, { Toaster } from "react-hot-toast";

export const getCategoryWithProduct = () => {
    return (dispatch) => {
      Utils.api.getApiCall(
        Utils.EndPoint.getCategoryWithProduct,
        "",
        (resData) => {
          console.log(resData,"resData")
          if (resData.status === 200) {
            dispatch({
              type: Utils.actionName.getCategoryWithProduct,
              payload: {
                getCategoryWithProductData: resData.data,
              },
            });
          } else {
          }
        },
        (error) => {
        }
      );
    };
  }

  export const HomeAction = () => {
    return (dispatch) => {
      Utils.api.getApiCall(
        Utils.EndPoint.Home,
        "",
        (resData) => {
          console.log(resData,"resData")
          if (resData.status === 200) {
            dispatch({
              type: Utils.actionName.Home,
              payload: {
                HomeData: resData.data,
              },
            });
          } else {
          }
        },
        (error) => {
        }
      );
    };
  }

  export const getProduct = (id,page,limit) => {
    return (dispatch) => {
      Utils.api.getApiCall(
        Utils.EndPoint.getProduct,
        `?product_id=${id}&page=${page}&per_page=${limit}`,
        (resData) => {
          console.log(resData?.data?.result?.data,"resData")
          if (resData.status === 200) {
            dispatch({
              type: Utils.actionName.getProduct,
              payload: {
                getProductData: resData?.data?.result?.data,
              },
            }
          );
          } 
          else {
          }
        },
        (error) => {
        }
      );
    };
  }

  

  