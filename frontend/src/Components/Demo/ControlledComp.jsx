import { useState } from "react";

function ControlledComp() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailBlurred, setEmailBlurred] = useState(false);

  const [selectedGender, setSelectedGender] = useState("male");
  const [checkedTnc, setCheckedTnc] = useState(false);

  const emailChangeHandler = (event) => {
    setEmailBlurred(false);
    setEnteredEmail(event.target.value);
  };

  const emailIsInvalid = emailBlurred && !enteredEmail.includes("@");

  const loginHandler = () => {
    console.log("Email : ", enteredEmail);
    console.log("Gender : ", selectedGender);
    console.log("Is TnC Checked : ", checkedTnc);
  };

  return (
    <div className="container">
      <form>
        {/* Controlled Component - Input Field */}
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder=""
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={() => setEmailBlurred(true)}
          />
          <label htmlFor="email">Email</label>
          {emailIsInvalid && (
            <p className="alert alert-danger">Email is not in proper format</p>
          )}
        </div>

        {/* Controlled Component - Radio Button */}
        <div className="mb-4">
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
        </div>

        {/* Controlled Component - Checkbox */}
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="tnc"
            id="tnc"
            onChange={(event) => setCheckedTnc(event.target.checked)}
          />
          <label className="form-check-label" htmlFor="tnc">
            {" "}
            Accept Terms and Condictions{" "}
          </label>
        </div>

        {/* Unconntrolled Component */}

        {/* button */}
        <button
          className="btn btn-primary"
          type="button"
          onClick={loginHandler}
          disabled={!checkedTnc}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default ControlledComp;
