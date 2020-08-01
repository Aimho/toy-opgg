import React, { useLayoutEffect, useEffect } from "react";
import { Route, Switch, RouteProps } from "react-router-dom";

import useRouter from "../hooks/useRouter";
import useFruits from "../modules/fruits/useFruits";

import Main from "./Main";
import Cart from "./Cart";

const Container = () => {
  const { pathName } = useRouter();
  const { onGetFruits } = useFruits();

  useLayoutEffect(onGetFruits, []);
  useEffect(() => window.scrollTo(0, 0), [pathName]);

  const routes: RouteProps[] = [
    { path: "/", component: Main, exact: true },
    { path: "/cart", component: Cart, exact: true },
  ];

  return (
    <Switch>
      {routes.map((props, index) => (
        <Route {...props} key={index} />
      ))}
    </Switch>
  );
};

export default Container;
