import { authSaga } from './auth.saga';
import { fork, all } from "redux-saga/effects";

export function* watchSagas() {
  //Combine sagas with
  yield all([authSaga()]);
}
