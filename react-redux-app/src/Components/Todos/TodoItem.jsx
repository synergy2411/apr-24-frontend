function TodoItem({ todo }) {
  return (
    <li className="list-group-item mb-3">
      <p>
        {" "}
        {todo.label.toUpperCase()}
        <span className="float-end">{todo.status}</span>
      </p>
    </li>
  );
}

export default TodoItem;
