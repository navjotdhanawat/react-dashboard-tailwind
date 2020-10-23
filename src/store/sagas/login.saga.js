import { call, put } from "redux-saga/effects";
import { login, isLoggedIn } from "../../_services/index";
import * as ACTIONS from "../actions/actions";
import { takeEvery } from "redux-saga/effects";
import * as TYPES from "../actions/action_types";
import history from "../../utils/history";


// Replace with your sagas
export function* loginSaga(action) {
  try {

    const response = yield call(login, action.payload);

    yield put(ACTIONS.loginResponse(response.data));

    history.push('/dashboard')
  } catch (err) {

  }
}

export function* checkAuthSaga() {
  try {

    const response = yield call(isLoggedIn);
    console.log('CheckAuth....')
    yield put(ACTIONS.loginResponse(response.data));
  } catch (err) {

  }
}


export function* saga() {
  yield takeEvery(TYPES.LOGIN_REQUEST, loginSaga);
  yield takeEvery(TYPES.CHECK_AUTH, checkAuthSaga);
}
