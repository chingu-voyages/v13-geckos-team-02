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
// MOVIE CAST AND CREW
export const selectMovieCast = createSelector(
  selectMovies,
  movie => movie.movieCredits.cast
);
export const selectMovieCrew = createSelector(
  selectMovies,
  movie => movie.movieCredits.crew
);
