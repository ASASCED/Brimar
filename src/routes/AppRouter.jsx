import React from "react";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main } from "../views/Main";
import { Privacity } from "../views/privacity/Privacity";

export function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/privacity" component={Privacity} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}
