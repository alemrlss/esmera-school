import useGoToPage from "../../hooks/useGoToPage";

// Definimos la interfaz para el objeto "curso"
interface Course {
  id: string;
  image: string;
  name: string;
  isInternational: boolean;
}

// Definimos la interfaz para las props del componente
interface CourseCardProps {
  category: string;
  course: Course;
}

const CourseCard = ({ category, course }: CourseCardProps) => {
  const goToPage = useGoToPage(); // Usa el hook
  return (
    <div className="d-card bg-base-100 w-full sm:w-80 md:w-96 shadow-lg transition-all  cursor-pointer">
      <div onClick={() => goToPage(`/cursos/${category}/${course.id}`)}>
        {/* Enlace en toda la tarjeta */}
        <figure className="relative w-full h-[400px] sm:h-[400px] md:h-[400px] rounded-tr-2xl rounded-bl-2xl">
          {/* Imagen responsiva */}
          <img
            src={course.image}
            alt={course.name}
            className="object-cover w-full h-full transition-all duration-300"
          />
          {/* Fondo oscuro con efecto sutil */}
          <div className="absolute inset-0 bg-black opacity-30 hover:opacity-40 transition-all"></div>

          {course.isInternational && (
            <div className="bg-[#008e47] absolute transform -rotate-45 text-center text-white font-semibold py-1 left-[-34px] top-[32px] w-[170px]">
              Internacional
            </div>
          )}

          {/* Contenido de la tarjeta */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            {/* 🏆 Título del curso centrado verticalmente */}
            <h2 className="text-2xl font-semibold text-white drop-shadow-lg">
              {course.name}
            </h2>
          </div>

          {/* Botón fijo en la parte inferior */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <button className="bg-transparent text-sm lg:text-base text-white font-semibold border-2 rounded-lg px-6 py-2 shadow-md transition-all cursor-pointer hover:bg-white hover:text-black">
              Más información
            </button>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default CourseCard;
