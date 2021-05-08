import { lazy } from "react";
import { Redirect } from "react-router";
import { Error } from "../layouts";

export default {
  path: "/errors",
  component: Error,
  routes: [
    {
      path: "/errors/error-401",
      exact: true,
      component: lazy(() => import("../pages/errors/Error401")),
    },
    {
      path: "/errors/error-404",
      exact: true,
      component: lazy(() => import("../pages/errors/Error404")),
    },
    {
      path: "/errors/error-500",
      exact: true,
      component: lazy(() => import("../pages/errors/Error500")),
    },
    {
      component: () => <Redirect to="/errors/error-404" />,
    },
  ],
};
