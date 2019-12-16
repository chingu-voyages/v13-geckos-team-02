import { all, put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
// IMPORTING TYLES
import PeronTypes from "./person.types";
// IMPORTING ACTIONS
import {
  getPersonDetailsSuccess,
  getPersonDetailsFailure
} from "./person.action";
// IMPORTING API KEY
const API_KEY = process.env.REACT_APP_API_VALUE_KEY;
const movieURL = "https://api.themoviedb.org/3/person";

//  MAKE API CALL TO GET ALL NOW PLAYING MOVIES
export function* getPersonDetails({ id }) {
  try {
    const response = yield axios.get(`${movieURL}/${id}?api_key=${API_KEY}`);
    if (response.status === 200) {
      yield put(getPersonDetailsSuccess(response.data));
    } else {
      yield put(getPersonDetailsFailure(response));
    }
  } catch (error) {
    yield put(getPersonDetailsFailure(error));
  }
}

export function* onGetPersonDetails() {
  yield takeLatest(PeronTypes.FETCH_PERSON_DETAILS_START, getPersonDetails);
}

export function* personSagas() {
  yield all([call(onGetPersonDetails)]);
}
