import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
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
      // Mostrar después de 400px de scroll y ocultar cuando llegue a la sección de inversión
      const inversionSection = document.getElementById('inversion');
      if (inversionSection) {
        const rect = inversionSection.getBoundingClientRect();
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
      ? `¡Hola! Me interesa inscribirme al Seminario Internacional de Inteligencia Energética (5-7 Dic 2025 + sesiones 24 Ene & 28 Feb 2026) en el Hotel Galería Plaza Reforma, Ciudad de México. ¿Podrían brindarme más información sobre el proceso de inscripción y formas de pago?`
      : `Hello! I'm interested in registering for the International Energy Intelligence Seminar (Dec 5-7, 2025 + sessions Jan 24 & Feb 28, 2026) at Hotel Galería Plaza Reforma, Mexico City. Could you provide me with more information about the registration process and payment methods?`;
    return encodeURIComponent(message);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 transform transition-all duration-500 ease-out animate-slide-up">
      {/* Gradiente de difuminado superior */}
      <div className="absolute -top-8 left-0 right-0 h-8 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>

      <div className="bg-gradient-to-r from-slate-900/98 via-slate-800/98 to-slate-900/98 backdrop-blur-xl border-t border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            {/* Precio y oferta */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-yellow-400 flex-shrink-0 animate-pulse" />
                <span className="text-yellow-400 text-xs sm:text-sm font-bold uppercase tracking-wide">
                  Early Bird
                </span>
              </div>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-white text-xl sm:text-2xl md:text-3xl font-black tracking-tight">
                  $8,000 MXN
                </span>
                <span className="text-slate-400 text-xs sm:text-sm line-through">
                  $9,500 MXN
                </span>
              </div>
              <p className="text-slate-400 text-xs hidden sm:block">
                {language === 'es' ? '+ Acceso GRATIS a grabaciones' : '+ FREE access to recordings'}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Botón Ver Inversión (solo visible en pantallas grandes) */}
              <button
                onClick={() => onScrollTo('inversion')}
                className="hidden lg:flex items-center gap-2 bg-slate-700/80 hover:bg-slate-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 border border-slate-600 hover:border-slate-500"
              >
                {language === 'es' ? 'Ver Detalles' : 'View Details'}
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Botón WhatsApp Principal */}
              <a
                href={`https://wa.me/+525579076626?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full text-sm sm:text-base transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-green-500/30 touch-manipulation relative overflow-hidden group"
              >
                {/* Efecto de brillo animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>

                <WhatsAppIcon className="w-5 h-5 sm:w-5 sm:h-5 flex-shrink-0 relative z-10" />
                <span className="relative z-10 hidden sm:inline">
                  {language === 'es' ? '¡Inscríbete Ahora!' : 'Register Now!'}
                </span>
                <span className="relative z-10 sm:hidden">
                  {language === 'es' ? 'Inscríbete' : 'Register'}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Safe area para iPhone */}
      <div className="bg-slate-900/98 h-[env(safe-area-inset-bottom)]"></div>
    </div>
  );
};

export default StickyCtaBar;
