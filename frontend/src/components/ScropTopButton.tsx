import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para hacer scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Solo mostrar el botón si no está abierto el menú
  if (!isVisible) {
    return null;
  }

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-0 right-2 bg-[#019934] text-white p-2 hover:cursor-pointer rounded-t-full shadow-lg hover:bg-[#027e2b] transition z-20"
      aria-label="Scroll to top"
      initial={{ opacity: 0, y: 50 }} // Inicialmente invisibles y desplazados hacia abajo
      animate={{ opacity: 1, y: 0 }} // Aparecer y deslizar hacia su posición final
      exit={{ opacity: 0, y: 50 }} // Cuando se oculte, desaparecer y bajar
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
    </motion.button>
  );
}

export default ScrollToTopButton;
