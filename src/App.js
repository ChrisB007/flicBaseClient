import React, { useEffect } from "react";
import Home from "./compnents/Home";
import Nav from "./compnents/Nav";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./compnents/Signin";

function App({ value }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const authAction = async () => {
    try {
      const res = await axios.get("/auth/google/api/current_user");
      dispatch({ type: "FETCH_USER", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    authAction();
  });

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
