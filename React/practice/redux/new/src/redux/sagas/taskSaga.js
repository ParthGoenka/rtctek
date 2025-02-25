import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchTasksRequest, fetchTasksSuccess, fetchTasksFailure } from '../slices/taskSlice';
import axios from 'axios';

function* fetchTasksSaga() {
  try {
    const response = yield call(axios.get,'https://jsonplaceholder.typicode.com/todos');
    yield put(fetchTasksSuccess(response.data));
  } catch (error) {
    yield put(fetchTasksFailure(error.message));
  }
}

function* watchFetchTasks() {
  yield takeEvery(fetchTasksRequest.type, fetchTasksSaga);
}

export default watchFetchTasks;
