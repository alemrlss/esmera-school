import React from "react";
import CourseCard from "./CourseCard";

const CourseList = ({ categoria, cursos }) => {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-4xl font-bold text-center mb-12">
        Cursos de {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 ">
        {cursos.map((curso) => (
          <CourseCard key={curso.id} categoria={categoria} curso={curso} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
