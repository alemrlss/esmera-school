import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {" "}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
