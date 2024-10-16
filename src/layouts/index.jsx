// Layout.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/navbar/loggedInnavbar';
import Footer from '../components/footer/loggedInFooter';
// import NavBar from '../Pages/NavBar/NavBar';

const Layout = ({ children }) => {
  const location = useLocation();
  const noLayoutRoutes = ['/login', '/signup','forget-password','otp-signin','otp-signup','reset-password']; 

  const shouldDisplayLayout = !noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {shouldDisplayLayout && <Header />}
      {/* {shouldDisplayLayout && <NavBar />} */}
      <main>{children}</main>
      {shouldDisplayLayout && <Footer />}
    </>
  );
};

export default Layout;
