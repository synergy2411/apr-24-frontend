import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import AuthContext from "../context/auth-context";

function MainNavigation() {
  const context = useContext(AuthContext);

  return (
    <>
      <header>
        <nav className={classes["navigation_bar"]}>
          <ul className={classes["list_container"]}>
            <li className={classes["list_item"]}>
              <Link to="/" className={classes["a_link"]}>
                Home
              </Link>
            </li>
            {!context.isLoggedIn && (
              <li className={classes["list_item"]}>
                <Link to="/login" className={classes["a_link"]}>
                  Login
                </Link>
              </li>
            )}
            {context.isLoggedIn && (
              <li className={classes["list_item"]}>
                <Link to="/protected-route-1" className={classes["a_link"]}>
                  Protected Route 1
                </Link>
              </li>
            )}
            {context.isLoggedIn && (
              <li className={classes["list_item"]}>
                <Link to="/protected-route-2" className={classes["a_link"]}>
                  Protected Route 2
                </Link>
              </li>
            )}
            {context.isLoggedIn && (
              <li className={classes["list_item"]}>
                <Link to="/logout" className={classes["a_link"]}>
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainNavigation;
