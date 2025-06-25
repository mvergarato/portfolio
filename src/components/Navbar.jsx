import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 shadow-md bg-white sticky top-0 z-10">
      <h1 className="text-xl font-bold">Manuel Vergara</h1>
      <div className="flex gap-4">
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre mí</Link>
        <Link to="/resume">Currículum</Link>
        <Link to="/projects">Proyectos</Link>
        <Link to="/contact">Contacto</Link>
      </div>
    </nav>
  );
}
