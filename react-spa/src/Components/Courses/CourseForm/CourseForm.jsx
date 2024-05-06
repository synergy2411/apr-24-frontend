/* eslint-disable react/prop-types */
import { Form, Link } from "react-router-dom";

function CourseForm({ course }) {
  let headingMessage = "Add New Course";

  if (course) {
    headingMessage = "Edit Course";
  }

  return (
    <div className="row">
      <div className="col-8 offset-2">
        <h1 className="text-center">{headingMessage}</h1>
        <Form method="POST" action="/courses/new">
          {/* title */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              placeholder=""
              defaultValue={course ? course.title : ""}
            />
            <label htmlFor="title">Course Title</label>
          </div>

          {/* duration */}
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              name="duration"
              id="duration"
              placeholder=""
              defaultValue={course ? course.duration : ""}
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
              defaultValue={course ? course.logo : ""}
            />
            <label htmlFor="logo">Course Logo</label>
          </div>

          {/* buttons */}

          <div className="row">
            <div className="col-6">
              <div className="d-grid">
                <button type="submit" className="btn btn-success">
                  {course ? "Edit" : "Add"}
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
        </Form>
      </div>
    </div>
  );
}

export default CourseForm;
