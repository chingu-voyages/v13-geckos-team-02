import { createSelector } from "reselect";

export const selectMovies = state => state.movies;

// NOW PLAYING MOVIES
export const selectNowPlayingMovies = createSelector(
  selectMovies,
  movies => movies.nowPlayingMovies
);
export const selectGettingNowPlaying = createSelector(
  selectMovies,
  movies => movies.gettingNowPlaying
);
// TRENDING MOVIES
export const selectTrendingMovies = createSelector(
  selectMovies,
  movies => movies.trendingMovies
);
export const selectGettingTrendingMovies = createSelector(
  selectMovies,
  movies => movies.gettingTrendingMovies
);
// MOVIE DETAILS
export const selectGettingMoiveDetails = createSelector(
  selectMovies,
  movie => movie.gettingMovieDetails
);
export const selectMovieDetails = createSelector(
  selectMovies,
  movie => movie.movieDetails
);
