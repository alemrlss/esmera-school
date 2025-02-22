const courses = {
    barberia: {
        titulo: "Escuela de Barbería",
        descripcion: "Aprende las técnicas más avanzadas en barbería con nuestros cursos especializados.",
        imagenes: ["/imagenes/barberia1.jpg", "/imagenes/barberia2.jpg"],
        cursos: [
            { id: "corte-clasico", nombre: "Corte Clásico", descripcion: "Técnicas de corte tradicional", duracion: "3 meses", imagen: "/imagenes/corte-clasico.jpg" },
            { id: "fade-y-degradado", nombre: "Fade y Degradados", descripcion: "Cortes modernos y tendencias", duracion: "2 meses", imagen: "/imagenes/fade.jpg" },
        ]
    },
    peluqueria: {
        titulo: "Academia de Peluquería",
        descripcion: "Desarrolla tus habilidades en cortes y colorimetría para convertirte en un experto en peluquería.",
        imagenes: ["/imagenes/peluqueria1.jpg", "/imagenes/peluqueria2.jpg"],
        cursos: [
            { id: "corte-femenino", nombre: "Corte Femenino", descripcion: "Cortes modernos para mujeres", duracion: "3 meses", imagen: "/imagenes/corte-femenino.jpg" },
        ]
    }
};

export default courses;
