import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";
import Footer from "../Components/Footer";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <div className="row text-center">
        <div className="col-6 offset-3">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RootLayout;
