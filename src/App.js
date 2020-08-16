import React, { useReducer, useEffect, useState} from "react";
import {Context} from "./utils/context";
import * as ACTIONS from "./store/actions/actions";

import * as AuthReducer from "./store/reducers/auth_reducer";
import Routes from "./routes";
import { login, isLoggedIn } from "./_services/user.service";

const App = () => {

  const [stateAuthReducer, dispatchAuthReducer] = useReducer(
    AuthReducer.AuthReducer,
    AuthReducer.initialState
  );

  const handleLogin = (username, password) => {
    login(username, password)
      .then(({token}) => {
        if (token) {
          dispatchAuthReducer(ACTIONS.login_success());
        }
      }).catch((err) => {
        dispatchAuthReducer(ACTIONS.login_failure());
      });

  };

  const handleLogout = () => {
    dispatchAuthReducer(ACTIONS.login_failure());
  };

  return (
      <Context.Provider
        value={{
          authState: stateAuthReducer.is_authenticated,
          profileState: stateAuthReducer.profile,
          handleUserLogin: handleLogin,
          handleUserLogout: handleLogout,
        }}
      >
        <Routes />
      </Context.Provider>
  );
};

export default App;
