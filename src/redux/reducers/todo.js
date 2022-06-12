import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "TODO Handler",
  initialState: {
    todoList: [],
    editCurrentTodo: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList = [...state.todoList, action.payload];
    },
    removeTodo: (state, action) => {
      const { todoList } = state;
      const id = action.payload;
      const newTodo = todoList.filter((item) => item.id !== id);
      state.todoList = newTodo;
    },
    editTodo: (state, action) => {
      const { todoList } = state;
      const id = action.payload;
      const newTodo = todoList.filter((item) => item.id === id);
      state.editCurrentTodo = newTodo;
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
