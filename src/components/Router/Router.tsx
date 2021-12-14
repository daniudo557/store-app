import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { Routes } from "src/configs/routes";
import { User } from "src/domains/User";
import { useRoute } from "src/hooks/useRoute";
import { RootState } from "src/redux/store";

const Router = () => {
  const { routes } = useRoute();
  const { user } = useSelector<RootState, { user?: User }>(
    (state) => state?.user
  );

  const isUserLogged = useMemo(() => !!user, [user]);

  return (
    <Switch>
      {routes.map((route) => {
        const { Component, url, key, protectedRoute } = route;

        const checkProtectedRoute = () => {
          if (!isUserLogged) {
            return <Redirect to={Routes.ROOT} />;
          }

          return <Component />;
        };

        return (
          <Route key={key} path={url} exact>
            {protectedRoute ? checkProtectedRoute : <Component />}
          </Route>
        );
      })}
    </Switch>
  );
};

export default Router;
