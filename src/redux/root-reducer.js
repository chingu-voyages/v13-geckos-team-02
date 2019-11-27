import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// IMPORT REDUCERS
import genreReducer from "./genre/genre.reducer";
import moviesReducer from "./movies/movies.reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: []
};

const rootReducer = combineReducers({
  genres: genreReducer,
  movies: moviesReducer
});

export default persistReducer(persistConfig, rootReducer);
