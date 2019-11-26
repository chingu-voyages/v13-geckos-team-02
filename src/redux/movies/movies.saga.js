import { all, put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";

// IMPORTING MOVIES ACTION TYPES
import MoviesTypes from "./movies.types";

// IMPORTING MOVIES ACTIONS
import { getNowPlayingSuccess, getNowPlayingFailure } from "./movies.action";
// Get api key
const API_KEY = process.env.REACT_APP_API_VALUE_KEY;

//  MAKE API CALL TO GET ALL NOW PLAYING MOVIES
export function* getNowPlayingMovies() {
  try {
    const response = yield axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    );
    yield put(getNowPlayingSuccess(response.data));
  } catch (error) {
    yield put(getNowPlayingFailure(error));
  }
}

// TRIGGER FUNCTION WHEN NOT PLAYING START IS TRIGGEREd
export function* onGetNowplayingMovies() {
  yield takeLatest(MoviesTypes.GET_NOW_PLAYING_START, getNowPlayingMovies);
}

// COMBINE ALL SAGAS HERE
export function* moviesSagas() {
  yield all([call(onGetNowplayingMovies)]);
}
