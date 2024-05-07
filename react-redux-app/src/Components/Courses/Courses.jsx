import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userSignOut } from "../../store/slices/auth-slice";

function Courses() {
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `https://sk-hexa-app-default-rtdb.firebaseio.com/courses.json?auth=${token}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const courses = await response.json();
        setCourses(courses);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <h1>List of Courses</h1>
      <button
        className="btn btn-outline-danger"
        onClick={() => dispatch(userSignOut())}
      >
        Logout
      </button>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Courses;
