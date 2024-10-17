// pages/LandingPage.jsx
import React, { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import HeroSection from "../hero section/herosection";

// Lazy load the components based on the directory structure you provided
const Navbar = lazy(() => import("../navbar/navbar"));
const Join = lazy(() => import("../join/join"));
const Steps = lazy(() => import("../steps/steps"));
const FeaturesCarousel = lazy(() => import("../features/features"));
const Packages = lazy(() => import("../packages/packages"));
const Explore = lazy(() => import("../explore/Explore"));
const AppDownload = lazy(() => import("../download app/appdownload"));
const Review = lazy(() => import("../rating/rating"));
const FAQ = lazy(() => import("../faq/faq"));
const Footer = lazy(() => import("../footer/footer"));

const LandingPage = () => {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      }
    >
      {/* Navbar */}
      {/* <Navbar /> */}
<HeroSection/>
      {/* Join Section */}
      <Join />

      {/* Steps Section */}
      <Steps />

      {/* Features Carousel Section */}
      <FeaturesCarousel />

      {/* Packages Section */}
      <Packages />

      {/* Explore Section */}
      <Explore />

      {/* App Download Section */}
      <AppDownload />

      {/* Review Section */}
      <Review />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      {/* <Footer /> */}
    </Suspense>
  );
};

export default LandingPage;
