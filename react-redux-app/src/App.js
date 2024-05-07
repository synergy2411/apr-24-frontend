import { useSelector } from "react-redux";
import Auth from "./Components/Auth/Auth";
import Courses from "./Components/Courses/Courses";
function App() {
  const { token } = useSelector((store) => store.auth);

  return (
    <>
      {!token && <Auth />}
      {/* {token && <TodoCockpit />}̦ */}
      {token && <Courses />}
    </>
  );
}

export default App;
