import React, { useContext, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router";
import history from "./utils/history";
import {Context} from "./utils/context";

import Login from "./views/Login";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
import TheLayout from "./containers/TheLayout";
import { isLoggedIn } from "./_services/user.service";


const PrivateRoute = ({isAuthenticated, component: Component, auth}) => {
  return (
    <Route
      render={(props) =>
        isAuthenticated ?
        (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
}

const Routes = (props) => {

  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute
              isAuthenticated={props.isAuthenticated}
              path="/"
              component={TheLayout}
            />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Routes;
