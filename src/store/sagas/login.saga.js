import { call, put } from "redux-saga/effects";
import { login } from "../../_services/index";
import * as ACTIONS from "../actions/actions";
// import { dispatchSnackbarError } from "../../utils/Shared";
import { takeEvery } from "redux-saga/effects";
import * as TYPES from "../actions/action_types";

// Replace with your sagas
export function* loginSaga(action) {
  try {
    debugger
    const response = yield call(login, action.payload);
    debugger
    yield put(ACTIONS.loginResponse(response.data));
  } catch (err) {
    debugger
  }
}



export function* saga() {
  yield takeEvery(TYPES.LOGIN_REQUEST, loginSaga);
}
