import { useContext } from "react";
import AuthContext from "../../../context/auth-context";

function CompC() {
  const context = useContext(AuthContext);

  return (
    <>
      <h3>Component C</h3>
      <button
        className="btn btn-primary"
        onClick={() => context.setIsLoggedIn(!context.isLoggedIn)}
      >
        Login / Logout
      </button>
      {context.isLoggedIn && <p>User is Logged in.</p>}
      {!context.isLoggedIn && <p>User is NOT Logged in</p>}
    </>
  );
}

export default CompC;

/* <AuthContext.Consumer>
{(context) => {
  return (
    <>
      <h3>Component C</h3>
      {context.isLoggedIn && <p>User is Logged in.</p>}
      {!context.isLoggedIn && <p>User is NOT Logged in</p>}
    </>
  );
}}
</AuthContext.Consumer> */
