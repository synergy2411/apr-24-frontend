import { useState } from "react";

function ControlledComp() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [selectedGender, setSelectedGender] = useState("male");

  const emailChangeHandler = (event) => setEnteredEmail(event.target.value);

  const loginHandler = () => {
    console.log("Email : ", enteredEmail);
  };

  return (
    <div className="container">
      <form>
        {/* Controlled Component */}
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder=""
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
          <label htmlFor="email">Email</label>
        </div>

        {/* Controlled Component - Radio Button */}
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="male"
            checked={selectedGender === "male"}
            value="male"
            onChange={() => setSelectedGender("male")}
          />
          <label className="form-check-label" htmlFor="gender">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="female"
            checked={selectedGender === "female"}
            value="female"
            onChange={() => setSelectedGender("female")}
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>

        {/* Unconntrolled Component */}

        {/* button */}
        <button
          className="btn btn-primary"
          type="button"
          onClick={loginHandler}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default ControlledComp;
