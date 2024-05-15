import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth-context";

function LogoutPage() {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      context.setIsLoggedIn(false);
      navigate("/");
    }, 1500);
  }, [context, navigate]);

  return <h1>Please wait. Logging out....</h1>;
}

export default LogoutPage;
