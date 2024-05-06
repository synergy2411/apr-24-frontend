import { useLoaderData } from "react-router-dom";
import Courses from "../../Components/Courses/Courses";

function CoursesPage() {
  const courses = useLoaderData();

  return (
    <>
      <h1>Courses Page Loaded</h1>
      <Courses courses={courses} />
    </>
  );
}

export default CoursesPage;
