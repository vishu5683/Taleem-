import React, { lazy, Suspense } from "react";

const Home= lazy(() => import("../components/explore/Explore"));

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
      Component: Home,
      isPrivate: false,
    },
]


export default ROUTES;

