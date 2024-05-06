import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import RootLayout from "./Pages/RootLayout";
import ErrorPage from "./Pages/ErrorPage";
import CoursesPage, { CoursesPageLoader } from "./Pages/Courses/CoursesPage";
import CourseDetailPage from "./Pages/Courses/CourseDetail";

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
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
