import construccion from "../assets/mi-campus/construyendo.png";
import useGoToPage from "../hooks/useGoToPage";

function MiCampus() {
  const goToPage = useGoToPage(); // Usamos el hook

  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-20 lg:py-10 bg-gray-100 text-center px-6">
      {/* Título de la página */}
      <h1 className="text-4xl sm:text-6xl font-semibold text-[#0057a8]">
        ¡Estamos trabajando para ti!
      </h1>

      {/* Subtítulo */}
      <p className="text-lg sm:text-xl text-gray-600">
        Nuestro campus virtual está en fase de desarrollo. En poco tiempo podrás
        acceder a contenido exclusivo.
      </p>

      {/* GIF */}
      <img
        src={construccion} // Cambia esto por la ruta correcta de tu GIF
        alt="En construcción"
        className="w-full sm:w-1/2 h-auto mt-6" // Ajuste para que el GIF sea responsive
      />

      {/* Botón de regreso al inicio */}
      <button
        onClick={() => goToPage("/")}
        className="mt-6 px-6 py-3 bg-[#0057a8] text-white text-lg cursor-pointer sm:text-xl font-semibold rounded-lg hover:bg-[#0057a8d0] transition"
      >
        Ir al Inicio
      </button>
    </div>
  );
}

export default MiCampus;
