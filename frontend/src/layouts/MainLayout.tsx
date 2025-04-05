import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsappButton from "../components/WhatsappButton";

function MainLayout() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {" "}
        <Outlet />
      </main>
      <Footer />
    <WhatsappButton/>
    </div>
  );
}

export default MainLayout;
