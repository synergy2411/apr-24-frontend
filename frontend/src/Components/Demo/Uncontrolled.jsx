import { useRef } from "react";

function UncontrolledComp() {
  const labelInputRef = useRef();

  const addClickHandler = () => {
    console.log("Label  :", labelInputRef.current.value);
  };

  return (
    <div className="container">
      <h1>Uncontrolled Component</h1>

      {/* Uncontrolled Component */}

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
      <button className="btn btn-primary" onClick={addClickHandler}>
        Add
      </button>
    </div>
  );
}

export default UncontrolledComp;
