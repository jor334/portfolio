import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface SocialLink {
  name: string;
  icon: IconType;
  url: string;
  color: string;
}

const ContactInfo = () => {
  const socialLinks: SocialLink[] = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/jor334', color: 'hover:text-gray-900' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/juan-jose-ortiz-rouille/', color: 'hover:text-blue-600' },
  ];

  return (
    <div>
      <h3 className="text-3xl font-bold text-gray-800 mb-6">
        Conectemos
      </h3>
      
      <p className="text-lg leading-relaxed text-gray-600 mb-10">
        Estoy siempre abierto a discutir nuevos proyectos, ideas creativas 
        u oportunidades para formar parte de tu visión.
      </p>
      
      <div className="grid grid-cols-2 gap-4 mb-12">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              className={`flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-cyan-400 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group`}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
            >
              <div className={`w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-sm group-hover:shadow-md transition-all ${social.color}`}>
                <IconComponent className="text-xl text-gray-600 group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-semibold text-gray-800">
                {social.name}
              </span>
            </a>
          );
        })}
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 text-gray-600">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-sm">
            <FaMapMarkerAlt className="text-white" />
          </div>
          <span>Bogotá, Colombia</span>
        </div>
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 text-gray-600">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-sm">
            <FaEnvelope className="text-white" />
          </div>
          <span>jjsrs334@gmail.com</span>
        </div>

      </div>
    </div>
  );
};

export default ContactInfo;
