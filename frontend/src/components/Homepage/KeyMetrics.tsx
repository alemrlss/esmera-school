function KeyMetrics() {
  return (
    <div
      className="bg-[#0057a8] text-white w-full py-24 "
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)" }}
    >
      <h3 className="text-3xl lg:text-5xl font-extrabold mb-4 text-center">
        Líder en enseñanza de estetica y cuidado personal
      </h3>

      <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16">
        {/* Item 1 */}
        <div className="relative flex flex-col items-center justify-center border-2 rounded-full shadow-lg w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 p-4">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold">+15.000</p>
          <div className="border-b border-gray-300 w-full my-2"></div>
          <p className="text-xs sm:text-sm md:text-base">Estudiantes</p>
        </div>
        {/* Item 3 */}
        <div className="relative flex flex-col items-center justify-center border-2 rounded-full shadow-lg w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 p-4">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold">+100</p>
          <div className="border-b border-gray-300 w-full my-2"></div>
          <p className="text-xs sm:text-sm md:text-base text-center">Cursos</p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center justify-center border-2 rounded-full shadow-lg w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 p-4">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold">+12.000</p>
          <div className="border-b border-gray-300 w-full my-2"></div>
          <p className="text-xs sm:text-sm md:text-base text-center">
            Visitas{" "}
          </p>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-center justify-center border-2 rounded-full shadow-lg w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 p-4">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold">+900</p>
          <div className="border-b border-gray-300 w-full my-2"></div>
          <p className="text-xs sm:text-sm md:text-base text-center">
            Reseñas en Google
          </p>
        </div>

        {/* Item 5 */}
        <div className="flex flex-col items-center justify-center border-2 rounded-full shadow-lg w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 p-4">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold">+10.000</p>
          <div className="border-b border-gray-300 w-full my-2"></div>
          <p className="text-xs sm:text-sm md:text-base">Egresados</p>
        </div>
      </div>
    </div>
  );
}

export default KeyMetrics;
