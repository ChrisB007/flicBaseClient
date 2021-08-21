import React, { useEffect } from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/Signin";
import Dashboard from "./dashboard/index";

function App({ value }) {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);

  const authAction = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_HEROKU_SERVER_URL}/auth/google/current_user`
      );
      dispatch({ type: "FETCH_USER", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    authAction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
