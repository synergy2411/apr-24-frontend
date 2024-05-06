/* eslint-disable react/prop-types */
function CourseItem({ course }) {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-header">
          <h5 className="text-center">{course.title}</h5>
        </div>
      </div>
    </div>
  );
}

export default CourseItem;
