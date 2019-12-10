import MoviesTypes from "./movies.types";

// GET NOW PLAYING ACTIONS
export const getNowPlayingStart = () => ({
  type: MoviesTypes.GET_NOW_PLAYING_START
});
export const getNowPlayingSuccess = result => ({
  type: MoviesTypes.GET_NOW_PLAYING_SUCCESS,
  payload: result
});
export const getNowPlayingFailure = error => ({
  type: MoviesTypes.GET_NOW_PLAYING_FAILURE,
  payload: error
});

// GET TRENDING MOVIES
export const getTrendingMoviesStart = () => ({
  type: MoviesTypes.GET_TRENDING_MOVIES_START
});
export const getTrendingMoviesSuccess = result => ({
  type: MoviesTypes.GET_TRENDING_MOVIES_SUCCESS,
  payload: result
});
export const getTrendingMoviesFailure = error => ({
  type: MoviesTypes.GET_TRENDING_MOVIES_FAILURE,
  payload: error
});
// GET POPULAR MOVIES
export const getPopularMoviesStart = () => ({
  type: MoviesTypes.GET_POPULAR_MOVIES_START
});
export const getPopularMoviesSuccess = payload => ({
  type: MoviesTypes.GET_POPULAR_MOVIES_SUCCESS,
  payload
});
export const getPopularMoviesFailure = error => ({
  type: MoviesTypes.GET_POPULAR_MOVIES_FAILURE,
  payload: error
});
// GET TOP RATED MOVIES
export const getTopRatedMoviesStart = () => ({
  type: MoviesTypes.GET_TOP_RATED_MOVIES_START
});
export const getTopRatedMoviesSuccess = payload => ({
  type: MoviesTypes.GET_TOP_RATED_MOVIES_SUCCESS,
  payload
});
export const getTopRatedMoviesFailure = error => ({
  type: MoviesTypes.GET_TOP_RATED_MOVIES_FAILURE,
  payload: error
});
// GET UPCOMING MOVIES
export const getUpcomingMoviesStart = () => ({
  type: MoviesTypes.GET_UPCOMING_MOVIES_START
});
export const getUpcomingMoviesSuccess = payload => ({
  type: MoviesTypes.GET_UPCOMING_MOVIES_SUCCESS,
  payload
});
export const getUpcomingMoviesFailure = error => ({
  typep: MoviesTypes.GET_UPCOMING_MOVIES_FAILURE,
  payload: error
});
// GET MOVIE DETAILS
export const getMovieDetailsStart = payload => ({
  type: MoviesTypes.GET_MOVIE_DETAILS_START,
  payload
});
export const getMovieDetailsSuccess = result => ({
  type: MoviesTypes.GET_MOVIE_DETAILS_SUCCESS,
  payload: result
});
export const getMovieDetailsFailure = error => ({
  type: MoviesTypes.GET_MOVIE_DETAILS_FAILRUE,
  payload: error
});

// GET MOVIE CAST AND CREWS
export const getMovieCreditsSuccess = result => ({
  type: MoviesTypes.GET_MOVIE_CREDITS_SUCCESS,
  payload: result
});
export const getMovieCreditsFailure = error => ({
  type: MoviesTypes.GET_MOVIE_CREDITS_FAILURE,
  payload: error
});

// GET SIMILAR MOVIES
export const getSimilarMoviesSuccess = result => ({
  type: MoviesTypes.GET_SIMILAR_MOVIES_SUCCESS,
  payload: result
});
export const getSimilarMoviesFailure = error => ({
  type: MoviesTypes.GET_SIMILAR_MOVIES_FAILURE,
  payload: error
});
