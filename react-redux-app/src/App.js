import { useSelector } from "react-redux";
import Auth from "./Components/Auth/Auth";
import TodoCockpit from "./Components/Todos/TodoCockpit";
function App() {
  const { token, loading, error } = useSelector((store) => store.auth);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h2>{error}</h2>;

  return (
    <>
      {!token && <Auth />}
      {token && <TodoCockpit />}
    </>
  );
}

export default App;
