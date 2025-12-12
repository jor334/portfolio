import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "../components/Card";
import { FaCode, FaRobot, FaServer, FaCogs, FaJava, FaChevronLeft, FaChevronRight } from "react-icons/fa";
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

const AboutSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 300;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      if (direction === 'right') {
        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      } else {
        if (container.scrollLeft <= 10) {
          container.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth parallax reveal for all animated elements
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
        <div className="grid grid-cols-2 gap-6">
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
          <p className="text-gray-600 mt-10">
          Soy estudiante de Ingeniería de Software con pasión por el desarrollo full stack <br /> y especial énfasis en frontend. Mi trabajo en la iniciativa de drones autónomos de mi universidad me ha <br /> permitido combinar programación avanzada con conocimientos de electrónica. Me especializo <br /> en crear soluciones innovadoras que integran desarrollo web moderno, sistemas ERP <br /> y automatización con inteligencia artificial.
          </p>
        </div>

        {/* Technologies */}
        <div className="mt-16">
          <h3 className="gsap-fade-up text-2xl font-bold text-center mb-8 text-gray-800">
            Tecnologías
          </h3>
          
          {/* Carousel with controls */}
          <div className="gsap-fade-up relative">
            {/* Left button */}
            <button
              onClick={() => scroll('left')}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 shadow-lg rounded-full p-3 border border-gray-200 cursor-pointer"
              type="button"
            >
              <FaChevronLeft className="text-gray-700 text-xl" />
            </button>

            {/* Right button */}
            <button
              onClick={() => scroll('right')}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 shadow-lg rounded-full p-3 border border-gray-200 cursor-pointer"
              type="button"
            >
              <FaChevronRight className="text-gray-700 text-xl" />
            </button>

            {/* Scroll container */}
            <div 
              ref={scrollContainerRef}
              className="overflow-x-scroll mx-8"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              <div className="flex gap-6 py-4 w-max">
                <div className="flex flex-col items-center justify-center flex-shrink-0 w-24">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <SiReact className="text-3xl text-[#61DAFB]" />
                  </div>
                  <span className="text-sm text-gray-600 mt-2 font-medium">React</span>
                </div>
                
                <div className="flex flex-col items-center justify-center flex-shrink-0 w-24">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <TbBrandReactNative className="text-3xl text-[#61DAFB]" />
                  </div>
                  <span className="text-sm text-gray-600 mt-2 font-medium text-center">React Native</span>
                </div>
                
                <div className="flex flex-col items-center justify-center flex-shrink-0 w-24">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <SiAngular className="text-3xl text-[#DD0031]" />
                  </div>
                  <span className="text-sm text-gray-600 mt-2 font-medium">Angular</span>
                </div>
                
                <div className="flex flex-col items-center justify-center flex-shrink-0 w-24">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <SiDjango className="text-3xl text-[#092E20]" />
                  </div>
                  <span className="text-sm text-gray-600 mt-2 font-medium">Django</span>
                </div>
                
                <div className="flex flex-col items-center justify-center flex-shrink-0 w-24">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <SiSpringboot className="text-3xl text-[#6DB33F]" />
                  </div>
                  <span className="text-sm text-gray-600 mt-2 font-medium text-center">Spring Boot</span>
                </div>
                
                <div className="flex flex-col items-center justify-center flex-shrink-0 w-24">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <FaJava className="text-3xl text-[#007396]" />
                  </div>
                  <span className="text-sm text-gray-600 mt-2 font-medium">Java</span>
                </div>
                
                <div className="flex flex-col items-center justify-center flex-shrink-0 w-24">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <SiSupabase className="text-3xl text-[#3ECF8E]" />
                  </div>
                  <span className="text-sm text-gray-600 mt-2 font-medium">Supabase</span>
                </div>
                
                <div className="flex flex-col items-center justify-center flex-shrink-0 w-24">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <SiMysql className="text-3xl text-[#4479A1]" />
                  </div>
                  <span className="text-sm text-gray-600 mt-2 font-medium">SQL</span>
                </div>
                
                <div className="flex flex-col items-center justify-center flex-shrink-0 w-24">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <SiMongodb className="text-3xl text-[#47A248]" />
                  </div>
                  <span className="text-sm text-gray-600 mt-2 font-medium">MongoDB</span>
                </div>
                
                <div className="flex flex-col items-center justify-center flex-shrink-0 w-24">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <SiGithub className="text-3xl text-[#181717]" />
                  </div>
                  <span className="text-sm text-gray-600 mt-2 font-medium">GitHub</span>
                </div>
                
                <div className="flex flex-col items-center justify-center flex-shrink-0 w-24">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <SiDocker className="text-3xl text-[#2496ED]" />
                  </div>
                  <span className="text-sm text-gray-600 mt-2 font-medium">Docker</span>
                </div>
                
                <div className="flex flex-col items-center justify-center flex-shrink-0 w-24">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <SiAmazon className="text-3xl text-[#FF9900]" />
                  </div>
                  <span className="text-sm text-gray-600 mt-2 font-medium">AWS</span>
                </div>
                
                <div className="flex flex-col items-center justify-center flex-shrink-0 w-24">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <SiPython className="text-3xl text-[#3776AB]" />
                  </div>
                  <span className="text-sm text-gray-600 mt-2 font-medium">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
