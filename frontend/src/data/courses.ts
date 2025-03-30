import bannerTest from "../assets/banners/prueba-a.png";
import bannerBarberia from "../assets/cursos/banner-barberia.png";

import bannerMobileBarberia from "../assets/test/movil.png";
import bannerDesktopBarberia from "../assets/test/desktop.png";

import bannerMobilePeluqueria from "../assets/test/peluqueria-mobile.png";
import bannerDesktopPeluqueria from "../assets/test/peluqueria-desktop.png";

const courses = {
  barberia: {
    title: "Cursos de Barbería",
    bannerMobile: bannerMobileBarberia,
    bannerDesktop: bannerDesktopBarberia,
    description_html: `
        <p class="text-xs lg:text-sm text-gray-200 mb-4 max-w-lg">
          Transforma tu pasión por la belleza en una <strong>carrera profesional</strong> con la 
          <span class="font-semibold">Escuela de Estética de Esmera School</span>. 
          Aprende las <strong>últimas técnicas</strong>, innova y destaca en el dinámico mundo de la estética. 
          ¡<span class=" font-bold">Empieza tu viaje hacia el éxito</span> con nosotros!
        </p>
      `,
    images: [
      "https://picsum.photos/1200/400",
      "https://picsum.photos/1200/400",
    ],
    banner: bannerBarberia,
    btn_color: "bg-blue-700",
    courses: [
      {
        id: "corte-barba",
        name: "Corte de Barba",
        description:
          "Aprende las técnicas más efectivas para el cuidado y diseño de la barba. Desde el afeitado tradicional hasta el arreglo moderno.",
        duration: "1 mes",
        image: "https://picsum.photos/400/200?random=1",
        isPopular: true,
      },
      {
        id: "corte-degradado",
        name: "Corte Degradado",
        description:
          "Domina el arte del corte degradado, una de las técnicas más demandadas por los clientes modernos.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=2",
        isPopular: false,
      },
      {
        id: "corte-femenino",
        name: "Corte Femenino",
        description:
          "Curso especializado en cortes de cabello para mujeres, técnicas de styling y cortes de tendencia.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=3",
        isPopular: true,
      },
      {
        id: "peinados-especiales",
        name: "Peinados Especiales",
        description:
          "Aprende a crear peinados únicos para eventos especiales: bodas, fiestas y más.",
        duration: "1 mes",
        image: "https://picsum.photos/400/200?random=4",
        isPopular: false,
      },
      {
        id: "coloracion-capilar",
        name: "Coloración Capilar",
        description:
          "Curso completo sobre técnicas de coloración de cabello, desde mechas hasta tintes complejos.",
        duration: "3 meses",
        image: "https://picsum.photos/400/200?random=5",
        isPopular: true,
      },
      {
        id: "barberia-para-principiantes",
        name: "Barbería para Principiantes",
        description:
          "Conoce los fundamentos de la barbería, desde el afeitado clásico hasta cortes sencillos.",
        duration: "1 mes",
        image: "https://picsum.photos/400/200?random=6",
        isPopular: false,
      },
      {
        id: "tendencias-2025",
        name: "Tendencias 2025 en Corte y Estilo",
        description:
          "Curso que te prepara para las tendencias que dominarán el mundo de la barbería en los próximos años.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=7",
        isPopular: true,
      },
      {
        id: "corte-creativo",
        name: "Corte Creativo",
        description:
          "Técnicas avanzadas de corte que permiten crear estilos únicos y personalizados para cada cliente.",
        duration: "3 meses",
        image: "https://picsum.photos/400/200?random=8",
        isPopular: false,
      },
      {
        id: "corte-y-peinado-de-hombre",
        name: "Corte y Peinado de Hombre",
        description:
          "Especialízate en cortes y peinados para hombres, incluyendo estilos modernos y clásicos.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=9",
        isPopular: false,
      },
    ],
  },
  peluqueria: {
    title: "Academia de Peluquería",
    bannerMobile: bannerMobilePeluqueria,
    bannerDesktop: bannerDesktopPeluqueria,
    description_html: `
        <p class="text-xs lg:text-sm text-gray-200 mb-4 max-w-lg">
          Desarrolla tus habilidades en cortes y colorimetría para convertirte en un <strong>experto en peluquería</strong>.
          Aprende las <strong>últimas tendencias</strong> en cortes, peinados y técnicas de coloración para destacar en el mundo de la estética.
        </p>
      `,
    images: [
      "https://picsum.photos/1200/400?random=10",
      "https://picsum.photos/1200/400?random=11",
    ],
    banner: bannerTest,
    btn_color: "bg-green-700",
    courses: [
      {
        id: "corte-femenino",
        name: "Corte Femenino",
        description:
          "Cortes modernos para mujeres que buscan estilo, desde cortes clásicos hasta los más innovadores.",
        duration: "3 meses",
        image: "https://picsum.photos/400/200?random=12",
        isPopular: true,
      },
      {
        id: "coloracion-avanzada",
        name: "Coloración Avanzada",
        description:
          "Técnicas avanzadas de coloración para cabellos rubios, tintes complejos y tonos vibrantes.",
        duration: "3 meses",
        image: "https://picsum.photos/400/200?random=13",
        isPopular: false,
      },
      {
        id: "corte-degradado",
        name: "Corte Degradado",
        description:
          "Domina la técnica de corte degradado, adaptado tanto para hombres como mujeres.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=14",
        isPopular: false,
      },
      {
        id: "peinados-de-boda",
        name: "Peinados de Boda",
        description:
          "Aprende a realizar peinados elegantes y sofisticados para novias y ocasiones especiales.",
        duration: "1 mes",
        image: "https://picsum.photos/400/200?random=15",
        isPopular: true,
      },
      {
        id: "corte-y-coloracion-unisex",
        name: "Corte y Coloración Unisex",
        description:
          "Curso integral que combina técnicas de corte y coloración para ambos géneros.",
        duration: "4 meses",
        image: "https://picsum.photos/400/200?random=16",
        isPopular: false,
      },
      {
        id: "corte-y-peinado-hombre",
        name: "Corte y Peinado de Hombre",
        description:
          "Especialízate en cortes y peinados masculinos, desde los más clásicos hasta los más modernos.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=17",
        isPopular: false,
      },
    ],
  },
  maquillaje: {
    title: "Academia de Maquillaje",
    bannerMobile: bannerMobilePeluqueria,
    bannerDesktop: bannerDesktopPeluqueria,
    description_html: `
        <p class="text-xs lg:text-sm text-gray-200 mb-4 max-w-lg">
          Desarrolla tu arte con los mejores cursos de <strong>maquillaje profesional</strong>. Aprende técnicas innovadoras para realzar la belleza, desde lo más natural hasta lo más creativo.
        </p>
      `,
    images: [
      "https://picsum.photos/1200/400?random=18",
      "https://picsum.photos/1200/400?random=19",
    ],
    banner: bannerTest,
    btn_color: "bg-pink-700",
    courses: [
      {
        id: "maquillaje-basico",
        name: "Maquillaje Básico",
        description:
          "Curso introductorio para aprender técnicas básicas de maquillaje y cuidado de la piel.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=20",
        isPopular: true,
      },
      {
        id: "maquillaje-de-ojos",
        name: "Maquillaje de Ojos",
        description:
          "Especialízate en las técnicas de maquillaje de ojos, desde lo más sencillo hasta lo más elaborado.",
        duration: "1 mes",
        image: "https://picsum.photos/400/200?random=21",
        isPopular: false,
      },
      {
        id: "maquillaje-de-noche",
        name: "Maquillaje de Noche",
        description:
          "Aprende las técnicas para un maquillaje de noche perfecto, ideal para eventos especiales.",
        duration: "1 mes",
        image: "https://picsum.photos/400/200?random=22",
        isPopular: true,
      },
      {
        id: "maquillaje-de-boda",
        name: "Maquillaje de Boda",
        description:
          "Curso especializado en técnicas de maquillaje para novias, que incluye los mejores consejos y trucos.",
        duration: "1 mes",
        image: "https://picsum.photos/400/200?random=23",
        isPopular: false,
      },
    ],
  },
  estetica: {
    title: "Academia de Estética",
    bannerMobile: bannerMobilePeluqueria,
    bannerDesktop: bannerDesktopPeluqueria,
    description_html: `
        <p class="text-xs lg:text-sm text-gray-200 mb-4 max-w-lg">
          Conviértete en un experto en estética y cuidados faciales. Aprende técnicas de tratamientos avanzados para el cuidado y rejuvenecimiento de la piel.
        </p>
      `,
    images: [
      "https://picsum.photos/1200/400?random=24",
      "https://picsum.photos/1200/400?random=25",
    ],
    banner: bannerTest,
    btn_color: "bg-purple-700",
    courses: [
      {
        id: "faciales",
        name: "Tratamientos Faciales",
        description:
          "Curso especializado en tratamientos faciales y rejuvenecimiento, incluyendo técnicas antiarrugas y exfoliación.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=26",
        isPopular: true,
      },
      {
        id: "depilacion",
        name: "Depilación con Cera",
        description:
          "Aprende a realizar depilaciones con cera, técnicas para una depilación perfecta y duradera.",
        duration: "1 mes",
        image: "https://picsum.photos/400/200?random=27",
        isPopular: false,
      },
    ],
  },
  unas: {
    title: "Academia de Uñas",
    bannerMobile: bannerMobilePeluqueria,
    bannerDesktop: bannerDesktopPeluqueria,
    description_html: `
        <p class="text-xs lg:text-sm text-gray-200 mb-4 max-w-lg">
          Aprende a crear diseños innovadores en uñas con técnicas de manicure, pedicure y más. Conviértete en un profesional del cuidado de las uñas.
        </p>
      `,
    images: [
      "https://picsum.photos/1200/400?random=28",
      "https://picsum.photos/1200/400?random=29",
    ],
    banner: bannerTest,
    btn_color: "bg-teal-700",
    courses: [
      {
        id: "manicure",
        name: "Manicure Profesional",
        description:
          "Curso completo de manicure profesional, incluyendo técnicas de esmaltado, diseño y cuidado de las uñas.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=30",
        isPopular: true,
      },
      {
        id: "pedicure",
        name: "Pedicure Profesional",
        description:
          "Especialízate en el cuidado y tratamiento de los pies, incluye técnicas de pedicure y diseño de uñas.",
        duration: "1 mes",
        image: "https://picsum.photos/400/200?random=31",
        isPopular: false,
      },
      {
        id: "diseño-de-unas",
        name: "Diseño de Uñas",
        description:
          "Curso de diseño avanzado de uñas, desde el arte simple hasta las tendencias más innovadoras.",
        duration: "2 meses",
        image: "https://picsum.photos/400/200?random=32",
        isPopular: true,
      },
    ],
  },
};

export default courses;
