import reactLogo from "./assets/react.svg"; // Asume que tienes un logo o imagen para el logo

function App() {
  return (
    <div>
      {/* Drawer */}
      <div className="drawer">
        {/* Checkbox para abrir/cerrar el drawer */}
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        
        {/* Contenido de la página */}
        <div className="drawer-content">
          {/* Aquí va el contenido del navbar */}
          <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              {/* Logo */}
              <a
                href="/"
                className="flex items-center text-white text-2xl font-semibold"
              >
                <img src={reactLogo} alt="Logo" className="w-10 h-10 mr-2" />
                <span>Mi Empresa</span>
              </a>

              {/* Menú de Navegación para pantallas grandes */}
              <div className="hidden md:flex space-x-6">
                <a href="/" className="text-white hover:text-gray-300">
                  Inicio
                </a>
                <a href="/contacto" className="text-white hover:text-gray-300">
                  Contacto
                </a>

                {/* Dropdown de Cursos */}
                <details className="dropdown">
                  <summary className="text-white hover:text-gray-300 cursor-pointer flex items-center space-x-2">
                    <span>Cursos</span>
                    {/* Flecha animada */}
                    <svg
                      className="w-4 h-4 transform transition-transform duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <ul className="menu dropdown-content bg-base-100 rounded-box shadow-lg w-52 p-2 mt-2">
                    {/* Subcursos */}
                    <li>
                      <a href="/cursos/barberia">Barbería</a>
                      <ul className="menu bg-base-100 rounded-box w-full p-2 mt-2">
                        <li>
                          <a href="/cursos/barberia/corte">Corte de Cabello</a>
                        </li>
                        <li>
                          <a href="/cursos/barberia/afeitado">Afeitados</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/cursos/estetica">Estética</a>
                      <ul className="menu bg-base-100 rounded-box w-full p-2 mt-2">
                        <li>
                          <a href="/cursos/estetica/faciales">
                            Tratamientos Faciales
                          </a>
                        </li>
                        <li>
                          <a href="/cursos/estetica/corporales">
                            Tratamientos Corporales
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </details>
              </div>

              {/* Botón del Drawer para pantallas pequeñas */}
              <label htmlFor="my-drawer" className="btn btn-primary drawer-button md:hidden">
                Open drawer
              </label>
            </div>
          </nav>

          {/* Contenido principal */}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-center">
              Bienvenido a la página de Cursos
            </h1>
            {/* Aquí puedes agregar más contenido dependiendo de la ruta */}
          </div>
        </div>

        {/* Sidebar / Drawer contenido */}
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar contenido */}
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
            {/* Dropdown de Cursos */}
            <li>
              <a href="/cursos/barberia">Barbería</a>
              <ul className="menu bg-base-100 rounded-box w-full p-2 mt-2">
                <li>
                  <a href="/cursos/barberia/corte">Corte de Cabello</a>
                </li>
                <li>
                  <a href="/cursos/barberia/afeitado">Afeitados</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/cursos/estetica">Estética</a>
              <ul className="menu bg-base-100 rounded-box w-full p-2 mt-2">
                <li>
                  <a href="/cursos/estetica/faciales">Tratamientos Faciales</a>
                </li>
                <li>
                  <a href="/cursos/estetica/corporales">Tratamientos Corporales</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
