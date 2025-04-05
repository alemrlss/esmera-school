import { motion } from "framer-motion";
import headerImageMobile from "../assets/contact/contact-movil.png";
import headerImageDesktop from "../assets/contact/contact.png";
import saraImage from "../assets/testimonios/sara.png";
import fernandoImage from "../assets/testimonios/fernando.png";
import sandraImage from "../assets/testimonios/sandra.png";
function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      {/* Encabezado con la imagen */}
      <motion.div className="w-full relative">
        {/* Imagen para dispositivos móviles */}
        <img
          src={headerImageMobile}
          alt="Centro de formación Esmera, especializado en el cuidado personal"
          className="w-full md:hidden "
        />

        {/* Imagen para dispositivos de escritorio */}
        <img
          src={headerImageDesktop}
          alt="Centro de formación Esmera, especializado en el cuidado personal"
          className="w-full object-cover hidden md:block"
        />

        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col items-center justify-center px-4 sm:px-8 md:px-16">
          <motion.h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
            CONTACTO
          </motion.h1>
        </div>
      </motion.div>

      {/* Formulario de contacto */}
      <motion.div
        className="max-w-3xl w-full px-6 py-8 bg-white rounded-2xl shadow-2xl my-10 mx-4 sm:mx-8 -mt-20 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-2xl font-semibold text-center text-[#0057a8] mb-6">
          Envíanos tu mensaje
        </h2>

        <form className="space-y-6">
          {/* Nombre Completo */}
          <div className="relative">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              placeholder="Ingrese su nombre completo"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0057a8] focus:outline-none"
            />
          </div>

          {/* Correo Electrónico */}
          <div className="relative">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              placeholder="Ingrese su correo electrónico"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0057a8] focus:outline-none"
            />
          </div>

          {/* Teléfono */}
          <div className="relative">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              placeholder="Ingrese su número de teléfono"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0057a8] focus:outline-none"
            />
          </div>

          {/* Checkbox de Términos y Condiciones */}
          <div className="flex items-center space-x-3">
            <input
              id="terms"
              type="checkbox"
              className="checkbox checkbox-primary"
            />
            <label htmlFor="terms" className="text-gray-700 text-sm">
              He leído y acepto los{" "}
              <a href="/terms" className="text-[#0057a8] hover:underline">
                términos y condiciones
              </a>
            </label>
          </div>

          {/* Botón de Enviar */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="w-full py-3 px-6  cursor-pointer text-white bg-[#0057a8] rounded-lg shadow-lg hover:bg-[#004a91] hover:shadow-xl focus:outline-none transition duration-300"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      </motion.div>

      {/* Testimonios */}
      <motion.div
        className="flex flex-col items-center justify-center space-y-12 my-4 lg:my-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl lg:text-5xl font-semibold text-center text-[#0057a8] mb-8">
          Lo que dicen nuestros alumnos...
        </h2>

        {/* Contenedor de tarjetas responsivas */}
        <div className="flex flex-wrap justify-center gap-10 px-4 sm:px-8">
          {/* Testimonio 1 */}
          <motion.div
            className="bg-white w-full sm:w-96  shadow-lg rounded-xl p-6  transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#0057a8]">
                <img
                  src={fernandoImage}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Fernando Garcia
                </h3>
                <p className="text-sm text-gray-500">
                  Estudiante de Barbería Profesional
                </p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "El curso de estética profesional me ha ayudado a mejorar mis
              habilidades y a aprender nuevas técnicas. ¡Estoy muy contento con
              los resultados!"
            </p>
          </motion.div>

          {/* Testimonio 2 */}
          <motion.div
            className="bg-white w-full sm:w-96 shadow-lg rounded-xl p-6  transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#008e47]">
                <img
                  src={sandraImage}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Sandra Cardona
                </h3>
                <p className="text-sm text-gray-500">
                  Estudiante de Peluqueria
                </p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "El curso de micropigmentación me ha permitido aprender nuevas
              técnicas y mejorar mi técnica. ¡Estoy muy contenta con los
              resultados!"
            </p>
          </motion.div>

          {/* Testimonio 3 */}
          <motion.div
            className="bg-white w-full sm:w-96  shadow-lg rounded-xl p-6  transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#0057a8]">
                <img
                  src={saraImage}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Sara Salazar
                </h3>
                <p className="text-sm text-gray-500">Estudiante de Estètica</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "El curso de barbería internacional me ha permitido aprender
              nuevas técnicas y mejorar mi técnica. ¡Estoy muy contento con los
              resultados!"
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactPage;
