import { Phone } from "lucide-react";
import { ThemeToggleButton } from "../contexts/ThemeContext";
import Logo from "../assets/logo-navbar.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="d-navbar bg-base-100 shadow-5xl z-20 border-b">
      <div className="d-navbar-start">
        <div className="d-dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
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
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="d-menu d-menu-sm d-dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Cursos</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/cursos/barberia">Barbería</Link>
                  </li>
                  <li>
                    <Link to="/cursos/estetica">Estética</Link>
                  </li>
                  <li>
                    <Link to="/cursos/unas">Uñas</Link>
                  </li>
                  <li>
                    <Link to="/cursos/peluqueria">Peluquería</Link>
                  </li>
                  <li>
                    <Link to="/cursos/maquillaje">Maquillaje</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/conoce-esmera">Conoce Esmera</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/noticias">Noticias</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Legal</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/legal/arraigo">Arraigo para la Formación</Link>
                  </li>
                  <li>
                    <Link to="/legal/estancia">Estancia por Estudios</Link>
                  </li>
                  <li>
                    <Link to="/legal/visas">Visas</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <Link to="/" className="ml-4 lg:ml-6">
          <img src={Logo} alt="Esmera School" className="w-32" />
        </Link>
      </div>

      <div className="d-navbar-center hidden lg:flex">
        <ul className="d-menu d-menu-horizontal px-1">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Cursos</summary>
              <ul className="p-2">
                <li>
                  <Link to="/cursos/barberia">Barbería</Link>
                </li>
                <li>
                  <Link to="/cursos/estetica">Estética</Link>
                </li>
                <li>
                  <Link to="/cursos/unas">Uñas</Link>
                </li>
                <li>
                  <Link to="/cursos/peluqueria">Peluquería</Link>
                </li>
                <li>
                  <Link to="/cursos/maquillaje">Maquillaje</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/conoce-esmera">Conoce Esmera</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/noticias">Noticias</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Legal</summary>
              <ul className="p-2">
                <li>
                  <Link to="/noticias">Arraigo para la Formación</Link>
                </li>
                <li>
                  <Link to="/legal/estancia">Estancia por Estudios</Link>
                </li>
                <li>
                  <Link to="/legal/visas">Visas</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="d-navbar-end hidden lg:flex">
        <div className="border rounded-3xl mr-4">
          <a href="tel:+1234567890" className="d-btn d-btn-ghost flex items-center">
            <Phone className="h-5 w-5" />
            +1 (234) 567-890
          </a>
        </div>
        <div className="lg:ml-6">
          <ThemeToggleButton />
        </div>
      </div>

      <div className="d-navbar-end flex lg:hidden">
        <div>
          <ThemeToggleButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
