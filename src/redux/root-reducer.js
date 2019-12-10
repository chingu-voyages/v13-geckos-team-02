import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// IMPORT REDUCERS
import genreReducer from "./genre/genre.reducer";
import moviesReducer from "./movies/movies.reducer";
import seriesReducer from "./series/series.reducer";
import appConfigReducer from "./appConfig/appConfig.reducer";
import personReducer from "./person/people.reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["configs", "genres", "movies", "series"]
};

const rootReducer = combineReducers({
  genres: genreReducer,
  movies: moviesReducer,
  series: seriesReducer,
  configs: appConfigReducer,
  person: personReducer
});

export default persistReducer(persistConfig, rootReducer);
