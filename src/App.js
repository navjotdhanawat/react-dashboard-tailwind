import React, { useReducer, useEffect, useState} from "react";
import {Context} from "./utils/context";
import * as ACTIONS from "./store/actions/actions";
import './scss/style.scss';
import * as AuthReducer from "./store/reducers/auth_reducer";
import Routes from "./routes";
import { checkAuth } from "./store/actions/actions";
import { connect } from "react-redux";

const App = (props) => {
  useEffect(() => {
    console.log(props.isAuthenticated)
    // props.checkAuth()
  },[props.isAuthenticated])
  return (
    <Routes
      isAuthenticated={props.isAuthenticated}
    />
  );
};


const mapStateToProps = state => {
  return {
    isAuthenticated: state.authentication.isAuthenticated
  }
};

const mapDispatchToProps = {checkAuth}

export default connect(mapStateToProps, mapDispatchToProps)(App);