import headerImage from "../assets/banners/banner_contacto.png"; // Cambia la ruta a la imagen que quieras usar.

function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* Encabezado con la imagen */}
      <div className="w-full relative">
        <img
          src={headerImage}
          alt="Encabezado de la página"
          className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            CONTACTO
          </h1>
        </div>
      </div>

      {/* Formulario de contacto */}
      <div className="max-w-4xl w-full px-6 py-8 bg-white rounded-2xl shadow-2xl my-20 mx-4 sm:mx-8 -mt-20 z-10">
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

          {/* Motivo de Interés */}
          <div className="relative">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Motivo de Interés
            </label>
            <textarea
              placeholder="¿Por qué estás interesado en contactarnos?"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0057a8] focus:outline-none"
              rows={4}
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

          {/* Checkbox de Autorización para Enviar Información */}
          <div className="flex items-center space-x-3">
            <input
              id="authorization"
              type="checkbox"
              className="checkbox checkbox-primary"
            />
            <label htmlFor="authorization" className="text-gray-700 text-sm">
              Autorizo a que un comercial pueda enviarme información relevante
              de la academia
            </label>
          </div>

          {/* Botón de Enviar */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="w-full py-3 px-6 text-white bg-[#0057a8] rounded-lg shadow-lg hover:bg-[#004a91] hover:shadow-xl focus:outline-none transition duration-300"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col items-center justify-center space-y-8 my-20">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center text-[#0057a8] mb-6">
          Lo que dicen nuestros alumnos...
        </h2>

        {/* Contenedor de tarjetas responsivas */}
        <div className="flex flex-wrap justify-center gap-8 px-4 sm:px-8">
          {/* Testimonio 1 */}
          <div className="d-card bg-base-100 w-full sm:w-96 md:w-80 shadow-xl rounded-lg p-6 transition-shadow duration-300 ease-in-out hover:shadow-2xl">
            <div className="d-flex items-center space-x-4 mb-4">
              <div className="d-avatar">
                <div className="w-24 rounded-xl">
                  <img src="https://randomuser.me/api/portraits/men/29.jpg" />
                </div>
              </div>

              <div>
                <h3 className="d-text-xl font-bold text-gray-800">
                  Sergio Marquez
                </h3>
                <p className="d-text-sm text-gray-500">
                  Estudiante de Estetica Profesional
                </p>
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">
              "El curso de estética profesional me ha ayudado a mejorar mis
              habilidades y a aprender nuevas técnicas. ¡Estoy muy contento con
              los resultados!"
            </p>
          </div>

          {/* Testimonio 2 */}
          <div className="d-card bg-base-100 w-full sm:w-96 md:w-80 shadow-lg rounded-lg p-6 transition-shadow duration-300 ease-in-out hover:shadow-2xl">
            <div className="d-flex items-center space-x-4 mb-4">
              <div className="d-avatar">
                <div className="w-24 rounded-xl">
                  <img src="https://randomuser.me/api/portraits/women/34.jpg" />
                </div>
              </div>
              <div>
                <h3 className="d-text-xl font-bold text-gray-800">
                  Ana García
                </h3>
                <p className="d-text-sm text-gray-500">
                  Estudiante de Micropigmentación
                </p>
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">
              "El curso de micropigmentación me ha permitido aprender nuevas
              técnicas y mejorar mi técnica. ¡Estoy muy contenta con los
              resultados!"
            </p>
          </div>

          {/* Testimonio 3 */}
          <div className="d-card bg-base-100 w-full sm:w-96 md:w-80 shadow-lg rounded-lg p-6 transition-shadow duration-300 ease-in-out hover:shadow-2xl">
            <div className="d-flex items-center space-x-4 mb-4">
              <div className="d-avatar">
                <div className="w-24 rounded-xl">
                  <img src="https://randomuser.me/api/portraits/men/22.jpg" />
                </div>
              </div>
              <div>
                <h3 className="d-text-xl font-bold text-gray-800">
                  Alejandro Morales
                </h3>
                <p className="d-text-sm text-gray-500">
                  Estudiante de Barberia Internacional
                </p>
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">
              "El curso de barbería internacional me ha permitido aprender
              nuevas técnicas y mejorar mi técnica. ¡Estoy muy contento con los
              resultados!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
