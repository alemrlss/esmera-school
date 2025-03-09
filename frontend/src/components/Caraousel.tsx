import { useState, useEffect } from "react";

function Carousel() {
  // Las imágenes del carrusel
  const slides = [
    {
      id: "slide1",
      image: "https://i.postimg.cc/FRdRNQNQ/5-1.png",
    },
    {
      id: "slide2",
      image: "https://i.postimg.cc/RhwZJQWs/4-1.png",
    },
    {
      id: "slide3",
      image: "https://i.postimg.cc/sXk220gG/3-1.png",
    },
    {
      id: "slide4",
      image: "https://i.postimg.cc/9X9MkVLd/2-1.png",
    },
    {
      id: "slide5",
      image: "https://i.postimg.cc/5NM0dGrZ/1-1.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // Cambiar de imagen cada 6 segundos
    return () => clearInterval(interval);
  }, [slides.length, currentIndex]);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full mx-auto">
      {/* Carrusel debajo (en móviles) o a la derecha (en escritorio) */}
      <div className="relative w-full md:w-full overflow-hidden h-auto md:h-80">
        <div
          className="flex transition-transform ease-in-out duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="relative w-full flex-shrink-0">
              <img
                src={slide.image}
                className="w-full h-auto"
                alt={`Slide ${slide.id}`}
              />
            </div>
          ))}
        </div>

        {/* Indicadores de navegación (puntos debajo de las imágenes) */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
