import { lazy } from "react";

const Home = lazy(() => import("../components/pages/LoginHomepage"));
const LandingPage = lazy(() => import("../components/pages/LandingPage"));
const Terms = lazy(() => import("../components/policies and links/terms"));
const PrivacyPolicy = lazy(() => import("../components/policies and links/privacypolicy"));
const ContactUs = lazy(() => import("../components/policies and links/contactus"));

const ROUTES = [
  {
    name: "Home",
    path: "Home",
    id: 0,
    Component: Home,
    isPrivate: false,
  },
  {
    name: "Home",
    path: "/",
    id: 1,
    Component: LandingPage,
    isPrivate: false,
  },
  {
    name: "Terms of Service",
    path: "/termsofservice",
    id: 2,
    Component: Terms,
    isPrivate: false,
  },
  {
    name: "Privacy Policy",
    path: "/privacypolicy",
    id: 3,
    Component: PrivacyPolicy,
    isPrivate: false,
  },
  {
    name: "Contact Us",
    path: "/contactus",
    id: 4,
    Component: ContactUs,
    isPrivate: false,
  },
];

export default ROUTES;
