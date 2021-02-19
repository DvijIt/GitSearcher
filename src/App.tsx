import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./components/Users/Users";
import User from "./components/User/User";

function App() {
  return (
    <div className="page">
      <Router>
        <div className="page__content">
          <h1 className="page__title">GitHub Users Searcher</h1>
          <Switch>
            <Route exact path="/">
              <Users />
            </Route>
            <Route path="/users/:username" component={User} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
