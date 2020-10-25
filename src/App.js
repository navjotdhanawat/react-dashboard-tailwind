import React, { useReducer, useEffect, useState} from "react";
import {Context} from "./utils/context";
import * as ACTIONS from "./store/actions/auth";
import './scss/style.scss';
import Routes from "./routes";
import { connect } from "react-redux";

const App = (props) => {
  return (
    <Routes
      isAuthenticated={props.isAuthenticated}
    />
  );
};


const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
};

export default connect(mapStateToProps, null)(App);