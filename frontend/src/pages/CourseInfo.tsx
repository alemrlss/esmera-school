import { useState } from "react";
import { useParams } from "react-router-dom";
import courses from "../data/courses";
import useGoToPage from "../hooks/useGoToPage";
import amistadImage from "../assets/values/amistad.png";
import liderazgoImage from "../assets/values/liderazgo.png";
import servicioImage from "../assets/values/servicio.png";
import profesionalImage from "../assets/values/profesional.png";
import { FaCheckCircle } from "react-icons/fa";
const CourseInfo = () => {
  const goToPage = useGoToPage(); // Usa el hook

  const { category, id } = useParams<{ category: string; id: string }>();
  const categoryData = courses[category as keyof typeof courses];
  const course = categoryData?.courses?.find((c) => c.id === id);

  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
  });

  const relatedCourses = course?.relatedCourses?.map((relatedId) =>
    categoryData?.courses?.find((c) => c.id === relatedId)
  );

  if (!course) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="d-alert d-alert-error w-96">
          <span className="text-xl">Curso no encontrado</span>
        </div>
      </div>
    );
  }

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
          backgroundImage: `url(${course.image2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Contenedor de texto alineado a la izquierda pero centrado en el banner */}
        <div className="relative w-full max-w-4xl pl-12">
          <h1 className="text-5xl font-extrabold mb-4 text-left">
            <span className="text-white text-3xl">Curso de</span> <br />
            <span className="text-5xl">{course.name}</span>
          </h1>

          {/* Viñetas con ícono de check */}
          <div className="flex flex-col items-start mb-6">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-left mb-2">
              <FaCheckCircle className="w-5 h-5 text-white inline-block mr-2" />
              Formación Profesional
            </h3>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-left">
              <FaCheckCircle className="w-5 h-5 text-white inline-block mr-2" />
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
            {course.name}
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
          {relatedCourses?.map(
            (related) =>
              related && (
                <div
                  key={related.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={related.image} // Usamos la imagen que ya tiene el curso
                    alt={`Curso relacionado: ${related.name}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {related.name}{" "}
                      {/* Mostramos el nombre del curso relacionado */}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">
                      {related.description}{" "}
                      {/* Mostramos la descripción del curso */}
                    </p>
                    <button
                      onClick={() =>
                        goToPage(`/cursos/${category}/${related.id}`)
                      } // Redirige al curso con el id relacionado
                      className="w-full py-2 mt-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 cursor-pointer"
                    >
                      Más información
                    </button>
                  </div>
                </div>
              )
          )}
        </div>
      </section>

      <section className="bg-[#0057a8] text-white py-16 lg:py-8 text-center w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
          NUESTROS VALORES
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-20 my-10">
          {/* Amistad */}
          <div
            className="relative rounded-tl-lg rounded-tr-3xl rounded-br-lg overflow-hidden"
            style={{
              backgroundImage: `url(${amistadImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "200px",
              height: "200px",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative p-6">
              <h3 className="text-2xl font-semibold text-center border-b pb-2">
                Amistad
              </h3>
              <p className="mt-4 text-xs">Fomentamos compañerismo y respeto.</p>
            </div>
          </div>

          {/* Liderazgo */}
          <div
            className="relative rounded-tl-lg rounded-tr-3xl rounded-br-lg overflow-hidden"
            style={{
              backgroundImage: `url(${liderazgoImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "220px",
              height: "200px",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative p-6">
              <h3 className="text-2xl font-semibold text-center border-b pb-2">
                Liderazgo
              </h3>
              <p className="mt-4 text-xs">
                Inspiramos el cambio y la innovación.
              </p>
            </div>
          </div>

          {/* Servicio */}
          <div
            className="relative rounded-tl-lg rounded-tr-3xl rounded-br-lg overflow-hidden"
            style={{
              backgroundImage: `url(${servicioImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "220px",
              height: "200px",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative p-6">
              <h3 className="text-2xl font-semibold text-center border-b pb-2">
                Servicio
              </h3>
              <p className="mt-4 text-xs">
                Atención y apoyo a cada estudiante.
              </p>
            </div>
          </div>

          {/* Excelencia Profesional */}
          <div
            className="relative rounded-tl-lg rounded-tr-3xl rounded-br-lg overflow-hidden"
            style={{
              backgroundImage: `url(${profesionalImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "220px",
              height: "200px",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative p-6">
              <h3 className="text-2xl font-semibold text-center border-b pb-2">
                Excelencia Profesional
              </h3>
              <p className="mt-4 text-xs">Formamos profesionales íntegros.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseInfo;
