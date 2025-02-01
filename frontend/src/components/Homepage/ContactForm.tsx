import { Mail, Phone, User } from "lucide-react";

function ContactForm() {
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

            {/* Botón de Enviar */}
            <div className="text-center mt-6">
              <button className="w-full py-3 px-6 text-white bg-[#0057a8] rounded-lg shadow-lg hover:bg-[#004a91] hover:shadow-xl focus:outline-none transition duration-300">
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>

        {/* Sección de la derecha: Acordeón (sin cambiar sintaxis de DaisyUI) */}
        <div className="w-full md:w-1/2 mt-0 md:mt-0 md:pl-12">
          <h2 className="text-3xl font-bold text-[#0057a8] mb-6">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-4">
            {/* Acordeón 1 */}
            <div className="d-collapse bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-1" />
              <div className="d-collapse-title font-semibold text-lg">
                Qué tipos de cursos ofrecen en la escuela?
              </div>
              <div className="d-collapse-content text-sm">
                estética facial, peluquería, maquillaje, depilación, entre
                otros.
              </div>
            </div>

            {/* Acordeón 2 */}
            <div className="d-collapse bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-1" />
              <div className="d-collapse-title font-semibold text-lg">
                ¿Ofrecen certificación al finalizar el curso?
              </div>
              <div className="d-collapse-content text-sm">
                o que los respalde profesionalmente al completar el curso.
              </div>
            </div>

            {/* Acordeón 3 */}
            <div className="d-collapse bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-1" />
              <div className="d-collapse-title font-semibold text-lg">
                ¿Es posible pagar en cuotas?
              </div>
              <div className="d-collapse-content text-sm">
                Si ofreces planes de pago a plazos, explica cómo funcionan.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
