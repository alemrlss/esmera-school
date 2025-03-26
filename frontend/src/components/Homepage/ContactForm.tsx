import { Mail, Phone, User } from "lucide-react";
import { useState } from "react";

function ContactForm() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className="w-full pt-32 pb-5 bg-[#0057a8]"
      style={{ clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 p-8 bg-white rounded-xl shadow-lg mb-0 md:mb-0">
          <h3 className="text-4xl font-extrabold mb-8 text-center text-[#0057a8]">
            Contáctanos
          </h3>
          <form className="space-y-6">
            <div className="relative">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Nombre Completo
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ingrese su nombre"
                  className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0057a8] focus:outline-none"
                />
                <User className="absolute top-3 left-3 text-gray-500" />
              </div>
            </div>

            <div className="relative">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Correo Electrónico
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Ingrese su correo"
                  className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0057a8] focus:outline-none"
                />
                <Mail className="absolute top-3 left-3 text-gray-500" />
              </div>
            </div>

            {/* Campo Teléfono */}
            <div className="relative">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Teléfono
              </label>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Ingrese su número de teléfono"
                  className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0057a8] focus:outline-none"
                />
                <Phone className="absolute top-3 left-3 text-gray-500" />
              </div>
            </div>

            {/* Casilla de verificación para aceptar términos */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="terms"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="w-5 h-5 text-[#0057a8] border-gray-300 rounded focus:ring-[#0057a8] focus:ring-2"
              />
              <label htmlFor="terms" className="text-gray-700 text-sm">
                Estoy de acuerdo con los{" "}
                <a href="/terminos" className="text-[#0057a8] underline">
                  términos y condiciones.
                </a>
              </label>
            </div>

            {/* Botón de Enviar */}
            <div className="text-center mt-6">
              <button
                type="submit"
                className={`w-full py-3 px-6 text-white rounded-lg shadow-lg transition duration-300 ${
                  isChecked
                    ? "bg-[#0057a8] hover:bg-[#004a91] hover:shadow-xl"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={!isChecked} // Desactiva el botón si no está marcado
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>

        {/* Sección de la derecha: Acordeón */}
        <div className="w-full md:w-1/2 mt-0 md:mt-0 md:pl-12">
          <h2 className="text-3xl font-bold text-[#0057a8] mb-6">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-4">
            {/* Acordeón 1 */}
            <div className="d-collapse bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-1" />
              <div className="d-collapse-title font-semibold text-lg">
                ¿Cuáles son los horarios de clases?
              </div>
              <div className="d-collapse-content text-sm">
                Nuestros horarios varían según el nivel y curso. Contamos con
                clases en la mañana y la tarde. Puedes consultar los horarios
                específicos en nuestra página web o visitándonos en la escuela.
              </div>
            </div>

            {/* Acordeón 2 */}
            <div className="d-collapse bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-1" />
              <div className="d-collapse-title font-semibold text-lg">
                ¿Cuáles son los requisitos de inscripción?
              </div>
              <div className="d-collapse-content text-sm">
                Para inscribirte, necesitas presentar tu documento de identidad,
                llenar el formulario de inscripción y realizar el pago de la
                matrícula.
              </div>
            </div>

            {/* Acordeón 3 */}
            <div className="d-collapse bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-1" />
              <div className="d-collapse-title font-semibold text-lg">
                ¿La escuela ofrece actividades extracurriculares?
              </div>
              <div className="d-collapse-content text-sm">
                Sí, ofrecemos diversas actividades como deportes, arte, música y
                clubes estudiantiles. ¡Anímate a participar!
              </div>
            </div>

            {/* Acordeón 5 */}
            <div className="d-collapse bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-1" />
              <div className="d-collapse-title font-semibold text-lg">
                ¿Cómo se maneja la disciplina en la escuela?
              </div>
              <div className="d-collapse-content text-sm">
                Nuestra escuela sigue un reglamento disciplinario basado en el
                respeto y la convivencia. Fomentamos el diálogo y la resolución
                pacífica de conflictos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
