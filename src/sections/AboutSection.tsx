import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaTrophy, FaMedal, FaBolt, FaMicrochip, FaJava } from "react-icons/fa";
import { 
  SiReact, 
  SiAngular, 
  SiDjango, 
  SiSpringboot, 
  SiSupabase, 
  SiMysql, 
  SiMongodb, 
  SiGithub, 
  SiDocker, 
  SiAmazon, 
  SiPython 
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  { Icon: SiReact, color: '#61DAFB', name: 'React' },
  { Icon: TbBrandReactNative, color: '#61DAFB', name: 'React Native' },
  { Icon: SiAngular, color: '#DD0031', name: 'Angular' },
  { Icon: SiDjango, color: '#092E20', name: 'Django' },
  { Icon: SiSpringboot, color: '#6DB33F', name: 'Spring Boot' },
  { Icon: FaJava, color: '#007396', name: 'Java' },
  { Icon: SiSupabase, color: '#3ECF8E', name: 'Supabase' },
  { Icon: SiMysql, color: '#4479A1', name: 'SQL' },
  { Icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
  { Icon: SiGithub, color: '#181717', name: 'GitHub' },
  { Icon: SiDocker, color: '#2496ED', name: 'Docker' },
  { Icon: SiAmazon, color: '#FF9900', name: 'AWS' },
  { Icon: SiPython, color: '#3776AB', name: 'Python' },
];

const projects = [
  {
    label: "2025 — Logro",
    title: 'Ganador Hackathon "AI Voice and Message"',
    description: "Primer lugar en competencia desarrollando un sistema de gestion de inventario por voz.",
    icon: FaMedal,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-500",
    accentColor: "bg-amber-500",
    tags: ["React Native", "Supabase", "Tailwind CSS", "Node.js", "N8N", "MCP servers", "ElevenLabs"]
  },
  {
    label: "Actual — Side Project",
    title: "Sistema de gestion de citas con agentes conversacionales",
    description: "Desarrollo de un sistema de gestion de citas con agentes conversacionales para gestion de citas y agendamiento automatico para negocios.",
    icon: FaBolt,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    accentColor: "bg-blue-500",
    tags: ["Java", "Typescript", "Spring Boot", "MongoDB", "Angular", "Node.js", "N8N", "MCP servers"]
  },
  {
    label: "Universidad — Proyecto Principal",
    title: "Dron autonomo para competencia de robotica - Robocol",
    description: "Desarrollo de software de control y navegación para drones autónomos. Incluye programación de vuelo, procesamiento de sensores y ensamblaje electrónico completo. Este proyecto se esta desarrollado para la competencia de robotica SUAS2026 en la universidad de los andes.",
    icon: FaMicrochip,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-500",
    accentColor: "bg-pink-500",
    tags: ["Python", "Dronekit", "shell", "Computer Vision", "mavlink"]
  }
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animatedElements = gsap.utils.toArray<HTMLElement>('.gsap-fade-up');
      
      animatedElements.forEach((element) => {
        gsap.fromTo(element,
          { 
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 92%",
              end: "top 60%",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Main Heading */}
        <h2 className="gsap-fade-up text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Estudiante de Ingeniería de Software enfocado en{' '}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            crear soluciones innovadoras
          </span>
        </h2>

        {/* Subtitle */}
        <p className="gsap-fade-up text-gray-600 text-lg mb-12">
          6to semestre en Universidad de los Andes · Especializado en desarrollo full stack con énfasis en frontend, drones y automatización con agentes de inteligencia artificial.
        </p>

        {/* Stats */}
        <div className="gsap-fade-up grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10 mb-12 pb-12 border-b border-gray-200">
          <div className="text-center sm:text-left">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">6to</p>
            <p className="text-gray-500 text-xs sm:text-sm">Semestre actual</p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">3+</p>
            <p className="text-gray-500 text-xs sm:text-sm">Proyectos activos</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <FaTrophy className="text-3xl sm:text-4xl md:text-5xl text-amber-400" />
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">Hackathon<br className="hidden sm:block" /> ganado</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <img 
              src="/uniandes-logo.png" 
              alt="Universidad de los Andes" 
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">Universidad de<br />los Andes</p>
          </div>
        </div>

        {/* Project Cards */}
        <div className="space-y-6 sm:space-y-8 pb-12 border-b border-gray-200">
          {projects.map((project, index) => (
            <div key={index} className="gsap-fade-up">
              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-blue-500 mb-1 sm:mb-2">{project.label}</p>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                    {project.description}
                  </p>
                  
                  {project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="text-[10px] sm:text-xs text-gray-600 font-medium"
                        >
                          {tag}{tagIndex < project.tags.length - 1 && <span className="ml-1 sm:ml-2">·</span>}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className={`w-16 sm:w-24 h-1 ${project.accentColor} rounded-full`}></div>
                </div>
                
                <div className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full ${project.iconBg} flex items-center justify-center`}>
                  <project.icon className={`text-lg sm:text-xl md:text-2xl ${project.iconColor}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="mt-12">
          <h3 className="gsap-fade-up text-2xl font-bold text-center mb-8 text-gray-800">
            Tecnologías
          </h3>
          
          <div className="gsap-fade-up bg-gray-50 rounded-2xl p-4 sm:p-6 md:p-8">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center group w-16 sm:w-18 md:w-20"
                >
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${tech.color}20`;
                      e.currentTarget.style.borderColor = tech.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '';
                      e.currentTarget.style.borderColor = '';
                    }}
                  >
                    <tech.Icon className="text-xl sm:text-2xl md:text-3xl transition-transform duration-300 group-hover:scale-110" style={{ color: tech.color }} />
                  </div>
                  <span className="text-[10px] sm:text-xs md:text-sm text-gray-700 mt-2 font-semibold text-center leading-tight">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
