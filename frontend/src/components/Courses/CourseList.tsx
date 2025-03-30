import CourseCard from "./CourseCard";

// Definimos la interfaz para el objeto "curso" (igual que en el componente anterior)
interface Course {
  id: string;
  image: string;
  name: string;
  isPopular: boolean;
}

// Definimos la interfaz para las props del componente CourseList
interface CourseListProps {
  category: string;
  courses: Course[]; // Un arreglo de objetos "Curso"
}

const CourseList = ({ category, courses }: CourseListProps) => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <h1 className="text-4xl font-bold text-center ">
        Cursos de {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-4 sm:mx-8 md:mx-0">
        {courses.map((course) => (
          <CourseCard key={course.id} category={category} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
