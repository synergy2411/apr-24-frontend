import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userRegistration } from "../../store/slices/auth-slice";

function Auth() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);

  const registerClickHandler = (event) => {
    event.preventDefault();
    let newUser = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    dispatch(userRegistration(newUser));
  };

  const loginClickHandler = (event) => {
    event.preventDefault();
    let user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    dispatch(userLogin(user));
  };

  return (
    <div className="row">
      <div className="col-8 offset-2">
        <h3 className="text-center">User Registration Form</h3>
        <form>
          {/* email */}
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder=""
              ref={emailRef}
            />
            <label htmlFor="email">Email</label>
          </div>

          {/* password */}
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder=""
              ref={passwordRef}
            />
            <label htmlFor="password">Password</label>
          </div>

          {/* buttons */}
          <div className="row">
            <div className="col-6">
              <div className="d-grid">
                <button
                  onClick={registerClickHandler}
                  className="btn btn-primary"
                  disabled={loading}
                >
                  Register
                </button>
              </div>
            </div>
            <div className="col-6">
              <div className="d-grid">
                <button onClick={loginClickHandler} className="btn btn-success">
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
