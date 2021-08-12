import React, { useState, useEffect } from "react";
import Home from "./compnents/Home";
import Nav from "./compnents/Nav";
import { connect } from "react-redux";
import * as actions from "./actions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {}, []);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default connect(null, actions)(App);
