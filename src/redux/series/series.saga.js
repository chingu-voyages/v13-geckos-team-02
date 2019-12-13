import { all, put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";

// IMPORTING MOVIES ACTION TYPES
import SeriesTypes from "./series.types";

// IMPORTING MOVIES ACTIONS
import {
  // AIRING TODAY
  getSeriesAiringTodaySuccess,
  getSeriesAiringTodayFailure,
  // ON THE AIR
  getOnTheAirSeriesSuccess,
  getOnTheAirSeriesFailure,
  // TOP RATED
  getTopRatedSeriesSuccess,
  getTopRatedSeriesFailure,
  // TRENDING
  getTrendingSeriesSuccess,
  getTrendingSeriesFailure,
  // POPULAR
  getPopularSeriesSuccess,
  getPopularSeriesFailure
} from "./series.action";
// Get api key
const API_KEY = process.env.REACT_APP_API_VALUE_KEY;
// SERIES URL
const SERIES_URL = "https://api.themoviedb.org/3/tv";

// MAKE API CALL TO EITHER PATH
export function* getSeriesAPICall(
  trending = false,
  category,
  pageNumber,
  successFunction,
  failureFunction
) {
  try {
    const NORMAL_URL = `${SERIES_URL}/${category}?api_key=${API_KEY}&language=en-US&page=${pageNumber}`;
    const TRENDING_SERIES_URL = `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`;
    const URL = trending ? TRENDING_SERIES_URL : NORMAL_URL;
    const response = yield axios.get(URL);
    if (response.status === 200) {
      yield put(successFunction(response.data));
    } else {
      yield put(failureFunction(response));
    }
  } catch (error) {
    yield put(failureFunction(error));
  }
}

// MAKE API CALL TO GET MOVIES DEPENING ON PATH
export function* getSeries({ payload: { page }, type }) {
  let seriesCategory;
  let trending = false;
  const pageNumber = yield page || 1;
  switch (type) {
    case SeriesTypes.GET_SERIES_AIRING_TODAY_START:
      seriesCategory = yield "airing_today";
      yield getSeriesAPICall(
        trending,
        seriesCategory,
        pageNumber,
        getSeriesAiringTodaySuccess,
        getSeriesAiringTodayFailure
      );
      break;
    case SeriesTypes.GET_ON_THE_AIR_SERIES_START:
      seriesCategory = yield "on_the_air";
      yield getSeriesAPICall(
        trending,
        seriesCategory,
        pageNumber,
        getOnTheAirSeriesSuccess,
        getOnTheAirSeriesFailure
      );
      break;
    case SeriesTypes.GET_TOP_RATED_SERIES_START:
      seriesCategory = yield "top_rated";
      yield getSeriesAPICall(
        trending,
        seriesCategory,
        pageNumber,
        getTopRatedSeriesSuccess,
        getTopRatedSeriesFailure
      );
      break;
    case SeriesTypes.GET_TRENDING_SERIES_START:
      seriesCategory = yield "trending";
      trending = true;
      yield getSeriesAPICall(
        trending,
        seriesCategory,
        pageNumber,
        getTrendingSeriesSuccess,
        getTrendingSeriesFailure
      );
      break;
    case SeriesTypes.GET_POPULAR_SERIES_START:
      seriesCategory = yield "popular";
      yield getSeriesAPICall(
        trending,
        seriesCategory,
        pageNumber,
        getPopularSeriesSuccess,
        getPopularSeriesFailure
      );
      break;
    default:
      return;
  }
}
export function* onGetSeriesAiringToday() {
  yield takeLatest(SeriesTypes.GET_SERIES_AIRING_TODAY_START, getSeries);
}
export function* onGetOnTheAirSeries() {
  yield takeLatest(SeriesTypes.GET_ON_THE_AIR_SERIES_START, getSeries);
}
export function* onGetTopRatedSeries() {
  yield takeLatest(SeriesTypes.GET_TOP_RATED_SERIES_START, getSeries);
}
export function* onGetTrendingSeries() {
  yield takeLatest(SeriesTypes.GET_TRENDING_SERIES_START, getSeries);
}
export function* onGetPopularSeries() {
  yield takeLatest(SeriesTypes.GET_POPULAR_SERIES_START, getSeries);
}

// COMBINE ALL SAGAS HERE
export function* seriesSaga() {
  yield all([
    call(onGetSeriesAiringToday),
    call(onGetOnTheAirSeries),
    call(onGetTopRatedSeries),
    call(onGetTrendingSeries),
    call(onGetPopularSeries)
  ]);
}
