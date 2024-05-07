import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function TodoCockpit() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">My Todo List</h1>
      <AddTodo />
      <hr />
      <TodoList />
    </div>
  );
}

export default TodoCockpit;
