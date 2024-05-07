import { useDispatch } from "react-redux";
import { deleteTodo } from "../../store/slices/todo-slice";
import classes from "./TodoItem.module.css";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li
      className={`list-group-item mb-3 ${classes["clickable"]}`}
      onClick={() => dispatch(deleteTodo(todo.id))}
    >
      <p>
        {" "}
        {todo.label.toUpperCase()}
        <span className="float-end">{todo.status}</span>
      </p>
    </li>
  );
}

export default TodoItem;
