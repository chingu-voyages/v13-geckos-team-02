import { createSelector } from "reselect";

export const selectMovies = state => state.movies;

export const selectNowPlayingMovies = createSelector(
  selectMovies,
  movies => movies.nowPlayingMovies
);
export const selectGettingNowPlaying = createSelector(
  selectMovies,
  movies => movies.gettingNowPlaying
);
