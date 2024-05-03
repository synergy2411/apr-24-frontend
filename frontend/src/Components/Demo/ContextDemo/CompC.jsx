import AuthContext from "../../../context/auth-context";

function CompC() {
  return (
    <>
      <AuthContext.Consumer>
        {(context) => {
          return (
            <>
              <h3>Component C</h3>
              {context.isLoggedIn && <p>User is Logged in.</p>}
              {!context.isLoggedIn && <p>User is NOT Logged in</p>}
            </>
          );
        }}
      </AuthContext.Consumer>
    </>
  );
}

export default CompC;
