import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice"
import createSagaMiddleware from "redux-saga";
import rootSaga from './sagas'; 

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer:{movies: movieReducer},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
    });

   
sagaMiddleware.run(rootSaga);