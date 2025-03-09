import Carousel from "../components/Caraousel";
import Certifications from "../components/Homepage/Certifications";
import ContactForm from "../components/Homepage/ContactForm";
import CourseChoice from "../components/Homepage/CourseChoice";
import KeyMetrics from "../components/Homepage/KeyMetrics";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Carousel />

      <div className="text-center mb-0 mt-8">
        <motion.h1
          className="text-3xl md:text-6xl font-semibold"
          initial={{ opacity: 0, y: 20 }} // Comienza con opacidad 0 y desplazado hacia abajo
          animate={{ opacity: 1, y: 0 }} // Finaliza con opacidad 1 y sin desplazamiento
          transition={{ duration: 0.6, ease: "easeOut" }} // Duración de la animación más corta
        >
          Centro de Formación
        </motion.h1>

        <motion.h2
          className="text-lg md:text-3xl relative inline-block"
          initial={{ opacity: 0, y: 20 }} // Comienza con opacidad 0 y desplazado hacia abajo
          animate={{ opacity: 1, y: 0 }} // Finaliza con opacidad 1 y sin desplazamiento
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} // Retraso de 0.2s para que se vea la animación después
        >
          con más de 20 años de experiencia
        </motion.h2>
      </div>

      <motion.div
        className="d-divider w-1/4 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }} // Retraso de 0.4s para la línea divisoria
      ></motion.div>

      <motion.p
        className="text-center mx-10 lg:mx-96 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }} // Retraso de 0.6s para el párrafo
      >
        Impulsa tu talento con una formación de excelencia en el mundo de la
        belleza. Aprende técnicas innovadoras y conviértete en un profesional
        altamente calificado.
      </motion.p>

      <CourseChoice />
      <KeyMetrics />
      <Certifications />
      <ContactForm />
    </div>
  );
}

export default HomePage;
