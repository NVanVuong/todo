import { configureStore } from "@reduxjs/toolkit";
import { apiTodo } from "../service/api";

export const store = configureStore({
  reducer: {
    [apiTodo.reducerPath]: apiTodo.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiTodo.middleware),
});
