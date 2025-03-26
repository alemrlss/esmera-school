import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo-blanco.png";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  let timeoutId: ReturnType<typeof setTimeout>;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setIsDropdownOpen(false), 300);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  function convertToSlug(text: string) {
    return text
      .toLowerCase()
      .normalize("NFD") // Normaliza caracteres especiales
      .replace(/[\u0300-\u036f]/g, "") // Elimina los acentos
      .replace(/ñ/g, "n") // Reemplaza "ñ" por "n"
      .replace(/\s+/g, "-"); // Reemplaza los espacios por guiones
  }
  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0057a8]/90 shadow-lg" : "bg-[#0057a8]"
      }`}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-3">
        <Link to="/">
          <img src={logo} alt="Esmera" className="h-10" />
        </Link>

        {/* Botón de hamburguesa para móviles */}
        <div className="block lg:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Menú para pantallas grandes */}
        <div className="hidden lg:flex space-x-6 items-center text-white">
          <Link to="/" className="hover:text-gray-300 transition ">
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
              >
                {[
                  "Barbería",
                  "Peluquería",
                  "Estética",
                  "Uñas",
                  "Maquillaje",
                ].map((curso) => (
                  <Link
                    key={curso}
                    to={`/cursos/${convertToSlug(curso)}`}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    {curso}
                  </Link>
                ))}
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

        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-14 left-0 w-full bg-[#0057a8] text-white p-4 z-40 space-y-2"
          >
            <Link
              to="/"
              className="block hover:text-gray-300 transition"
              onClick={closeMobileMenu}
            >
              Inicio
            </Link>
            <button className="block w-full text-left hover:text-gray-300 transition">
              Cursos
            </button>
            <div className="">
              {["Barbería", "Peluquería", "Estética", "Uñas", "Maquillaje"].map(
                (curso) => (
                  <Link
                    key={curso}
                    to={`/cursos/${convertToSlug(curso)}`}
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={closeMobileMenu}
                  >
                    {curso}
                  </Link>
                )
              )}
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
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
