// import { saga1 } from './Feature1Sagas';
import { saga } from './login.saga';
import { fork, all } from "redux-saga/effects";

export function* watchSagas() {
  //Combine sagas with
  yield all([saga()]);
  // OR
  // yield all([fork(saga1)]);
}
