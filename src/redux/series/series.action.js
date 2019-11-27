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
