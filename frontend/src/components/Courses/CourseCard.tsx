import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ categoria, curso }) => {
    return (
        <div className="border p-4 shadow-lg rounded-lg">
            <img src={curso.imagen} alt={curso.nombre} className="w-full h-40 object-cover" />
            <h3 className="text-lg font-bold mt-2">{curso.nombre}</h3>
            <p>{curso.descripcion}</p>
            <p className="text-sm text-gray-600">Duración: {curso.duracion}</p>
            <Link to={`/cursos/${categoria}/${curso.id}`} className="text-blue-500 mt-2 block">Ver más</Link>
        </div>
    );
};

export default CourseCard;
