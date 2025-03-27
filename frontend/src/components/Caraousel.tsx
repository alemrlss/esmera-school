import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import imagenDesktop1 from "../assets/homepage/1.png";
import imagenDesktop2 from "../assets/homepage/2.png";
import imagenDesktop3 from "../assets/homepage/3.png";
import imageMobile1 from "../assets/homepage/1-mobile.png";
import imageMobile2 from "../assets/homepage/2-mobile.png";
import imageMobile3 from "../assets/homepage/3-mobile.png";

function Carousel() {
  // Imágenes para mobile y desktop
  const mobileSlides = [
    {
      id: "mobile1",
      image: imageMobile1,
    },
    {
      id: "mobile2",
      image: imageMobile2,
    },
    {
      id: "mobile3",
      image: imageMobile3,
    },
  ];

  const desktopSlides = [
    { id: "desktop1", image: imagenDesktop1 },
    { id: "desktop2", image: imagenDesktop2 },
    { id: "desktop3", image: imagenDesktop3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = isMobile ? mobileSlides : desktopSlides;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length, currentIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = startX - e.touches[0].clientX;
    if (diff > 50) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setIsDragging(false);
    } else if (diff < -50) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
      );
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const diff = startX - e.clientX;
    if (diff > 50) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setIsDragging(false);
    } else if (diff < -50) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
      );
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full mx-auto mb-0">
      <div
        className="relative w-full overflow-hidden h-auto"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div
          className="flex transition-transform ease-in-out duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative w-full flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={slide.image}
                className="w-full h-full object-contain"
                alt={`Slide ${slide.id}`}
                draggable={false}
                />
            </div>
          ))}
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((slide, index) => (
            <button
            key={slide.id}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
              }`}
              />
            ))}
        </div>
        {/* Flechas de navegación solo en desktop */}
        {!isMobile && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full md:flex hidden cursor-pointer"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full md:flex hidden cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Carousel;
