import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "../components/Card";
import { FaCode, FaRobot, FaServer, FaCogs, FaJava } from "react-icons/fa";
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
    <section ref={sectionRef} id="about" className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="gsap-fade-up text-4xl md:text-5xl text-center mb-12 text-gray-800 font-bold relative pb-4">
          Sobre{' '}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-500 bg-clip-text text-transparent font-bold">
            Mí
          </span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full" />
        </h2>
        
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="gsap-fade-up">
            <Card 
              title="Frontend" 
              description="React, TypeScript, Tailwind CSS. Interfaces modernas y responsivas." 
              icon={<FaCode size={24} />} 
            />
          </div>
          <div className="gsap-fade-up">
            <Card 
              title="Drones Autónomos" 
              description="Desarrollo de sistemas de navegación y control para drones." 
              icon={<FaRobot size={24} />} 
            />
          </div>
          <div className="gsap-fade-up">
            <Card 
              title="ERPs" 
              description="Sistemas empresariales integrados para gestión eficiente." 
              icon={<FaServer size={24} />} 
            />
          </div>
          <div className="gsap-fade-up">
            <Card 
              title="Automatización IA" 
              description="Soluciones inteligentes con IA para optimizar procesos." 
              icon={<FaCogs size={24} />} 
            />
          </div>
        </div>

        {/* Text */}
        <div className="gsap-fade-up text-center">
          <p className="text-gray-600 mt-10 text-lg">
          Soy estudiante de Ingeniería de Software con pasión por el desarrollo full stack <br /> y especial énfasis en frontend. Mi trabajo en la iniciativa de drones autónomos de mi universidad me ha <br /> permitido combinar programación avanzada con conocimientos de electrónica. Me especializo <br /> en crear soluciones innovadoras que integran desarrollo web moderno, sistemas ERP <br /> y automatización con inteligencia artificial.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="mt-16">
          <h3 className="gsap-fade-up text-2xl font-bold text-center mb-8 text-gray-800">
            Tecnologías
          </h3>
          
          <div className="gsap-fade-up bg-gray-50 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-13 gap-6 justify-items-center">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center group"
                >
                  <div 
                    className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${tech.color}20`;
                      e.currentTarget.style.borderColor = tech.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '';
                      e.currentTarget.style.borderColor = '';
                    }}
                  >
                    <tech.Icon className="text-2xl md:text-3xl transition-transform duration-300 group-hover:scale-110" style={{ color: tech.color }} />
                  </div>
                  <span className="text-xs md:text-sm text-gray-700 mt-2 font-semibold text-center">
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
