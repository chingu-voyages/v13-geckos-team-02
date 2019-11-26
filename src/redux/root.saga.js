import { all, call } from "redux-saga/effects";

// IMPORT DIFFERENT SAGAS

// EXPORT ROOT SAGA
export default function* rootSagas() {
  yield all([call()]);
}
