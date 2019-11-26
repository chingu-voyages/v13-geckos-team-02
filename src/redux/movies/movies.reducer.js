import MoviesTypes from "./movies.types";

const INITIAL_STATE = {
  gettingNowPlaying: false,
  error: null,
  nowPlayingMovies: null
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

    // IN CASE OF A FAILURE FOR EITHER REDUCERS
    case MoviesTypes.GET_NOW_PLAYING_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingNowPlaying: false
      };

    default:
      return state;
  }
};

export default moviesReducer;
