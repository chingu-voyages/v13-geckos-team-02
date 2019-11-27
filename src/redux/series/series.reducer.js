import SeriesTypes from "./series.types";

const INITIAL_STATE = {
  gettingOnAirSeries: false,
  gettingTrendingSeries: false,
  error: null,
  onAirSeries: null,
  trendingSeries: null
};

const seriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // GET NOW PLAYING REDUCERS
    case SeriesTypes.GET_ON_AIR_SERIES_START:
      return {
        ...state,
        gettingOnAirSeries: true
      };
    case SeriesTypes.GET_ON_AIR_SERIES_SUCCESS:
      return {
        ...state,
        onAirSeries: action.payload,
        gettingOnAirSeries: false,
        error: null
      };
    // GET TRENDING SERIES REDUCERS
    case SeriesTypes.GET_TRENDING_SERIES_START:
      return {
        ...state,
        gettingTrendingSeries: true
      };
    case SeriesTypes.GET_TRENDING_SERIES_SUCCESS:
      return {
        ...state,
        trendingSeries: action.payload,
        gettingTrendingSeries: false
      };

    // IN CASE OF A FAILURE FOR EITHER REDUCERS
    case SeriesTypes.GET_ON_AIR_SERIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingOnAirSeries: false
      };
    case SeriesTypes.GET_TRENDING_SERIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingTrendingSeries: false
      };

    default:
      return state;
  }
};

export default seriesReducer;
