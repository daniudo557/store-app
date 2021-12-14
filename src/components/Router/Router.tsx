import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";

import { Routes } from "configs/routes";
import { User } from "domains/User";
import { useRoute } from "hooks/useRoute";

import { RootState } from "redux/store";

const Router = () => {
  const { routes } = useRoute();
  const { user } = useSelector<RootState, { user?: User }>(
    (state) => state?.user
  );

  const isUserLogged = useMemo(() => !!user, [user]);

  return (
    <Switch>
      {routes.map((route) => {
        const { Component, url, key } = route;

        const checkProtectedRoute = () => {
          if (!isUserLogged) {
            return <Redirect to={Routes.ROOT} />;
          }

          return <Component />;
        };

        return (
          <Route key={key} path={url} exact>
            {false ? checkProtectedRoute : <Component />}
          </Route>
        );
      })}
    </Switch>
  );
};

export default Router;
