import { useReducer } from "react";

function reducerFn(state, action) {
  if (action.type === "INCREMENT") {
    // return state.counter++;     // NEVER EVER CHANGE EXISTING STATE
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  } else if (action.type === "SUBTRACT_COUNTER") {
    return {
      ...state,
      counter: state.counter - action.payload,
    };
  } else if (action.type === "STORE_RESULT") {
    return {
      ...state,
      result: [state.counter, ...state.result],
    };
  }
  return state;
}

function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducerFn, { counter: 0, result: [] });

  return (
    <div className="container">
      <h1>Use Reducer Demo Hook</h1>
      <p className="display-4">Counter : {state.counter}</p>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increase
      </button>
      <button
        className="btn btn-success"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrease
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch({ type: "ADD_COUNTER", payload: 10 })}
      >
        Add - 10
      </button>

      <button
        className="btn btn-warning"
        onClick={() => dispatch({ type: "SUBTRACT_COUNTER", payload: 5 })}
      >
        Subtract - 5
      </button>

      <br />

      <button
        className="btn btn-danger"
        onClick={() => dispatch({ type: "STORE_RESULT" })}
      >
        Store Result
      </button>

      <ul>
        {state.result.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseReducerDemo;
