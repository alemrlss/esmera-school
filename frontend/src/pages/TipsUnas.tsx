function TipsUnas() {
  return (
    <div className="container mx-auto p-4">
      {/* Header SEO optimizado */}
      <header className="text-center my-6">
        <h1 className="text-4xl font-bold text-gray-800">
          5 Tips para Mantener Tus Uñas Limpias
        </h1>
        <meta
          name="description"
          content="Descubre 5 consejos prácticos para mantener tus uñas limpias y saludables todo el tiempo. Aprende cómo cuidar tus uñas de manera efectiva y sencilla."
        />
        <meta
          name="keywords"
          content="tips uñas limpias, cómo cuidar tus uñas, mantener uñas saludables, consejos uñas"
        />
      </header>

      {/* Imagen destacada */}
      <div className="my-6">
        <img
          className="w-full rounded-lg shadow-xl"
          src="https://picsum.photos/1200/600"
          alt="Consejos para uñas limpias"
        />
      </div>

      {/* Contenido de la página */}
      <section className="d-card bg-base-100 shadow-lg p-6 rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          1. Lava tus manos y uñas frecuentemente
        </h2>
        <p className="text-lg text-gray-600">
          El primer paso fundamental para mantener tus uñas limpias es lavar tus
          manos y uñas regularmente. Usa un jabón suave y agua tibia para evitar
          dañar la piel alrededor de tus uñas.
        </p>
      </section>

      <section className="d-card bg-base-100 shadow-lg p-6 rounded-lg my-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          2. Mantén tus uñas secas
        </h2>
        <p className="text-lg text-gray-600">
          Después de lavar tus manos, asegúrate de secar bien tus uñas para
          evitar la acumulación de humedad, lo cual puede promover el
          crecimiento de bacterias y hongos.
        </p>
      </section>

      <section className="d-card bg-base-100 shadow-lg p-6 rounded-lg my-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          3. Usa productos adecuados para tus uñas
        </h2>
        <p className="text-lg text-gray-600">
          Es importante utilizar productos que sean adecuados para la salud de
          tus uñas, como esmaltes sin químicos agresivos o quitaesmaltes sin
          acetona.
        </p>
      </section>

      <section className="d-card bg-base-100 shadow-lg p-6 rounded-lg my-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          4. Hidrata tus uñas y cutículas
        </h2>
        <p className="text-lg text-gray-600">
          Hidratar tanto las uñas como las cutículas es esencial para
          mantenerlas fuertes y saludables. Utiliza aceites naturales o cremas
          específicas para uñas.
        </p>
      </section>

      <section className="d-card bg-base-100 shadow-lg p-6 rounded-lg my-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          5. Mantén una dieta equilibrada
        </h2>
        <p className="text-lg text-gray-600">
          Una dieta rica en vitaminas y minerales es esencial para la salud de
          tus uñas. Asegúrate de consumir suficiente biotina, zinc y proteínas.
        </p>
      </section>

      {/* Footer con información adicional */}
      <footer className="text-center my-8">
        <div className="d-card bg-base-200 shadow-xl p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-800">
            Cuida tus uñas todos los días
          </h3>
          <p className="text-lg text-gray-600 mt-2">
            Si sigues estos sencillos pasos, tus uñas se mantendrán siempre
            limpias, fuertes y saludables.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default TipsUnas;
