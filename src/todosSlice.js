import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  { id: uuidv4(), title: "Jog around the park 3x", status: "Pending" },
  { id: uuidv4(), title: "10 minutes meditation", status: "In progress" },
  { id: uuidv4(), title: "Read for 1 hour", status: "Pending" },
  { id: uuidv4(), title: "Pick up groceries", status: "Done" },
  { id: uuidv4(), title: "Complete Todo App", status: "Done" },
  { id: uuidv4(), title: "Go for a run", status: "Pending" },
  { id: uuidv4(), title: "Finish writing report", status: "In progress" },
  { id: uuidv4(), title: "Prepare dinner", status: "Pending" },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todosAdd: (state, action) => {
      const { id, title, status } = action.payload;
      state.push({ id, title, status });
    },
    todosUpdate: (state, action) => {
      const { id, title, status } = action.payload;
      const existingTodo = state.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.title = title;
        existingTodo.status = status;
      }
    },
    todosDelete: (state, action) => {
      const id = action.payload;
      const index = state.findIndex((t) => t.id === id);
      state.splice(index, 1);
    },
    todosAllDelete: (state, action) => {
      const idsToDelete = action.payload;
      idsToDelete.forEach((id) => {
        const index = state.findIndex((todo) => todo.id === id);
        if (index !== -1) {
          state.splice(index, 1);
        }
      });
    },
  },
});

export const { todosAdd, todosUpdate, todosDelete, todosAllDelete } =
  todosSlice.actions;

export default todosSlice.reducer;
