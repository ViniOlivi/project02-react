import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import Layout from "./components/layout/Index";
import Cursos from "./views/cursos";
// import Header from "./components/Header";

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path="/" component={Cursos} />
          {/* <Route exact path="/about" component={About} /> */}
        </Layout>
      </Switch>
    </Router>
  );
};

export default Routers;
