import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo-blanco.png";
import useGoToPage from "../hooks/useGoToPage"; // Importamos el hook
import { GraduationCap } from "lucide-react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  let timeoutId: ReturnType<typeof setTimeout>;

  const goToPage = useGoToPage(); // Usamos el hook

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
          <button
            onClick={() => goToPage("/")}
            className="hover:text-gray-300 transition cursor-pointer"
          >
            Inicio
          </button>
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
                  <button
                    key={curso}
                    onClick={() => goToPage("/cursos/" + convertToSlug(curso))}
                    className="w-full text-left cursor-pointer px-4 py-2 hover:bg-gray-200"
                  >
                    {curso}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
          <button
            onClick={() => goToPage("/conoce-esmera")}
            className="hover:text-gray-300 transition cursor-pointer"
          >
            Conoce Esmera
          </button>
          <button
            onClick={() => goToPage("/contacto")}
            className="hover:text-gray-300 transition cursor-pointer"
          >
            Contacto
          </button>
          <button
            onClick={() => goToPage("/noticias")}
            className="hover:text-gray-300 transition cursor-pointer"
          >
            Noticias
          </button>

          <button
            onClick={() => goToPage("/mi-campus")}
            className="bg-[#d57f11] text-white py-2 px-6 rounded-full shadow-lg  transition-all duration-300 cursor-pointer transform hover:scale-95 flex items-center space-x-2"
          >
            <GraduationCap size={20} /> {/* Ícono de graduación */}
            <span>Mi Campus</span>
          </button>
        </div>

        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-14 left-0 w-full bg-[#0057a8] text-white p-4 z-40 space-y-2"
          >
            <button
              onClick={() => {
                goToPage("/");
                closeMobileMenu();
              }}
              className="hover:text-gray-300 transition cursor-pointer"
            >
              Inicio
            </button>
            <button className="block w-full text-left hover:text-gray-300 transition">
              Cursos
            </button>
            <div className="">
              {["Barbería", "Peluquería", "Estética", "Uñas", "Maquillaje"].map(
                (curso) => (
                  <button
                    key={curso}
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => {
                      goToPage(`/cursos/${convertToSlug(curso)}`);
                      closeMobileMenu();
                    }}
                  >
                    {curso}
                  </button>
                )
              )}
            </div>
            <button
              className="block hover:text-gray-300 transition"
              onClick={() => {
                goToPage("conoce-esmera");
                closeMobileMenu();
              }}
            >
              Conoce Esmera
            </button>
            <button
              className="block hover:text-gray-300 transition"
              onClick={() => {
                goToPage("contacto");
                closeMobileMenu();
              }}
            >
              Contacto
            </button>
            <button
              className="block hover:text-gray-300 transition"
              onClick={() => {
                goToPage("noticias");
                closeMobileMenu();
              }}
            >
              Noticias
            </button>

            <button
              onClick={() => {
                goToPage("mi-campus");
                closeMobileMenu();
              }}
              className="bg-[#d57f11] text-white py-2 px-6 rounded-full shadow-lg  transition-all duration-300 cursor-pointer transform hover:scale-95 flex items-center space-x-2"
            >
              <GraduationCap size={20} /> {/* Ícono de graduación */}
              <span>Mi Campus</span>
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
