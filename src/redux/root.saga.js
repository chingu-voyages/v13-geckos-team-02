import { all, call } from "redux-saga/effects";

// IMPORT DIFFERENT SAGAS
import { genreSagas } from "./genre/genre.saga";

// EXPORT ROOT SAGA
export default function* rootSagas() {
  yield all([call(genreSagas)]);
}
