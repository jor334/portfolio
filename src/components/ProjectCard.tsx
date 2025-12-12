interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    link: string;
    github: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md border border-gray-200 dark:border-gray-700 hover:-translate-y-2 hover:shadow-xl hover:border-purple-500 transition-all duration-300 flex flex-col">
      <div className="text-6xl mb-6 text-center">
        {project.image}
      </div>
      
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        {project.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span 
            key={tech} 
            className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-purple-800 text-white text-sm font-medium rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        <a 
          href={project.link} 
          className="flex-1 text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Ver Demo
        </a>
        <a 
          href={project.github} 
          className="flex-1 text-center px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-900 hover:scale-105 hover:shadow-lg transition-all duration-300"
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
