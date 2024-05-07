import { useSelector } from "react-redux";
import Auth from "./Components/Auth/Auth";
import TodoCockpit from "./Components/Todos/TodoCockpit";
function App() {
  const { token } = useSelector((store) => store.auth);

  return (
    <>
      {!token && <Auth />}
      {token && <TodoCockpit />}
    </>
  );
}

export default App;
