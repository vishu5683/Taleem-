// Layout.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
// import NavBar from '../Pages/NavBar/NavBar';
import LoggedInNavbar from "../components/navbar/loggedInnavbar"
const Layout = ({ children }) => {
  const location = useLocation();
  const noLayoutRoutes = ['/login', '/signup','forget-password','otp-signin','otp-signup','reset-password']; 

  const shouldDisplayLayout = !noLayoutRoutes.includes(location.pathname);

  return (
    <>      
      {shouldDisplayLayout && <Header />}
      {/* <LoggedInNavbar/> */}
      {/* {shouldDisplayLayout && <NavBar />} */}
      <main>{children}</main>
      {shouldDisplayLayout && <Footer />}
    </>
  );
};

export default Layout;
