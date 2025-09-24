import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Sobre mí', id: 'about' },
    { label: 'Proyectos', id: 'projects' },
    { label: 'Tecnologías', id: 'tecnologies' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { threshold: 0.6 }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;

      const top = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 12;

      window.scrollTo({ top, behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/60 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Menú desktop centrado */}
        <div className="hidden md:flex gap-6 text-lg md:text-xl justify-center flex-1">
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className={`transition-all duration-150 px-2 py-1 rounded-md ${
                activeSection === id
                  ? 'text-purple-600 font-medium'
                  : 'text-white hover:text-purple-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Menú móvil hamburguesa a la derecha */}
        <div className="md:hidden flex items-center ml-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md shadow-md">
          <div className="flex flex-col items-center gap-4 py-4">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleScroll(id)}
                className={`transition-all duration-150 px-4 py-2 rounded-md ${
                  activeSection === id
                    ? 'text-purple-600 font-medium'
                    : 'text-white hover:text-purple-300'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
