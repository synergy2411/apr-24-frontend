/* eslint-disable react/prop-types */
function Courses({ courses }) {
  return (
    <div className="row">
      <div className="col-4">
        <div className="card">
          <div className="card-img">
            <img src={courses[0].logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
