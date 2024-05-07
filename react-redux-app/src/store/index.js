import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./slices/todo-slice";
import { authReducer } from "./slices/auth-slice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    auth: authReducer,
  },
});

export default store;
