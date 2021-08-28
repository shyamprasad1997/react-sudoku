import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { RouteWithLayout } from "./components";
import { Minimal as MinimalLayout } from "./layouts";
import { GameView } from "./views";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={GameView}
        exact
        layout={MinimalLayout}
        path="/react-sudoku"
      />
      <Redirect to="/react-sudoku" />
    </Switch>
  );
};

export default Routes;
