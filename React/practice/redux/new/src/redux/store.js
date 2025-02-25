import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from './slices/authSlice';
import taskReducer from './slices/taskSlice';
import watchLogin from './sagas/authSaga';
import watchFetchTasks from './sagas/taskSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchLogin);
sagaMiddleware.run(watchFetchTasks);

export default store;
