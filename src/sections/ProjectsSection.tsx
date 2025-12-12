import { FaGithub, FaExternalLinkAlt, FaYoutube, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import type { IconType } from 'react-icons';

type LinkType = 'github' | 'demo' | 'youtube' | 'linkedin' | 'docs' | 'other';

interface ProjectLink {
  type: LinkType;
  url: string;
  label?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  technologies: string[];
  links?: ProjectLink[];
}

const linkIcons: Record<LinkType, IconType> = {
  github: FaGithub,
  demo: FaExternalLinkAlt,
  youtube: FaYoutube,
  linkedin: FaLinkedin,
  docs: FaFileAlt,
  other: FaExternalLinkAlt,
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Dron autonomo para competencia de robotica - Robocol',
      description: 'Desarrollo de software de control y navegación para drones autónomos. Incluye programación de vuelo, procesamiento de sensores y ensamblaje electrónico completo. Este proyecto se esta desarrollado para la competencia de robotica SUAS2026 en la universidad de los andes.',
      category: 'Drones Autónomos',
      categoryColor: 'bg-orange-100 text-orange-600',
      technologies: ['Python', 'Dronekit', 'shell', 'Computer Vision', 'mavlink'],
      links: [
        { type: 'github', url: 'https://github.com/Dron-Robocol/Navigation-SUAS2026.git' },
      ],
    },
    {
      id: 2,
      title: 'Proyecto routask para gestion de citas con agentes conversacionales',
      description: 'Sistema para gestion de citas con agentes conversacionales con gestor de citas y agendamiento automatico para negocios',
      category: 'AI & Automation',
      categoryColor: 'bg-purple-100 text-purple-600',
      technologies: ['java', 'typescript', 'spring boot', 'mongoDB', 'Angular', 'node.js', 'N8N', 'MCP servers'],
      links: [
        { type: 'demo', url: 'https://routask.com/' },
      ],
    },
    {
      id: 3,
      title: 'Sistema de gestion de inventario por voz ganador de hackaton "Ai voice and messages 2025"',
      description: 'Sistema de gestion de inventario por voz ganador de hackaton "Ai voice and messages 2025". Este proyecto se desarrollo en 12 horas para gestion de inventario por voz, incluye la aplicacion y un ERP.',
      category: 'AI & Automation',
      categoryColor: 'bg-purple-100 text-purple-600',
      technologies: ['Supabase', 'React Native', 'Tailwind CSS', 'Node.js', 'N8N', 'MCP servers', 'ElevenLabs'],
      links: [
        { type: 'github', url: 'https://github.com/LogIA-hackaton/Logi-mobile.git' },
      ],
    },
    {
      id: 4,
      title: 'Portafolio personal (El que estas viendo!)',
      description: 'Portafolio personal desarrollado con React, Tailwind CSS y three.js. Este proyecto se desarrollo para mostrar mis proyectos y habilidades.',
      category: 'Web Development',
      categoryColor: 'bg-blue-100 text-blue-600',
      technologies: ['React', 'Tailwind CSS', 'three.js'],
      links: [
        { type: 'github', url: 'https://github.com/jor334/portfolio' },
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16 text-gray-800 font-bold">
          Mis{' '}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-500 bg-clip-text text-transparent font-bold">
            Proyectos
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              {/* Header: Category + Icons */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.categoryColor}`}>
                  {project.category}
                </span>
                
                {project.links && project.links.length > 0 && (
                  <div className="flex gap-2">
                    {project.links.map((link, index) => {
                      const IconComponent = linkIcons[link.type];
                      return (
                        <a 
                          key={index}
                          href={link.url}
                          className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          title={link.label || link.type}
                        >
                          <IconComponent className="text-lg" />
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-5 leading-relaxed">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
