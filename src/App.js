import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Profile from "./screens/Profile";
import ErrorPage from "./screens/ErrorPage";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/about" component={About} />

            <Route path="/profile" component={Profile} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
