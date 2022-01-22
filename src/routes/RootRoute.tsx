import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BeachSnowVolleyball from "../views/MyProjects/BeachSnowVolleyball";
import Medicol from "../views/MyProjects/Medicol";
import About from "../views/About";
import Home from "../views/Home";
import SocialMediaApp from "../views/MyProjects/SocialMediaApp";
import GamingPackages from "../views/MyProjects/GamingPackages";
import MedecinQuiz from "../views/MyProjects/MedecinQuiz";
import SmartTrans from "../views/MyProjects/SmartTrans";
import SaidEtudes from "../views/MyProjects/SaidEtudes";

const RootRoute: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/medicol" component={Medicol} exact />
        <Route path="/medecinquiz" component={MedecinQuiz} exact />
        <Route path="/smarttrans" component={SmartTrans} exact />
        <Route path="/saidetudes" component={SaidEtudes} exact />

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
