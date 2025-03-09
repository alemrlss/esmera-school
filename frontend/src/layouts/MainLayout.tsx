import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";
import Navbar2 from "../components/Navbar-2";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen relative">
     <Navbar2 />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <WhatsappButton />
    </div>
  );
}

export default MainLayout;
