import { useLoaderData } from "react-router-dom";
import AddCourseButton from "../../Components/Courses/AddCourseButton/AddCourseButton";
import Courses from "../../Components/Courses/Courses";

function CoursesPage() {
  const courses = useLoaderData();

  return (
    <>
      <h1 className="text-center mb-2">Available Courses</h1>
      <AddCourseButton />
      <Courses courses={courses} />
    </>
  );
}

export default CoursesPage;

export async function CoursesPageLoader() {
  const response = await fetch("http://localhost:3030/courses");

  if (!response.ok) {
    throw new Error("Unable to find courses");
  }

  return response;
}
