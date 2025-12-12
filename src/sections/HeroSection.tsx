const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
      <div className="max-w-4xl text-center z-10 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4 text-black font-bold">
          Ingeniero de sistemas 
        </h1>

        <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4 text-black font-bold">
        <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-500 bg-clip-text text-transparent font-bold">
            Full Stack Developer
          </span>
        </h1>
        
        <p className="text-base md:text-lg lg:text-xl text-black/80 mb-10 leading-relaxed mt-4">
          Especializado en Frontend, Drones Autónomos, ERPs <br /> y Automatización con IA
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-black border-2 border-black rounded-full text-lg font-semibold hover:bg-black hover:text-white hover:-translate-y-1 transition-all duration-300"
          >
            Ver Proyectos
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-black border-2 border-black rounded-full text-lg font-semibold hover:bg-black hover:text-white hover:-translate-y-1 transition-all duration-300"
          >
            Contáctame
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
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
