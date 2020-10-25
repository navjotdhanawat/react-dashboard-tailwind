import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import { watchSagas } from "./sagas";
import logger from 'redux-logger'
import * as types from './types/auth';


const saga = createSagaMiddleware();
//redux dev tool
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(saga, logger));

const store = createStore(reducers, enhancer);
const user = JSON.parse(localStorage.getItem('user'));
if (user && user.token) {
  store.dispatch({ type: types.LOGIN_SUCCESS, payload: user });
} else {
  store.dispatch({ type: types.LOGIN_FAILURE });
}

saga.run(watchSagas);

export default store;