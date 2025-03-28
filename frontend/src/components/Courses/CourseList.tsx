import CourseCard from "./CourseCard";

// Definimos la interfaz para el objeto "curso" (igual que en el componente anterior)
interface Curso {
  id: string;
  imagen: string;
  nombre: string;
  isPopular: boolean;
}

// Definimos la interfaz para las props del componente CourseList
interface CourseListProps {
  categoria: string;
  cursos: Curso[]; // Un arreglo de objetos "Curso"
}

const CourseList = ({ categoria, cursos }: CourseListProps) => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <h1 className="text-4xl font-bold text-center ">
        Cursos de {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-4 sm:mx-8 md:mx-0">
        {cursos.map((curso) => (
          <CourseCard key={curso.id} categoria={categoria} curso={curso} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
