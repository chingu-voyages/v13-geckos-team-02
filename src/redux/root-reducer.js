import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// IMPORT REDUCERS
import genreReducer from "./genre/genre.reducer";
import moviesReducer from "./movies/movies.reducer";
import appConfigReducer from "./appConfig/appConfig.reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["configs", "genres", "movies"]
};

const rootReducer = combineReducers({
  genres: genreReducer,
  movies: moviesReducer,
  configs: appConfigReducer
});

export default persistReducer(persistConfig, rootReducer);
