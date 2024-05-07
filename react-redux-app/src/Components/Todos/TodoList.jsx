import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todoCollection } = useSelector((store) => store.todos);

  return (
    <>
      <ul className="list-group">
        {todoCollection.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
