import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './components/About';
import Projects from './components/Projects';
import Tecnologies from './components/Tecnologies';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-slate-950 text-white">
      {/* Navbar siempre visible */}
      <Navbar />

      {/* Contenido de las páginas */}
      <main className="p-2 md:p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tecnologies" element={<Tecnologies />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
}
