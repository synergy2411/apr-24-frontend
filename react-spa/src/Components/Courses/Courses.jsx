import CourseItem from "./CourseItem/CourseItem";

/* eslint-disable react/prop-types */
function Courses({ courses }) {
  return (
    <div className="row">
      {courses.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
}

export default Courses;
