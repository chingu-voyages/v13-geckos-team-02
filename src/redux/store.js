import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import createSaga from "redux-saga";

import rootReducer from "./root-reducer";
import rootSagas from "./root.saga";

import { logger } from "redux-logger";

const sagaMiddle = createSaga();
const middlewares = [sagaMiddle];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

sagaMiddle.run(rootSagas);

export default { store, persistor };
