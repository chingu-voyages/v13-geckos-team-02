import { all, call, put, takeLatest, select } from "redux-saga/effects";
import axios from "axios";

import AppConfigTypes from "./appConfig.types";
// IMPORTING SELECTOR
import { selectConfigs } from "./appConfig.selector";
import {
  getImageConfigSuccess,
  getImageConfigFailure,
  setPaginationSuccess
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

// PAGINATION
export function* settingPagination({ payload: { currentPage, totalPage } }) {
  const state = yield select(selectConfigs);
  let range = yield state.paginationRange;
  let start = 1;
  if (currentPage <= 1) {
    currentPage = yield 1;
    start = yield 1;
  } else if (currentPage >= totalPage) {
    start = yield totalPage - 5;
  }
  if (currentPage > 2) {
    start = yield currentPage - 2;
    if (currentPage >= totalPage) {
      start = yield totalPage - 4;
      currentPage = yield totalPage;
    }
  }
  range.splice(0, range.length);
  let count = yield 1;
  while (start <= totalPage) {
    yield range.push(start);
    if (count === 5) {
      break;
    }
    count++;
    start++;
  }
  yield put(setPaginationSuccess(currentPage, range));
}
export function* onSetPagination() {
  yield takeLatest(AppConfigTypes.SET_PAGINATION_START, settingPagination);
}

export function* appConfigSagas() {
  yield all([call(onGetImageConfigs), call(onSetPagination)]);
}
