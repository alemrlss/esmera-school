import OmatLogo from "../../assets/certifications/omat.png";
import Iso9001Logo from "../../assets/certifications/iso9001.png";
import BritishLogo from "../../assets/certifications/british.png";
import ItecLogo from "../../assets/certifications/itec.png";
import ComunidadMadridLogo from "../../assets/certifications/comunidad-madrid.png";
import Europass from "../../assets/certifications/europass.png";

function Certifications() {
  return (
    <div className="w-full mt-12">
      <h3 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
        Certificaciones y Asociaciones
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto max-w-6xl px-6">
        {/* Certificación 3 */}
        <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 border border-gray-200 transition-transform duration-300 w-full">
          <img
            src={ComunidadMadridLogo}
            alt="Certificación Comunidad de Madrid"
            className="object-contain mb-4 h-24"
          />
          <p className="text-center font-bold text-lg text-gray-800">
            Comunidad de Madrid
          </p>
          <p className="text-sm text-center text-gray-600">
            Agencia de Colocación oficial reconocida por la Comunidad de Madrid.
          </p>
        </div>

        {/* Certificación 1 */}
        <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 border border-gray-200 transition-transform duration-300 w-full">
          <img
            src={Iso9001Logo}
            alt="Certificación ISO 9001"
            className="object-contain mb-4 h-24"
          />
          <p className="text-center font-bold text-lg text-gray-800">
            ISO 9001
          </p>
          <p className="text-sm text-center text-gray-600">
            Certificación internacional en sistemas de gestión de calidad.
          </p>
        </div>

        {/* Certificación 2 */}
        <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 border border-gray-200 transition-transform duration-300 w-full">
          <img
            src={OmatLogo}
            alt="Certificación OMAT"
            className="object-contain mb-4 h-24"
          />
          <p className="text-center font-bold text-lg text-gray-800">OMAT</p>
          <p className="text-sm text-center text-gray-600">
            Acreditación en técnicas de masaje y bienestar.
          </p>
        </div>


   {/* Certificación 5 */}
        <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 border border-gray-200 transition-transform duration-300 w-full">
          <img
            src={ItecLogo}
            alt="Certificación Itec"
            className="object-contain mb-4 h-24"
          />
          <p className="text-center font-bold text-lg text-gray-800">Itec</p>
          <p className="text-sm text-center text-gray-600">
            Acreditación en formación profesional técnica.
          </p>
        </div>
        {/* Certificación 4 */}
        <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 border border-gray-200 transition-transform duration-300 w-full">
          <img
            src={Europass}
            alt="Certificación Euro Pass"
            className="object-contain mb-4 h-24"
          />
          <p className="text-center font-bold text-lg text-gray-800">
            Euro Pass
          </p>
          <p className="text-sm text-center text-gray-600">
            Certificación que facilita la movilidad y el acceso a empleos en la
            UE.
          </p>
        </div>

     

        {/* Certificación 6 */}
        <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 border border-gray-200 transition-transform duration-300 w-full">
          <img
            src={BritishLogo}
            alt="Certificación British Council"
            className="object-contain mb-4 h-24"
          />
          <p className="text-center font-bold text-lg text-gray-800">
            British Council
          </p>
          <p className="text-sm text-center text-gray-600">
            Certificación internacional en educación y desarrollo profesional.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
