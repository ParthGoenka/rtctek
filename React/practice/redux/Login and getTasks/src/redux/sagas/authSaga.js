import { put, takeEvery } from 'redux-saga/effects';
import { loginRequest, loginSuccess, loginFailure } from '../slices/authSlice';

function* loginSaga() {
  try {
    yield put(loginSuccess());
  } catch (error) {
    yield put(loginFailure());
  }
}

function* watchLogin() {
  yield takeEvery(loginRequest.type, loginSaga);
}

export default watchLogin;
