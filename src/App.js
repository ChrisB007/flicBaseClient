import React, { useEffect } from "react";
import Home from "./compnents/Home";
import Nav from "./compnents/Nav";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App({ value }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const authAction = () => {
    axios
      .get("/api/current_user")
      .then((res) => dispatch({ type: "AUTH_TYPE", payload: res }));
  };

  useEffect(() => {
    authAction();
  });

  console.dir(user);

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

export default App;
