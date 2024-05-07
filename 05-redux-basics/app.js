import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};
// Reducer

function rootReducer(prevState = initialState, action) {
  if (action.type === "INCREMENT") {
    return {
      counter: prevState.counter + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      counter: prevState.counter - 1,
    };
  }
  return prevState;
}

// Store

const store = configureStore({
  reducer: rootReducer,
});

console.log("State : ", store.getState());

// Subscription
// Actions

store.dispatch({ type: "INCREMENT" });

console.log("State [INCREMENT] : ", store.getState());

store.dispatch({ type: "DECREMENT" });

console.log("State [DECREMENT] : ", store.getState());

// node app.js
