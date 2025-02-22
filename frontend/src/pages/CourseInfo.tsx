import { useParams } from "react-router-dom";
import courses from "../data/courses";

const CursoInfo = () => {
    const { categoria, id } = useParams();
    const categoriaData = courses[categoria];

    if (!categoriaData) {
        return <h2 className="text-center text-red-500 text-xl">Categoría no encontrada</h2>;
    }

    const curso = categoriaData.cursos.find((c) => c.id === (id));

    if (!curso) {
        return <h2 className="text-center text-red-500 text-xl">Curso no encontrado</h2>;
    }

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">{curso.nombre}</h1>
            <img src={curso.imagen} alt={curso.nombre} className="w-full h-60 object-cover rounded-lg shadow-md mb-4" />
            <p className="text-lg">{curso.descripcion}</p>
            <p className="text-gray-600 mt-2">Duración: {curso.duracion}</p>
        </div>
    );
};

export default CursoInfo;
