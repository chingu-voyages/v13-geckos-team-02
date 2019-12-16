import MoviesTypes from "./movies.types";

const INITIAL_STATE = {
  // NOW PLAYING MOVIES
  gettingNowPlaying: false,
  nowPlayingMovies: null,
  // TRENDING MOVIES
  gettingTrendingMovies: false,
  trendingMovies: null,
  // POPULAR MOVIES
  gettingPoularMoives: false,
  popularMovies: null,
  // TOP RATED MOVIES
  gettingTopRatedMovies: false,
  topRatedMovies: null,
  // UPCOMING MOVIES
  gettingUpcomingMoives: false,
  upcomingMovies: null,
  // MOVIE DETAILS
  gettingMovieDetails: false,
  movieDetails: null,
  // MOVIE CREDITS
  gettingMovieCredits: false,
  movieCredits: null,
  // SIMILAR MOVIES
  gettingSimilarMovies: false,
  similarMovies: null,
  // ERROR
  error: null
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // GET NOW PLAYING
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
    // GET TRENDING MOVIES
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
    // GET POPULAR MOVIES
    case MoviesTypes.GET_POPULAR_MOVIES_START:
      return {
        ...state,
        gettingPoularMoives: true
      };
    case MoviesTypes.GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        popularMovies: action.payload,
        gettingPoularMoives: false,
        error: null
      };
    // GET TOP RATED MOVIES
    case MoviesTypes.GET_TOP_RATED_MOVIES_START:
      return {
        ...state,
        gettingTopRatedMovies: true
      };
    case MoviesTypes.GET_TOP_RATED_MOVIES_SUCCESS:
      return {
        ...state,
        topRatedMovies: action.payload,
        gettingTopRatedMovies: false,
        error: null
      };
    // GET UPCOMING MOVIES
    case MoviesTypes.GET_UPCOMING_MOVIES_START:
      return {
        ...state,
        gettingUpcomingMoives: true
      };
    case MoviesTypes.GET_UPCOMING_MOVIES_SUCCESS:
      return {
        ...state,
        upcomingMovies: action.payload,
        gettingUpcomingMoives: false,
        error: null
      };
    // GET MOVIES DETAILS
    case MoviesTypes.GET_MOVIE_DETAILS_START:
      return {
        ...state,
        gettingMovieDetails: true,
        gettingMovieCredits: true,
        gettingSimilarMovies: true
      };
    // GET MOVIE DETAILS SUCCESS
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
    // GET SIMILAR MOVIES
    case MoviesTypes.GET_SIMILAR_MOVIES_SUCCESS:
      return {
        ...state,
        similarMovies: action.payload,
        gettingSimilarMovies: false,
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
    case MoviesTypes.GET_POPULAR_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingPoularMoives: false
      };
    case MoviesTypes.GET_TOP_RATED_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingTopRatedMovies: false
      };
    case MoviesTypes.GET_UPCOMING_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingUpcomingMoives: false
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
    case MoviesTypes.GET_SIMILAR_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingSimilarMovies: false
      };

    default:
      return state;
  }
};

export default moviesReducer;
