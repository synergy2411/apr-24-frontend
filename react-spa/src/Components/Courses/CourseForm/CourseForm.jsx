import { Link } from "react-router-dom";

function CourseForm() {
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
                <button className="btn btn-success">Add</button>
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
