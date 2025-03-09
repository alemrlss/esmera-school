const courses = {
    barberia: {
      title: "Cursos de Barbería",
      description_html: `
        <p class="text-sm text-gray-200 mb-4 max-w-lg">
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
      banner: "https://i.postimg.cc/pd2mt85K/banner-trasparent.png",
      btn_color: "bg-blue-700",
      cursos: [
        {
          id: "corte-barba",
          nombre: "Corte de Barba",
          descripcion:
            "Aprende las técnicas más efectivas para el cuidado y diseño de la barba. Desde el afeitado tradicional hasta el arreglo moderno.",
          duracion: "1 mes",
          imagen: "https://picsum.photos/400/200?random=1",
          isPopular: true,
        },
        {
          id: "corte-degradado",
          nombre: "Corte Degradado",
          descripcion:
            "Domina el arte del corte degradado, una de las técnicas más demandadas por los clientes modernos.",
          duracion: "2 meses",
          imagen: "https://picsum.photos/400/200?random=2",
          isPopular: false,
        },
        {
          id: "corte-femenino",
          nombre: "Corte Femenino",
          descripcion:
            "Curso especializado en cortes de cabello para mujeres, técnicas de styling y cortes de tendencia.",
          duracion: "2 meses",
          imagen: "https://picsum.photos/400/200?random=3",
          isPopular: true,
        },
        {
          id: "peinados-especiales",
          nombre: "Peinados Especiales",
          descripcion:
            "Aprende a crear peinados únicos para eventos especiales: bodas, fiestas y más.",
          duracion: "1 mes",
          imagen: "https://picsum.photos/400/200?random=4",
          isPopular: false,
        },
        {
          id: "coloracion-capilar",
          nombre: "Coloración Capilar",
          descripcion:
            "Curso completo sobre técnicas de coloración de cabello, desde mechas hasta tintes complejos.",
          duracion: "3 meses",
          imagen: "https://picsum.photos/400/200?random=5",
          isPopular: true,
        },
        {
          id: "barberia-para-principiantes",
          nombre: "Barbería para Principiantes",
          descripcion:
            "Conoce los fundamentos de la barbería, desde el afeitado clásico hasta cortes sencillos.",
          duracion: "1 mes",
          imagen: "https://picsum.photos/400/200?random=6",
          isPopular: false,
        },
        {
          id: "tendencias-2025",
          nombre: "Tendencias 2025 en Corte y Estilo",
          descripcion:
            "Curso que te prepara para las tendencias que dominarán el mundo de la barbería en los próximos años.",
          duracion: "2 meses",
          imagen: "https://picsum.photos/400/200?random=7",
          isPopular: true,
        },
        {
          id: "corte-creativo",
          nombre: "Corte Creativo",
          descripcion:
            "Técnicas avanzadas de corte que permiten crear estilos únicos y personalizados para cada cliente.",
          duracion: "3 meses",
          imagen: "https://picsum.photos/400/200?random=8",
          isPopular: false,
        },
        {
          id: "corte-y-peinado-de-hombre",
          nombre: "Corte y Peinado de Hombre",
          descripcion:
            "Especialízate en cortes y peinados para hombres, incluyendo estilos modernos y clásicos.",
          duracion: "2 meses",
          imagen: "https://picsum.photos/400/200?random=9",
          isPopular: false,
        },
      ],
    },
    peluqueria: {
      title: "Academia de Peluquería",
      description_html: `
        <p class="text-sm text-gray-200 mb-4 max-w-lg">
          Desarrolla tus habilidades en cortes y colorimetría para convertirte en un <strong>experto en peluquería</strong>.
          Aprende las <strong>últimas tendencias</strong> en cortes, peinados y técnicas de coloración para destacar en el mundo de la estética.
        </p>
      `,
      images: [
        "https://picsum.photos/1200/400?random=10",
        "https://picsum.photos/1200/400?random=11",
      ],
      banner: "https://i.postimg.cc/pd2mt85K/banner-trasparent.png",
      btn_color: "bg-green-700",
      cursos: [
        {
          id: "corte-femenino",
          nombre: "Corte Femenino",
          descripcion:
            "Cortes modernos para mujeres que buscan estilo, desde cortes clásicos hasta los más innovadores.",
          duracion: "3 meses",
          imagen: "https://picsum.photos/400/200?random=12",
          isPopular: true,
        },
        {
          id: "coloracion-avanzada",
          nombre: "Coloración Avanzada",
          descripcion:
            "Técnicas avanzadas de coloración para cabellos rubios, tintes complejos y tonos vibrantes.",
          duracion: "3 meses",
          imagen: "https://picsum.photos/400/200?random=13",
          isPopular: false,
        },
        {
          id: "corte-degradado",
          nombre: "Corte Degradado",
          descripcion:
            "Domina la técnica de corte degradado, adaptado tanto para hombres como mujeres.",
          duracion: "2 meses",
          imagen: "https://picsum.photos/400/200?random=14",
          isPopular: false,
        },
        {
          id: "peinados-de-boda",
          nombre: "Peinados de Boda",
          descripcion:
            "Aprende a realizar peinados elegantes y sofisticados para novias y ocasiones especiales.",
          duracion: "1 mes",
          imagen: "https://picsum.photos/400/200?random=15",
          isPopular: true,
        },
        {
          id: "corte-y-coloracion-unisex",
          nombre: "Corte y Coloración Unisex",
          descripcion:
            "Curso integral que combina técnicas de corte y coloración para ambos géneros.",
          duracion: "4 meses",
          imagen: "https://picsum.photos/400/200?random=16",
          isPopular: false,
        },
        {
          id: "corte-y-peinado-hombre",
          nombre: "Corte y Peinado de Hombre",
          descripcion:
            "Especialízate en cortes y peinados masculinos, desde los más clásicos hasta los más modernos.",
          duracion: "2 meses",
          imagen: "https://picsum.photos/400/200?random=17",
          isPopular: false,
        },
      ],
    },
    maquillaje: {
      title: "Academia de Maquillaje",
      description_html: `
        <p class="text-sm text-gray-200 mb-4 max-w-lg">
          Desarrolla tu arte con los mejores cursos de <strong>maquillaje profesional</strong>. Aprende técnicas innovadoras para realzar la belleza, desde lo más natural hasta lo más creativo.
        </p>
      `,
      images: [
        "https://picsum.photos/1200/400?random=18",
        "https://picsum.photos/1200/400?random=19",
      ],
      banner: "https://i.postimg.cc/pd2mt85K/banner-trasparent.png",
      btn_color: "bg-pink-700",
      cursos: [
        {
          id: "maquillaje-basico",
          nombre: "Maquillaje Básico",
          descripcion:
            "Curso introductorio para aprender técnicas básicas de maquillaje y cuidado de la piel.",
          duracion: "2 meses",
          imagen: "https://picsum.photos/400/200?random=20",
          isPopular: true,
        },
        {
          id: "maquillaje-de-ojos",
          nombre: "Maquillaje de Ojos",
          descripcion:
            "Especialízate en las técnicas de maquillaje de ojos, desde lo más sencillo hasta lo más elaborado.",
          duracion: "1 mes",
          imagen: "https://picsum.photos/400/200?random=21",
          isPopular: false,
        },
        {
          id: "maquillaje-de-noche",
          nombre: "Maquillaje de Noche",
          descripcion:
            "Aprende las técnicas para un maquillaje de noche perfecto, ideal para eventos especiales.",
          duracion: "1 mes",
          imagen: "https://picsum.photos/400/200?random=22",
          isPopular: true,
        },
        {
          id: "maquillaje-de-boda",
          nombre: "Maquillaje de Boda",
          descripcion:
            "Curso especializado en técnicas de maquillaje para novias, que incluye los mejores consejos y trucos.",
          duracion: "1 mes",
          imagen: "https://picsum.photos/400/200?random=23",
          isPopular: false,
        },
      ],
    },
    estetica: {
      title: "Academia de Estética",
      description_html: `
        <p class="text-sm text-gray-200 mb-4 max-w-lg">
          Conviértete en un experto en estética y cuidados faciales. Aprende técnicas de tratamientos avanzados para el cuidado y rejuvenecimiento de la piel.
        </p>
      `,
      images: [
        "https://picsum.photos/1200/400?random=24",
        "https://picsum.photos/1200/400?random=25",
      ],
      banner: "https://i.postimg.cc/pd2mt85K/banner-trasparent.png",
      btn_color: "bg-purple-700",
      cursos: [
        {
          id: "faciales",
          nombre: "Tratamientos Faciales",
          descripcion:
            "Curso especializado en tratamientos faciales y rejuvenecimiento, incluyendo técnicas antiarrugas y exfoliación.",
          duracion: "2 meses",
          imagen: "https://picsum.photos/400/200?random=26",
          isPopular: true,
        },
        {
          id: "depilacion",
          nombre: "Depilación con Cera",
          descripcion:
            "Aprende a realizar depilaciones con cera, técnicas para una depilación perfecta y duradera.",
          duracion: "1 mes",
          imagen: "https://picsum.photos/400/200?random=27",
          isPopular: false,
        },
      ],
    },
    unas: {
      title: "Academia de Uñas",
      description_html: `
        <p class="text-sm text-gray-200 mb-4 max-w-lg">
          Aprende a crear diseños innovadores en uñas con técnicas de manicure, pedicure y más. Conviértete en un profesional del cuidado de las uñas.
        </p>
      `,
      images: [
        "https://picsum.photos/1200/400?random=28",
        "https://picsum.photos/1200/400?random=29",
      ],
      banner: "https://i.postimg.cc/pd2mt85K/banner-trasparent.png",
      btn_color: "bg-teal-700",
      cursos: [
        {
          id: "manicure",
          nombre: "Manicure Profesional",
          descripcion:
            "Curso completo de manicure profesional, incluyendo técnicas de esmaltado, diseño y cuidado de las uñas.",
          duracion: "2 meses",
          imagen: "https://picsum.photos/400/200?random=30",
          isPopular: true,
        },
        {
          id: "pedicure",
          nombre: "Pedicure Profesional",
          descripcion:
            "Especialízate en el cuidado y tratamiento de los pies, incluye técnicas de pedicure y diseño de uñas.",
          duracion: "1 mes",
          imagen: "https://picsum.photos/400/200?random=31",
          isPopular: false,
        },
        {
          id: "diseño-de-unas",
          nombre: "Diseño de Uñas",
          descripcion:
            "Curso de diseño avanzado de uñas, desde el arte simple hasta las tendencias más innovadoras.",
          duracion: "2 meses",
          imagen: "https://picsum.photos/400/200?random=32",
          isPopular: true,
        },
      ],
    },
  };
  
  export default courses;
  