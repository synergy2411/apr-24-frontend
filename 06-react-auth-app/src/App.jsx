import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import LoginPage from "./Pages/LoginPage";
import ProtectedRoutePage from "./Pages/ProtectedRoutePage";
import LogoutPage from "./Pages/LogoutPage";
import AuthContext from "./context/auth-context";
import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <h1>Home Page</h1>,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/protected-route-1",
        element: (
          <ProtectedRoutePage>
            <h1>Protected route 1 Page</h1>
          </ProtectedRoutePage>
        ),
      },
      {
        path: "/protected-route-2",
        element: (
          <ProtectedRoutePage>
            <h1>Protected Route 2 Page</h1>,
          </ProtectedRoutePage>
        ),
      },
      {
        path: "/logout",
        element: <LogoutPage />,
      },
    ],
  },
]);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext.Provider>
  );
}

export default App;
