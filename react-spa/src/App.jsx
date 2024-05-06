import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CourseDetailPage, {
  CourseDetailLoader,
  DeleteCourseAction,
} from "./Pages/Courses/CourseDetailPage";
import CoursesPage, { CoursesPageLoader } from "./Pages/Courses/CoursesPage";
import NewCoursePage, { NewCourseAction } from "./Pages/Courses/NewCoursePage";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import RootLayout from "./Pages/RootLayout";
import CourseEditPage, {
  CourseEditPageLoader,
} from "./Pages/Courses/CourseEditPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // http://localhost:5173
        element: <HomePage />,
      },
      {
        path: "/products", // http://localhost:5173/products
        element: <ProductsPage />,
      },
      {
        path: "/courses",
        element: <CoursesPage />,
        loader: CoursesPageLoader,
      },
      {
        path: "/courses/:courseId",
        element: <CourseDetailPage />,
        loader: CourseDetailLoader,
        action: DeleteCourseAction,
      },
      {
        path: "/courses/new",
        element: <NewCoursePage />,
        action: NewCourseAction,
      },
      {
        path: "/courses/:courseId/edit",
        element: <CourseEditPage />,
        loader: CourseEditPageLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
