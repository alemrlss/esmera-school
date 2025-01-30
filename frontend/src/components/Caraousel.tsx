import React, { useState, useEffect } from "react";

function Carousel() {

  //Las imagenes deben ser 1200 x 400 
  const slides = [
    {
      id: "slide1",
      image: "https://i.postimg.cc/jS9GL4Q3/Dise-o-sin-t-tulo-2.png",
    },
    {
      id: "slide2",
      image: "https://i.postimg.cc/jS9GL4Q3/Dise-o-sin-t-tulo-2.png",
    },
    {
      id: "slide",
      image: "https://i.postimg.cc/jS9GL4Q3/Dise-o-sin-t-tulo-2.png",
    },
    {
      id: "slide4",
      image: "https://i.postimg.cc/jS9GL4Q3/Dise-o-sin-t-tulo-2.png",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden d-carousel w-full">
      <div
        className="flex transition-transform ease-in-out duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="d-carousel-item w-full flex-shrink-0">
            <img
              src={slide.image}
              className="w-full"
              alt={`Slide ${slide.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
