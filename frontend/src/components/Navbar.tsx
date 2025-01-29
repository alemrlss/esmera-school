import { Phone } from "lucide-react";
import { ThemeToggleButton } from "../contexts/ThemeContext";
import Logo from "../assets/logo-navbar.png"; // Asegúrate de que la ruta esté correcta

function Navbar() {
  return (
    <div className="d-navbar bg-base-100 shadow-2xl">
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
              <a>Inicio</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Cursos</summary>
                <ul className="p-2">
                  <li>
                    <a>Barbería</a>
                  </li>
                  <li>
                    <a>Estética</a>
                  </li>
                  <li>
                    <a>Uñas</a>
                  </li>
                  <li>
                    <a>Peluquería</a>
                  </li>
                  <li>
                    <a>Maquillaje</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Conoce Esmera</a>
            </li>
            <li>
              <a>Contacto</a>
            </li>
            <li>
              <a>Noticias</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Legal</summary>
                <ul className="p-2">
                  <li>
                    <a>Arraigo para la Formación</a>
                  </li>
                  <li>
                    <a>Estancia por Estudios</a>
                  </li>
                  <li>
                    <a>Visas</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        {/* Reemplazamos el SVG por la imagen del logo */}
        <a className="ml-2 lg:ml-6">
          <img src={Logo} alt="Esmera School" className="w-32" />
        </a>
      </div>

      <div className="d-navbar-center hidden lg:flex">
        <ul className="d-menu d-menu-horizontal px-1">
          <li>
            <a>Inicio</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Cursos</summary>
              <ul className="p-2">
                <li>
                  <a>Barbería</a>
                </li>
                <li>
                  <a>Estética</a>
                </li>
                <li>
                  <a>Uñas</a>
                </li>
                <li>
                  <a>Peluquería</a>
                </li>
                <li>
                  <a>Maquillaje</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Conoce Esmera</a>
          </li>
          <li>
            <a>Contacto</a>
          </li>
          <li>
            <a>Noticias</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Legal</summary>
              <ul className="p-2">
                <li>
                  <a>Arraigo para la Formación</a>
                </li>
                <li>
                  <a>Estancia por Estudios</a>
                </li>
                <li>
                  <a>Visas</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="d-navbar-end hidden lg:flex">
        <div className="border rounded-lg mr-4">
          <a
            href="tel:+1234567890"
            className="d-btn d-btn-ghost flex items-center"
          >
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

      <div className="d-dock bg-neutral text-neutral-content lg:hidden">
        <button>
          <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><polyline points="1 11 12 2 23 11" fill="none" stroke="currentColor" stroke-miterlimit="10" strokeWidth="2"></polyline><path d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></path><line x1="12" y1="22" x2="12" y2="18" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></line></g></svg>
          <span className="d-dock-label">Informate</span>
        </button>



        <button>
          <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></circle><path d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></path></g></svg>
          <span className="d-dock-label">Llamanos</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
