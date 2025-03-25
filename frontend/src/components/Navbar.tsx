import { Phone } from "lucide-react";
import Logo from "../assets/logo-navbar.png";
import { Link, useLocation } from "react-router-dom"; // Importamos useLocation
import { RefObject, useRef } from "react";

function Navbar() {
  const location = useLocation(); // Hook para obtener la ruta actual

  const cursosRef = useRef(null);
  const legalRef = useRef(null);

  const closeDetails = (ref: RefObject<HTMLDetailsElement>): void => {
    if (ref.current) {
      ref.current.open = false; // Cerrar el <details> estableciendo open a false
    }
  };

  // Función que retorna la clase 'selected' si la ruta actual coincide
  const getNavLinkClass = (path: string) => {
    const baseClass =
      "font-bold hover:text-[#0057a8] hover:scale-105 transform transition duration-300 ease-in-out";
    const activeClass = "text-[#0057a8] underline"; // Clase para el subrayado

    return location.pathname === path
      ? `${baseClass} ${activeClass}`
      : baseClass;
  };

  return (
    <nav className="d-navbar bg-base-100 shadow-5xl z-20 border-b">
      <div className="d-navbar-start">
        <div className="d-dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="d-menu d-menu-sm d-dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/" className={getNavLinkClass("/")}>
                Inicio
              </Link>
            </li>
            <li tabIndex={0}>
              <details open>
                <summary className={getNavLinkClass("/cursos")}>Cursos</summary>
                <ul className="p-2">
                  <li>
                    <Link
                      to="/cursos/barberia"
                      className={getNavLinkClass("/cursos/barberia")}
                    >
                      Barbería
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cursos/estetica"
                      className={getNavLinkClass("/cursos/estetica")}
                    >
                      Estética
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cursos/unas"
                      className={getNavLinkClass("/cursos/unas")}
                    >
                      Uñas
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cursos/peluqueria"
                      className={getNavLinkClass("/cursos/peluqueria")}
                    >
                      Peluquería
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cursos/maquillaje"
                      className={getNavLinkClass("/cursos/maquillaje")}
                    >
                      Maquillaje
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link
                to="/conoce-esmera"
                className={getNavLinkClass("/conoce-esmera")}
              >
                Conoce Esmera
              </Link>
            </li>
            <li>
              <Link to="/contacto" className={getNavLinkClass("/contacto")}>
                Contacto
              </Link>
            </li>
            <li>
              <Link to="/noticias" className={getNavLinkClass("/noticias")}>
                Noticias
              </Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary className={getNavLinkClass("/legal")}>Legal</summary>
                <ul className="p-2">
                  <li>
                    <Link
                      to="/legal/arraigo"
                      className={getNavLinkClass("/legal/arraigo")}
                    >
                      Arraigo para la Formación
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/legal/estancia"
                      className={getNavLinkClass("/legal/estancia")}
                    >
                      Estancia por Estudios
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/legal/visas"
                      className={getNavLinkClass("/legal/visas")}
                    >
                      Visas
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <Link to="/" className="hidden lg:block lg:ml-6">
          <img src={Logo} alt="Esmera School" className="w-32" />
        </Link>
      </div>

      <div className="d-navbar-center block lg:hidden">
        <Link to="/" className="">
          <img src={Logo} alt="Esmera School" className="w-32" />
        </Link>{" "}
      </div>

      <div className="d-navbar-center hidden lg:flex">
        <ul className="d-menu d-menu-horizontal px-1">
          <li>
            <Link to="/" className={getNavLinkClass("/")}>
              Inicio
            </Link>
          </li>
          <li tabIndex={0}>
            <details ref={cursosRef}>
              <summary className={getNavLinkClass("/cursos")}>Cursos</summary>
              <ul className="p-2">
                <li>
                  <Link
                    to="/cursos/barberia"
                    className={getNavLinkClass("/cursos/barberia")}
                    onClick={() => closeDetails(cursosRef)}
                  >
                    Barbería
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cursos/estetica"
                    className={getNavLinkClass("/cursos/estetica")}
                    onClick={() => closeDetails(cursosRef)}
                  >
                    Estética
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cursos/unas"
                    className={getNavLinkClass("/cursos/unas")}
                    onClick={() => closeDetails(cursosRef)}
                  >
                    Uñas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cursos/peluqueria"
                    className={getNavLinkClass("/cursos/peluqueria")}
                    onClick={() => closeDetails(cursosRef)}
                  >
                    Peluquería
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cursos/maquillaje"
                    className={getNavLinkClass("/cursos/maquillaje")}
                    onClick={() => closeDetails(cursosRef)}
                  >
                    Maquillaje
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link
              to="/conoce-esmera"
              className={getNavLinkClass("/conoce-esmera")}
            >
              Conoce Esmera
            </Link>
          </li>
          <li>
            <Link to="/contacto" className={getNavLinkClass("/contacto")}>
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/noticias" className={getNavLinkClass("/noticias")}>
              Noticias
            </Link>
          </li>
          <li tabIndex={0}>
            <details ref={legalRef}>
              <summary className={getNavLinkClass("/legal")}>Legal</summary>
              <ul className="p-2">
                <li>
                  <Link
                    to="/legal/arraigo"
                    className={getNavLinkClass("/legal/arraigo")}
                    onClick={() => closeDetails(legalRef)}
                  >
                    Arraigo para la Formación
                  </Link>
                </li>
                <li>
                  <Link
                    to="/legal/estancia"
                    className={getNavLinkClass("/legal/estancia")}
                    onClick={() => closeDetails(legalRef)}
                  >
                    Estancia por Estudios
                  </Link>
                </li>
                <li>
                  <Link
                    to="/legal/visas"
                    className={getNavLinkClass("/legal/visas")}
                    onClick={() => closeDetails(legalRef)}
                  >
                    Visas
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="d-navbar-end hidden lg:flex">
        <div className="border rounded-3xl mr-4 transition duration-300 ease-in-out transform hover:scale-105 hover:border-[#0057a8]">
          <a
            href="tel:912795975"
            className="d-btn d-btn-ghost flex items-center px-6 py-2 rounded-full font-medium hover:bg-[#0057a8] hover:text-white transition duration-300 ease-in-out"
          >
            <Phone className="h-5 w-5 mr-2" />
            912 79 59 75
          </a>
        </div>
      </div>
      <div className="d-navbar-end flex lg:hidden"></div>
      {/*
       Botón para cambiar el tema 
      <div className="d-navbar-end flex lg:hidden">
        <div>
          <ThemeToggleButton />
        </div>
      </div>
      */}
    </nav>
  );
}

export default Navbar;
