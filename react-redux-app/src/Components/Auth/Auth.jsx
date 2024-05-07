import { useRef } from "react";
import { useDispatch } from "react-redux";
import { userRegistration } from "../../store/slices/auth-slice";

function Auth() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const registerClickHandler = (event) => {
    event.preventDefault();
    let newUser = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    dispatch(userRegistration(newUser));
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
                >
                  Register
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
