import { useRef, useState } from "react";

function UncontrolledComp() {
  const labelInputRef = useRef();
  const [todos, setTodos] = useState([]);

  const addClickHandler = () => {
    setTodos((prevTodos) => [labelInputRef.current.value, ...prevTodos]);
    // labelInputRef.current.value = "";
  };

  return (
    <div className="container">
      <h1>Uncontrolled Component</h1>

      {/* Uncontrolled Component */}

      <div className="row">
        <div className="col-10">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="label"
              id="label"
              placeholder=""
              ref={labelInputRef}
            />
            <label htmlFor="label">Add Todo</label>
          </div>
        </div>
        <div className="col-2">
          <div className="d-grid">
            <button className="btn btn-primary" onClick={addClickHandler}>
              Add
            </button>
          </div>
        </div>
      </div>
      <hr />
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default UncontrolledComp;
