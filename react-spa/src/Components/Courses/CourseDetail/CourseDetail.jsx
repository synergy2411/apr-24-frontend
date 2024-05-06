import { Link, useSubmit } from "react-router-dom";
import classes from "./CourseDetail.module.css";

/* eslint-disable react/prop-types */
function CourseDetail({ course }) {
  const submit = useSubmit();

  const deleteClickHandler = () => {
    if (!confirm(`Are you sure to delete this item - ${course.title}?`)) {
      return;
    }
    submit({}, { action: `/courses/${course.id}`, method: "DELETE" });
  };

  return (
    <div className={classes["backdrop"]}>
      <div className={classes["my-modal"]}>
        <div className="card">
          <img src={course.logo} className="card=img-top" alt={course.title} />
          <div className="card-body text-center">
            <div className="card-title">
              <h3>{course.title.toUpperCase()}</h3>
            </div>
            <div className="card-text mb-3">
              Duration : {course.duration}Hrs
            </div>
            <Link to="/courses" className="btn btn-secondary mb-4">
              Close
            </Link>
            <div className="row">
              <div className="col-6">
                <div className="d-grid">
                  <button className="btn btn-success">Edit</button>
                </div>
              </div>
              <div className="col-6">
                <div className="d-grid">
                  <button
                    className="btn btn-outline-danger"
                    onClick={deleteClickHandler}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
