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
// POPULAR MOVIES
export const selectGettingPopularMovies = createSelector(
  selectMovies,
  movies => movies.gettingPopularMovies
);
export const selectPopularMovies = createSelector(
  selectMovies,
  movies => movies.popularMovies
);
// TOP RATED MOVIES
export const selectGettingTopRatedMovies = createSelector(
  selectMovies,
  movies => movies.gettingTopRatedMovies
);
export const selectTopRatedMovies = createSelector(
  selectMovies,
  movies => movies.topRatedMovies
);
// UPCOMING MOVIES
export const selectGettingUpcomingMovies = createSelector(
  selectMovies,
  movies => movies.gettingUpcomingMovies
);
export const selectUpcomingMovies = createSelector(
  selectMovies,
  movies => movies.upcomingMovies
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
// SIMILAR MOVIES
export const selectGettingSimilarMovies = createSelector(
  selectMovies,
  movie => movie.gettingSimilarMovies
);
export const selectSimilarMovies = createSelector(
  selectMovies,
  movie => movie.similarMovies
);
