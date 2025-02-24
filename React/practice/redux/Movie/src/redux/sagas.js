import { takeEvery, call, put, all } from 'redux-saga/effects';
import { fetchMoviesSuccess, fetchMoviesFailure, fetchMoviesRequest } from './movieSlice'; 
import axios from 'axios';

function* fetchMovies() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users'); 
    yield put(fetchMoviesSuccess(response.data)); 
  } catch (error) {
    yield put(fetchMoviesFailure(error.message)); 
  }
}

function* watchFetchMovies() {
  yield takeEvery(fetchMoviesRequest.type, fetchMovies);
}

export default function* rootSaga() {
  yield all([watchFetchMovies()]);
}
