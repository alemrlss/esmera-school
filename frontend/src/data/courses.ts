import bannerTest from "../assets/cursos/barberia/banner-movil.png";
import bannerMobileBarberia from "../assets/cursos/barberia/banner-movil.png";
import bannerDesktopBarberia from "../assets/cursos/barberia/banner.png";

import bannerMobilePeluqueria from "../assets/cursos/peluqueria/banner-mobile.png";
import bannerDesktopPeluqueria from "../assets/cursos/peluqueria/banner.png";
import { IconType } from "react-icons";
import {
  FaBriefcase,
  FaChartLine,
  FaHeart,
  FaHeartbeat,
  FaLightbulb,
  FaMagic,
  FaPaintBrush,
  FaPalette,
  FaSmile,
  FaStar,
  FaUserTie,
} from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";
interface Benefit {
  title: string;
  description: string;
  icon: IconType;
}

// Tipo para un curso
interface Course {
  id: string;
  name: string;
  description: string;
  duration: string;
  image: string;
  isInternational: boolean;
  image2: string;
  offersYou: string;
  targetAudience: string;
  temary: string[];
  outputs: string[];
  relatedCourses: string[];
}
interface Category {
  title: string;
  bannerMobile: string;
  bannerDesktop: string;
  description_html: string;
  hex_color: string;
  benefits: Benefit[];
  courses: Course[]; // Lista de cursos dentro de cada categoría
}

interface Categories {
  barberia: Category;
  estetica: Category;
  peluqueria: Category;
  unas: Category;
  maquillaje: Category;
  // Puedes agregar más categorías aquí
}

