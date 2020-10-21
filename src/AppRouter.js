import React from 'react';
import App from './App'
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
        <nav>
          <ul>
            <Link to="/">Home</Link>
          </ul>
        </nav>

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
