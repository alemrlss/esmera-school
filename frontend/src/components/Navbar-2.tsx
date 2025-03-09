import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo-blanco.png";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setIsDropdownOpen(false), 300); // Retardo de 300ms
  };

  return (
    <nav className="bg-[#004AAD] text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src={logo} alt="Esmera" className="h-10" />
          </Link>
        </div>
        <div className="flex space-x-6 items-center">
          <Link to="/" className="hover:text-gray-300 transition">Inicio</Link>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-gray-300 transition">Cursos</button>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 mt-2 bg-white text-black rounded shadow-lg w-40 z-10"
                onMouseEnter={handleMouseEnter} // Evita que se cierre al mover el mouse dentro
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/cursos/barberia" className="block px-4 py-2 hover:bg-gray-200">Barbería</Link>
                <Link to="/cursos/peluqueria" className="block px-4 py-2 hover:bg-gray-200">Peluquería</Link>
                <Link to="/cursos/estetica" className="block px-4 py-2 hover:bg-gray-200">Estetica</Link>
                <Link to="/cursos/unas" className="block px-4 py-2 hover:bg-gray-200">Uñas</Link>
                <Link to="/cursos/maquillaje" className="block px-4 py-2 hover:bg-gray-200">Maquillaje</Link>
              </motion.div>
            )}
          </div>
          <Link to="/conoce-esmera" className="hover:text-gray-300 transition">Conoce Esmera</Link>
          <Link to="/contacto" className="hover:text-gray-300 transition">Contacto</Link>
          <Link to="/noticias" className="hover:text-gray-300 transition">Noticias</Link>
        </div>
      </div>
    </nav>
  );
}
