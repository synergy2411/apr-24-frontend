import { useState } from "react";
import { Link } from "react-router-dom";

function CourseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [titleIsBlurred, setTitleIsBlurred] = useState(false);

  const titleBlurHandler = () => {
    setTitleIsBlurred(true);
  };

  const titleIsInvalid = titleIsBlurred && enteredTitle.length < 6;

  return (
    <div className="row">
      <div className="col-8 offset-2">
        <h1 className="text-center">Add New Course</h1>
        <form>
          {/* title */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              placeholder=""
              value={enteredTitle}
              onChange={(event) => {
                setEnteredTitle(event.target.value);
                setTitleIsBlurred(false);
              }}
              onBlur={titleBlurHandler}
            />
            <label htmlFor="title">Course Title</label>
            {titleIsInvalid && (
              <p className="alert alert-danger">
                Title shoudl have at least six characters
              </p>
            )}
          </div>

          {/* duration */}
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              name="duration"
              id="duration"
              placeholder=""
            />
            <label htmlFor="duration">Course Duration</label>
          </div>

          {/* logo */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="logo"
              id="logo"
              placeholder=""
            />
            <label htmlFor="logo">Course Logo</label>
          </div>

          {/* buttons */}

          <div className="row">
            <div className="col-6">
              <div className="d-grid">
                <button className="btn btn-success" disabled={titleIsInvalid}>
                  Add
                </button>
              </div>
            </div>
            <div className="col-6">
              <div className="d-grid">
                <Link to="/courses" className="btn btn-outline-dark">
                  Close
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CourseForm;
