import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./../reducers/todo";

const store = configureStore({
  reducer: {
    todoReducer: todoSlice,
  },
});

export default store;
