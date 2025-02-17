import React from "react";
import todoReducer from "../features/todo/todoSlice.js";
import { configureStore } from "@reduxjs/toolkit";
export const store= configureStore({
    reducer : todoReducer
})