import { all, put, call, takeLatest, takeEvery } from "redux-saga/effects";
import axios from "axios";

// IMPORTING MOVIES ACTION TYPES
import MoviesTypes from "./movies.types";
// IMPORTING MOVIES ACTIONS
import {
  getNowPlayingSuccess,
  getNowPlayingFailure,
  getTrendingMoviesSuccess,
  getTrendingMoviesFailure,
  getMovieDetailsSuccess,
  getMovieDetailsFailure,
  getMovieCreditsSuccess,
  getMovieCreditsFailure,
  getSimilarMoviesSuccess,
  getSimilarMoviesFailure
} from "./movies.action";
// Get api key
const API_KEY = process.env.REACT_APP_API_VALUE_KEY;
const movieURL = "https://api.themoviedb.org/3/movie";

//  MAKE API CALL TO GET ALL NOW PLAYING MOVIES
export function* getNowPlayingMovies() {
  try {
    const response = yield axios.get(
      `${movieURL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    );
    if (response.status === 200) {
      yield put(getNowPlayingSuccess(response.data));
    } else {
      yield put(getNowPlayingFailure(response));
    }
  } catch (error) {
    yield put(getNowPlayingFailure(error));
  }
}
// TRIGGER FUNCTION WHEN NOT PLAYING START IS TRIGGEREd
export function* onGetNowplayingMovies() {
  yield takeLatest(MoviesTypes.GET_NOW_PLAYING_START, getNowPlayingMovies);
}

// GET MOVIE DETAILS
export function* getMovieDetails({ payload: { movie_id, extra } }) {
  let response = "";
  try {
    switch (extra) {
      // MAKE API CALL TO GET MOVIE CREDITS
      case "credits":
        try {
          response = yield axios.get(
            `${movieURL}/${movie_id}/credits?api_key=${API_KEY}&language=en-US&page=1`
          );
          if (response.status === 200) {
            yield put(getMovieCreditsSuccess(response.data));
          } else {
            yield put(getMovieCreditsFailure(response));
          }
        } catch (error) {
          yield put(getMovieCreditsFailure(error));
        }
        break;
      // MAKE API CALL TO GET SIMILAR MOVIES
      case "similar":
        try {
          response = yield axios.get(
            `${movieURL}/${movie_id}/similar?api_key=${API_KEY}&language=en-US&page=1`
          );
          if (response.status === 200) {
            yield put(getSimilarMoviesSuccess(response.data));
          } else {
            yield put(getSimilarMoviesFailure(response));
          }
        } catch (error) {
          yield put(getSimilarMoviesFailure(error));
        }
        break;
      // MAKE API CALL TO GET DETAILS
      default:
        try {
          response = yield axios.get(
            `${movieURL}/${movie_id}?api_key=${API_KEY}&language=en-US&page=1`
          );
          if (response.status === 200) {
            yield put(getMovieDetailsSuccess(response.data));
          } else {
            yield put(getMovieDetailsFailure(response));
          }
        } catch (error) {
          yield put(getMovieDetailsFailure(response));
        }
        break;
    }
  } catch (error) {
    console.log(
      `There was an error getting some of movie's details.\nHere is the error:${error}`
    );
  }
}
export function* onGetMovieDetails() {
  yield takeEvery(MoviesTypes.GET_MOVIE_DETAILS_START, getMovieDetails);
}

// GETTING TRENDING MOVIES
export function* getTrendingMovies() {
  try {
    const response = yield axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
    if (response.status === 200) {
      yield put(getTrendingMoviesSuccess(response.data));
    } else {
      yield put(getTrendingMoviesFailure(response));
    }
  } catch (error) {
    yield put(getTrendingMoviesFailure(error));
  }
}
// TRIGGER FUNCTION WHEN TRENDING MOVIES START IS TRIGGERED
export function* onGetTrendingMovies() {
  yield takeLatest(MoviesTypes.GET_TRENDING_MOVIES_START, getTrendingMovies);
}

// COMBINE ALL SAGAS HERE
export function* moviesSagas() {
  yield all([
    call(onGetNowplayingMovies),
    call(onGetTrendingMovies),
    call(onGetMovieDetails)
  ]);
}
