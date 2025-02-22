import { useParams } from "react-router-dom";
import courses from "../data/courses";
import CourseList from "../components/Courses/CourseList";

const CourseDetails = () => {
    const { categoria } = useParams();
    const categoriaData = courses[categoria];

    if (!categoriaData) {
        return <h2 className="text-center text-red-500 text-xl">Categoría no encontrada</h2>;
    }

    return (
        <div className="container mx-auto p-8">
            {/* Sección de información general */}
            <h1 className="text-3xl font-bold mb-4">{categoriaData.titulo}</h1>
            <p className="text-lg mb-4">{categoriaData.descripcion}</p>

            {/* Carrusel de imágenes */}
            <div className="flex gap-4 overflow-x-auto mb-6">
                {categoriaData.imagenes.map((img, index) => (
                    <img key={index} src={img} alt={`Imagen de ${categoriaData.titulo}`} className="w-1/3 h-40 object-cover rounded-lg shadow-md" />
                ))}
            </div>
            {/* Lista de cursos */}
            <CourseList categoria={categoria} cursos={categoriaData.cursos} />
        </div>
    );
};

export default CourseDetails;
