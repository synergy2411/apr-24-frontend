import { useContext, useState } from "react";
import AuthContext from "../context/auth-context";
import { useNavigate } from "react-router-dom";
import Button from "../Components/UI/Button";

function LoginPage() {
  const context = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const clickHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      context.setIsLoggedIn(true);
      setIsLoading(false);
      navigate("/protected-route-1");
    }, 1500);
  };
  return (
    <>
      <h1>{isLoading ? "Logging in...." : "Login Page"}</h1>
      <Button disabled={isLoading} onClick={clickHandler}>
        {isLoading ? "Submitting" : "Login"}
      </Button>
    </>
  );
}

export default LoginPage;
