import { redirect, json } from "react-router-dom";
import CourseForm from "../../Components/Courses/CourseForm/CourseForm";

function NewCoursePage() {
  return <CourseForm />;
}

export default NewCoursePage;

export async function NewCourseAction({ request }) {
  const formData = await request.formData();
  let newCourse = {
    title: formData.get("title"),
    duration: formData.get("duration"),
    logo: formData.get("logo"),
  };

  const response = await fetch("http://localhost:3030/courses", {
    method: request.method,
    body: JSON.stringify(newCourse),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw json({ message: "Unable to create new course" }, { status: 404 });
  }

  return redirect("/courses");
}
