import { call, put } from "redux-saga/effects";
import { login, register } from "../../_services/index";
import * as ACTIONS from "../actions/auth";
import { takeEvery } from "redux-saga/effects";
import * as TYPES from "../types/auth";
import history from "../../utils/history";


export function* loginSaga(action) {
  try {
    const response = yield call(login, action.payload);
    yield put(ACTIONS.loginResponse(response));
    history.push('/dashboard')
  } catch (err) {

  }
}

export function* registerSaga(action) {
  try {
    const success = yield call(register, action.payload);
    if (success) {
      yield put(ACTIONS.registerResponse());
      history.push('/login')
    }
  } catch (err) {
    console.log(err)
  }
}

export function* authSaga() {
  yield takeEvery(TYPES.LOGIN_REQUEST, loginSaga);
  yield takeEvery(TYPES.REGISTER_REQUEST, registerSaga);
}