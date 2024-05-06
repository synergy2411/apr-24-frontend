import { useNavigate } from "react-router-dom";
import classes from "./CourseItem.module.css";

/* eslint-disable react/prop-types */
function CourseItem({ course }) {
  const navigate = useNavigate();
  return (
    <div className="col-4 mb-4">
      <div
        className={`card ${classes["clickable"]}`}
        onClick={() => navigate(`/courses/${course.id}`)}
      >
        <div className="card-header">
          <h5 className="text-center">{course.title}</h5>
        </div>
      </div>
    </div>
  );
}

export default CourseItem;
