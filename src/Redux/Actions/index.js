import Utils from "../../Utils";
import toast, { Toaster } from "react-hot-toast";

export const sendMobileOtpSignup = (value, callback) => {
  return (dispatch) => {
    Utils.api.postApiCall(
      `${Utils.EndPoint.sendMobileOtpSignup}`,
      value,
      (responseData) => {
        console.log(responseData)
        dispatch({
          type: Utils.actionName.sendMobileOtpSignup,
          payload: { ...value, Response: responseData?.data },
        });
        if (responseData?.status == 200) {
          // if (responseData?.data?.statusCode == 200) {
            toast.success(`${responseData?.data?.message}`, {
              position: "top-right",
            });
            callback(responseData);
          // } else {
          //   toast.error(`${responseData?.data?.message}`, {
          //     position: "top-right",
          //   });
          // }
        }else {
          toast.error(`${responseData?.data?.message}`, {
            position: "top-right",
          });
        }
      },
      (error) => {
        toast.error(`${error?.payload?.message}`, {
          position: "top-right",
        });
      }
    );
  };
};

export const verifyMobileOtpSignup = (value, callback) => {
  return (dispatch) => {
    Utils.api.postApiCall(
      `${Utils.EndPoint.verifyMobileOtpSignup}`,
      value,
      (responseData) => {
        dispatch({
          type: Utils.actionName.verifyMobileOtpSignup,
          payload: { ...value, Response: responseData?.data },
        });
        if (responseData?.status == 200) {
          if (responseData?.data?.statusCode == 200) {
            toast.success(`${responseData?.data?.APICODERESULT}`, {
              position: "top-right",
            });
            callback(responseData);
          } else {
            toast.error(`${responseData?.data?.APICODERESULT}`, {
              position: "top-right",
            });
          }
        }
      },
      (error) => {
        toast.error(`${error?.payload?.APICODERESULT}`, {
          position: "top-right",
        });
      }
    );
  };
};

export const signup = (value, callback) => {
  return (dispatch) => {
    Utils.api.postApiCall(
      `${Utils.EndPoint.signup}`,
      value,
      (responseData) => {
        dispatch({
          type: Utils.actionName.signup,
          payload: { ...value, Response: responseData?.data },
        });
        if (responseData?.status == 200) {
          if (responseData?.data?.status == true) {
            toast.success(`${responseData?.data?.message}`, {
              position: "top-right",
            });
            callback(responseData);
          } else {
            toast.error(`${responseData?.data?.message}`, {
              position: "top-right",
            });
          }
        }
      },
      (error) => {
        toast.error(`${error?.payload?.message}`, {
          position: "top-right",
        });
      }
    );
  };
};

export const login = (value, callback) => {
  return (dispatch) => {
    Utils.api.loginApiCall(
      `${Utils.EndPoint.login}`,
      value,
      (responseData) => {
        dispatch({
          type: Utils.actionName.login,
          payload: { ...value, Response: responseData?.data },
        });
        if (responseData?.status == 200) {
          if (responseData?.data?.statusCode == 200) {
            toast.success(`${responseData?.data?.APICODERESULT}`, {
              position: "top-right",
            });
            localStorage.setItem(
              "accessToken",
              responseData?.data?.result?.token
            );
            localStorage.setItem(
              "user",
              JSON.stringify(responseData?.data?.result)
            );

            callback(responseData);
          } else {
            toast.error(`${responseData?.data?.APICODERESULT}`, {
              position: "top-right",
            });
          }
        }
      },
      (error) => {
        toast.error(`${error?.payload?.APICODERESULT}`, {
          position: "top-right",
        });
      }
    );
  };
};

export const sendMobileOtpLogin = (value, callback) => {
  return (dispatch) => {
    Utils.api.postApiCall(
      `${Utils.EndPoint.sendMobileOtpLogin}`,
      value,
      (responseData) => {
        dispatch({
          type: Utils.actionName.sendMobileOtpLogin,
          payload: { ...value, Response: responseData?.data },
        });
        if (responseData?.status == 200) {
          if (responseData?.data?.statusCode == 200) {
            toast.success(`${responseData?.data?.APICODERESULT}`, {
              position: "top-right",
            });
            callback(responseData);
          } else {
            toast.error(`${responseData?.data?.APICODERESULT}`, {
              position: "top-right",
            });
          }
        }
      },
      (error) => {
        toast.error(`${error?.payload?.APICODERESULT}`, {
          position: "top-right",
        });
      }
    );
  };
};

export const verifyMobileOtpLogin = (value, callback) => {
  return (dispatch) => {
    Utils.api.postApiCall(
      `${Utils.EndPoint.verifyMobileOtpLogin}`,
      value,
      (responseData) => {
        dispatch({
          type: Utils.actionName.verifyMobileOtpLogin,
          payload: { ...value, Response: responseData?.data },
        });
        if (responseData?.status == 200) {
          if (responseData?.data?.statusCode == 200) {
            toast.success(`${responseData?.data?.APICODERESULT}`, {
              position: "top-right",
            });
            callback(responseData);
          } else {
            toast.error(`${responseData?.data?.APICODERESULT}`, {
              position: "top-right",
            });
          }
        }
      },
      (error) => {
        toast.error(`${error?.payload?.APICODERESULT}`, {
          position: "top-right",
        });
      }
    );
  };
};

export const forgetPassword = (value, callback) => {
  return (dispatch) => {
    Utils.api.postApiCall(
      `${Utils.EndPoint.forgetPassword}`,
      value,
      (responseData) => {
        dispatch({
          type: Utils.actionName.forgetPassword,
          payload: { ...value, Response: responseData?.data },
        });
        if (responseData?.status == 200) {
          if (responseData?.data?.statusCode == 200) {
            toast.success(`${responseData?.data?.APICODERESULT}`, {
              position: "top-right",
            });
            callback(responseData);
          } else {
            toast.error(`${responseData?.data?.APICODERESULT}`, {
              position: "top-right",
            });
          }
        }
      },
      (error) => {
        toast.error(`${error?.payload?.APICODERESULT}`, {
          position: "top-right",
        });
      }
    );
  };
};

export const setFormData = (data) => ({
  type: Utils.actionName.SET_FORM_DATA,
  payload: data,
});
