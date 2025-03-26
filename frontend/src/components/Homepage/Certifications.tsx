import OmatLogo from "../../assets/certifications/omat.png";

function Certifications() {
  return (
    <div className="w-full mt-12">
      <h3 className="text-3xl font-extrabold mb-8 text-center">
        Certificaciones y Asociaciones
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-6xl px-6">
        {/* Certificación 1 */}
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-6 border border-gray-200 transition-transform duration-300 w-full aspect-w-1 aspect-h-1">
          <img
            src={OmatLogo}
            alt="Certificación ITEC"
            className="w-32 h-32 object-contain mb-4"
          />
          <p className="text-center font-bold text-lg">ISO 9001</p>
          <p className="text-sm text-center text-gray-600">
            Certificación en sistemas de gestión de calidad.
          </p>
        </div>

        {/* Certificación 2 */}
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-6 border border-gray-200 transition-transform duration-300 w-full aspect-w-1 aspect-h-1">
          <img
            src={OmatLogo}
            alt="Certificación OMAT"
            className="w-32 h-32 object-contain mb-4"
          />
          <p className="text-center font-bold text-lg">OMAT</p>
          <p className="text-sm text-center text-gray-600">
            Acreditación oficial en técnicas de masaje y bienestar.
          </p>
        </div>

        {/* Certificación 3 */}
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-6 border border-gray-200 transition-transform duration-300 w-full aspect-w-1 aspect-h-1">
          <img
            src={OmatLogo}
            alt="Certificación SEPE"
            className="w-32 h-32 object-contain mb-4"
          />
          <p className="text-center font-bold text-lg">Comunidad de Madrid</p>
          <p className="text-sm text-center text-gray-600">
            Reconocimiento oficial como agencia de colocación.
          </p>
        </div>

        {/* Certificación 4 */}
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-6 border border-gray-200 transition-transform duration-300 w-full aspect-w-1 aspect-h-1">
          <img
            src={OmatLogo}
            alt="Certificación Internacional"
            className="w-32 h-32 object-contain mb-4"
          />
          <p className="text-center font-bold text-lg">Euro Pass</p>
          <p className="text-sm text-center text-gray-600">
            Certificación en educación y desarrollo profesional.
          </p>
        </div>

        {/* Certificación 5 */}
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-6 border border-gray-200 transition-transform duration-300 w-full aspect-w-1 aspect-h-1">
          <img
            src={OmatLogo}
            alt="Certificación XYZ"
            className="w-32 h-32 object-contain mb-4"
          />
          <p className="text-center font-bold text-lg">Itec</p>
          <p className="text-sm text-center text-gray-600">
            Acreditación adicional en formación profesional.
          </p>
        </div>

        {/* Certificación 6 */}
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-6 border border-gray-200 transition-transform duration-300 w-full aspect-w-1 aspect-h-1">
          <img
            src={OmatLogo}
            alt="Certificación ABC"
            className="w-32 h-32 object-contain mb-4"
          />
          <p className="text-center font-bold text-lg">Certificado ABC</p>
          <p className="text-sm text-center text-gray-600">
            Certificación en educación y desarrollo profesional.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
