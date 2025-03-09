import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import barberiaImage from "../../assets/homepage/barberia.png";
import peluqueriaImage from "../../assets/homepage/peluqueria.png";
import unasImage from "../../assets/homepage/unas.png";
import esteticaImage from "../../assets/homepage/estetica.png";

const CourseChoice = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-1 mb-1">
      {/* Primer cuadro */}
      <div
        className="relative h-64 bg-cover bg-center opacity-90 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center hover:cursor-pointer"
        style={{ backgroundImage: `url(${barberiaImage})` }}
        onClick={() => handleNavigation("/cursos/barberia")}
      >
        <div className="text-white text-2xl font-semibold">Barbería</div>
      </div>

      {/* Segundo cuadro */}
      <div
        className="relative h-64 bg-cover bg-center opacity-90 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center hover:cursor-pointer"
        style={{ backgroundImage: `url(${peluqueriaImage})` }}
        onClick={() => handleNavigation("/cursos/peluqueria")}
      >
        <div className="text-white text-2xl font-semibold">Peluquería</div>
      </div>

      {/* Tercer cuadro */}
      <div
        className="relative h-64 bg-cover bg-center opacity-90 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center hover:cursor-pointer"
        style={{ backgroundImage: `url(${esteticaImage})` }}
        onClick={() => handleNavigation("/cursos/estetica")}
      >
        <div className="text-white text-2xl font-semibold">Estética</div>
      </div>

      {/* Cuarto cuadro */}
      <div
        className="relative h-64 bg-cover bg-center opacity-90 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center hover:cursor-pointer"
        style={{ backgroundImage: `url(${unasImage})` }}
        onClick={() => handleNavigation("/cursos/unas")}
      >
        <div className="text-white text-2xl font-semibold">Uñas</div>
      </div>
    </div>
  );
};

export default CourseChoice;
