import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BeachSnowVolleyball from "../views/MyProjects/BeachSnowVolleyball";
import Medicol from "../views/MyProjects/Medicol";
import About from "../views/About";
import Home from "../views/Home";
import SocialMediaApp from "../views/MyProjects/SocialMediaApp";
import GamingPackages from "../views/MyProjects/GamingPackages";

const RootRoute: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/medicol" component={Medicol} exact />
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
