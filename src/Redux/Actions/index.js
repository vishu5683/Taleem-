import Utils from "../../Utils";
import toast, { Toaster } from "react-hot-toast";

export const sendMobileOtpSignup = (value, callback) => {
  return (dispatch) => {
    Utils.api.postApiCall(
      `${Utils.EndPoint.sendMobileOtpSignup}`,
      value,
      (responseData) => {
        dispatch({
          type: Utils.actionName.sendMobileOtpSignup,
          payload: { ...value, Response: responseData?.data },
        });
        if (responseData?.status == 200) {
          callback(responseData);
          toast.success(`${responseData?.data?.message}`, {
            position: "top-center",
          });
        } else {
          toast.error(`${responseData?.data?.message}`, {
            position: "top-center",
          });
        }
      },
      (error) => {
        toast.error(`${error?.payload?.message}`, {
          position: "top-center",
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
              position: "top-center",
            });
            callback(responseData);
          } else {
            toast.error(`${responseData?.data?.APICODERESULT}`, {
              position: "top-center",
            });
          }
        }
      },
      (error) => {
        toast.error(`${error?.payload?.APICODERESULT}`, {
          position: "top-center",
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
          if (responseData?.data?.status) {
            toast.success(`${responseData?.data?.message}`, {
              position: "top-center",
            });
            callback(responseData);
          } else {
            toast.error(`${responseData?.data?.message}`, {
              position: "top-center",
            });
          }
        } else {
          toast.error(`${responseData?.data?.message}`, {
            position: "top-center",
          });
        }
      },
      (error) => {
        toast.error(`${error?.payload?.message}`, {
          position: "top-center",
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
              position: "top-center",
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
              position: "top-center",
            });
          }
        }
      },
      (error) => {
        toast.error(`${error?.payload?.APICODERESULT}`, {
          position: "top-center",
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
              position: "top-center",
            });
            callback(responseData);
          } else {
            toast.error(`${responseData?.data?.APICODERESULT}`, {
              position: "top-center",
            });
          }
        }
      },
      (error) => {
        toast.error(`${error?.payload?.APICODERESULT}`, {
          position: "top-center",
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
        console.log(responseData?.data?.message, "OTPTOKEN");
        if (responseData?.status == 200) {
          if (responseData?.data?.status) {
            dispatch({
              type: Utils.actionName.verifyMobileOtpLogin,
              payload: { ...value, Response: responseData?.data },
            });
            localStorage.setItem("token", responseData?.data?.data?.token);
            toast.success(`${responseData?.data?.message}`, {
              position: "top-center",
            });
            callback(responseData);
          } else {
            toast.error(`${responseData?.data?.message}`, {
              position: "top-center",
            });
          }
        } else {
          toast.error(`${responseData?.data?.message}`, {
            position: "top-center",
          });
        }
      },
      (error) => {
        toast.error(`${error?.payload?.message}`, {
          position: "top-center",
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
              position: "top-center",
            });
            callback(responseData);
          } else {
            toast.error(`${responseData?.data?.APICODERESULT}`, {
              position: "top-center",
            });
          }
        }
      },
      (error) => {
        toast.error(`${error?.payload?.APICODERESULT}`, {
          position: "top-center",
        });
      }
    );
  };
};

// expertise:"expertise",
// qualifications:"qualifications",
// grades:"grades",
// curriculums:"curriculums",
export const expertise = (callback) => {
  return (dispatch) => {
    Utils.api.getApiCall(
      Utils.EndPoint.expertise,
      "",
      (resData) => {
        if (resData.status) {
          console.log(resData, "resDataresData");
          callback(resData?.data);
          dispatch({
            type: Utils.actionName.expertise,
            payload: {
              expertiseData: resData?.data,
            },
          });
          console.log(resData, "expertiseOptions123");
          callback(resData?.data);
        } else {
        }
      },
      (error) => {}
    );
  };
};

export const qualifications = (callback) => {
  return (dispatch) => {
    Utils.api.getApiCall(
      Utils.EndPoint.qualifications,
      "",
      (resData) => {
        console.log(resData, "resData");
        if (resData.status) {
          dispatch({
            type: Utils.actionName.qualifications,
            payload: {
              qualificationsData: resData,
            },
          });
          callback(resData?.data);
        } else {
        }
      },
      (error) => {}
    );
  };
};

export const grades = (callback) => {
  return (dispatch) => {
    Utils.api.getApiCall(
      Utils.EndPoint.grades,
      "",
      (resData) => {
        console.log(resData, "resData");
        if (resData.status) {
          dispatch({
            type: Utils.actionName.grades,
            payload: {
              gradesData: resData?.data,
            },
          });
          callback(resData?.data);
        } else {
        }
      },
      (error) => {}
    );
  };
};

export const curriculums = (callback) => {
  return (dispatch) => {
    Utils.api.getApiCall(
      Utils.EndPoint.curriculums,
      "",
      (resData) => {
        console.log(resData?.data, "resData");
        if (resData.status) {
          dispatch({
            type: Utils.actionName.curriculums,
            payload: {
              curriculumsData: resData?.data,
            },
          });
          callback(resData?.data);
        } else {
        }
      },
      (error) => {}
    );
  };
};

export const getProfile = (callback) => {
  return (dispatch) => {
    Utils.api.getApiCall(
      Utils.EndPoint.getProfile,
      "",
      (resData) => {
        console.log(resData, "resData");
        if (resData.status) {
          dispatch({
            type: Utils.actionName.getProfile,
            payload: {
              getProfileData: resData?.data,
            },
          });
          callback(resData?.data);
        } else {
        }
      },
      (error) => {}
    );
  };
};


export const updateProfile = (data,callback) => {
  return (dispatch) => {
    Utils.api.putApiCall(
      Utils.EndPoint.getProfile,
      data,
      (resData) => {
        if (resData.status) {
          dispatch({
            type: Utils.actionName.updateProfile,
            payload: {
              updateProfileData: resData?.data,
            },
          });
          callback(resData?.data);
        } else {
        }
      },
      (error) => {}
    );
  };
};

export const setFormData = (data) => ({
  type: Utils.actionName.SET_FORM_DATA,
  payload: data,
});
