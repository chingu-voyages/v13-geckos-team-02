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
