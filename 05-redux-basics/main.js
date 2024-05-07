import { configureStore, createSlice } from "@reduxjs/toolkit";
import { todoReducer, fetchTodos } from "./todos.js";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.counter = state.counter + 1;
    },
    decrement: (state, action) => {
      state.counter = state.counter - 1;
    },
  },
});

const counterReducer = counterSlice.reducer;
const { increment, decrement } = counterSlice.actions;

const store = configureStore({
  reducer: {
    ctr: counterReducer,
    todo: todoReducer,
  },
});

// console.log("STATE : ", store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());

// console.log("[INCREMENT] STATE: ", store.getState());

store.dispatch(decrement());

// console.log("[DECREMENT] STATE: ", store.getState());

store.dispatch(fetchTodos());
// console.log("[TODOS] STATE: ", store.getState());
