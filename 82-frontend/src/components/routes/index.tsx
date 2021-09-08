import * as React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Topic1 from "../topics/Topic1";
import Topic2 from "../topics/Topic2";
import Topic3 from "../topics/Topic3";
import Aim from "../pages/footer/Aim";
import Contact from "../pages/footer/Contact";
import Login from "../pages/login/Login";
import Register from "../pages/login/SignUp";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/topic1" component={Topic1} />
        <Route path="/topic2" component={Topic2} />
        <Route path="/topic3" component={Topic3} />
        <Route path="/aim" component={Aim} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/users" component={Home} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
