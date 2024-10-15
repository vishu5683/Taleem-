import api from './api';
import EndPoint from './endpoints';
import constants from './contants';
import actionName from './actionName';

const Utils = {
    api,
    EndPoint,
    constants,
    actionName,
    
  };
  
  export default Utils;


  export const getToken = (name) => {
    return localStorage.getItem(name);
  };