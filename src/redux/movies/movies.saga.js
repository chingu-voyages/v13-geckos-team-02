import { all, put, call, takeLatest, takeEvery } from "redux-saga/effects";
import axios from "axios";

// IMPORTING MOVIES ACTION TYPES
import MoviesTypes from "./movies.types";
// IMPORTING MOVIES ACTIONS
import {
  // NOW PLAYING
  getNowPlayingSuccess,
  getNowPlayingFailure,
  // TRENDING
  getTrendingMoviesSuccess,
  getTrendingMoviesFailure,
  // POPULAR
  getPopularMoviesSuccess,
  getPopularMoviesFailure,
  // TOP RATED
  getTopRatedMoviesSuccess,
  getTopRatedMoviesFailure,
  // UPCOMING
  getUpcomingMoviesSuccess,
  getUpcomingMoviesFailure,
  // MOVIE DETAILS
  getMovieDetailsSuccess,
  getMovieDetailsFailure,
  getMovieCreditsSuccess,
  getMovieCreditsFailure,
  getSimilarMoviesSuccess,
  getSimilarMoviesFailure
} from "./movies.action";
// Get api key
const API_KEY = process.env.REACT_APP_API_VALUE_KEY;
const MOVIE_URL = "https://api.themoviedb.org/3/movie";

// GET MOVIE DETAILS
export function* getMovieDetails({ payload: { movie_id, extra } }) {
  let response = "";
  try {
    switch (extra) {
      // MAKE API CALL TO GET MOVIE CREDITS
      case "credits":
        try {
          response = yield axios.get(
            `${MOVIE_URL}/${movie_id}/credits?api_key=${API_KEY}&language=en-US&page=1`
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
            `${MOVIE_URL}/${movie_id}/similar?api_key=${API_KEY}&language=en-US&page=1`
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
            `${MOVIE_URL}/${movie_id}?api_key=${API_KEY}&language=en-US&page=1`
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

// MAKE API CALL TO EITHER PATH
export function* getMoviesAPICall(
  path,
  pageNumber,
  successFunction,
  failureFunction
) {
  try {
    const response = yield axios.get(
      `${MOVIE_URL}/${path}?api_key=${API_KEY}&language=en-US&page=${pageNumber}`
    );
    if (response.status === 200) {
      yield put(successFunction(response.data));
    } else {
      yield put(failureFunction(response));
    }
  } catch (error) {
    yield put(failureFunction(error));
  }
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
// MAKE API CALL TO GET MOVIES DEPENING ON PATH
export function* getMovies({ type, page, category }) {
  let movieTypePath;
  const pageNumber = yield page || 1;
  switch (type) {
    case MoviesTypes.GET_NOW_PLAYING_START:
      movieTypePath = yield "now_playing";
      yield getMoviesAPICall(
        movieTypePath,
        pageNumber,
        getNowPlayingSuccess,
        getNowPlayingFailure
      );
      break;
    case MoviesTypes.GET_TRENDING_MOVIES_START:
      movieTypePath = yield "trending";
      yield getMoviesAPICall(
        movieTypePath,
        pageNumber,
        getTrendingMoviesSuccess,
        getTrendingMoviesFailure
      );
      break;
    case MoviesTypes.GET_POPULAR_MOVIES_START:
      movieTypePath = yield "popular";
      yield getMoviesAPICall(
        movieTypePath,
        pageNumber,
        getPopularMoviesSuccess,
        getPopularMoviesFailure
      );
      break;
    case MoviesTypes.GET_TOP_RATED_MOVIES_START:
      movieTypePath = yield "top_rated";
      yield getMoviesAPICall(
        movieTypePath,
        pageNumber,
        getTopRatedMoviesSuccess,
        getTopRatedMoviesFailure
      );
      break;
    case MoviesTypes.GET_UPCOMING_MOVIES_START:
      movieTypePath = yield "upcoming";
      yield getMoviesAPICall(
        movieTypePath,
        pageNumber,
        getUpcomingMoviesSuccess,
        getUpcomingMoviesFailure
      );
      break;
    default:
      return;
  }
}
export function* onGetMovies() {
  yield takeLatest(MoviesTypes.GET_NOW_PLAYING_START, getMovies);
  yield takeLatest(MoviesTypes.GET_TRENDING_MOVIES_START, getTrendingMovies);
  yield takeLatest(MoviesTypes.GET_POPULAR_MOVIES_START, getMovies);
  yield takeLatest(MoviesTypes.GET_TOP_RATED_MOVIES_START, getMovies);
  yield takeLatest(MoviesTypes.GET_UPCOMING_MOVIES_START, getMovies);
}

// COMBINE ALL SAGAS HERE
export function* moviesSagas() {
  yield all([call(onGetMovies), call(onGetMovieDetails)]);
}
