import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/home";
import Projects from "./containers/projects";
import About from "./containers/about"
import Contacts from "./containers/contacts";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/about" component={About} />
        <Route exact path="/contacts" component={Contacts}/>
      </Switch>
    </Router>
  );
};

export default Routes;
