import { Link } from "react-router-dom";

function AddCourseButton() {
  return (
    <div className="row mb-4">
      <div className="col-4 offset-4">
        <div className="d-grid">
          <Link to="/courses/new" className="btn btn-primary">
            Add Course
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AddCourseButton;
