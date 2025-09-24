import React, { useState, useRef, useEffect } from "react";

// Imágenes BambiLab (Proyecto 1)
import Bambi1 from "../assets/bambilab-1.png";
import Bambi2 from "../assets/bambilab-2.png";
import Bambi3 from "../assets/bambilab-3.png";
import Bambi4 from "../assets/bambilab-4.png";
import Bambi5 from "../assets/bambilab-5.png";

// Imágenes Proyecto Real (Museo) (Proyecto 2)
import Museo1 from "../assets/museo-1.png";
import Museo2 from "../assets/museo-2.png";
import MuseoR from "../assets/museo-3.png";
import Museo4 from "../assets/museo-4.png";

// Imágenes Portfolio Personal (Proyecto 3)
import PortfolioHome from "../assets/proyecto3-home.png";
import PortfolioTecnologias from "../assets/proyecto3-tecnologias.png";

// Logos de tecnologías
import Html5Logo from '../assets/html5-logo.png';
import CSS3Logo from '../assets/css3-logo.png';
import JavaScriptLogo from '../assets/javascript-logo.png';
import NodeLogo from '../assets/nodejs-logo.png';
import ExpressLogo from '../assets/express-logo.png'; 
import ReactLogo from '../assets/react-logo.png';
import TailwindCSSLogo from '../assets/tailwindcss-logo.png';
import ViteLogo from '../assets/vite-logo.png';
import VercelLogo from '../assets/vercel-logo.png';
import PrismaLogo from '../assets/prisma-logo.png';
import SqliteLogo from '../assets/sqlite-logo.png';
import AngularLogo from '../assets/angular-logo.png';
import TypeScriptLogo from '../assets/typescript-logo.png';
import PostgreSQLLogo from '../assets/postgresql-logo.png';
import SymfonyLogo from '../assets/symfony-logo.png';
import DockerLogo from '../assets/docker-logo.png';

// Flechas
import FlechaDown from '../assets/flecha-down.png';
import FlechaUp from '../assets/flecha-up.png';

// Logo GitHub
import GitHubLogo from '../assets/github-logo.png';

export default function Projects() {
  const projectList = [
    {
      title: "BambiLab",
      info: "BambiLab — Proyecto desarrollado con foco en rendimiento y experiencia de usuario. Implementa un frontend en React + Vite con TailwindCSS, lógica en JavaScript y backend ligero con Node.js. Persistencia mediante Prisma sobre SQLite. Incluye diseño responsive y varias vistas/capturas.",
      images: [Bambi1, Bambi2, Bambi3, Bambi4, Bambi5],
      technologies: [
        { name: 'React', logo: ReactLogo },
        { name: 'Vite', logo: ViteLogo },
        { name: 'TailwindCSS', logo: TailwindCSSLogo },
        { name: 'JavaScript', logo: JavaScriptLogo },
        { name: 'Node.js', logo: NodeLogo },
        { name: 'Prisma', logo: PrismaLogo },
        { name: 'SQLite', logo: SqliteLogo },
      ],
      github: "https://github.com/mvergarato/BambiLab"
    },
    {
      title: "Proyecto Real (Museo)",
      info: "Proyecto Real para un Museo — Desarrollo de una aplicación completa con Angular en el frontend, TailwindCSS para estilos y TypeScript como lenguaje principal. Backend basado en Symfony con persistencia en PostgreSQL y contenedores Docker para despliegue. Se trabajó en escalabilidad y optimización de rendimiento.",
      images: [Museo1, Museo2, MuseoR, Museo4],
      technologies: [
        { name: 'Angular', logo: AngularLogo },
        { name: 'TailwindCSS', logo: TailwindCSSLogo },
        { name: 'TypeScript', logo: TypeScriptLogo },
        { name: 'PostgreSQL', logo: PostgreSQLLogo },
        { name: 'Symfony', logo: SymfonyLogo },
        { name: 'Docker', logo: DockerLogo },
      ],
    },
    {
      title: "Portfolio Personal",
      info: "Portfolio personal desarrollado con React y TailwindCSS, usando React Router para navegación entre secciones, carrusel de imágenes, diseño responsive y animaciones suaves.",
      images: [PortfolioHome, PortfolioTecnologias],
      technologies: [
        { name: 'React', logo: ReactLogo },
        { name: 'CSS3', logo: CSS3Logo },
        { name: 'Vite', logo: ViteLogo },
        { name: 'Vercel', logo: VercelLogo },
        { name: 'TailwindCSS', logo: TailwindCSSLogo },
      ],
      github: "https://github.com/mvergarato/portfolio"
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto items-start">
        {projectList.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl self-start"
          >
            {/* Imagen / Carrusel */}
            {project.images && project.images.length > 0 && (
              <div className="relative w-full h-48 sm:h-56 md:h-72 flex items-center justify-center p-1 bg-gradient-to-b from-gray-900 via-gray-800 to-black rounded-t-xl">
                <div
                  className="flex transition-transform duration-700 ease-in-out h-full"
                  style={{
                    width: `${project.images.length * 100}%`,
                    transform: `translateX(-${imageIndexes[idx] * 100}%)`,
                  }}
                >
                  {project.images.map((img, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="w-full flex items-center justify-center flex-shrink-0 px-1"
                    >
                      <img
                        src={img}
                        alt={`${project.title} captura ${imgIdx}`}
                        className="max-h-full w-full object-contain"
                      />
                    </div>
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
                  <div className="mt-2 mb-2">
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.technologies.map((tech, tIdx) => (
                        <div
                          key={tIdx}
                          className="flex items-center gap-1 bg-gray-700 rounded-lg px-2 py-1 shadow-md hover:bg-gray-600 transition"
                        >
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className="w-4 h-4"
                          />
                          <span className="text-xs text-gray-200 whitespace-nowrap">
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

                {/* Botón GitHub solo para proyectos 1 y 3 */}
                {project.github && (
                  <div className="flex justify-center mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 transition text-white text-sm px-3 py-1 rounded-lg shadow-md"
                    >
                      <img src={GitHubLogo} alt="GitHub" className="w-4 h-4" />
                      Código
                    </a>
                  </div>
                )}
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
