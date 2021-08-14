import React, { useEffect } from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Dashboard from "./dashboard";

function App({ value }) {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);

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
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
