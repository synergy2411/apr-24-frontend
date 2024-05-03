import CompB from "./CompB";
import AuthContext from "../../../context/auth-context";
import { useState } from "react";

function CompA() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <h1>Component A</h1>
      <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn }}
      >
        <CompB />
      </AuthContext.Provider>
    </>
  );
}

export default CompA;
