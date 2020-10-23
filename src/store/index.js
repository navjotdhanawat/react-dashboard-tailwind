import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import { watchSagas } from "./sagas";
import logger from 'redux-logger'

const saga = createSagaMiddleware();
//redux dev tool
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(saga, logger));

const store = createStore(reducers, enhancer);
store.dispatch({ type: 'LOGIN_RESPONSE', payload: JSON.parse(localStorage.getItem('user')) });
saga.run(watchSagas);

export default store;