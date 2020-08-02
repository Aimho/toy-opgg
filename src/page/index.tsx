import React, { useLayoutEffect } from 'react';
import { Route, Switch, RouteProps } from 'react-router-dom';

import useItem from '../modules/item/useItem';

import Main from './Main';
import Summoner from './Summoner';

const Container = () => {
  const { onGetItems } = useItem();

  useLayoutEffect(onGetItems, []);

  const routes: RouteProps[] = [
    { path: '/', component: Main, exact: true },
    { path: '/summoner', component: Summoner, exact: false }
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
