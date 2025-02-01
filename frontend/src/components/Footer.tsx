import { Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom"; // Importamos Link desde react-router-dom
import logo from "../assets/logo-esmera.png"; // Asegúrate de poner la ruta correcta de tu imagen

function Footer() {
  return (
    <footer className="d-footer bg-base-200 text-base-content p-10 flex flex-col items-center lg:flex-row lg:justify-between">
      {/* Contenido Principal */}
      <div className="flex flex-col items-center lg:items-start">
        <nav className="mt-6 w-full">
          <h6 className="d-footer-title text-center lg:text-left">Navega</h6>
          <div className="grid grid-cols-4 md:flex justify-center lg:justify-start gap-4 mt-2">
            {/* Reemplazamos los enlaces por el componente Link */}
            <Link to="/" className="d-link d-link-hover text-center">
              Conoce Esmera
            </Link>
            <Link to="/opiniones" className="d-link d-link-hover text-center">
              Opiniones
            </Link>
            <Link to="/contacto" className="d-link d-link-hover text-center">
              Contacto
            </Link>
            <Link to="/noticias" className="d-link d-link-hover text-center">
              Noticias
            </Link>
            <Link
              to="/arraigo-formacion"
              className="d-link d-link-hover text-center"
            >
              Arraigo para la formación
            </Link>
            <Link
              to="/estancia-estudios"
              className="d-link d-link-hover text-center"
            >
              Estancia por estudios
            </Link>
          </div>
        </nav>

        <aside className="text-center lg:text-left mt-4">
          <img
            src={logo}
            alt="Logo Esmera School"
            className="mx-auto lg:ml-0 w-24"
          />
          <p className="text-sm lg:text-xl text">
            Esmera School
            <br />
            Centro de formación con más de 20 años de experiencia
          </p>
        </aside>

        <div className="flex flex-col items-center space-y-3 mt-4 lg:items-start">
          <div className="border rounded-3xl mr-4 transition duration-300 ease-in-out transform hover:scale-105 hover:border-[#0057a8]">
            <a
              href="tel:912795975"
              className="d-btn d-btn-ghost flex items-center px-6 py-2 rounded-full font-medium hover:bg-[#0057a8] hover:text-white transition duration-300 ease-in-out"
            >
              <Phone className="h-5 w-5 mr-2" />
              912 79 59 75
            </a>
          </div>

          <a
            href="https://maps.app.goo.gl/F9AZnT2whTAU4wx46"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-500 font-bold hover:underline lg:hidden"
          >
            <MapPin className="h-6 w-6" />
            <span>Visítanos en Paseo Santa Maria de la Cabeza</span>
          </a>
        </div>
      </div>
      {/* Mapa embebido visible solo en desktop */}
      <div className="hidden  lg:ml-4 lg:w-1/3 lg:max-w-sm lg:flex lg:flex-col items-center space-y-1">
        <a
          href="https://maps.app.goo.gl/F9AZnT2whTAU4wx46"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-center space-x-2 text-gray-500 font-bold hover:underline"
        >
          <MapPin className="h-6 w-6" />
          <span>Visítanos en Paseo Santa Maria de la Cabeza, 10</span>
        </a>
        <iframe
          title="Ubicación Esmera School"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.1020160738226!2d-3.6970794235728133!3d40.40659075625579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227f73858ca7b%3A0x3c679552e73a4d02!2sEsmera School!5e0!3m2!1ses-419!2ses!4v1738410585067!5m2!1ses-419!2ses"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
      <div className="block lg:hidden lg:ml-4 lg:w-1/3 lg:max-w-sm">
        <iframe
          title="Ubicación Esmera School"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.1020160738226!2d-3.6970794235728133!3d40.40659075625579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227f73858ca7b%3A0x3c679552e73a4d02!2sEsmera School!5e0!3m2!1ses-419!2ses!4v1738410585067!5m2!1ses-419!2ses"          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </footer>
  );
}

export default Footer;
