// import { lazy } from "react";
import { Redirect } from "react-router";
import { Auth } from "../layouts";

export default {
  path: "/auth",
  component: Auth,
  routes: [
    {
      path: "/auth",
      exact: true,
      component: () => <Redirect to="/auth/login" />,
    },
    {
      path: "/auth/login",
      exact: true,
      component: () => <div>Login</div>,
    },
    {
      path: "/auth/register",
      exact: true,
      component: () => <div>Register</div>,
    },
    {
      component: () => <Redirect to="/errors/error-404" />,
    },
  ],
};
