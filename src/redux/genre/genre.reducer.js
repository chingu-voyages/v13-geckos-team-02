import GenreTypes from "./genre.types";

const INITIAL_STATE = {
  moviesGenres: null,
  gettingMoviesGenres: false,
  seriesGenres: [],
  gettingSeriesGenres: false,
  error: null
};

const genreReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // GET LIST OF MOVIES GENRE
    case GenreTypes.GET_MOVIES_GENRES_START:
      return {
        ...state,
        gettingMoviesGenres: true
      };
    case GenreTypes.GET_MOVIES_GENRES_SUCCESS:
      return {
        ...state,
        moviesGenres: action.payload,
        gettingMoviesGenres: false
      };
    //  GET LIST OF SERIES GENRE
    case GenreTypes.GET_SERIES_GENRES_START:
      return {
        ...state,
        gettingSeriesGenres: true
      };

    case GenreTypes.GET_SERIES_GENRES_SUCCESS:
      return {
        ...state,
        seriesGenres: action.payload,
        gettingSeriesGenres: false
      };

    //  IN A SITUATION OF FAILURE FOR EITHER ACTION
    case GenreTypes.GET_MOVIES_GENRES_FAILURE:
    case GenreTypes.GET_SERIES_GENRES_FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingMoviesGenres: false
      };
    default:
      return state;
  }
};

export default genreReducer;
