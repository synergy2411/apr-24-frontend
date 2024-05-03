import { useReducer } from "react";

function reducerFn(state, action) {
  return state;
}

function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducerFn, { counter: 0 });

  return (
    <div className="container">
      <h1>Use Reducer Demo Hook</h1>
      <p className="display-4">Counter : {state.counter}</p>
    </div>
  );
}

export default UseReducerDemo;
