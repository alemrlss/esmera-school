import { useParams } from "react-router-dom";
import courses from "../data/courses"; // Asumo que los cursos están en un archivo de datos
import CourseList from "../components/Courses/CourseList"; // Componente que ya lista los cursos
import { useRef } from "react";
import { Award, Scissors, Briefcase, User } from "lucide-react"; // Importamos los íconos de lucide-react

// Tipado para la categoría de cursos
interface CourseCategory {
  bannerMobile: string;
  bannerDesktop: string;
  title: string;
  description_html: string;
  btn_color: string;
  courses: any[]; // Aquí puedes poner el tipo adecuado de curso
}

const benefits: any[] = [
  {
    icon: <Award className="w-8 h-8 text-teal-500" />, // Icono de reconocimiento
    title: "Alta demanda laboral",
    description:
      "Los servicios de barbería están en constante crecimiento, con muchas oportunidades laborales tanto en salones como de forma independiente.",
  },
  {
    icon: <Scissors className="w-8 h-8 text-teal-500" />, // Icono de tijeras
    title: "Habilidades prácticas",
    description:
      "Desarrolla habilidades en técnicas modernas de corte, afeitado y diseño de barba, con entrenamiento práctico.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-teal-500" />, // Icono de maletín
    title: "Emprendimiento",
    description:
      "Puedes emprender tu propio negocio de barbería, crear una marca personal y ofrecer servicios únicos.",
  },
  {
    icon: <User className="w-8 h-8 text-teal-500" />, // Icono de usuario
    title: "Conexión con el cliente",
    description:
      "Desarrolla una relación cercana con tus clientes, mejorando la fidelidad y creando una comunidad alrededor de tu barbería.",
  },
];

const CourseDetails = () => {
  const { category } = useParams<{ category: string }>(); // Tipamos useParams
  const categoryData = courses[category as keyof typeof courses] as
    | CourseCategory
    | undefined;

  // Creamos una referencia para la lista de cursos
  const courseListRef = useRef<HTMLDivElement | null>(null);

  // Función para hacer scroll hacia la lista de cursos
  const handleScrollToCourseList = () => {
    if (courseListRef.current) {
      courseListRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start", // Aseguramos que el elemento se alinee al inicio
      });
    }
  };

  // Si no se encuentra la categoría, mostramos un mensaje de error
  if (!categoryData) {
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
            srcSet={categoryData.bannerMobile}
          />
          {/* Imagen para escritorio */}
          <img
            src={categoryData.bannerDesktop}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </picture>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-left p-4">
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold text-white">
              {categoryData.title}
            </h1>
            <p
              dangerouslySetInnerHTML={{
                __html: categoryData.description_html,
              }}
            ></p>
            <button
              onClick={handleScrollToCourseList} // Llamamos la función cuando se hace clic
              className={`d-btn d-btn-md lg:d-btn-lg py-3 text border-none text-white rounded-3xl shadow-md hover:shadow-lg transition-all ${categoryData.btn_color} sm:px-4 sm:py-2 sm:text-sm md:px-6 md:py-3 md:text-base`}
            >
              Ver todos los cursos
            </button>
          </div>
        </div>
      </div>
      <div className="py-8 mt-8">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-0 lg:mx-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md space-y-4"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lista de cursos, ahora con referencia para hacer scroll */}
      <div ref={courseListRef} className="py-20">
        <CourseList category={category ?? ""} courses={categoryData.courses} />
      </div>
    </div>
  );
};

export default CourseDetails;
