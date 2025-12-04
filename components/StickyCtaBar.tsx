import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Video, Clock } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { useLanguage } from '../LanguageContext';

interface StickyCtaBarProps {
  onScrollTo: (id: string) => void;
}

const StickyCtaBar: React.FC<StickyCtaBarProps> = ({ onScrollTo }) => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar después de 400px de scroll y ocultar cuando llegue a la sección de acceso
      const accesoSection = document.getElementById('acceso');
      if (accesoSection) {
        const rect = accesoSection.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsVisible(window.scrollY > 400 && !isInView);
      } else {
        setIsVisible(window.scrollY > 400);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const generateWhatsAppMessage = () => {
    const message = language === 'es'
      ? `¡Hola! Necesito información sobre el acceso al Seminario Internacional de Inteligencia Energética que inicia mañana (5-7 Dic 2025). ¿Podrían ayudarme con información de acceso presencial u online?`
      : `Hello! I need information about access to the International Energy Intelligence Seminar starting tomorrow (Dec 5-7, 2025). Could you help me with in-person or online access information?`;
    return encodeURIComponent(message);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 transform transition-all duration-300 ease-out animate-slide-up">
      {/* Gradiente de difuminado superior */}
      <div className="absolute -top-8 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

      <div className="bg-white/98 backdrop-blur-md border-t border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            {/* Información de acceso */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-blue-600 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                  {language === 'es' ? 'Inicia Mañana' : 'Starts Tomorrow'}
                </span>
              </div>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-slate-900 text-base sm:text-lg md:text-xl font-bold tracking-tight">
                  {language === 'es' ? '5-7 Diciembre 2025' : 'December 5-7, 2025'}
                </span>
              </div>
              <p className="text-slate-600 text-xs hidden sm:block">
                {language === 'es' ? 'Hotel Galería Plaza Reforma, CDMX' : 'Hotel Galería Plaza Reforma, CDMX'}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Botón Ver Acceso (solo visible en pantallas grandes) */}
              <button
                onClick={() => onScrollTo('acceso')}
                className="hidden lg:flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-xl text-sm transition-all duration-200 active:scale-[0.98] border border-slate-200"
              >
                {language === 'es' ? 'Ver Acceso' : 'View Access'}
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Botón Presencial */}
              <button
                onClick={() => onScrollTo('acceso')}
                className="hidden sm:flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-2 sm:py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm transition-all duration-200 active:scale-[0.98] border border-blue-300"
              >
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden md:inline">
                  {language === 'es' ? 'Presencial' : 'In-Person'}
                </span>
              </button>

              {/* Botón Online */}
              <button
                onClick={() => onScrollTo('acceso')}
                className="hidden sm:flex items-center gap-2 bg-purple-100 hover:bg-purple-200 text-purple-700 font-semibold py-2 sm:py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm transition-all duration-200 active:scale-[0.98] border border-purple-300"
              >
                <Video className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden md:inline">
                  {language === 'es' ? 'Online' : 'Online'}
                </span>
              </button>

              {/* Botón WhatsApp Principal */}
              <a
                href={`https://wa.me/+525579076626?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-xl text-sm sm:text-base transition-all duration-200 active:scale-[0.98] shadow-sm touch-manipulation"
              >
                <WhatsAppIcon className="w-5 h-5 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="hidden sm:inline">
                  {language === 'es' ? 'Consultas' : 'Inquiries'}
                </span>
                <span className="sm:hidden">
                  {language === 'es' ? 'Info' : 'Info'}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Safe area para iPhone */}
      <div className="bg-white/98 h-[env(safe-area-inset-bottom)]"></div>
    </div>
  );
};

export default StickyCtaBar;
