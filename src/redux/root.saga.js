import { all, call } from "redux-saga/effects";

// IMPORT DIFFERENT SAGAS
import { genreSagas } from "./genre/genre.saga";
import { moviesSagas } from "./movies/movies.saga";
import { seriesSaga } from "./series/series.saga";
import { appConfigSagas } from "./appConfig/appConfig.saga";

// EXPORT ROOT SAGA
export default function* rootSagas() {
  yield all([
    call(genreSagas),
    call(moviesSagas),
    call(seriesSaga),
    call(appConfigSagas)
  ]);
}
