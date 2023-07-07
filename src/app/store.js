import { configureStore } from "@reduxjs/toolkit";
import { apiTodo } from "../api";

export const store = configureStore({
  reducer: {
    // todo: todoSlice,
    [apiTodo.reducerPath]: apiTodo.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiTodo.middleware),
});
