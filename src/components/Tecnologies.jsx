import React from 'react';

// Lenguajes & Frontend
import Html5Logo from '../assets/html5-logo.png';
import CSS3Logo from '../assets/css3-logo.png';
import JavaScriptLogo from '../assets/javascript-logo.png';
import TypeScriptLogo from '../assets/typescript-logo.png';
import ReactLogo from '../assets/react-logo.png';
import AngularLogo from '../assets/angular-logo.png';
import ViteLogo from '../assets/vite-logo.png';
import TailwindCSSLogo from '../assets/tailwindcss-logo.png';
import ResponsiveLogo from '../assets/responsive-logo.png';
import DockerLogo from '../assets/docker-logo.png'; 

// Backend & Bases de Datos
import NodeLogo from '../assets/nodejs-logo.png';
import SymfonyLogo from '../assets/symfony-logo.png';
import MySQLLogo from '../assets/mysql-logo.png';
import PostgreSQLLogo from '../assets/postgresql-logo.png';
import SQLiteLogo from '../assets/sqlite-logo.png';
import PrismaLogo from '../assets/prisma-logo.png';
import ExpressLogo from '../assets/express-logo.png'; 

// Herramientas & Deploy
import GitLogo from '../assets/git-logo.png';
import GitHubLogo from '../assets/github-logo2.png';
import VSCodeLogo from '../assets/vscode-logo.png';
import PostmanLogo from '../assets/postman-logo.png';
import NetlifyLogo from '../assets/netlify-logo.png';
import VercelLogo from '../assets/vercel-logo.png';

// Diseño, Comunicación & IA
import FigmaLogo from '../assets/figma-logo.png';
import CanvaLogo from '../assets/canva-logo.png';
import SlackLogo from '../assets/slack-logo.png';
import ChatGPTLogo from '../assets/chatgpt-logo.png';
import DeepSeekLogo from '../assets/deepseek-logo.png';

export default function Tecnologies() {
  const techCards = [
    {
      title: 'Lenguajes & Frontend',
      items: [
        { name: 'React', logo: ReactLogo },
        { name: 'Angular', logo: AngularLogo },
        { name: 'TypeScript', logo: TypeScriptLogo },
        { name: 'JavaScript', logo: JavaScriptLogo },
        { name: 'Vite', logo: ViteLogo },
        { name: 'HTML5', logo: Html5Logo },
        { name: 'CSS3', logo: CSS3Logo },
      ],
    },
    {
      title: 'Backend & Bases de Datos',
      items: [
        { name: 'Node.js', logo: NodeLogo },
        { name: 'Express.js', logo: ExpressLogo },
        { name: 'Symfony', logo: SymfonyLogo },
        { name: 'PostgreSQL', logo: PostgreSQLLogo },
        { name: 'MySQL', logo: MySQLLogo },
        { name: 'SQLite', logo: SQLiteLogo },
        { name: 'Prisma', logo: PrismaLogo },
      ],
    },
    {
      title: 'Herramientas & Deploy',
      items: [
        { name: 'Git', logo: GitLogo },
        { name: 'GitHub', logo: GitHubLogo },
        { name: 'Docker', logo: DockerLogo },
        { name: 'VSCode', logo: VSCodeLogo },
        { name: 'Postman', logo: PostmanLogo },
        { name: 'Vercel', logo: VercelLogo },
        { name: 'Netlify', logo: NetlifyLogo },
      ],
    },
    {
      title: 'Diseño, Comunicación & IA',
      items: [
        { name: 'TailwindCSS', logo: TailwindCSSLogo },
        { name: 'Responsive Design', logo: ResponsiveLogo },
        { name: 'Figma', logo: FigmaLogo },
        { name: 'Canva', logo: CanvaLogo },
        { name: 'Slack', logo: SlackLogo },
        { name: 'ChatGPT', logo: ChatGPTLogo },
        { name: 'DeepSeek', logo: DeepSeekLogo },
      ],
    },
  ];

  return (
    <div className="text-white px-2 md:px-4 py-10 w-full">
      <h2 className="text-4xl font-bold mb-8 text-center">Tecnologías</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {techCards.map((card) => (
          <div
            key={card.title}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col h-full"
          >
            <h3 className="text-lg font-semibold mb-4 text-center whitespace-nowrap">
              {card.title}
            </h3>
            <div className="grid grid-cols-1 gap-3 flex-grow">
              {card.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-black/60 backdrop-blur-md px-3 py-2 rounded-md shadow-md flex items-center gap-2 hover:text-purple-300 transition transform duration-300 hover:scale-105 text-sm"
                >
                  <img src={item.logo} alt={item.name} className="w-6 h-6" />
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