const courses: Categories = {
  barberia: {
    title: "Cursos de Barbería",
    bannerMobile: bannerMobileBarberia,
    bannerDesktop: bannerDesktopBarberia,
    description_html: `
        <p class="text-xs lg:text-sm text-gray-200 mb-4 max-w-lg">
  Transforma tu pasión por el estilo y el cuidado personal en una <strong>carrera profesional</strong> con la 
  <span class="font-semibold">Escuela de Barbería de Esmera School</span>. 
  Aprende las <strong>técnicas más actuales</strong>, perfecciona tu talento y destaca en el vibrante mundo de la barbería moderna. 
  ¡<sp class="font-bold">Comienza tu camino al éxito</sp  an> con nosotros!
</p>
        `,
    hex_color: "#3F51B5",
    benefits: [
      {
        icon: FaScissors,
        title: "Alta demanda laboral",
        description:
          "El sector de la barbería se encuentra en constante crecimiento, con una alta demanda de profesionales capacitados en salones y emprendimientos propios.",
      },
      {
        icon: FaLightbulb,
        title: "Creatividad y estilo",
        description:
          "La barbería te permite expresar creatividad en cada corte, adaptando estilos a las tendencias actuales y a las preferencias personales de tus clientes.",
      },
      {
        icon: FaUserTie,
        title: "Independencia laboral",
        description:
          "Convertirte en barbero te brinda la oportunidad de trabajar de forma independiente, gestionar tu propio negocio y tener mayor control sobre tu carrera profesional.",
      },
      {
        icon: FaChartLine,
        title: "Crecimiento profesional",
        description:
          "El campo de la barbería se actualiza constantemente, ofreciendo formación continua, especialización y oportunidades de crecimiento en el ámbito profesional.",
      },
    ],
    courses: [
      {
        id: "master-internacional-barberia",
        name: "Master Internacional de Barbería",
        description:
          "Aprende las técnicas más efectivas para el cuidado y diseño de la barba. Desde el afeitado tradicional hasta el arreglo moderno.",
        duration: "1 mes",
        image: "https://picsum.photos/400/200?random=1",
        isInternational: true,
        image2: bannerDesktopPeluqueria, // Imagen para el curso
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
        relatedCourses: [
          "iniciacion-barberia",
          "colorimetria",
          "master-barberia",
        ],
      },
      {
        id: "master-barberia",
        name: "Master en Barbería",
        description:
          "Aprende las técnicas más efectivas para el cuidado y diseño de la barba. Desde el afeitado tradicional hasta el arreglo moderno.",
        duration: "1 mes",
        image: "https://picsum.photos/400/200?random=1",
        isInternational: false,
        image2: bannerDesktopPeluqueria, // Imagen para el curso
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
        relatedCourses: [
          "master-internacional-barberia",
          "iniciacion-barberia",
          "colorimetria",
        ],
      },
      {
        id: "iniciacion-barberia",
        name: "Iniciación a la Barbería",
        description:
          "Aprende las técnicas más efectivas para el cuidado y diseño de la barba. Desde el afeitado tradicional hasta el arreglo moderno.",
        duration: "1 mes",
        image: "https://picsum.photos/400/200?random=1",
        isInternational: false,
        image2: bannerDesktopPeluqueria, // Imagen para el curso
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
        relatedCourses: [
          "colorimetria",
          "master-barberia",
          "barberia-artistica",
        ],
      },
      {
        id: "colorimetria",
        name: "Colorimetría",
        description:
          "Aprende las técnicas más efectivas para el cuidado y diseño de la barba. Desde el afeitado tradicional hasta el arreglo moderno.",
        duration: "1 mes",
        image: "https://picsum.photos/400/200?random=1",
        isInternational: false,
        image2: bannerDesktopPeluqueria, // Imagen para el curso
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
        relatedCourses: [
          "master-internacional-barberia",
          "barberia-artistica",
          "master-barberia",
        ],
      },
      {
        id: "barberia-artistica",
        name: "Barbería Artística",
        description:
          "Aprende las técnicas más efectivas para el cuidado y diseño de la barba. Desde el afeitado tradicional hasta el arreglo moderno.",
        duration: "1 mes",
        image: "https://picsum.photos/400/200?random=1",
        isInternational: false,
        image2: bannerDesktopPeluqueria, // Imagen para el curso
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
        relatedCourses: [
          "master-internacional-barberia",
          "colorimetria",
          "master-barberia",
        ],
      },
    ],
  },
  peluqueria: {
    title: "Cursos de Peluquería",
    bannerMobile: bannerMobilePeluqueria,
    bannerDesktop: bannerDesktopPeluqueria,
    description_html: `
     <p class="text-xs lg:text-sm text-gray-200 mb-4 max-w-lg">
  Transforma tu pasión por el cabello y el estilismo en una <strong>carrera profesional</strong> con la 
  <span class="font-semibold">Escuela de Peluquería de Esmera School</span>. 
  Domina las <strong>técnicas más innovadoras</strong>, desarrolla tu creatividad y destaca en el dinámico mundo de la peluquería. 
  ¡<span class="font-bold">Dale estilo a tu futuro</span> con nosotros!
</p>

      `,

    hex_color: "#7C3AED",
    benefits: [
      {
        icon: FaBriefcase,
        title: "Alta demanda laboral",
        description:
          "El sector de la peluquería cuenta con una alta demanda de estilistas, tanto en salones de belleza como en emprendimientos independientes.",
      },
      {
        icon: FaPalette,
        title: "Creatividad y expresión",
        description:
          "La peluquería te permite expresar tu creatividad mediante cortes, coloraciones y peinados únicos, adaptados a las últimas tendencias.",
      },
      {
        icon: FaChartLine,
        title: "Oportunidades de crecimiento",
        description:
          "El sector de la belleza está en constante evolución, abriendo amplias oportunidades para el desarrollo profesional y el crecimiento de negocios.",
      },
      {
        icon: FaLightbulb,
        title: "Innovación en tendencias",
        description:
          "La constante innovación en técnicas y estilos te permite estar a la vanguardia, ofreciendo a tus clientes lo último en tendencias de peluquería.",
      },
    ],
    courses: [
      {
        id: "master-internacional-peluqueria",
        name: "Master Internacional en Peluquería",
        description:
          "Cortes modernos para mujeres que buscan estilo, desde cortes clásicos hasta los más innovadores.",
        duration: "3 meses",
        image: "https://picsum.photos/400/200?random=12",
        isInternational: true,
        image2: bannerTest, // Imagen para el curso
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
        relatedCourses: [
          "peluqueria-profesional-esmera",
          "auxiliar-peluqueria",
          "alto-rendimiento-peluqueria",
        ],
      },
      {
        id: "peluqueria-profesional-esmera",
        name: "Peluquería Profesional Esmera",
        description:
          "Cortes modernos para mujeres que buscan estilo, desde cortes clásicos hasta los más innovadores.",
        duration: "3 meses",
        image: "https://picsum.photos/400/200?random=12",
        isInternational: false,
        image2: bannerTest, // Imagen para el curso
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
        relatedCourses: [
          "master-internacional-peluqueria",
          "alto-rendimiento-peluqueria",
          "auxiliar-peluqueria",
        ],
      },
      {
        id: "auxiliar-peluqueria",
        name: "Auxiliar en Peluqueria",
        description:
          "Cortes modernos para mujeres que buscan estilo, desde cortes clásicos hasta los más innovadores.",
        duration: "3 meses",
        image: "https://picsum.photos/400/200?random=12",
        isInternational: false,
        image2: bannerTest, // Imagen para el curso
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
        relatedCourses: [
          "master-internacional-peluqueria",
          "alto-rendimiento-peluqueria",
          "peluqueria-profesional-esmera",
        ],
      },
      {
        id: "colorimetria-nivel-i",
        name: "Colorimetría Nivel I",
        description:
          "Cortes modernos para mujeres que buscan estilo, desde cortes clásicos hasta los más innovadores.",
        duration: "3 meses",
        image: "https://picsum.photos/400/200?random=12",
        isInternational: false,
        image2: bannerTest, // Imagen para el curso
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
        relatedCourses: [
          "peluqueria-plato",
          "alto-rendimiento-peluqueria",
          "auxiliar-peluqueria",
        ],
      },
      {
        id: "colorimetria-nivel-ii",
        name: "Colorimetría Nivel II",
        description:
          "Cortes modernos para mujeres que buscan estilo, desde cortes clásicos hasta los más innovadores.",
        duration: "3 meses",
        image: "https://picsum.photos/400/200?random=12",
        isInternational: false,
        image2: bannerTest, // Imagen para el curso
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
        relatedCourses: [
          "auxiliar-peluqueria",
          "alto-rendimiento-peluqueria",
          "peluqueria-plato",
        ],
      },
      {
        id: "peluqueria-plato",
        name: "Peluqueria de Plató",
        description:
          "Cortes modernos para mujeres que buscan estilo, desde cortes clásicos hasta los más innovadores.",
        duration: "3 meses",
        image: "https://picsum.photos/400/200?random=12",
        isInternational: false,
        image2: bannerTest, // Imagen para el curso
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
        relatedCourses: [
          "master-internacional-peluqueria",
          "auxiliar-peluqueria",
          "peluqueria-plato",
        ],
      },
      {
        id: "alto-rendimiento-peluqueria",
        name: "Curso Alto Rendimiento en Peluquería",
        description:
          "Cortes modernos para mujeres que buscan estilo, desde cortes clásicos hasta los más innovadores.",
        duration: "3 meses",
        image: "https://picsum.photos/400/200?random=12",
        isInternational: false,
        image2: bannerTest, // Imagen para el curso
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
        relatedCourses: [
          "master-internacional-peluqueria",
          "alto-rendimiento-peluqueria",
          "peluqueria-profesional-esmera",
        ],
      },
    ],
  },
  maquillaje: {
    title: "Cursos de Maquillaje",
    bannerMobile: bannerMobilePeluqueria,
    bannerDesktop: bannerDesktopPeluqueria,
    description_html: `
       <p class="text-xs lg:text-sm text-gray-200 mb-4 max-w-lg">
  Transforma tu pasión por el maquillaje en una <strong>carrera profesional</strong> con la 
  <span class="font-semibold">Escuela de Maquillaje de Esmera School</span>. 
  Domina las <strong>técnicas más actuales en makeup social, artístico y profesional</strong>, potencia tu estilo y deja huella en el mundo de la belleza. 
  ¡<span class="font-bold">Dale color a tu futuro</span> con nosotros!
</p>

      `,
    hex_color: "#F472B6",
    benefits: [
      {
        icon: FaMagic,
        title: "Alta demanda laboral",
        description:
          "El sector del maquillaje está en constante crecimiento, con alta demanda en salones, producciones cinematográficas y trabajos freelance.",
      },
      {
        icon: FaSmile,
        title: "Expresión creativa",
        description:
          "El maquillaje te permite plasmar tu creatividad, adaptando estilos y tendencias para realzar la belleza de cada persona.",
      },
      {
        icon: FaStar,
        title: "Oportunidades en el mundo del espectáculo",
        description:
          "Trabaja en producciones, sesiones fotográficas y eventos, aprovechando la amplia oferta que tiene la industria del entretenimiento.",
      },
      {
        icon: FaHeart,
        title: "Impacto en la autoestima",
        description:
          "El maquillaje no solo embellece, sino que también empodera a las personas, ayudándolas a sentirse seguras y a resaltar su individualidad.",
      },
    ],
    courses: [
      {
        id: "master-internacional-maquillaje",
        name: "Master Internacional en Maquillaje",
        description:
          "Curso introductorio para aprender técnicas básicas de maquillaje y cuidado de la piel.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=20",
        isInternational: true,
        image2: bannerTest, // Imagen para el curso
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
        relatedCourses: [
          "master-maquillaje",
          "iniciacion-maquillaje",
          "automaquillaje",
        ],
      },
      {
        id: "master-maquillaje",
        name: "Master en Maquillaje",
        description:
          "Curso introductorio para aprender técnicas básicas de maquillaje y cuidado de la piel.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=20",
        isInternational: false,
        image2: bannerTest, // Imagen para el curso
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
        relatedCourses: [
          "master-internacional-maquillaje",
          "iniciacion-maquillaje",
          "automaquillaje",
        ],
      },
      {
        id: "iniciacion-maquillaje",
        name: "Iniciación al Maquillaje",
        description:
          "Curso introductorio para aprender técnicas básicas de maquillaje y cuidado de la piel.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=20",
        isInternational: false,
        image2: bannerTest, // Imagen para el curso
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
        relatedCourses: [
          "master-internacional-maquillaje",
          "automaquillaje",
          "master-maquillaje",
        ],
      },
      {
        id: "automaquillaje",
        name: "Automaquillaje",
        description:
          "Curso introductorio para aprender técnicas básicas de maquillaje y cuidado de la piel.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=20",
        isInternational: false,
        image2: bannerTest, // Imagen para el curso
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
        relatedCourses: [
          "master-internacional-maquillaje",
          "master-maquillaje",
          "iniciacion-maquillaje",
        ],
      },
    ],
  },
  estetica: {
    title: "Cursos de Estética",
    bannerMobile: bannerMobilePeluqueria,
    bannerDesktop: bannerDesktopPeluqueria,
    description_html: `
      <p class="text-xs lg:text-sm text-gray-200 mb-4 max-w-lg">
  Transforma tu pasión por el cuidado y la belleza en una <strong>carrera profesional</strong> con la 
  <span class="font-semibold">Escuela de Estética de Esmera School</span>. 
  Aprende las <strong>últimas técnicas en estética facial y corporal</strong>, potencia tu talento y marca tendencia en el mundo del bienestar y la imagen personal. 
  ¡<span class="font-bold">Impulsa tu futuro con nosotros</span>!
</p>

      `,
    hex_color: "#34D399",
    benefits: [
      {
        icon: FaHeartbeat,
        title: "Alta demanda laboral",
        description:
          "La industria estética está en auge, ofreciendo múltiples oportunidades laborales en salones, spas y clínicas de belleza.",
      },
      {
        icon: FaLightbulb,
        title: "Innovación en técnicas",
        description:
          "La constante evolución en tratamientos y tecnología te permite estar a la vanguardia del sector estético.",
      },
      {
        icon: FaHeart,
        title: "Bienestar integral",
        description:
          "El sector estético promueve el cuidado personal y el bienestar integral, combinando salud y belleza.",
      },
      {
        icon: FaStar,
        title: "Crecimiento profesional",
        description:
          "Formarte en estética abre puertas a especializaciones y oportunidades de desarrollo en un mercado competitivo.",
      },
    ],
    courses: [
      {
        id: "master-internacional-estetica",
        name: "Master Internacional en Estética",
        description:
          "Curso especializado en tratamientos faciales y rejuvenecimiento, incluyendo técnicas antiarrugas y exfoliación.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=26",
        isInternational: true,
        image2: bannerTest, // Imagen para el curso
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
        relatedCourses: [
          "estetica-integral-esmera",
          "estetica-facial",
          "estetica-corporal",
        ],
      },
      {
        id: "estetica-integral-esmera",
        name: "Estética Integral Esmera",
        description:
          "Curso especializado en tratamientos faciales y rejuvenecimiento, incluyendo técnicas antiarrugas y exfoliación.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=26",
        isInternational: false,
        image2: bannerTest, // Imagen para el curso
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
        relatedCourses: [
          "master-internacional-estetica",
          "estetica-facial",
          "estetica-corporal",
        ],
      },
      {
        id: "estetica-facial",
        name: "Estética Facial",
        description:
          "Curso especializado en tratamientos faciales y rejuvenecimiento, incluyendo técnicas antiarrugas y exfoliación.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=26",
        isInternational: false,
        image2: bannerTest, // Imagen para el curso
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
        relatedCourses: [
          "estetica-integral-esmera",
          "master-internacional-estetica",
          "estetica-corporal",
        ],
      },
      {
        id: "estetica-corporal",
        name: "Estética Corporal",
        description:
          "Curso especializado en tratamientos faciales y rejuvenecimiento, incluyendo técnicas antiarrugas y exfoliación.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=26",
        isInternational: false,
        image2: bannerTest, // Imagen para el curso
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
        relatedCourses: [
          "estetica-facial",
          "master-internacional-estetica",
          "depilacion",
        ],
      },
      {
        id: "electroestetica",
        name: "Electroestética",
        description:
          "Curso especializado en tratamientos faciales y rejuvenecimiento, incluyendo técnicas antiarrugas y exfoliación.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=26",
        isInternational: false,
        image2: bannerTest, // Imagen para el curso
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
        relatedCourses: [
          "master-internacional-estetica",
          "estetica-integral-esmera",
          "estetica-corporal",
        ],
      },
      {
        id: "depilacion",
        name: "Depilación",
        description:
          "Curso especializado en tratamientos faciales y rejuvenecimiento, incluyendo técnicas antiarrugas y exfoliación.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=26",
        isInternational: false,
        image2: bannerTest, // Imagen para el curso
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
        relatedCourses: [
          "master-internacional-estetica",
          "estetica-facial",
          "estetica-corporal",
        ],
      },
    ],
  },
  unas: {
    title: "Cursos de Uñas",
    bannerMobile: bannerMobilePeluqueria,
    bannerDesktop: bannerDesktopPeluqueria,
    description_html: `
    <p class="text-xs lg:text-sm text-gray-200 mb-4 max-w-lg">
  Transforma tu pasión por el diseño de uñas en una <strong>carrera profesional</strong> con la 
  <span class="font-semibold">Escuela de Uñas de Esmera School</span>. 
  Aprende las <strong>técnicas más innovadoras en esculpido, nail art y cuidado profesional</strong>, desarrollá tu creatividad y destacá en el universo de la manicura moderna. 
  ¡<span class="font-bold">Empezá a construir tu futuro con estilo</span>!
</p>`,
    hex_color: "#FB7185",
    benefits: [
      {
        icon: FaPaintBrush,
        title: "Creatividad en Nail Art",
        description:
          "El nail art ofrece infinitas posibilidades creativas, permitiéndote experimentar con diseños únicos y personalizados en cada cliente.",
      },
      {
        icon: FaHeartbeat,
        title: "Cuidado y Salud de las Uñas",
        description:
          "Mantener unas uñas bien cuidadas no solo embellece, sino que también promueve la salud y previene problemas como infecciones y fragilidad.",
      },
      {
        icon: FaStar,
        title: "Crecimiento Profesional",
        description:
          "El mercado del nail art está en auge, abriendo oportunidades laborales en salones y centros de estética, y permitiendo especialización.",
      },
      {
        icon: FaLightbulb,
        title: "Innovación Constante",
        description:
          "Nuevas técnicas y productos llegan constantemente al mercado, lo que impulsa la innovación y te permite estar a la vanguardia en tendencias.",
      },
    ],
    courses: [
      {
        id: "master-internacional-unas",
        name: "Master Internacional en Uñas",
        description:
          "Curso completo de manicure profesional, incluyendo técnicas de esmaltado, diseño y cuidado de las uñas.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=30",
        isInternational: true,
        image2: bannerTest, // Imagen para el curso
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
        relatedCourses: [
          "master-unas-esmera",
          "estetica-manos-y-pies",
          "mano-alzada",
        ],
      },
      {
        id: "master-unas-esmera",
        name: "Master en Uñas Esmera",
        description:
          "Curso completo de manicure profesional, incluyendo técnicas de esmaltado, diseño y cuidado de las uñas.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=30",
        isInternational: false,
        image2: bannerTest, // Imagen para el curso
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
        relatedCourses: [
          "master-internacional-unas",
          "estetica-manos-y-pies",
          "mano-alzada",
        ],
      },
      {
        id: "estetica-manos-y-pies",
        name: "Estética de Manos y Pies",
        description:
          "Curso completo de manicure profesional, incluyendo técnicas de esmaltado, diseño y cuidado de las uñas.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=30",
        isInternational: false,
        image2: bannerTest, // Imagen para el curso
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
        relatedCourses: [
          "master-internacional-unas",
          "propress-system",
          "manicura-rusa",
        ],
      },
      {
        id: "propress-system",
        name: "ProPress System",
        description:
          "Curso completo de manicure profesional, incluyendo técnicas de esmaltado, diseño y cuidado de las uñas.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=30",
        isInternational: false,
        image2: bannerTest, // Imagen para el curso
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
        relatedCourses: [
          "master-internacional-unas",
          "mano-alzada",
          "estetica-manos-y-pies",
        ],
      },
      {
        id: "mano-alzada",
        name: "Mano Alzada",
        description:
          "Curso completo de manicure profesional, incluyendo técnicas de esmaltado, diseño y cuidado de las uñas.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=30",
        isInternational: false,
        image2: bannerTest, // Imagen para el curso
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
        relatedCourses: [
          "propress-system",
          "estetica-manos-y-pies",
          "master-internacional-unas",
        ],
      },
      {
        id: "manicura-rusa",
        name: "Manicura Rusa",
        description:
          "Curso completo de manicure profesional, incluyendo técnicas de esmaltado, diseño y cuidado de las uñas.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=30",
        isInternational: false,
        image2: bannerTest, // Imagen para el curso
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
        relatedCourses: [
          "master-internacional-unas",
          "mano-alzada",
          "propress-system",
        ],
      },
    ],
  },
};

export default courses;
