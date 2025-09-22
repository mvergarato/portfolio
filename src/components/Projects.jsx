import React, { useState, useRef, useEffect } from "react";
import Proyecto3Home from "../assets/proyecto3-home.png";
import Proyecto3Tecnologias from "../assets/proyecto3-tecnologias.png";
import Prueba from "../assets/prueba.png"; // Proyecto 2
import Prueba2 from "../assets/prueba2.png"; // Proyecto 1

// Logos locales
import Html5Logo from '../assets/html5-logo.png';
import CSS3Logo from '../assets/css3-logo.png';
import JavaScriptLogo from '../assets/javascript-logo.png';
import NodeLogo from '../assets/nodejs-logo.png';
import ExpressLogo from '../assets/express-logo.png'; 
import ReactLogo from '../assets/react-logo.png';
import TailwindCSSLogo from '../assets/tailwindcss-logo.png';
import ViteLogo from '../assets/vite-logo.png';
import VercelLogo from '../assets/vercel-logo.png';

// Flechas del usuario
import FlechaDown from '../assets/flecha-down.png';
import FlechaUp from '../assets/flecha-up.png';

export default function Projects() {
  const projectList = [
    {
      title: "Proyecto 1",
      info: "Descripción detallada del Proyecto 1, tecnologías usadas, retos y logros.",
      images: [Prueba2],
      technologies: [
        { name: 'HTML5', logo: Html5Logo },
        { name: 'CSS3', logo: CSS3Logo },
        { name: 'JavaScript', logo: JavaScriptLogo },
      ],
    },
    {
      title: "Proyecto 2",
      info: "Descripción detallada del Proyecto 2, enfoque creativo, stack tecnológico y resultados.",
      images: [Prueba],
      technologies: [
        { name: 'Node.js', logo: NodeLogo },
        { name: 'Express.js', logo: ExpressLogo },
      ],
    },
    {
      title: "Portfolio Personal",
      info: "Portfolio personal desarrollado con React y TailwindCSS, usando React Router para navegación entre secciones, carrusel de imágenes, diseño responsive y animaciones suaves.",
      images: [Proyecto3Home, Proyecto3Tecnologias],
      technologies: [
        { name: 'React', logo: ReactLogo },
        { name: 'CSS3', logo: CSS3Logo },
        { name: 'Vite', logo: ViteLogo },
        { name: 'Vercel', logo: VercelLogo },
        { name: 'TailwindCSS', logo: TailwindCSSLogo },
      ],
    },
  ];

  const [openCards, setOpenCards] = useState(projectList.map(() => false));
  const [imageIndexes, setImageIndexes] = useState(projectList.map(() => 0));
  const contentRefs = useRef(projectList.map(() => null));

  const toggleCard = (idx) => {
    setOpenCards((prev) => {
      const newState = [...prev];
      newState[idx] = !newState[idx];
      return newState;
    });
  };

  const handleSelectImage = (cardIdx, imgIdx) => {
    setImageIndexes((prev) => {
      const newState = [...prev];
      newState[cardIdx] = imgIdx;
      return newState;
    });
  };

  useEffect(() => {
    openCards.forEach((isOpen, idx) => {
      const content = contentRefs.current[idx];
      if (content) {
        if (isOpen) {
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.opacity = 1;
          content.style.transform = "translateY(0px)";
        } else {
          content.style.maxHeight = "0px";
          content.style.opacity = 0;
          content.style.transform = "translateY(-10px)";
        }
      }
    });
  }, [openCards]);

  return (
    <div className="text-white px-4 py-10 w-full">
      <h2 className="text-4xl font-bold mb-4 text-center">Proyectos</h2>
      <p className="max-w-3xl mx-auto text-center mb-10 text-lg">
        Haz click en la flecha para desplegar información de cada proyecto.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
        {projectList.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl self-start"
          >
            {/* Imagen / Carrusel */}
            {project.images && project.images.length > 0 && (
              <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
                <div
                  className="flex transition-transform duration-700 ease-in-out h-full"
                  style={{
                    transform: `translateX(-${imageIndexes[idx] * 100}%)`,
                  }}
                >
                  {project.images.map((img, imgIdx) => (
                    <img
                      key={imgIdx}
                      src={img}
                      alt={`${project.title} captura ${imgIdx}`}
                      className="w-full flex-shrink-0 object-cover"
                    />
                  ))}
                </div>
                <div className="absolute bottom-2 w-full flex justify-center gap-2">
                  {project.images.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => handleSelectImage(idx, dotIdx)}
                      className={`w-3 h-3 rounded-full ${
                        imageIndexes[idx] === dotIdx
                          ? "bg-purple-500"
                          : "bg-gray-400"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            )}

            {/* Contenido */}
            <div className="p-4 flex flex-col items-center relative overflow-hidden">
              <div className="flex items-center justify-between w-full mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-center border-b-2 border-purple-500 pb-1 transition-all hover:text-purple-400 hover:border-purple-400">
                  {project.title}
                </h3>
                <button
                  onClick={() => toggleCard(idx)}
                  className="ml-3 transform transition duration-300 hover:scale-110 hover:opacity-80"
                  title={openCards[idx] ? "Cerrar" : "Abrir"}
                  style={{
                    animation: openCards[idx] ? "bounceArrow 0.4s" : "",
                  }}
                >
                  <img
                    src={openCards[idx] ? FlechaUp : FlechaDown}
                    alt="flecha"
                    className="w-6 h-6"
                  />
                </button>
              </div>

              <div
                ref={(el) => (contentRefs.current[idx] = el)}
                className="overflow-hidden w-full transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: 0,
                  opacity: 0,
                  transform: "translateY(-10px)",
                }}
              >
                {/* Tecnologías */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mt-2 mb-4">
                    <div className="flex flex-wrap justify-center gap-3">
                      {project.technologies.map((tech, tIdx) => (
                        <div
                          key={tIdx}
                          className="flex items-center gap-2 bg-gray-700 rounded-xl px-3 py-1 shadow-md hover:bg-gray-600 transition"
                        >
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className="w-5 h-5"
                          />
                          <span className="text-sm text-gray-200 whitespace-nowrap">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Texto */}
                <p className="text-gray-200 mt-2 animate-slideUp">
                  {project.info}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animación de rebote para la flecha */}
      <style>
        {`
          @keyframes bounceArrow {
            0% { transform: translateY(0); }
            25% { transform: translateY(-4px); }
            50% { transform: translateY(0); }
            75% { transform: translateY(-2px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}
