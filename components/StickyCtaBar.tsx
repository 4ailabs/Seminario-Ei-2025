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
    <div className="fixed bottom-0 left-0 right-0 z-40 transform transition-all duration-300 ease-out animate-slide-up">
      {/* Gradiente de difuminado superior */}
      <div className="absolute -top-8 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

      <div className="bg-white/98 backdrop-blur-md border-t border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            {/* Precio y oferta */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-amber-600 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                  Early Bird
                </span>
              </div>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-slate-900 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                  $8,000 MXN
                </span>
                <span className="text-slate-500 text-xs sm:text-sm line-through">
                  $9,500 MXN
                </span>
              </div>
              <p className="text-slate-600 text-xs hidden sm:block">
                {language === 'es' ? '+ Acceso GRATIS a grabaciones' : '+ FREE access to recordings'}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Botón Ver Inversión (solo visible en pantallas grandes) */}
              <button
                onClick={() => onScrollTo('inversion')}
                className="hidden lg:flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-xl text-sm transition-all duration-200 active:scale-[0.98] border border-slate-200"
              >
                {language === 'es' ? 'Ver Detalles' : 'View Details'}
                <ArrowRight className="w-4 h-4" />
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
                  {language === 'es' ? '¡Inscríbete Ahora!' : 'Register Now!'}
                </span>
                <span className="sm:hidden">
                  {language === 'es' ? 'Inscríbete' : 'Register'}
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
