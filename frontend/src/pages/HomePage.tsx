import Carousel from "../components/Caraousel";
import Certifications from "../components/Homepage/Certifications";
import ContactForm from "../components/Homepage/ContactForm";
import KeyMetrics from "../components/Homepage/KeyMetrics";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Carousel />

      <div className="text-center mt-2">
        <h1 className="text-3xl md:text-6xl font-extrabold">
          Centro de Formación
        </h1>
        <h2 className="text-lg md:text-3xl font-bold relative inline-block">
          con más de 20 años de experiencia
        </h2>
      </div>

      <div className="d-divider w-1/4 mx-auto "></div>
      <p className="text-center mx-10 lg:mx-96">
        Descubre la excelencia en formación de estética y belleza. Con más de 20
        años de experiencia, te preparamos para ser un profesional destacado en
        el mundo del cuidado personal. Con más de 20 años de experiencia, te
        preparamos para ser un profesional destacado en el mundo del cuidado
        personal
      </p>

      <KeyMetrics />
      <Certifications />
      <ContactForm />
    </div>
  );
}

export default HomePage;
