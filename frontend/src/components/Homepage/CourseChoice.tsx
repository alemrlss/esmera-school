import { useNavigate } from "react-router-dom";
import barberiaImage from "../../assets/homepage/barberia.png";
import peluqueriaImage from "../../assets/homepage/peluqueria.png";
import unasImage from "../../assets/homepage/unas.png";
import esteticaImage from "../../assets/homepage/estetica.png";

const CourseChoice = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string): void => {
    navigate(path); // Navega al path
    window.scrollTo(0, 0); // Hace scroll al principio de la página
  };

  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-1 mb-1">
      {/* Primer cuadro */}
      <div
        className="relative aspect-square bg-cover bg-center opacity-100 hover:opacity-90 transition-opacity duration-300 flex items-start justify-center hover:cursor-pointer"
        style={{ backgroundImage: `url(${barberiaImage})` }}
        onClick={() => handleNavigation("/cursos/barberia")}
      >
      </div>

      {/* Segundo cuadro */}
      <div
        className="relative aspect-square bg-cover bg-center opacity-100 hover:opacity-90 transition-opacity duration-300 flex items-start justify-center hover:cursor-pointer"
        style={{ backgroundImage: `url(${peluqueriaImage})` }}
        onClick={() => handleNavigation("/cursos/peluqueria")}
      >
      </div>

      {/* Tercer cuadro */}
      <div
        className="relative aspect-square bg-cover bg-center opacity-100 hover:opacity-90 transition-opacity duration-300 flex items-start justify-center hover:cursor-pointer"
        style={{ backgroundImage: `url(${esteticaImage})` }}
        onClick={() => handleNavigation("/cursos/estetica")}
      >
      </div>

      {/* Cuarto cuadro */}
      <div
        className="relative aspect-square bg-cover bg-center opacity-100 hover:opacity-90 transition-opacity duration-300 flex items-start justify-center hover:cursor-pointer"
        style={{ backgroundImage: `url(${unasImage})` }}
        onClick={() => handleNavigation("/cursos/unas")}
      >
      </div>
    </div>
  );
};

export default CourseChoice;
