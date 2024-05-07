import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/slices/todo-slice";

function AddTodo() {
  const labelInputRef = useRef();

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    let newTodo = {
      id: "t0" + Math.round(Math.random() * 100),
      label: labelInputRef.current.value,
      status: "pending",
    };
    dispatch(addTodo(newTodo));
    labelInputRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="row">
        <div className="col-8">
          <input type="text" className="form-control" ref={labelInputRef} />
        </div>
        <div className="col-4">
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddTodo;
