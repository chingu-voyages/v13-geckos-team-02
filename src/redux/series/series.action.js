import SeriesTypes from "./series.types";

// ACTIONS FOR SERIES AIRING TODAY
export const getSeriesAiringTodayStart = page => ({
  type: SeriesTypes.GET_SERIES_AIRING_TODAY_START,
  page
});
export const getSeriesAiringTodaySuccess = payload => ({
  type: SeriesTypes.GET_SERIES_AIRING_TODAY_SUCCESS,
  payload
});
export const getSeriesAiringTodayFailure = error => ({
  type: SeriesTypes.GET_SERIES_AIRING_TODAY_FAILURE,
  payload: error
});

// ACTIONS FOR SERIES ON THE AIR
export const getOnTheAirSeriesStart = page => ({
  type: SeriesTypes.GET_ON_THE_AIR_SERIES_START,
  page
});
export const getOnTheAirSeriesSuccess = result => ({
  type: SeriesTypes.GET_ON_THE_AIR_SERIES_SUCCESS,
  payload: result
});
export const getOnTheAirSeriesFailure = error => ({
  type: SeriesTypes.GET_ON_AIR_SERIES_FAILURE,
  payload: error
});

// ACTIONS FOR TOP RATED SERIES
export const getTopRatedSeriesStart = page => ({
  type: SeriesTypes.GET_TOP_RATED_SERIES_START,
  page
});
export const getTopRatedSeriesSuccess = payload => ({
  type: SeriesTypes.GET_TOP_RATED_SERIES_SUCCESS,
  payload
});
export const getTopRatedSeriesFailure = error => ({
  type: SeriesTypes.GET_TOP_RATED_SERIES_FAILURE,
  payload: error
});

// GET TRENDING SERIES
export const getTrendingSeriesStart = page => ({
  type: SeriesTypes.GET_TRENDING_SERIES_START,
  page
});
export const getTrendingSeriesSuccess = result => ({
  type: SeriesTypes.GET_TRENDING_SERIES_SUCCESS,
  payload: result
});
export const getTrendingSeriesFailure = error => ({
  type: SeriesTypes.GET_POPULAR_SERIES_FAILURE,
  payload: error
});

// ACTIONS FOR POPULAR SERIES
export const getPopularSeriesStart = page => ({
  type: SeriesTypes.GET_POPULAR_SERIES_START,
  page
});
export const getPopularSeriesSuccess = result => ({
  type: SeriesTypes.GET_POPULAR_SERIES_SUCCESS,
  payload: result
});
export const getPopularSeriesFailure = error => ({
  type: SeriesTypes.GET_POPULAR_SERIES_FAILURE,
  payload: error
});

// GET SERIES DETAILS
export const getSeriesDetailsStart = id => ({
  type: SeriesTypes.GET_SERIES_DETAILS_START,
  id
});
export const getSeriesDetailsSuccess = result => ({
  type: SeriesTypes.GET_SERIES_DETAILS_SUCCESS,
  payload: result
});
export const getSeriesDetailsFailure = error => ({
  type: SeriesTypes.GET_SERIES_DETAILS_FAILRUE,
  payload: error
});

// GET SERIES CAST AND CREWS
export const getSeriesCreditsStart = id => ({
  type: SeriesTypes.GET_SERIES_CREDITS_START,
  id
});
export const getSeriesCreditsSuccess = result => ({
  type: SeriesTypes.GET_SERIES_CREDITS_SUCCESS,
  payload: result
});
export const getSeriesCreditsFailure = error => ({
  type: SeriesTypes.GET_SERIES_CREDITS_FAILURE,
  payload: error
});

// GET SIMILAR SERIESS
export const getSimilarSeriesStart = id => ({
  type: SeriesTypes.GET_SIMILAR_SERIES_START,
  id
});
export const getSimilarSeriesSuccess = result => ({
  type: SeriesTypes.GET_SIMILAR_SERIES_SUCCESS,
  payload: result
});
export const getSimilarSeriesFailure = error => ({
  type: SeriesTypes.GET_SIMILAR_SERIES_FAILURE,
  payload: error
});
