import React from 'react';

export default function About() {
  return (
    <div className="text-white px-4 py-10 w-full">
      <h2 className="text-4xl font-bold mb-8 text-center">Sobre mí</h2>

      <div className="max-w-5xl mx-auto text-justify flex flex-col gap-6">
        <p className="text-lg leading-relaxed">
          ¡Hola! Soy <strong>Manuel Vergara</strong>, un <strong>Programador Web Junior</strong> apasionado por crear soluciones digitales con impacto. 
          Me formé en <strong>Desarrollo de Aplicaciones Web (DAW)</strong> y actualmente estoy finalizando el 
          <strong> Máster Universitario en Formación del Profesorado (Ciencias de la Salud)</strong>.
        </p>

        <p className="text-lg leading-relaxed">
          Me encanta trabajar de forma <strong>creativa y colaborativa</strong>, aportar ideas y aprender de cada proyecto. Disfruto enfrentándome a retos, optimizando procesos y construyendo experiencias web que sean útiles y agradables para los usuarios.
        </p>

        <p className="text-lg leading-relaxed">
          Fuera del mundo del código, me apasiona la música y soy productor musical, además de mantenerme activo con el deporte. Creo que estas aficiones me ayudan a mantener la creatividad y la disciplina que aplico en cada proyecto web.
        </p>

        <p className="text-lg leading-relaxed">
          Cada línea de código es una oportunidad para aprender, mejorar y dejar mi huella digital. Me gusta combinar la <strong>técnica</strong> con la <strong>creatividad</strong> y nunca dejar de experimentar con nuevas tecnologías y metodologías de desarrollo.
        </p>

        {/* Botón CTA al CV */}
        <div className="flex justify-center mt-6">
          <a
            href="https://cv-daw-manuel-vergara.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-500 transition-colors text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl"
          >
            Ver mi CV Completo
          </a>
        </div>
      </div>
    </div>
  );
}
