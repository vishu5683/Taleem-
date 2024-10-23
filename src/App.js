import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import RoutesWrapper from "./Router";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Redux/store";
import { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
// import Footer from "./components/footer/footer";
// // import LoginForm from './components/login form';
// import Navbar from "./components/navbar/navbar";
// import FAQ from "./components/faq/faq";
// import Join from "./components/join/join";
// import Steps from "./components/steps/steps";
// import FeaturesCarousel from "./components/features/features";
// import Packages from "./components/packages/packages";
// import Explore from "./components/explore/Explore";
// import Review from "./components/rating/rating";
// import AppDownload from "./components/download app/appdownload";
// import Terms from "./components/policies and links/terms";
// import PrivacyPolicy from "./components/policies and links/privacypolicy";
// import ContactUs from "./components/policies and links/contactus";
// import LastBanner from "./components/contact us comps/lastbanner";
// import GetInTouch from "./components/contact us comps/Getintouch";
// import NotificationPage from "./components/notifications/notifiactionpage";
// import LoggedInNavbar from "./components/navbar/loggedInnavbar";
function App() {
const baseName = process.env.NODE_ENV === 'development' ? '/' : '/taleem/taleem_dev/';
  return (
    <>
      <Provider store={store}>
        <div>
          <BrowserRouter
          basename={baseName}
          >
            <Routes>
              <Route path="/*" element={<RoutesWrapper />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
        <Toaster />
      </Provider>
      {/* <LoginForm/> */}
      {/* <Navbar /> */}
      {/* <NotificationPage/> */}
      {/* <LoggedInNavbar/> */}
      {/* <Join />
      <Steps />
      <FeaturesCarousel />
      <Packages />
      <Explore/>
      <AppDownload/>
      <Review/>
      <FAQ /> */}

      {/* <Footer /> */}
      {/* footer links 
      <PrivacyPolicy/>  
    <Terms/>
    <ContactUs/> */}
    </>
  );
}

export default App;
