import { Link } from "react-router-dom"; // Asegúrate de importar Link de react-router-dom

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 min-h-screen bg-gray-100 text-center">
      {/* Título de error */}
      <h1 className="text-6xl font-extrabold text-blue-500">404</h1>
      <p className="text-2xl font-semibold text-gray-700">
        ¡Vaya! Página no encontrada
      </p>
      {/* Mensaje adicional */}
      <p className="text-lg text-gray-600">
        La página que buscas no está disponible o ha sido movida.
      </p>
      {/* Botón de redirección */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white text-xl font-semibold rounded-lg hover:bg-blue-600 transition"
      >
        Regresar al Inicio
      </Link>
    </div>
  );
}

export default NotFoundPage;
