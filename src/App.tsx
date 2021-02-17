import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./Users";
import User from "./User";

function App() {
  return (
      <div className="page">
          <Router>
              <div className="page__content">
                  <h1>Users</h1>
                  <Users/>
                  <Switch>
                      <Route path='/users/:userId'>
                          <User />
                      </Route>
                      <Route path='/'>
                          <span>Select a user please</span>
                      </Route>
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

export default App;
