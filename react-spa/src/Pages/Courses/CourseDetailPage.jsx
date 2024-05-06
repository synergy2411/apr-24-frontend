import { useLoaderData, redirect } from "react-router-dom";
import CourseDetail from "../../Components/Courses/CourseDetail/CourseDetail";

function CourseDetailPage() {
  const course = useLoaderData();
  return <CourseDetail course={course} />;
}

export default CourseDetailPage;

export async function CourseDetailLoader({ params }) {
  const { courseId } = params;
  const response = await fetch(`http://localhost:3030/courses/${courseId}`);

  if (!response.ok) {
    throw new Error("Unable to find course for " + courseId);
  }

  return response;
}

export async function DeleteCourseAction({ request, params }) {
  const { courseId } = params;
  const response = await fetch(`http://localhost:3030/courses/${courseId}`, {
    method: request.method,
  });
  if (!response.ok) {
    throw new Error("Unable to delete course for " + courseId);
  }
  return redirect("/courses");
}
