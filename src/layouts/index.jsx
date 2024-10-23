// Layout.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import LoggedInFooter from '../components/footer/loggedInFooter';
import LoggedInNavbar from "../components/navbar/loggedInnavbar"
const Layout = ({ children }) => {
  const location = useLocation();
  const noLayoutRoutes = ['/']; 

  const shouldDisplayLayout = !noLayoutRoutes.includes(location.pathname);

  return (
    <>      
      {shouldDisplayLayout ? (<LoggedInNavbar />) : (<Header/>)}
      {/* <LoggedInNavbar/> */}
      {/* {shouldDisplayLayout && <NavBar />} */}
      <main>{children}</main>
      {shouldDisplayLayout ? (<LoggedInFooter />) : (<Footer/>)}
    </>
  );
};

export default Layout;
