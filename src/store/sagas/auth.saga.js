import { call, put } from "redux-saga/effects";
import { login } from "../../_services/index";
import * as ACTIONS from "../actions/auth";
import { takeEvery } from "redux-saga/effects";
import * as TYPES from "../types/auth";
import history from "../../utils/history";


// Replace with your sagas
export function* loginSaga(action) {
  try {
    const response = yield call(login, action.payload);
    yield put(ACTIONS.loginResponse(response));
    history.push('/dashboard')
  } catch (err) {

  }
}

export function* authSaga() {
  yield takeEvery(TYPES.LOGIN_REQUEST, loginSaga);
}