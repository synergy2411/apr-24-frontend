import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoCollection: [
    { id: "t001", label: "grocery", status: "completed" },
    { id: "t002", label: "shopping", status: "pending" },
    { id: "t003", label: "planting", status: "completed" },
    { id: "t004", label: "insurance", status: "pending" },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // Chnage the State Mutably - immer.js library in RTK
      state.todoCollection.push(action.payload);
    },
  },
});

export const todoReducer = todoSlice.reducer;

export const { addTodo } = todoSlice.actions;
