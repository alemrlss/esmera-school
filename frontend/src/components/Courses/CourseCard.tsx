import { Link } from "react-router-dom"; // Importamos el componente Link de React Router

// Definimos la interfaz para el objeto "curso"
interface Curso {
  id: string;
  imagen: string;
  nombre: string;
  isPopular: boolean;
}

// Definimos la interfaz para las props del componente
interface CourseCardProps {
  categoria: string;
  curso: Curso;
}

const CourseCard = ({ categoria, curso }: CourseCardProps) => {
  return (
    <div className="d-card bg-base-100 w-full sm:w-96 shadow-xs rounded-lg overflow-hidden hover:shadow-sm transition-all cursor-pointer">
      <Link to={`/cursos/${categoria}/${curso.id}`} className="block w-full h-full"> {/* Enlace en toda la tarjeta */}
        <figure className="relative w-full rounded-bl-3xl rounded-tr-3xl">
          <img
            src={curso.imagen}
            alt={curso.nombre}
            className="object-cover w-full h-48 sm:h-56 md:h-64 transition-all opacity-80 hover:opacity-90"
          />
          <div className="absolute inset-0 bg-black opacity-40 transition-all"></div> {/* Fondo oscuro */}
          
          {/* Etiqueta 'Popular' en la esquina superior izquierda */}
          {curso.isPopular && (
            <span className="d-badge d-badge-success absolute top-2 left-2 text-sm text-white font-bold">
              Nuevo
            </span>
          )}

          {/* Contenido de la tarjeta */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
            <h2 className="d-card-title text-xl font-semibold text-white mb-2">
              {curso.nombre}
            </h2>
            <button className="border text-white cursor-pointer border-white w-full md:w-auto rounded-lg px-4 py-2 mt-4">
              Más información
            </button>
          </div>
        </figure>
      </Link>
    </div>
  );
};

export default CourseCard;
