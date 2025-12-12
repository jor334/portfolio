import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-8 pb-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-800 font-bold relative pb-4">
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-500 bg-clip-text text-transparent font-bold">
            Contacto
          </span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
        </h2>
        
        <p className="text-center text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 mb-24">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      
      <Footer />
    </section>
  );
};

export default ContactSection;
