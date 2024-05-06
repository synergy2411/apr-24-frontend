import { useLoaderData, redirect, json } from "react-router-dom";
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

export async function CourseEditAction({ params, request }) {
  const { courseId } = params;
  const formData = await request.formData();
  let updatedCourse = {
    title: formData.get("title"),
    duration: formData.get("duration"),
    logo: formData.get("logo"),
  };

  const response = await fetch(`http://localhost:3030/courses/${courseId}`, {
    method: request.method,
    body: JSON.stringify(updatedCourse),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw json(
      { message: "Unable to edit course for " + courseId },
      { status: 404 }
    );
  }
  return redirect("/courses");
}
