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
