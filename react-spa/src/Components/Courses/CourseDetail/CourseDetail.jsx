import classes from "./CourseDetail.module.css";

/* eslint-disable react/prop-types */
function CourseDetail({ course }) {
  return (
    <div className={classes["backdrop"]}>
      <div className={classes["my-modal"]}>
        <div className="card">
          <img src={course.logo} className="card=img-top" alt={course.title} />
          <div className="card-body text-center">
            <div className="card-title">
              <h3>{course.title.toUpperCase()}</h3>
            </div>
            <div className="card-text">Duration : {course.duration}Hrs</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
