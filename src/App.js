import Home from "./compnents/Home";
import Nav from "./compnents/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route>
            <Home path="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
