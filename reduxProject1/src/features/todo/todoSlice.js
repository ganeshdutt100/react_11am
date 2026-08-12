import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: ["Learn Redux Toolkit", "Build a Redux App"],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items.splice(state.items.indexOf(action.payload), 1);
    },
    editTodo: (state, action) => {
      const { index, newText } = action.payload;
      state.items[index] = newText;
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
