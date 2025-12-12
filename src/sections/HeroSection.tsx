import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  SiReact, 
  SiTypescript, 
  SiPython, 
  SiAngular,
  SiDocker,
  SiMongodb,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const FloatingIcon = ({ 
  Icon, 
  color, 
  initialX, 
  initialY,
  delay,
}: { 
  Icon: React.ElementType; 
  color: string; 
  initialX: string;
  initialY: string;
  delay: number;
}) => {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = iconRef.current;
    if (!el) return;

    const duration = 3 + Math.random() * 2;
    const xRange = 20 + Math.random() * 30;
    const yRange = 15 + Math.random() * 25;

    gsap.fromTo(el, 
      { opacity: 0, scale: 0 },
      { 
        opacity: 0.7, 
        scale: 1, 
        duration: 0.8, 
        delay: delay,
        ease: "back.out(1.7)"
      }
    );

    const tl = gsap.timeline({ repeat: -1, yoyo: true, delay: delay });
    tl.to(el, {
      x: `+=${xRange}`,
      y: `+=${yRange}`,
      rotation: 10,
      duration: duration,
      ease: "sine.inOut",
    }).to(el, {
      x: `-=${xRange * 0.5}`,
      y: `-=${yRange * 1.2}`,
      rotation: -8,
      duration: duration * 0.8,
      ease: "sine.inOut",
    }).to(el, {
      x: `-=${xRange * 0.5}`,
      y: `+=${yRange * 0.2}`,
      rotation: 5,
      duration: duration * 0.7,
      ease: "sine.inOut",
    });

    return () => {
      tl.kill();
    };
  }, [delay]);

  return (
    <div
      ref={iconRef}
      className="absolute pointer-events-none"
      style={{ 
        left: initialX, 
        top: initialY,
        opacity: 0,
      }}
    >
      <div 
        className="p-3 rounded-full backdrop-blur-sm shadow-lg"
        style={{ 
          backgroundColor: `${color}20`,
          border: `2px solid ${color}40`,
        }}
      >
        <Icon className="text-2xl md:text-3xl" style={{ color }} />
      </div>
    </div>
  );
};

const HeroSection = () => {
  const nameRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    gsap.set([nameRef.current, titleRef.current, subtitleRef.current, descriptionRef.current, buttonsRef.current], {
      opacity: 0,
      y: 50,
    });
    gsap.set(scrollIndicatorRef.current, { opacity: 0, y: 20 });

    tl.to(nameRef.current, { opacity: 1, y: 0, duration: 0.6 })
      .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
      .to(descriptionRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .to(buttonsRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
      .to(scrollIndicatorRef.current, { opacity: 1, y: 0, duration: 0.5 }, '-=0.2');

    return () => {
      tl.kill();
    };
  }, []);

  const floatingIcons = [
    { Icon: SiReact, color: '#61DAFB', x: '8%', y: '20%', delay: 0.5 },
    { Icon: SiTypescript, color: '#3178C6', x: '85%', y: '25%', delay: 0.7 },
    { Icon: SiPython, color: '#3776AB', x: '12%', y: '65%', delay: 0.9 },
    { Icon: SiAngular, color: '#DD0031', x: '88%', y: '60%', delay: 1.1 },
    { Icon: FaJava, color: '#007396', x: '5%', y: '45%', delay: 1.3 },
    { Icon: SiDocker, color: '#2496ED', x: '92%', y: '40%', delay: 1.5 },
    { Icon: SiMongodb, color: '#47A248', x: '15%', y: '80%', delay: 1.7 },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
      {/* Floating tech icons */}
      {floatingIcons.map((icon, index) => (
        <FloatingIcon
          key={index}
          Icon={icon.Icon}
          color={icon.color}
          initialX={icon.x}
          initialY={icon.y}
          delay={icon.delay}
        />
      ))}

      <div className="max-w-4xl text-center z-10">
        <p 
          ref={nameRef}
          className="text-lg md:text-xl text-gray-600 mb-2 font-medium"
        >
          Hola, soy
        </p>
        <h1 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl mb-2 text-black font-bold"
        >
          Juan Jose Ortiz Rouille
        </h1>

        <h2 
          ref={subtitleRef}
          className="text-3xl md:text-4xl lg:text-5xl mb-4 font-bold"
        >
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-500 bg-clip-text text-transparent">
            Full Stack Developer
          </span>
        </h2>
        
        <p 
          ref={descriptionRef}
          className="text-base md:text-lg lg:text-xl text-black/80 mb-10 leading-relaxed mt-4"
        >
          Especializado en Frontend, Drones Autónomos, ERPs <br /> y Automatización con IA
        </p>
        
        <div 
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a 
            href="#about" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-black border-2 border-black rounded-full text-lg font-semibold hover:bg-black hover:text-white hover:-translate-y-1 transition-all duration-300"
          >
            Sobre mi
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-black border-2 border-black rounded-full text-lg font-semibold hover:bg-black hover:text-white hover:-translate-y-1 transition-all duration-300"
          >
            Contáctame
          </a>
        </div>
      </div>

      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-500 text-sm">Scroll</span>
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
