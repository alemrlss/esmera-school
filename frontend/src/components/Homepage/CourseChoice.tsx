import React from "react";

const CourseChoice = () => {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-1 mb-1">
      {/* Primer cuadro */}
      <div
        className="relative h-64 bg-cover bg-center opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        style={{ backgroundImage: `url(https://picsum.photos/500/300?random=1)` }}
      >
        <div className="text-white text-2xl font-semibold">Barbería</div>
      </div>

      {/* Segundo cuadro */}
      <div
        className="relative h-64 bg-cover bg-center opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        style={{ backgroundImage: `url(https://picsum.photos/500/300?random=2)` }}
      >
        <div className="text-white text-2xl font-semibold">Peluquería</div>
      </div>

      {/* Tercer cuadro */}
      <div
        className="relative h-64 bg-cover bg-center opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        style={{ backgroundImage: `url(https://picsum.photos/500/300?random=3)` }}
      >
        <div className="text-white text-2xl font-semibold">Uñas</div>
      </div>

      {/* Cuarto cuadro */}
      <div
        className="relative h-64 bg-cover bg-center hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        style={{ backgroundImage: `url(https://picsum.photos/500/300?random=4)` }}
      >
        <div className="text-white text-2xl font-semibold">Estética</div>
      </div>
    </div>
  );
};

export default CourseChoice;
