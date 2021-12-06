import { Route, Switch } from "react-router";
import { useRoute } from "src/hooks/useRoute";

const Router = () => {
  const { routes } = useRoute();

  return (
    <Switch>
      {routes.map((route) => {
        const { Component, url, key } = route;
        return (
          <Route key={key} path={url} exact>
            <Component />
          </Route>
        );
      })}
    </Switch>
  );
};

export default Router;
