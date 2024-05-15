import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth-context";

function ProtectedRoutePage(props) {
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  useEffect(() => {
    if (!context.isLoggedIn) {
      navigate("/login");
    }
  }, [navigate, context.isLoggedIn]);

  return props.children;
}

export default ProtectedRoutePage;
