import { ArrowRight, X } from "lucide-react"; // Importa los iconos de flecha y de cierre
import { useState } from "react";

function PromoBar() {
  const [isVisible, setIsVisible] = useState(true); // Estado para mostrar/ocultar la barra

  const handleClose = () => {
    setIsVisible(false); // Cambiar el estado para ocultar la barra
  };

  if (!isVisible) return null; // Si no es visible, no renderiza la barra

  return (
    <div className="bg-gradient-to-r from-yellow-600 via-yellow-600 to-yellow-600 text-white px-4 py-2 w-full text-center shadow-xl flex flex-col sm:flex-row justify-between items-center relative">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-screen-xl mx-auto">
        {/* Contenedor de texto */}
        <div className="flex flex-col sm:flex-row justify-center items-center w-full mt-2 sm:mt-0">
          {/* Texto principal */}
          <p className="text-sm sm:text-lg md:text-xl font-medium max-w-4xl mx-auto mb-2 sm:mb-0">
            Becas disponibles de hasta 500 euros. Inscríbete hoy y comienza tu
            formación.
          </p>
        </div>

        {/* Botón (badge) de apuntarse a la derecha */}
        <button className="bg-yellow-500 text-white py-1 px-4 sm:px-6 rounded-lg hover:bg-yellow-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-yellow-300 transition duration-300 font-semibold flex items-center space-x-2 mt-2 sm:mt-0 ml-0 sm:ml-4">
          <span>Apuntarme</span>
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Botón de cierre (fuera del centro) */}
      <button
        onClick={handleClose}
        className="absolute top-2 right-4 text-white text-2xl cursor-pointer hover:text-red-700 focus:outline-none transition duration-300"
        aria-label="Cerrar"
      >
        <X />
      </button>
    </div>
  );
}

export default PromoBar;
