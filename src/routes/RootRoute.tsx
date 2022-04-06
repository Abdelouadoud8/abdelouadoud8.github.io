import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BeachSnowVolleyball from "../views/MyProjects/BeachSnowVolleyball";
import About from "../views/About";
import Home from "../views/Home";
import SocialMediaApp from "../views/MyProjects/SocialMediaApp";
import GamingPackages from "../views/MyProjects/GamingPackages";
import SaidEtudes from "../views/MyProjects/SaidEtudes";
import Project from "../views/Project";

const RootRoute: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/saidetudes" component={SaidEtudes} exact />
        <Route path="/medicol">
          <Project id={1}></Project>
        </Route>
        <Route path="/medecinquiz">
          <Project id={2}></Project>
        </Route>
        <Route path="/smarttrans">
          <Project id={3}></Project>
        </Route>

        <Route
          path="/beachsnowvolleyball"
          component={BeachSnowVolleyball}
          exact
        />
        <Route path="/socialmediaapp" component={SocialMediaApp} exact />
        <Route path="/gamingpackagewebsite" component={GamingPackages} exact />
      </Switch>
    </Router>
  );
};

export default RootRoute;
