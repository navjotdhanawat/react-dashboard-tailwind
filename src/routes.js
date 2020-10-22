import React, { useContext, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router";
import history from "./utils/history";
import {Context} from "./utils/context";

import Login from "./views/Login";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
import TheLayout from "./containers/TheLayout";
import { isLoggedIn } from "./_services/user.service";


const PrivateRoute = ({ component: Component, auth }) => (
  <Route
    render={(props) =>
      isLoggedIn() ? (
        <Component auth={auth} {...props} />
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )
    }
  />
);

const Routes = () => {
  const context = useContext(Context);

  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute
              exact
              path="/"
              auth={context.authState}
              component={TheLayout}
            />
            <PrivateRoute
              exact
              path="/dashboard"
              auth={context.authState}
              component={TheLayout}
            />
            <PrivateRoute
              exact
              path="/landing-page"
              auth={context.authState}
              component={Dashboard}
            />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Routes;
