import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../views/About";
import Home from "../views/Home";

const RootRoute: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
      </Switch>
    </Router>
  );
};

export default RootRoute;
