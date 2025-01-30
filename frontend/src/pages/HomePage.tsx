import { Mail, MessageCircle, Phone, Star, User } from "lucide-react"; // Importamos el icono de estrella
import Carousel from "../components/Caraousel";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Carousel />

      <div className="text-center mt-2">
        <h1 className="text-3xl md:text-6xl font-extrabold">
          Centro de Formación
        </h1>
        <h2 className="text-lg md:text-3xl font-bold relative inline-block">
          con más de 20 años de experiencia
        </h2>
      </div>

      <div className="d-divider w-1/4 mx-auto"></div>
      <p className="text-center mx-10 lg:mx-40">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, harum omnis. Facilis explicabo commodi sapiente ducimus laboriosam, culpa quas incidunt reiciendis provident, iste repellat ea expedita libero rem illum repellendus.
      </p>

      {/* Bloque nuevo */}
      <div className="bg-blue-400 text-white w-full py-12 mt-12">
        <h3 className="text-3xl font-extrabold mb-4 text-center">
          Líder en enseñanza de estetica y cuidado personal
        </h3>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Item 1 */}
          <div className="relative flex flex-col items-center justify-center border-2 rounded-full shadow-lg w-28 h-28 p-4">
            <p className="text-2xl font-bold">12,432</p>
            <div className="border-b border-gray-300 w-full my-2"></div>{" "}
            {/* Línea divisora */}
            <p className="text-xs">Estudiantes</p>
            {/* Distintivo de perfección (estrella) */}
            <div className="absolute top-0 right-0 mr-2 mt-2 text-yellow-400">
              <Star size={20} fill="#FFC300" />
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center justify-center border-2 rounded-full shadow-lg w-28 h-28 p-4">
            <p className="text-xl font-bold">120.000</p>
            <div className="border-b border-gray-300 w-full my-2"></div>{" "}
            {/* Línea divisora */}
            <p className="text-xs">Visitas</p>
          </div>

          {/* Item 3 */}
          <div className="relative flex flex-col items-center justify-center border-2 rounded-full shadow-lg w-28 h-28 p-4">
            <p className="text-2xl font-bold">32</p>
            <div className="border-b border-gray-300 w-full my-2"></div>{" "}
            {/* Línea divisora */}
            <p className="text-xs text-center">Cursos impartidos</p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center justify-center border-2 rounded-full shadow-lg w-28 h-28 p-4">
            <p className="text-2xl font-bold">4.8</p>
            <div className="border-b border-gray-300 w-full my-2"></div>{" "}
            {/* Línea divisora */}
            <p className="text-xs text-center">Valoracion en google</p>{" "}
            {/* Distintivo de perfección (estrella) */}
            <div className="absolute top-0 right-0 mr-2 mt-2 text-yellow-400">
              <Star size={20} fill="#FFC300" />
            </div>
          </div>

          {/* Item 5 */}
          <div className="flex flex-col items-center justify-center border-2 rounded-full shadow-lg w-28 h-28 p-4">
            <p className="text-2xl font-bold">25,000</p>
            <div className="border-b border-gray-300 w-full my-2"></div>{" "}
            {/* Línea divisora */}
            <p className="text-xs">Practicantes</p>
          </div>
        </div>
      </div>

      {/* Bloque de certificaciones */}
      <div className="w-full py-12 mt-12">
        <h3 className="text-3xl font-extrabold mb-8 text-center">
          Certificaciones y Asociaciones
        </h3>

        {/* Grid de certificaciones */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto max-w-6xl px-6">
          {/* Certificación 1 */}
          <div className="flex flex-col items-center justify-center border-2 rounded-lg shadow-lg p-4">
            <img
              src="/path-to-your-logo/ITEC-logo.png"
              alt="ITEC"
              className="w-24 h-24 object-contain mb-4"
            />
            <p className="text-center font-semibold">ITEC</p>
            <p className="text-sm text-center">
              Certificación internacional en estética y bienestar.
            </p>
          </div>

          {/* Certificación 2 */}
          <div className="flex flex-col items-center justify-center border-2 rounded-lg shadow-lg p-4">
            <img
              src="/path-to-your-logo/OMAT-logo.png"
              alt="OMAT"
              className="w-24 h-24 object-contain mb-4"
            />
            <p className="text-center font-semibold">OMAT</p>
            <p className="text-sm text-center">
              Acreditación oficial en técnicas de masaje y bienestar.
            </p>
          </div>

          {/* Certificación 3 */}
          <div className="flex flex-col items-center justify-center border-2 rounded-lg shadow-lg p-4">
            <img
              src="/path-to-your-logo/SEPE-logo.png"
              alt="SEPE"
              className="w-24 h-24 object-contain mb-4"
            />
            <p className="text-center font-semibold">SEPE</p>
            <p className="text-sm text-center">
              Reconocimiento oficial como agencia de colocación.
            </p>
          </div>

          {/* Certificación 4 */}
          <div className="flex flex-col items-center justify-center border-2 rounded-lg shadow-lg p-4">
            <img
              src="/path-to-your-logo/ISO9001-logo.png"
              alt="ISO 9001"
              className="w-24 h-24 object-contain mb-4"
            />
            <p className="text-center font-semibold">ISO 9001</p>
            <p className="text-sm text-center">
              Certificación en sistemas de gestión de calidad.
            </p>
          </div>

          {/* Certificación 5 */}
          <div className="flex flex-col items-center justify-center border-2 rounded-lg shadow-lg p-4">
            <img
              src="/path-to-your-logo/LOGO.png"
              alt="Logo"
              className="w-24 h-24 object-contain mb-4"
            />
            <p className="text-center font-semibold">Certificado XYZ</p>
            <p className="text-sm text-center">
              Acreditación adicional en formación profesional.
            </p>
          </div>

          {/* Certificación 6 */}
          <div className="flex flex-col items-center justify-center border-2 rounded-lg shadow-lg p-4">
            <img
              src="/path-to-your-logo/LOGO.png"
              alt="Logo"
              className="w-24 h-24 object-contain mb-4"
            />
            <p className="text-center font-semibold">Certificado ABC</p>
            <p className="text-sm text-center">
              Certificación en educación y desarrollo profesional.
            </p>
          </div>
        </div>
        <div className="w-full mt-12">
          <h3 className="text-3xl font-extrabold mb-8 text-center">
            Contáctanos
          </h3>
          <div className="w-full mt-12">
            <h3 className="text-4xl font-extrabold mb-8 text-center">
              Contáctanos
            </h3>
            <div className="max-w-4xl mx-auto px-6">
              <form className="shadow-md bg-base-100 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Campo Nombre */}
                  <div className="d-form-control relative">
                    <label className="d-label">
                      <span className="d-label-text">Nombre Completo</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Ingrese su nombre"
                        className="d-input d-input-bordered w-full pl-10"
                      />
                      <User className="absolute top-2.5 left-3 text-gray-500" />
                    </div>
                  </div>

                  {/* Campo Correo */}
                  <div className="d-form-control relative">
                    <label className="d-label">
                      <span className="d-label-text">Correo Electrónico</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Ingrese su correo"
                        className="d-input d-input-bordered w-full pl-10"
                      />
                      <Mail className="absolute top-2.5 left-3 text-gray-500" />
                    </div>
                  </div>

                  {/* Campo Teléfono */}
                  <div className="d-form-control relative">
                    <label className="d-label">
                      <span className="d-label-text">Teléfono</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        placeholder="Ingrese su número de teléfono"
                        className="d-input d-input-bordered w-full pl-10"
                      />
                      <Phone className="absolute top-2.5 left-3 text-gray-500" />
                    </div>
                  </div>

                  {/* Campo Motivo de Contacto */}
                  <div className="d-form-control">
                    <label className="d-label">
                      <span className="d-label-text">Motivo de Contacto</span>
                    </label>
                    <select className="d-select d-select-bordered w-full">
                      <option>Consultas sobre Cursos</option>
                      <option>Soporte Técnico</option>
                      <option>Información sobre Certificaciones</option>
                      <option>Otros</option>
                    </select>
                  </div>
                </div>

                {/* Campo Mensaje */}
                <div className="d-form-control mt-4">
                  <label className="d-label">
                    <span className="d-label-text">Mensaje</span>
                  </label>
                  <div className="relative">
                    <textarea
                      className="d-textarea d-textarea-bordered w-full pl-10"
                      placeholder="Escriba su mensaje aquí..."
                    ></textarea>
                    <MessageCircle className="absolute top-3 left-3 text-gray-500" />
                  </div>
                </div>

                {/* Botón de Enviar */}
                <div className="text-center mt-6">
                  <button className="d-btn d-btn-primary w-full md:w-1/2 d-btn-lg hover:scale-105 transition-transform">
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default HomePage;
