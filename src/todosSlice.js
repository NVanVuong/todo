import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

const apiUrl = "https://todo-twbz.onrender.com/api/todos";

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  
  reducers: {
    todosAdd: async (state, action) => {
      const { title, status } = action.payload;
      try {
        const response = await axios.post(apiUrl, { title, status });
        state.push(response.data);
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    },
    todosUpdate: async (state, action) => {
      const { id, title, status } = action.payload;
      try {
        const response = await axios.patch(`${apiUrl}/${id}`, {
          title,
          status,
        });
        const updatedTodo = response.data;
        const index = state.findIndex((todo) => todo.id === updatedTodo.id);
        if (index !== -1) {
          state[index] = updatedTodo;
        }
      } catch (error) {
        console.error("Error updating todo:", error);
      }
    },
    todosDelete: async (state, action) => {
      const id = action.payload;
      try {
        await axios.delete(`${apiUrl}/${id}`);
        const index = state.findIndex((todo) => todo.id === id);
        if (index !== -1) {
          state.splice(index, 1);
        }
      } catch (error) {
        console.error("Error deleting todo:", error);
      }
    },
  },
});

export const { todosAdd, todosUpdate, todosDelete } = todosSlice.actions;

export const fetchTodos = () => async () => {
  try {
    const response = await axios.get(apiUrl);
    console.log(response);
    const todosData = response.data;
    console.log(todosData);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

export default todosSlice.reducer;
