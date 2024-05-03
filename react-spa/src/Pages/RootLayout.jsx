import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";

function RootLayout() {
  return (
    <div className="container">
      <MainNavigation />
      <Outlet />
    </div>
  );
}

export default RootLayout;
