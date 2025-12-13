import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animatedElements = gsap.utils.toArray<HTMLElement>('.gsap-fade-up');
      
      animatedElements.forEach((element, index) => {
        gsap.fromTo(element,
          { 
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-24 px-8 pb-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="gsap-fade-up text-4xl md:text-5xl text-center mb-4 text-gray-800 font-bold relative pb-4">
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-500 bg-clip-text text-transparent font-bold">
            Contacto
          </span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
        </h2>
        
        <p className="gsap-fade-up text-center text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 mb-24">
          <div className="gsap-fade-up">
            <ContactInfo />
          </div>
          <div className="gsap-fade-up">
            <ContactForm />
          </div>
        </div>
      </div>
      
      <Footer />
    </section>
  );
};

export default ContactSection;
