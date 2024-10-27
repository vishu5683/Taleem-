import Utils from '.';
import toast, { Toaster } from "react-hot-toast";

const headers = {
  'Authorization': `Bearer ${localStorage.getItem('token')}`,
  // 'Content-Type': 'application/json',
};

const checkUserValidation = (data) => {
  if (data) {  
    const { statusCode } = data;
    const { sessionExpired, unauthorized, accessDenied } = Utils.constants.apiErrorCode;

    if (statusCode) {
      return statusCode === sessionExpired || statusCode === unauthorized || statusCode === accessDenied;
    }
    return false;
  }
  return false;
};

const logOutApiCall = () => {
  localStorage.clear();
  sessionStorage.clear();
  window.location.reload();
};

const loginApiCall = (
  endPoint,
  params,
  successCallback,
  errorCallback
) => {
  Utils.constants.axios
    .post(endPoint, params)
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      if (error.code === 'ECONNABORTED') {
        let payload = {
          statusCode: 408,
          message: 'Something went wrong!',
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        if (data?.code == 401) {
          logOutApiCall();
        }
        if (checkUserValidation(data)) {
          Utils.showAlert(2, data.message || '');
          setTimeout(() => {
            logOutApiCall();
          }, 1000);
        } else {
          errorCallback(error.response);
        }
      } 
      // else if (!error.response) {
      //   let payload = {
      //     statusCode: -1,
      //     message: 'Please try again later',
      //   };
      //   errorCallback(payload);
      // }
    });
};

const deleteApiCall = (
  endPoint,
  params,
  successCallback,
  errorCallback
) => {
  Utils.constants.axios
    .delete(endPoint, params, { headers: { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` } })
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      if (error.code === 'ECONNABORTED') {
        let payload = {
          statusCode: 408,
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        if (checkUserValidation(data)) {
          Utils.showAlert(2, data.message || '');
        } else {
          errorCallback(error.response);
        }
      }
      //  else if (!error.response) {
      //   let payload = {
      //     statusCode: -1,
      //     message: 'Please try again later',
      //   };
      //   errorCallback(payload);
      // }
    });
};

const postApiCall = (
  endPoint,
  params,
  successCallback,
  errorCallback,
  headerType
) => {
  if (headerType === 'multi') {
    headers['Content-Type'] = 'multipart/form-data';
  }else{    
    headers['Content-Type'] = 'application/json';
  }
  Utils.constants.axios
    .post(endPoint, params, { headers: headers })
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      console.log(error,"err----------->")
      if (error.code === 'ECONNABORTED') {
        let payload = {
          statusCode: 408,
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        if (data.code === 401) {
          logOutApiCall();
        }
        if (checkUserValidation(data)) {
          Utils.showAlert(2, data.message || '');
          setTimeout(() => {
            logOutApiCall();
          }, 1000);
        } else {
          let payload= {
            statusCode: error.response.status,
            payload: data,
            message: data.error,
          };
          errorCallback(payload);
        }
      } 
      // else if (!error.response) {
      //   let payload= {
      //     statusCode: -1,
      //     payload:{},
      //     message: 'Please try again later',
      //   };
      //   errorCallback(payload);
      // }
    });
};

const getApiCall = (
  endPoint,
  params = '',
  successCallback,
  errorCallback,
  isArrayBuffer = false
) => {
  const myHeaders = new Headers();
  const token= localStorage.getItem("token")
  myHeaders.append(
    "Authorization",
    `Bearer ${token}`
  );
 
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    Utils.constants.API_URL + endPoint + params,
    requestOptions
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse JSON response here
    })
    .then((result) => {
      // console.log(result); // Log the parsed result
      successCallback(result); // Call the success callback with the result
    })
    .catch((error) => {
      if (error.code === 'ECONNABORTED') {
        let payload = {
          statusCode: 408,
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        if (data.code === 401) {
          logOutApiCall();
        }
        if (checkUserValidation(data)) {
          // If user session expired
          Utils.showAlert(2, data.message || '');
          setTimeout(() => {
            logOutApiCall();
          }, 1000);
        } else {
          errorCallback(error.response);
        }
      } else if (!error.response) {
        let payload = {
          statusCode: -1,
          message: 'Please try again later',
        };
        errorCallback(payload);
      }
    });
};

  // Utils.constants.axios
  //   .get(Utils.constants.API_URL + endPoint + params, { headers: {
  //     'Authorization': `Bearer ${localStorage.getItem('token')}`,
  //     'Content-Type': 'application/json',
  //   }
  //     , responseType: isArrayBuffer?"arraybuffer":"json"
  //   })
  //   .then((response) => {
  //     successCallback(response);
  //   })
  //   .catch((error) => {
  //     if (error.code === 'ECONNABORTED') {
  //       let payload = {
  //         statusCode: 408,
  //       };
  //       errorCallback(payload);
  //     } else if (error.response) {
  //       let data = error.response.data;
  //       if (data.code === 401) {
  //         logOutApiCall();
  //       }
  //       if (checkUserValidation(data)) {
  //         // If user session expired
  //         Utils.showAlert(2, data.message || '');
  //         setTimeout(() => {
  //           logOutApiCall();
  //         }, 1000);
  //       } else {
  //         errorCallback(error.response);
  //       }
  //     } else if (!error.response) {
  //       let payload = {
  //         statusCode: -1,
  //         message: 'Please try again later',
  //       };
  //       errorCallback(payload);
  //     }
  //   });
// };




const putApiCall = (
  endPoint,
  params,
  successCallback,
  errorCallback,
  headerType
) => {
  if (headerType === 'multi') {
    headers['Content-Type'] = 'multipart/form-data';
  }
  Utils.constants.axios
    .put(endPoint, params, { headers: headers })
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      if (error.code === 'ECONNABORTED') {
        let payload = {
          statusCode: 408,
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        if (checkUserValidation(data)) {
          Utils.showAlert(2, data.message || '');
          setTimeout(() => {
            logOutApiCall();
          }, 1000);
        } else {
          errorCallback(error.response);
        }
      } else if (!error.response) {
        let payload = {
          statusCode: -1,
          message: 'Please try again later',
        };
        errorCallback(payload);
      }
    });
};

const api = {
  postApiCall,
  loginApiCall,
  putApiCall,
  getApiCall,
  deleteApiCall,
  logOutApiCall,
};

export default api;
