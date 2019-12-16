import SeriesTypes from "./series.types";

const INITIAL_STATE = {
  // AIRING TODAY
  gettingAiringTodaySeries: false,
  airingTodaySeries: null,
  // ON THE AIR
  gettingOnTheAirSeries: false,
  onTheAirSeries: null,
  // TOP RATED
  gettingTopRatedSeries: false,
  topRatedSeries: null,
  // TRENDING
  gettingTrendingSeries: false,
  trendingSeries: null,
  // POPULAR
  gettingPopularSeries: false,
  popularSeries: null,
  // DETAILS
  gettingSeriesDetails: false,
  seriesDetails: null,
  // CREDITS
  gettingSeriesCredits: false,
  seriesCredits: null,
  // SIMILAR
  gettingSimilarSeries: false,
  similarSeries: null,
  // ERROR
  error: null
};

const seriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // AIRING TODAY
    case SeriesTypes.GET_SERIES_AIRING_TODAY_START:
      return {
        ...state,
        gettingAiringTodaySeries: true
      };
    case SeriesTypes.GET_SERIES_AIRING_TODAY_SUCCESS:
      return {
        ...state,
        airingTodaySeries: action.payload,
        gettingAiringTodaySeries: false,
        error: null
      };
    case SeriesTypes.GET_SERIES_AIRING_TODAY_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingAiringTodaySeries: false
      };

    // ON THE AIR
    case SeriesTypes.GET_ON_THE_AIR_SERIES_START:
      return {
        ...state,
        gettingOnAirSeries: true
      };
    case SeriesTypes.GET_ON_THE_AIR_SERIES_SUCCESS:
      return {
        ...state,
        onTheAirSeries: action.payload,
        gettingOnTheAirSeries: false,
        error: null
      };
    case SeriesTypes.GET_ON_THE_AIR_SERIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingOnTheAirSeries: false
      };

    // TOP RATED
    case SeriesTypes.GET_TOP_RATED_SERIES_START:
      return {
        ...state,
        gettingTopRatedSeries: true
      };
    case SeriesTypes.GET_TOP_RATED_SERIES_SUCCESS:
      return {
        ...state,
        topRatedSeries: action.payload,
        gettingTopRatedSeries: false,
        error: null
      };

    // TRENDING
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
    case SeriesTypes.GET_TRENDING_SERIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingTrendingSeries: false
      };

    // POPULAR
    case SeriesTypes.GET_POPULAR_SERIES_START:
      return {
        ...state,
        gettingPopularSeries: true
      };
    case SeriesTypes.GET_POPULAR_SERIES_SUCCESS:
      return {
        ...state,
        popularSeries: action.payload,
        gettingPopularSeries: false,
        error: null
      };
    case SeriesTypes.GET_POPULAR_SERIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingPopularSeries: false
      };
    // DETAILS
    case SeriesTypes.GET_SERIES_DETAILS_START:
      return {
        ...state,
        gettingSeriesDetails: true
      };
    case SeriesTypes.GET_SERIES_DETAILS_SUCCESS:
      return {
        ...state,
        seriesDetails: action.payload,
        gettingSeriesDetails: false,
        error: null
      };
    case SeriesTypes.GET_SERIES_DETAILS_FAILRUE:
      return {
        ...state,
        error: action.payload,
        gettingSeriesDetails: false
      };
    // CREDITS
    case SeriesTypes.GET_SERIES_CREDITS_START:
      return {
        ...state,
        gettingSeriesCredits: true
      };
    case SeriesTypes.GET_SERIES_CREDITS_SUCCESS:
      return {
        ...state,
        seriesCredits: action.payload,
        gettingSeriesCredits: false,
        error: null
      };
    case SeriesTypes.GET_SERIES_CREDITS_FAILRUE:
      return {
        ...state,
        error: action.payload,
        gettingSeriesCredits: false
      };
    // SIMILAR
    case SeriesTypes.GET_SIMILAR_SERIES_START:
      return {
        ...state,
        gettingSimilarSeries: true
      };
    case SeriesTypes.GET_SIMILAR_SERIES_SUCCESS:
      return {
        ...state,
        similarSeries: action.payload,
        gettingSimilarSeries: false,
        error: null
      };
    case SeriesTypes.GET_SIMILAR_SERIES_FAILRUE:
      return {
        ...state,
        error: action.payload,
        gettingSimilarSeries: false
      };

    default:
      return state;
  }
};

export default seriesReducer;
