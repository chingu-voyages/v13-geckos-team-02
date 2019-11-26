import GenreTypes from "./genre.types";

// GETTING MOVIES GENREs ACTIONS
export const getMoviesGenresStart = () => ({
  types: GenreTypes.GET_MOVIES_GENRES_START
});

export const getMoviesGenresSuccess = genres => ({
  types: GenreTypes.GET_MOVIES_GENRES_SUCCESS,
  payload: genres
});

export const getMoviesGenresFailure = error => ({
  types: GenreTypes.GET_MOVIES_GENRES_FAILURE,
  payload: error
});

// GETTING SERIES GENRES ACTIONS
export const getSeriesGenresStart = () => ({
  types: GenreTypes.GET_SERIES_GENRES_START
});

export const getSeriesGenresSuccess = genres => ({
  types: GenreTypes.GET_SERIES_GENRES_SUCCESS,
  payload: genres
});

export const getSeriesGenresFailure = error => ({
  types: GenreTypes.GET_SERIES_GENRES_FAILURE,
  payload: error
});
