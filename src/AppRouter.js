import React from 'react';
import App from './App';
import logo from './vector-logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <div>
        <Link to="/">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
        </Link>

        <Switch>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
