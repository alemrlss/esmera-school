import React, { useState, useEffect } from 'react';

function Carousel() {
    const slides = [
        {
            id: "slide1",
            image: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
        },
        {
            id: "slide2",
            image: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
        },
        {
            id: "slide3",
            image: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
        },
        {
            id: "slide4",
            image: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);
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
                        <img src={slide.image} className="w-full" alt={`Slide ${slide.id}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
