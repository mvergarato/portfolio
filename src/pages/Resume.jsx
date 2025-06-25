export default function Resume() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Currículum</h2>
      <h3 className="text-xl font-semibold mt-4">Educación</h3>
      <p>Cesur – Desarrollo de Aplicaciones Web (2023 - 2025)</p>

      <h3 className="text-xl font-semibold mt-4">Experiencia Laboral</h3>
      <p>Estudiante en prácticas – CodeArts Solutions (Mar 2025 - Jun 2025, Remoto)</p>

      <h3 className="text-xl font-semibold mt-4">Tecnologías</h3>
      <ul className="list-disc ml-6">
        <li>React, Angular, TailwindCSS</li>
        <li>CSS, HTML, JavaScript</li>
        <li>Express, Prisma, SQLite</li>
      </ul>
    </section>
  );
}
