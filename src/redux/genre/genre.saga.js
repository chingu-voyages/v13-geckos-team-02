import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// REDUX ACTION TYPES
import GenreTypes from "./genre.types";

// REDUX ACTIONS
import {
  getMoviesGenresSuccess,
  getMoviesGenresFailure,
  getSeriesGenresSuccess,
  getSeriesGenresFailure
} from "./genre.action";

const API_KEY = process.env.REACT_APP_API_VALUE_KEY;

// FETCH THE MOVIES GENRES FROM API
export function* getMoviesGenres() {
  try {
    const response = yield axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en`
    );
    if (response.status === 200) {
      yield put(getMoviesGenresSuccess(response.data.genres));
    }
  } catch (error) {
    yield put(getMoviesGenresFailure(error));
  }
}
// LISTEN FOR AND ACTION TRIGGERED
export function* onGetMoviesGenres() {
  yield takeLatest(GenreTypes.GET_MOVIES_GENRES_START, getMoviesGenres);
}

// FETCH SERIES MOVIES GENERES FROM API
export function* getSeriesGenres() {
  try {
    const response = yield axios.get(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en`
    );
    if (response.status === 200) {
      yield put(getSeriesGenresSuccess(response.data.genres));
    }
  } catch (error) {
    yield put(getSeriesGenresFailure(error));
  }
}
// LISTEN FOR AND ACTION TRIGGERED
export function* onGetSeriesGenres() {
  yield takeLatest(GenreTypes.GET_SERIES_GENRES_START, getSeriesGenres);
}

// BOUND ALL THE SAGA CALLS INTO ONE
export function* genreSagas() {
  yield all([call(onGetMoviesGenres), call(onGetSeriesGenres)]);
}
