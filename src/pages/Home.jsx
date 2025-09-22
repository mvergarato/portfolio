import React, { useState, useEffect } from 'react';
import About from '../components/About';
import Tecnologies from '../components/Tecnologies';
import Projects from '../components/Projects';

import Manuel from '../assets/manuel.jpg';
import LinkedInLogo from '../assets/linkedin-logo.png';
import InstagramLogo from '../assets/instagram-logo.png';
import GitHubLogo from '../assets/github-logo.png';
import MailLogo from '../assets/mail-logo.png';
import WhatsAppLogo from '../assets/whatsapp-logo.png';
import PhoneLogo from '../assets/phone-logo.png';

export default function Home() {
  const [showPhone, setShowPhone] = useState(false);
  const phoneNumber = "+34 686 861 707";

  // Scroll automático al cargar la página
  useEffect(() => {
    const section = document.getElementById("home");
    if (section) {
      section.scrollIntoView({ behavior: "instant" });
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-indigo-950 to-slate-950 text-white w-full min-h-screen overflow-x-hidden">

      {/* Hero */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center px-4 pt-24"
      >
        <div className="w-80 h-80 rounded-full overflow-hidden mb-6 shadow-lg border-4 border-purple-600">
          <img
            src={Manuel}
            alt="Foto de Manuel Vergara"
            className="w-full h-full object-cover object-top scale-150"
          />
        </div>

        <div className="w-full max-w-7xl px-4 mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Hola, soy Manuel Vergara</h1>
          <p className="text-xl leading-relaxed mb-2">
            Graduado en Desarrollo Web apasionado en crear soluciones digitales con impacto.
          </p>
          <p className="text-xl text-sm text-purple-300 font-semibold">
            Sevilla - Badajoz, España
          </p>
        </div>

        {/* Botones de contacto */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <a href="https://www.linkedin.com/in/mvergarato" target="_blank" rel="noopener noreferrer"
             className="bg-black/60 backdrop-blur-md px-5 py-2 rounded-md shadow-md text-white/80 hover:text-purple-300 transition font-normal flex items-center transform duration-300 hover:scale-110">
            <img src={LinkedInLogo} alt="LinkedIn" className="w-5 h-5 mr-2" />
            LinkedIn
          </a>

          <a href="https://github.com/mvergarato" target="_blank" rel="noopener noreferrer"
             className="bg-black/60 backdrop-blur-md px-5 py-2 rounded-md shadow-md text-white/80 hover:text-purple-300 transition font-normal flex items-center transform duration-300 hover:scale-110">
            <img src={GitHubLogo} alt="GitHub" className="w-5 h-5 mr-2" />
            GitHub
          </a>

          <a href="https://wa.me/34686861707" target="_blank" rel="noopener noreferrer"
             className="bg-black/60 backdrop-blur-md px-5 py-2 rounded-md shadow-md text-white/80 hover:text-purple-300 transition font-normal flex items-center transform duration-300 hover:scale-110">
            <img src={WhatsAppLogo} alt="WhatsApp" className="w-5 h-5 mr-2" />
            WhatsApp
          </a>

          <a href="mailto:mvergarato@gmail.com"
             className="bg-black/60 backdrop-blur-md px-5 py-2 rounded-md shadow-md text-white/80 hover:text-purple-300 transition font-normal flex items-center transform duration-300 hover:scale-110">
            <img src={MailLogo} alt="Email" className="w-5 h-5 mr-2" />
            Email
          </a>

          <button onClick={() => setShowPhone(!showPhone)}
                  className="bg-black/60 backdrop-blur-md px-5 py-2 rounded-md shadow-md text-white/80 hover:text-purple-300 transition font-normal flex items-center transform duration-300 hover:scale-110">
            <img src={PhoneLogo} alt="Teléfono" className="w-5 h-5 mr-2" />
            Llamar
          </button>

          <a href="https://www.instagram.com/bambi__dj/" target="_blank" rel="noopener noreferrer"
             className="bg-black/60 backdrop-blur-md px-5 py-2 rounded-md shadow-md text-white/80 hover:text-purple-300 transition font-normal flex items-center transform duration-300 hover:scale-110">
            <img src={InstagramLogo} alt="Instagram" className="w-5 h-5 mr-2" />
            Instagram
          </a>
        </div>

        {/* Número de teléfono animado */}
        <div className={`mt-4 transition-all duration-500 transform ${showPhone ? 'opacity-100 scale-110' : 'opacity-0 scale-90'}`}>
          {showPhone && (
            <p className="text-4xl font-bold text-purple-300">{phoneNumber}</p>
          )}
        </div>
      </section>

      {/* Sobre mí */}
      <section id="about" className="flex flex-col justify-center px-4 w-full py-10">
        <div className="w-full max-w-7xl mx-auto">
          <About />
        </div>
      </section>

      {/* Proyectos */}
      <section id="projects" className="flex flex-col justify-center px-4 w-full py-10">
        <div className="w-full max-w-7xl mx-auto">
          <Projects />
        </div>
      </section>

      {/* Tecnologías */}
      <section id="tecnologies" className="flex flex-col justify-center px-4 w-full py-10">
        <div className="w-full max-w-7xl mx-auto">
          <Tecnologies />
        </div>
      </section>

    </div>
  );
}
