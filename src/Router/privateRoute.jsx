import React from 'react';
import { Navigate } from 'react-router-dom';
// import { getAccessToken } from '../Utils/storage';

function PrivateRoute({ children }) {
  // const auth = getAccessToken();
  console.log("90")
  // return auth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
