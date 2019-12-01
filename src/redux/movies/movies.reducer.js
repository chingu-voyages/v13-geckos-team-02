import MoviesTypes from "./movies.types";

const INITIAL_STATE = {
  // NOW PLAYING MOVIES
  gettingNowPlaying: false,
  nowPlayingMovies: null,
  // TRENDING MOVIES
  gettingTrendingMovies: false,
  trendingMovies: null,
  // MOVIE DETAILS
  gettingMovieDetails: false,
  movieDetails: null,
  // MOVIE CREDITS
  gettingMovieCredits: false,
  movieCredits: null,
  // ERROR
  error: null
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
        gettingTrendingMovies: false,
        error: null
      };
    // GET MOVIES DETAILS
    case MoviesTypes.GET_MOVIE_DETAILS_START:
      return {
        ...state,
        gettingMovieDetails: true,
        gettingMovieCredits: true
      };
    case MoviesTypes.GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: action.payload,
        gettingMovieDetails: false,
        error: null
      };
    // GET MOVIE CAST AND CREWS
    case MoviesTypes.GET_MOVIE_CREDITS_SUCCESS:
      return {
        ...state,
        movieCredits: action.payload,
        gettingMovieCredits: false,
        error: null
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
    case MoviesTypes.GET_MOVIE_DETAILS_FAILRUE:
      return {
        ...state,
        error: action.payload,
        gettingMovieDetails: false
      };
    case MoviesTypes.GET_MOVIE_CREDITS_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingMovieCredits: false
      };

    default:
      return state;
  }
};

export default moviesReducer;
