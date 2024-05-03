import CompB from "./CompB";
import AuthContext from "../../../context/auth-context";

function CompA() {
  return (
    <>
      <h1>Component A</h1>
      <AuthContext.Provider value={{ isLoggedIn: true }}>
        <CompB />
      </AuthContext.Provider>
    </>
  );
}

export default CompA;
