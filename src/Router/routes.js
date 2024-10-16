import React, { lazy, Suspense } from "react";

const Home= lazy(() => import("../components/pages/LoginHomepage"));
const LandingPage = lazy(() => import("../components/pages/LandingPage"));

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
      id: 0,
      Component: LandingPage,
      isPrivate: false,
    },
]


export default ROUTES;

