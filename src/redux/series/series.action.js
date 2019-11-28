import SeriesTypes from "./series.types";

// GET TV ON THE AIR ACTIONS
export const getOnAirSeriesStart = () => ({
  type: SeriesTypes.GET_ON_AIR_SERIES_START
});
export const getOnAirSeriesSuccess = result => ({
  type: SeriesTypes.GET_ON_AIR_SERIES_SUCCESS,
  payload: result
});
export const getOnAirSeriesFailure = error => ({
  type: SeriesTypes.GET_ON_AIR_SERIES_FAILURE,
  payload: error
});
// GET TRENDING SERIES
export const getTrendingSeriesStart = () => ({
  type: SeriesTypes.GET_TRENDING_SERIES_START
});
export const getTrendingSeriesSuccess = result => ({
  type: SeriesTypes.GET_TRENDING_SERIES_SUCCESS,
  payload: result
});
export const getTrendingSeriesFailure = error => ({
  type: SeriesTypes.GET_TRENDING_SERIES_FAILURE,
  payload: error
});
