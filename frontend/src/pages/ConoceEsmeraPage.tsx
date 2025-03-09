import { Phone } from "lucide-react";
import headerImage from "../assets/banner-trasparent.png";
import { motion } from "framer-motion";

function ConoceEsmeraPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Meta Description */}
      <meta
        name="description"
        content="Conoce Esmera, un centro de formación con más de 20 años de experiencia en el mundo del cuidado personal. Prepara tu futuro profesional hoy."
      />

      <motion.div
        className="w-full relative"
        initial={{ opacity: 0, y: 0 }} // Comienza con opacidad 0 y desplazamiento hacia abajo
        animate={{ opacity: 1, y: 0 }} // Finaliza con opacidad 1 y sin desplazamiento
        transition={{ duration: 1, ease: "easeOut" }} // Duración de la animación y tipo de transición
      >
        <img
          src={headerImage}
          alt="Centro de formación Esmera, especializado en el cuidado personal"
          className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col items-center justify-center px-4 sm:px-8 md:px-16">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // Retraso de 0.3s para que se vea la animación en cadena
          >
            CONOCE ESMERA
          </motion.h1>
          <motion.p
            className="mt-2 text-sm sm:text-lg md:text-xl mx-4 sm:mx-16 md:mx-72"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            Centro de formación con más de 20 años de experiencia, te preparamos
            para ser un profesional destacado en el mundo del cuidado personal.
          </motion.p>
          <motion.p
            className="mt-2 text-base sm:text-xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
          >
            "Por un futuro sin límites. amistad, liderazgo y servicio"
          </motion.p>

          {/* Sincronización del botón con el texto */}
          <motion.button
            className="d-btn d-btn-primary mt-6 px-8 py-2 text-lg bg-[#008e47] border-2 border-[#008e47] hover:bg-transparent hover:text-[#008e47] hover:border-[#008e47] transition-all duration-300 shadow-lg rounded-4xl"
            aria-label="Contactar con Esmera"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 1, ease: "backIn", delay: 0.9 }} // Sincronizado con el texto
          >
            Contáctanos
          </motion.button>
        </div>
      </motion.div>

      {/* Nuestro Objetivo */}
      <section className="py-8 px-8">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }} // Inicia con opacidad 0 y desplazado hacia abajo
          animate={{ opacity: 1, y: 0 }} // Finaliza con opacidad 1 y sin desplazamiento
          transition={{ duration: 1, ease: "easeOut" }} // Duración de la animación
        >
          NUESTRO OBJETIVO:
        </motion.h2>

        <motion.p
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // Retraso de 0.3s
        >
          Garantizar tu futuro
        </motion.p>

        <motion.div
          className="d-divider w-1/4 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }} // Retraso de 0.6s para que se vea después del texto
        ></motion.div>

        <motion.p
          className="text-center text-sm sm:text-lg mx-auto lg:mx-40 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }} // Retraso de 0.9s para el texto
        >
          En Esmera, nos comprometemos a ofrecer una educación de calidad que no
          solo te prepare para enfrentar los retos del mundo del cuidado
          personal, sino que te brinde las herramientas necesarias para
          destacarte como un profesional exitoso. Con más de 20 años de
          experiencia en la formación de líderes en la industria, trabajamos de
          la mano con nuestros estudiantes para asegurar que cada uno de ellos
          adquiera los conocimientos y habilidades que marcan la diferencia.
        </motion.p>
      </section>

      <section
        className="bg-[#008e47] text-white py-28 px-8"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)" }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
          NUESTRA MISIÓN
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-auto max-w-screen-lg">
          <div className="card-feature p-3">
            <div className="card-body text-center">
              <Phone className="w-12 h-12 mx-auto text-white" />
              <p className="card-title mt-4 text-lg sm:text-xl">
                Ofrecer una{" "}
                <span className="font-bold">formación integral</span> y{" "}
                <span className="font-bold">personalizada</span>
              </p>
            </div>
          </div>
          <div className="card-feature p-3">
            <div className="card-body text-center">
              <Phone className="w-12 h-12 mx-auto text-white" />
              <p className="card-title mt-4 text-lg sm:text-xl">
                Ofrecer una{" "}
                <span className="font-bold">formación integral</span> y{" "}
                <span className="font-bold">personalizada</span>
              </p>
            </div>
          </div>
          <div className="card-feature p-3">
            <div className="card-body text-center">
              <Phone className="w-12 h-12 mx-auto text-white" />
              <p className="card-title mt-4 text-lg sm:text-xl">
                Formar a futuros{" "}
                <span className="font-bold">profesionales</span>
              </p>
            </div>
          </div>
          <div className="card-feature p-3">
            <div className="card-body text-center">
              <Phone className="w-12 h-12 mx-auto text-white" />
              <p className="card-title mt-4 text-lg sm:text-xl">
                Cursos actualizados al{" "}
                <span className="font-bold">mercado laboral</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historia de la Empresa */}
      {/* Historia de la Empresa */}
      <section className="py-16 px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
          Nuestra Historia
        </h2>
        <p className="text-center text-sm sm:text-lg mb-8">
          Descubre cómo Esmera ha crecido y evolucionado a lo largo de los años,
          siempre comprometidos con la formación y el futuro de nuestros
          estudiantes.
        </p>

        <ul className="d-timeline d-timeline-snap-icon max-md:d-timeline-compact d-timeline-vertical">
          <li>
            <div className="d-timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="d-timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2002</time>
              <div className="text-lg font-black">Fundación de Esmera</div>
              Esmera nació con el objetivo de ofrecer formación integral en el
              campo del cuidado personal, ayudando a los futuros profesionales a
              sobresalir.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="d-timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="d-timeline-end md:mb-10">
              <time className="font-mono italic">2015</time>
              <div className="text-lg font-black">
                Expansión y Nuevas Ofertas
              </div>
              Esmera amplía sus programas, introduciendo cursos más variados,
              alineados con las necesidades del mercado laboral.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="d-timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="d-timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2020</time>
              <div className="text-lg font-black">
                Reconocimiento en la Industria
              </div>
              Esmera es reconocida como uno de los centros más influyentes en
              formación en cuidado personal, destacando por su calidad
              educativa.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="d-timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="d-timeline-end md:mb-10">
              <time className="font-mono italic">2025</time>
              <div className="text-lg font-black">Innovación Continua</div>
              Nos encontramos innovando constantemente con nuevos programas,
              incorporando las últimas tendencias del mercado para ofrecer la
              mejor educación.
            </div>
          </li>
        </ul>
      </section>

      <section
        className="bg-[#008e47] text-white py-16 lg:py-8 pt-64 lg:pt-40 text-center"
        style={{ clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 100%)" }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
          NUESTROS VALORES
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-20 my-10">
          {/* Card 1 */}
          <div
            className="relative rounded-tl-lg rounded-tr-4xl rounded-br-lg overflow-hidden"
            style={{
              backgroundImage: "url('https://picsum.photos/300/300?1')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "220px",
              height: "200px",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative p-6">
              <h3 className="text-lg font-semibold text-center border-b pb-2">
                Compromiso con la Calidad
              </h3>
              <p className="mt-4 text-xs">
                Ofrecemos educación de la más alta calidad, transformando vidas.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative rounded-tl-lg rounded-tr-4xl rounded-br-lg overflow-hidden"
            style={{
              backgroundImage: "url('https://picsum.photos/300/300?2')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "220px",
              height: "200px",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative p-6">
              <h3 className="text-lg font-semibold text-center border-b pb-2">
                Innovación Constante
              </h3>
              <p className="mt-4 text-xs">
                Siempre un paso adelante, adaptándonos a nuevas tendencias.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="relative rounded-tl-lg rounded-tr-4xl rounded-br-lg overflow-hidden"
            style={{
              backgroundImage: "url('https://picsum.photos/300/300?3')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "220px",
              height: "200px",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative p-6">
              <h3 className="text-lg font-semibold text-center border-b pb-2">
                Enfoque Personalizado
              </h3>
              <p className="mt-4 text-xs">
                Atención individualizada para apoyar a cada estudiante.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="relative rounded-tl-lg rounded-tr-4xl rounded-br-lg overflow-hidden"
            style={{
              backgroundImage: "url('https://picsum.photos/300/300?4')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "220px",
              height: "200px",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative p-6">
              <h3 className="text-lg font-semibold text-center border-b pb-2">
                Excelencia Profesional
              </h3>
              <p className="mt-4 text-xs">
                Formamos profesionales íntegros y preparados para el futuro.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ConoceEsmeraPage;
