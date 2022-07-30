import { FC } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import About from "../views/About";
import Home from "../views/Home";
import Project from "../views/Project";
import { HashRouter } from "react-router-dom";

const RootRoute: FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/medicol">
          <Project id={1}></Project>
        </Route>
        <Route path="/momyz">
          <Project id={2}></Project>
        </Route>
        <Route path="/medecinquiz">
          <Project id={3}></Project>
        </Route>
        <Route path="/todoapp">
          <Project id={4}></Project>
        </Route>
        <Route path="/saidetudes">
          <Project id={5}></Project>
        </Route>
        <Route path="/smarttrans">
          <Project id={6}></Project>
        </Route>
        <Route path="/socialmediaapp">
          <Project id={7}></Project>
        </Route>
        <Route path="/beachsnowvolleyball">
          <Project id={8}></Project>
        </Route>
        <Route path="/gamingpackagewebsite">
          <Project id={9}></Project>
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default RootRoute;
