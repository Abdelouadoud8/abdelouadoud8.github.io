import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../views/About";
import Home from "../views/Home";
import Project from "../views/Project";

const RootRoute: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/medicol">
          <Project id={1}></Project>
        </Route>
        <Route path="/medecinquiz">
          <Project id={2}></Project>
        </Route>
        <Route path="/smarttrans">
          <Project id={3}></Project>
        </Route>
        <Route path="/saidetudes">
          <Project id={4}></Project>
        </Route>
        <Route path="/beachsnowvolleyball">
          <Project id={5}></Project>
        </Route>
        <Route path="/socialmediaapp">
          <Project id={6}></Project>
        </Route>
        <Route path="/gamingpackagewebsite">
          <Project id={7}></Project>
        </Route>
      </Switch>
    </Router>
  );
};

export default RootRoute;
