import { useState } from "react";
import bannerTest from "../assets/banners/banner.png";
import { CheckCircle } from "lucide-react";

const CourseInfo = () => {
  const course = {
    title: "Curso Profesional de Barbería Internacional",
    description:
      "Conviértete en un experto en barbería con formación de nivel internacional. Obtén tu certificación y abre las puertas a nuevas oportunidades laborales en cualquier parte del mundo.",
    offersYou:
      "Este curso te ofrece una formación completa en todas las técnicas de barbería modernas y clásicas, además de enseñarte a gestionar tu propia barbería. Al finalizar, tendrás la capacidad de ser un barbero altamente calificado y emprendedor.",
    targetAudience:
      "Este curso está dirigido a personas que desean comenzar una carrera en el mundo de la barbería, así como a aquellos que ya tienen experiencia pero quieren perfeccionar sus habilidades y obtener una certificación internacional.",
    temary: [
      "Módulo 1: Fundamentos de la Barbería",
      "Módulo 2: Técnicas de Corte y Afeitado",
      "Módulo 3: Estilos Modernos y Clásicos",
      "Módulo 4: Gestión de una Barbería",
    ],
    outputs: [
      "Trabajo en barberías internacionales",
      "Emprendimiento: abre tu propia barbería",
      "Asesoría de imagen personal",
      "Formador para nuevos barberos",
    ],
    image: bannerTest, // Imagen para el curso
  };

  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Actualizamos el estado con el nuevo valor
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario (recarga de página)
    console.log("Formulario enviado:", formData); // Imprimir los datos del formulario
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <section
        className="w-full h-96 text-white flex flex-col items-center justify-center relative mb-12"
        style={{
          backgroundImage: `url(${course.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Contenedor de texto alineado a la izquierda pero centrado en el banner */}
        <div className="relative w-full max-w-4xl pl-12">
          <h1 className="text-5xl font-extrabold mb-4 text-left">
            <span className="text-white text-3xl">Curso de</span> <br />
            <span className="text-5xl">Barbería Internacional</span>
          </h1>

          {/* Viñetas con ícono de check */}
          <div className="flex flex-col items-start mb-6">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-left mb-2">
              <CheckCircle className="w-5 h-5 text-white inline-block mr-2" />
              Formación Profesional
            </h3>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-left">
              <CheckCircle className="w-5 h-5 text-white inline-block mr-2" />
              Garantizamos tu futuro
            </h3>
          </div>

          {/* Texto de matrícula abierta con espacio entre letras */}
          <h2 className="text-2xl sm:text-xl font-semibold mb-6 text-left tracking-widest">
            MATRICULA ABIERTA 2025
          </h2>
          <button
            className={`d-btn d-btn-md lg:d-btn-lg py-3 text border-none bg-blue-600 text-white rounded-3xl shadow-md hover:shadow-lg transition-all  sm:px-4 sm:py-2 sm:text-sm md:px-6 md:py-3 md:text-base`}
            onClick={() => {
              document
                .getElementById("formulario")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label="Ir al formulario de inscripción"
          >
            Inscríbete Ahora
          </button>
        </div>
      </section>
      <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 px-4 py-12">
        {/* Columna izquierda: Información del curso */}
        <div className="space-y-6 flex-1">
          <h2 className="text-3xl font-semibold text-gray-800">
            {course.title}
          </h2>
          <p className="text-lg text-gray-700">{course.description}</p>

          {/* Qué ofrece el curso */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              ¿Qué te ofrece el curso?
            </h3>
            <p className="text-lg text-gray-700">{course.offersYou}</p>
          </div>

          {/* A quién va dirigido */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              ¿A quién va dirigido?
            </h3>
            <p className="text-lg text-gray-700">{course.targetAudience}</p>
          </div>

          {/* Salidas profesionales */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Temario</h3>
            <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
              {course.temary.map((tema, index) => (
                <li key={index}>{tema}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Salidas Profesionales
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
              {course.outputs.map((out, index) => (
                <li key={index}>{out}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Columna derecha: Formulario */}
        <div className="flex-1">
          <div
            className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6 h-fit sticky top-20"
            id="formulario"
          >
            <h2 className="text-2xl font-semibold text-white text-center">
              Solicita más información
            </h2>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre completo */}
              <div className="space-y-2">
                <label htmlFor="nombre" className="text-white">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full p-4 text-lg border border-gray-300 rounded-lg text-white bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Ingresa tu nombre completo"
                  required
                />
              </div>

              {/* Teléfono */}
              <div className="space-y-2">
                <label htmlFor="telefono" className="text-white">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full p-4 text-lg border border-gray-300 rounded-lg text-white bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Ingresa tu número de teléfono"
                  required
                />
              </div>

              {/* Correo electrónico */}
              <div className="space-y-2">
                <label htmlFor="correo" className="text-white">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  className="w-full p-4 text-lg border border-gray-300 rounded-lg text-white bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Ingresa tu correo electrónico"
                  required
                />
              </div>

              {/* Botón de envío */}
              <button
                type="submit"
                className="w-full py-3 text-lg font-semibold text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 transition-all"
              >
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Cursos relacionados */}
      <section className="w-full max-w-5xl my-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Cursos relacionados
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={`https://picsum.photos/400/250?random=${id}`}
                alt="Curso relacionado"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Curso Avanzado {id}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Curso especializado para mejorar tus habilidades.
                </p>
                <button className="w-full py-2 mt-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 cursor-pointer">
                  Más información
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0057a8] text-white py-16 lg:py-8 text-center w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
          NUESTROS VALORES
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 w-full">
          {/* Card 1 */}
          <div
            className="relative rounded-tl-lg rounded-tr-4xl rounded-br-lg overflow-hidden"
            style={{
              backgroundImage: "url('https://picsum.photos/300/300?1')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "220px",
              height: "200px",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative p-6">
              <h3 className="text-lg font-semibold text-center border-b pb-2">
                Compromiso con la Calidad
              </h3>
              <p className="mt-4 text-xs">
                Ofrecemos educación de la más alta calidad, transformando vidas.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative rounded-tl-lg rounded-tr-4xl rounded-br-lg overflow-hidden"
            style={{
              backgroundImage: "url('https://picsum.photos/300/300?2')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "220px",
              height: "200px",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative p-6">
              <h3 className="text-lg font-semibold text-center border-b pb-2">
                Innovación Constante
              </h3>
              <p className="mt-4 text-xs">
                Siempre un paso adelante, adaptándonos a nuevas tendencias.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="relative rounded-tl-lg rounded-tr-4xl rounded-br-lg overflow-hidden"
            style={{
              backgroundImage: "url('https://picsum.photos/300/300?3')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "220px",
              height: "200px",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative p-6">
              <h3 className="text-lg font-semibold text-center border-b pb-2">
                Enfoque Personalizado
              </h3>
              <p className="mt-4 text-xs">
                Atención individualizada para apoyar a cada estudiante.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="relative rounded-tl-lg rounded-tr-4xl rounded-br-lg overflow-hidden"
            style={{
              backgroundImage: "url('https://picsum.photos/300/300?4')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "220px",
              height: "200px",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative p-6">
              <h3 className="text-lg font-semibold text-center border-b pb-2">
                Excelencia Profesional
              </h3>
              <p className="mt-4 text-xs">
                Formamos profesionales íntegros y preparados para el futuro.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseInfo;
