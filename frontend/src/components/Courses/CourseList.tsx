import React from "react";
import CourseCard from "./CourseCard";

const CourseList = ({ categoria, cursos }) => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">Cursos de {categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h1>
            <div className="grid grid-cols-3 gap-4">
                {cursos.map((curso) => (
                    <CourseCard key={curso.id} categoria={categoria} curso={curso} />
                ))}
            </div>
        </div>
    );
};

export default CourseList;
