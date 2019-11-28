import MoviesTypes from "./movies.types";

const INITIAL_STATE = {
  gettingNowPlaying: false,
  gettingTrendingMovies: false,
  error: null,
  nowPlayingMovies: null,
  trendingMovies: null
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // GET NOW PLAYING REDUCERS
    case MoviesTypes.GET_NOW_PLAYING_START:
      return {
        ...state,
        gettingNowPlaying: true
      };
    case MoviesTypes.GET_NOW_PLAYING_SUCCESS:
      return {
        ...state,
        nowPlayingMovies: action.payload,
        gettingNowPlaying: false,
        error: null
      };
    // GET TRENDING MOVIES REDUCERS
    case MoviesTypes.GET_TRENDING_MOVIES_START:
      return {
        ...state,
        gettingTrendingMovies: true
      };
    case MoviesTypes.GET_TRENDING_MOVIES_SUCCESS:
      return {
        ...state,
        trendingMovies: action.payload,
        gettingTrendingMovies: false
      };
    // IN CASE OF A FAILURE FOR EITHER REDUCERS
    case MoviesTypes.GET_NOW_PLAYING_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingNowPlaying: false,
        gettingTrendingMovies: false
      };
    case MoviesTypes.GET_TRENDING_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingTrendingMovies: false
      };

    default:
      return state;
  }
};

export default moviesReducer;
