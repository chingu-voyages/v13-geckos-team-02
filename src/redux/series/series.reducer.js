import SeriesTypes from "./series.types";

const INITIAL_STATE = {
  gettingOnAirSeries: false,
  error: null,
  onAirSeries: null
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

    // IN CASE OF A FAILURE FOR EITHER REDUCERS
    case SeriesTypes.GET_ON_AIR_SERIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingOnAirSeries: false
      };

    default:
      return state;
  }
};

export default seriesReducer;
