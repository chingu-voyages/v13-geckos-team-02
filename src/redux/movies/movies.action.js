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
