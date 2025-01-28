import { Phone } from "lucide-react";

function Navbar() {
    return (
        <div className="d-navbar bg-base-100 shadow-2xl">
            <div className="d-navbar-start">
                <div className="d-dropdown">
                    <div tabIndex={0} role="button" className="d-btn d-btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="d-menu d-menu-sm d-dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Inicio</a></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Cursos</summary>
                                <ul className="p-2">
                                    <li><a>Barbería</a></li>
                                    <li><a>Estética</a></li>
                                    <li><a>Uñas</a></li>
                                    <li><a>Peluquería</a></li>
                                    <li><a>Maquillaje</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Conoce Esmera</a></li>
                        <li><a>Contacto</a></li>
                        <li><a>Noticias</a></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Legal</summary>
                                <ul className="p-2">
                                    <li><a>Arraigo por Formación</a></li>
                                    <li><a>Estancia por Estudios</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <a className="d-btn d-btn-ghost text-xl ">EsmeraSchool</a>
            </div>
            <div className="d-navbar-center hidden lg:flex">
                <ul className="d-menu d-menu-horizontal px-1">
                    <li><a>Inicio</a></li>
                    <li tabIndex={0}>
                        <details>
                            <summary>Cursos</summary>
                            <ul className="p-2">
                                <li><a>Barbería</a></li>
                                <li><a>Estética</a></li>
                                <li><a>Uñas</a></li>
                                <li><a>Peluquería</a></li>
                                <li><a>Maquillaje</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Conoce Esmera</a></li>
                    <li><a>Contacto</a></li>
                    <li><a>Noticias</a></li>
                    <li tabIndex={0}>
                        <details>
                            <summary>Legal</summary>
                            <ul className="p-2">
                                <li><a>Arraigo por Formación</a></li>
                                <li><a>Estancia por Estudios</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="d-navbar-end hidden lg:flex">
                <div className="border rounded-lg">
                    <a href="tel:+1234567890" className="d-btn d-btn-ghost flex items-center">
                        <Phone className="h-5 w-5" />
                        +1 (234) 567-890
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
