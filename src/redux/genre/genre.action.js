import GenreTypes from "./genre.types";

// GETTING MOVIES GENREs ACTIONS
export const getMoviesGenresStart = () => ({
  type: GenreTypes.GET_MOVIES_GENRES_START
});

export const getMoviesGenresSuccess = genres => ({
  type: GenreTypes.GET_MOVIES_GENRES_SUCCESS,
  payload: genres
});

export const getMoviesGenresFailure = error => ({
  type: GenreTypes.GET_MOVIES_GENRES_FAILURE,
  payload: error
});

// GETTING SERIES GENRES ACTIONS
export const getSeriesGenresStart = () => ({
  type: GenreTypes.GET_SERIES_GENRES_START
});

export const getSeriesGenresSuccess = genres => ({
  type: GenreTypes.GET_SERIES_GENRES_SUCCESS,
  payload: genres
});

export const getSeriesGenresFailure = error => ({
  type: GenreTypes.GET_SERIES_GENRES_FAILURE,
  payload: error
});
