import { motion } from "framer-motion";
import headerImageMobile from "../assets/test/movil.png";
import headerImageDesktop from "../assets/test/desktop-test.png";

function NoticesPage() {
  const news = [
    {
      title: "5 Tips para mantener tus uñas limpias",
      description:
        "Descubre algunos consejos prácticos para tener unas uñas siempre limpias y saludables.",
      imageUrl: "https://picsum.photos/300/300",
    },
    {
      title: "Cómo mejorar tu productividad diaria",
      description:
        "Mejora tu enfoque y aumenta tu eficiencia con estos sencillos tips.",
      imageUrl: "https://picsum.photos/400/400",
    },
    {
      title: "Tendencias en la moda 2025",
      description:
        "Conoce las principales tendencias que dominarán la moda este año.",
      imageUrl: "https://picsum.photos/600/600",
    },
    {
      title: "Beneficios de meditar cada día",
      description:
        "La meditación puede cambiar tu vida, aprende sus beneficios.",
      imageUrl: "https://picsum.photos/500/500",
    },
    {
      title: "Guía para mantener un estilo de vida saludable",
      description:
        "Comer bien y hacer ejercicio, aprende a mantenerte saludable todos los días.",
      imageUrl: "https://picsum.photos/501/501",
    },
    {
      title: "Los mejores consejos para cuidar tu piel",
      description: "Cuida tu piel con estos simples pero efectivos consejos.",
      imageUrl: "https://picsum.photos/605/605",
    },
  ];

  return (
    <div>
      <motion.div className="w-full relative">
        {/* Imagen para dispositivos móviles */}
        <img
          src={headerImageMobile}
          alt="Centro de formación Esmera, especializado en el cuidado personal"
          className="w-full md:hidden "
        />

        {/* Imagen para dispositivos de escritorio */}
        <img
          src={headerImageDesktop}
          alt="Centro de formación Esmera, especializado en el cuidado personal"
          className="w-full object-cover hidden md:block"
        />

        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col items-center justify-center px-4 sm:px-8 md:px-16">
          <motion.h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
            BLOG
          </motion.h1>
        </div>
      </motion.div>

      {/* Contenido de noticias */}
      <div className="p-6 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {news.map((article, index) => (
            <motion.div
              key={index}
              className="d-card card bg-base-100 shadow-xl rounded-lg transform hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 0 }} // Inicialmente invisible y desplazada
              animate={{ opacity: 1, y: 0 }} // Animación a opacidad 1 y posición original
              transition={{ delay: index * 0.2, duration: 0.5 }} // Retraso para cada tarjeta
            >
              <figure className="overflow-hidden rounded-t-lg">
                <img
                  className="object-cover w-full h-48 sm:h-52 md:h-60 rounded-t-lg"
                  src={article.imageUrl}
                  alt={article.title}
                />
              </figure>
              <div className="card-body p-6">
                <h2 className="d-card-title text-xl font-semibold text-gray-900">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  {article.description}
                </p>
                <div className="d-card-actions justify-end mt-4">
                  <button className="d-btn d-btn-primary d-btn-md bg-[#0057a8] border-[#0057a8] hover:bg-transparent hover:text-[#0057a8] transition-all duration-300">
                    Leer más..
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NoticesPage;
