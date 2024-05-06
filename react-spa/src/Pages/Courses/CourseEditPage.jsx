import { useLoaderData } from "react-router-dom";
import CourseForm from "../../Components/Courses/CourseForm/CourseForm";

function CourseEditPage() {
  const course = useLoaderData();

  return <CourseForm course={course} />;
}

export default CourseEditPage;

export async function CourseEditPageLoader({ params }) {
  const { courseId } = params;
  const response = await fetch(`http://localhost:3030/courses/${courseId}`);

  if (!response.ok) {
    throw new Error("Unable to fetch course for " + courseId);
  }

  return response;
}
