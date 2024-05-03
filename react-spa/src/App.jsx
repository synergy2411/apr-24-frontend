import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/", // http://localhost:5173
    element: <h1>Home Page</h1>,
  },
  {
    path: "/products", // http://localhost:5173/products
    element: <h1>Products Page</h1>,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
