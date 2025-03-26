import { useParams } from "react-router-dom";
import courses from "../data/courses";
import CourseList from "../components/Courses/CourseList";
import { useRef } from "react";

// Tipado para la categoría de cursos

const CourseDetails = () => {
  const { categoria } = useParams<{ categoria: string }>(); // Tipamos useParams
  const categoriaData = courses[categoria as keyof typeof courses]; // Tipamos el acceso a la categoría

  // Creamos una referencia para la lista de cursos
  const courseListRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToCourseList = () => {
    // Usamos el método scrollIntoView para hacer scroll hacia la lista de cursos
    if (courseListRef.current) {
      courseListRef.current.scrollIntoView({
        behavior: "smooth", // Desplazamiento suave
        block: "start", // Aseguramos que el elemento se alinee al inicio
      });
    }
  };

  if (!categoriaData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="d-alert d-alert-error w-96">
          <span className="text-xl">Categoría no encontrada</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Banner con título y descripción */}
      <div className="relative w-full">
        <picture>
          {/* Imagen para dispositivos móviles */}
          <source
            media="(max-width: 768px)"
            srcSet={categoriaData.bannerMobile}
          />
          {/* Imagen para escritorio */}
          <img
            src={categoriaData.bannerDesktop}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-left p-4 ">
          <div className="">
            <h1 className="text-2xl lg:text-4xl font-bold text-white">
              {categoriaData.title}
            </h1>
            <p
              dangerouslySetInnerHTML={{
                __html: categoriaData.description_html,
              }}
            ></p>
            <button
              onClick={handleScrollToCourseList} // Llamamos la función cuando se hace clic
              className={`d-btn d-btn-md lg:d-btn-lg  py-3 text border-none text-white rounded-3xl shadow-md hover:shadow-lg transition-all ${categoriaData.btn_color} 
  sm:px-4 sm:py-2 sm:text-sm md:px-6 md:py-3 md:text-base`}
            >
              Ver todos los cursos
            </button>
          </div>
        </div>
      </div>

      {/* Lista de cursos, ahora con referencia para hacer scroll */}
      <div ref={courseListRef} className="py-20">
        <CourseList categoria={categoria ?? ""} cursos={categoriaData.cursos} />
      </div>
    </div>
  );
};

export default CourseDetails;
