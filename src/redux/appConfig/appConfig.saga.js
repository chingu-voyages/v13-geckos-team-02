import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import AppConfigTypes from "./appConfig.types";

import {
  getImageConfigSuccess,
  getImageConfigFailure
} from "./appConfig.action";

// api key
const API_KEY = process.env.REACT_APP_API_VALUE_KEY;

// GET IMAGE CONFIGURATIONS
export function* getImageConfigs() {
  try {
    const response = yield axios.get(
      `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`
    );
    if (response.status === 200) {
      yield put(getImageConfigSuccess(response.data.images));
    }
  } catch (error) {
    yield put(getImageConfigFailure(error));
  }
}
// execute function when get image config start is triggered
export function* onGetImageConfigs() {
  yield takeLatest(AppConfigTypes.GET_IMAGE_CONFIG_START, getImageConfigs);
}

export function* appConfigSagas() {
  yield all([call(onGetImageConfigs)]);
}
