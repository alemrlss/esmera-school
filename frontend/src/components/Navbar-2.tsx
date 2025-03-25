import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo-blanco.png";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let timeoutId: ReturnType<typeof setTimeout>;
  
  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setIsDropdownOpen(false), 300); // Retardo de 300ms
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Cierra el menú móvil al hacer clic en un enlace
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#0057a8] text-white p-2 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src={logo} alt="Esmera" className="h-10" />
          </Link>
        </div>

        {/* Botón de hamburguesa para móviles */}
        <div className="block lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menú para pantallas grandes */}
        <div className="hidden lg:flex space-x-6 items-center">
          <Link to="/" className="hover:text-gray-300 transition">
            Inicio
          </Link>
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
                <Link
                  to="/cursos/barberia"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Barbería
                </Link>
                <Link
                  to="/cursos/peluqueria"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Peluquería
                </Link>
                <Link
                  to="/cursos/estetica"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Estética
                </Link>
                <Link
                  to="/cursos/unas"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Uñas
                </Link>
                <Link
                  to="/cursos/maquillaje"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Maquillaje
                </Link>
              </motion.div>
            )}
          </div>
          <Link to="/conoce-esmera" className="hover:text-gray-300 transition">
            Conoce Esmera
          </Link>
          <Link to="/contacto" className="hover:text-gray-300 transition">
            Contacto
          </Link>

          <Link to="/noticias" className="hover:text-gray-300 transition">
            Blog
          </Link>
        </div>

        <div
          className={`lg:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute z-40 top-14 left-0 w-full bg-[#0057a8] text-white p-4 space-y-2`}
        >
          <Link
            to="/"
            className="block hover:text-gray-300 transition"
            onClick={closeMobileMenu}
          >
            Inicio
          </Link>
          <div className="relative">
            <button className="block w-full text-left hover:text-gray-300 transition">
              Cursos
            </button>
            <div className="space-y-2 mt-2 pl-4">
              <Link
                to="/cursos/barberia"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={closeMobileMenu}
              >
                Barbería
              </Link>
              <Link
                to="/cursos/peluqueria"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={closeMobileMenu}
              >
                Peluquería
              </Link>
              <Link
                to="/cursos/estetica"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={closeMobileMenu}
              >
                Estética
              </Link>
              <Link
                to="/cursos/unas"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={closeMobileMenu}
              >
                Uñas
              </Link>
              <Link
                to="/cursos/maquillaje"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={closeMobileMenu}
              >
                Maquillaje
              </Link>
            </div>
          </div>

          <Link
            to="/conoce-esmera"
            className="block hover:text-gray-300 transition"
            onClick={closeMobileMenu}
          >
            Conoce Esmera
          </Link>
          <Link
            to="/contacto"
            className="block hover:text-gray-300 transition"
            onClick={closeMobileMenu}
          >
            Contacto
          </Link>
          <Link
            to="/noticias"
            className="block hover:text-gray-300 transition"
            onClick={closeMobileMenu}
          >
            Noticias
          </Link>
        </div>
      </div>
    </nav>
  );
}
