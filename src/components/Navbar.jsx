import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');

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
        if (visible) {
          setActiveSection(visible.target.id);
        }
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
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/60 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
        <div className="flex gap-6 text-lg md:text-xl">
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className={`transition-all duration-50 ease-in-out px-2 py-1 rounded-md
                ${
                  activeSection === id
                    ? 'text-purple-600 font-medium'
                    : 'text-white-200 hover:text-purple-300'
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
