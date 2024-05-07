import { useSelector } from "react-redux";

function TodoList() {
  const { todoCollection } = useSelector((store) => store.todos);

  return (
    <>
      <h2>My Todo List</h2>
      <ul>
        {todoCollection.map((todo) => (
          <li key={todo.id}>{todo.label.toUpperCase()}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
