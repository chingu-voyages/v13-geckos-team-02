import { createSelector } from "reselect";

export const selectGenres = state => state.genres;

// GET MOVIES STATE
export const selectMoviesGenres = createSelector(
  selectGenres,
  movies => movies.moviesGenres
);
export const selectGettingMoviesGenres = createSelector(
  selectGenres,
  movies => movies.gettingMoviesGenres
);
// GET SERIES STATE
export const selectSeriesGenres = createSelector(
  selectGenres,
  series => series.seriesGenres
);
export const selectGettingSeriesGenres = createSelector(
  selectGenres,
  series => series.gettingSeriesGenres
);
