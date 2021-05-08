import { Redirect } from "react-router";
import { Main } from "../layouts";

import error from "./errors";
import auth from "./auth";

const nameRouters = ["home"];

function getRoute(nameRoute: string) {
  const route = require(`./${nameRoute}`);
  return route.default;
}

function getRoutes(nameRouters: string[]) {
  let routes: any = [
    error,
    auth,
    {
      component: Main,
      routes: [{ component: () => <Redirect to="errors" /> }],
    },
  ];
  nameRouters.forEach((nameRoute) => {
    const route = getRoute(nameRoute);
    routes[2].routes.unshift(route);
  });
  return routes;
}

export default getRoutes(nameRouters);
