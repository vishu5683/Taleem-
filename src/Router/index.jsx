import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import ROUTES from "./routes";
import Layout from "../layouts";
// logoutLayout
function RoutesWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {ROUTES.map(({ path, id, Component, isPrivate }) => (
          <Route
            key={id}
            path={path}
            element={
              <Layout>
                {isPrivate ? (
                  <PrivateRoute>
                    <Component />
                  </PrivateRoute>
                ) : (
                  <Component />
                )}
              </Layout>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default RoutesWrapper;
