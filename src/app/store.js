import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../todosSlice'

export const store = configureStore({
  reducer: {
    todo: todoSlice
  },
})