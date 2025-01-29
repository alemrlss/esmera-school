import { Phone, MapPin } from "lucide-react";
import logo from '../assets/logo-esmera.png'; // Asegúrate de poner la ruta correcta de tu imagen

function Footer() {
  return (
    <footer className="d-footer bg-base-200 text-base-content p-10 flex flex-col items-center lg:flex-row lg:justify-between">
      {/* Contenido Principal */}
      <div className="flex flex-col items-center lg:items-start">
        <nav className="mt-6 w-full">
          <h6 className="d-footer-title text-center lg:text-left">Navega</h6>
          <div className="grid grid-cols-4 md:flex justify-center lg:justify-start gap-4 mt-2">
            <a className="d-link d-link-hover text-center">Conoce Esmera</a>
            <a className="d-link d-link-hover text-center">Opiniones</a>
            <a className="d-link d-link-hover text-center">Contacto</a>
            <a className="d-link d-link-hover text-center">Noticias</a>
            <a className="d-link d-link-hover text-center">Arraigo para la formación</a>
            <a className="d-link d-link-hover text-center">Estancia por estudios</a>
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
          <div className="border rounded-lg p-2">
            <a
              href="tel:+1234567890"
              className="d-btn d-btn-ghost flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>+1 (234) 567-890</span>
            </a>
          </div>

          <a
            href="https://www.google.com/maps?q=Paseo+Santa+Maria+de+la+Cabeza,+Madrid"
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
      <div className="hidden lg:block lg:ml-4 lg:w-1/3 lg:max-w-sm lg:flex lg:flex lg:flex-col items-center space-y-1">
        <a
          href="https://www.google.com/maps?q=Paseo+Santa+Maria+de+la+Cabeza,+Madrid"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-center space-x-2 text-gray-500 font-bold hover:underline"
        >
          <MapPin className="h-6 w-6 text-red-400" />
          <span>Visítanos en Paseo Santa Maria de la Cabeza, 10</span>
        </a>
        <iframe
          title="Ubicación Esmera School"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096765!2d144.95373531531596!3d-37.81627937975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f7bdf1d1%3A0x5045675218ce6e0!2sPaseo+de+Santa+Mar%C3%ADa+de+la+Cabeza%2C+Madrid!5e0!3m2!1ses!2ses!4v1645534345752"
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096765!2d144.95373531531596!3d-37.81627937975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f7bdf1d1%3A0x5045675218ce6e0!2sCalle+Ficticia+123!5e0!3m2!1ses!2sco!4v1645534345752"
          width="100%"
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
