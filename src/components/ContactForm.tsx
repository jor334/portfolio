import { useState, useRef } from 'react';
import { FaPaperPlane, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// ⚠️ CONFIGURA ESTAS VARIABLES con tus credenciales de EmailJS
// Crea una cuenta gratuita en https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_rnyauwn'; // Ej: 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_m21xjro'; // Ej: 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'k9A9cah23lFeKnCLa'; // Ej: 'abcdefghijklmnop'

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setStatus('sending');
    setErrorMessage('');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Volver al estado idle después de 5 segundos
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setErrorMessage('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
      
      // Volver al estado idle después de 5 segundos
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const buttonContent = () => {
    switch (status) {
      case 'sending':
        return (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Enviando...
          </>
        );
      case 'success':
        return (
          <>
            <FaCheck className="text-lg" />
            ¡Mensaje Enviado!
          </>
        );
      case 'error':
        return (
          <>
            <FaExclamationTriangle className="text-lg" />
            Error al enviar
          </>
        );
      default:
        return (
          <>
            <FaPaperPlane className="text-lg" />
            Enviar Mensaje
          </>
        );
    }
  };

  const buttonClasses = () => {
    const base = "w-full px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3";
    
    switch (status) {
      case 'success':
        return `${base} bg-green-500 text-white`;
      case 'error':
        return `${base} bg-red-500 text-white`;
      case 'sending':
        return `${base} bg-gray-400 text-white cursor-not-allowed`;
      default:
        return `${base} bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-500 text-white hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/25 active:translate-y-0`;
    }
  };

  return (
    <form 
      ref={formRef}
      className="bg-gray-50 p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
      onSubmit={handleSubmit}
    >
      <div className="mb-6">
        <label 
          htmlFor="name" 
          className="block mb-2 text-gray-800 font-semibold"
        >
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={status === 'sending'}
          placeholder="Tu nombre"
          className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-white text-gray-900 focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
      </div>
      
      <div className="mb-6">
        <label 
          htmlFor="email" 
          className="block mb-2 text-gray-800 font-semibold"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={status === 'sending'}
          placeholder="tu@email.com"
          className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-white text-gray-900 focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
      </div>
      
      <div className="mb-6">
        <label 
          htmlFor="message" 
          className="block mb-2 text-gray-800 font-semibold"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === 'sending'}
          rows={5}
          placeholder="Cuéntame sobre tu proyecto..."
          className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-white text-gray-900 focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 transition-all resize-vertical min-h-[120px] disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
      </div>

      {/* Mensaje de error */}
      {status === 'error' && errorMessage && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
          {errorMessage}
        </div>
      )}

      {/* Mensaje de éxito */}
      {status === 'success' && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-600 text-sm">
          ¡Gracias por tu mensaje! Te contactaré pronto.
        </div>
      )}
      
      <button 
        type="submit"
        disabled={status === 'sending'}
        className={buttonClasses()}
      >
        {buttonContent()}
      </button>
    </form>
  );
};

export default ContactForm;
