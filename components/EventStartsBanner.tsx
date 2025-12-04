import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Video, X, AlertCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import CountdownTimer from './CountdownTimer';

const EventStartsBanner: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [timeUntilStart, setTimeUntilStart] = useState<{ hours: number; minutes: number }>({ hours: 0, minutes: 0 });

  // Fecha de inicio: 6 de Diciembre 2025 a las 9:00 AM (hora de México)
  const eventStartDate = new Date('2025-12-06T09:00:00-06:00');
  const now = new Date();
  const timeDiff = eventStartDate.getTime() - now.getTime();
  
  useEffect(() => {
    if (timeDiff > 0) {
      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      setTimeUntilStart({ hours, minutes });
    }
    
    // Actualizar altura del banner en CSS variable para el header
    const updateBannerHeight = () => {
      const banner = document.querySelector('[data-banner]') as HTMLElement;
      if (banner && isVisible) {
        const height = banner.offsetHeight;
        document.documentElement.style.setProperty('--banner-height', `${height}px`);
      } else {
        document.documentElement.style.setProperty('--banner-height', '0px');
      }
    };
    
    updateBannerHeight();
    window.addEventListener('resize', updateBannerHeight);
    return () => window.removeEventListener('resize', updateBannerHeight);
  }, [isVisible, timeDiff]);

  // Determinar el estado del evento
  const isToday = now.toDateString() === eventStartDate.toDateString();
  const isTomorrow = new Date(now.getTime() + 86400000).toDateString() === eventStartDate.toDateString();
  const hasStarted = timeDiff <= 0;

  if (!isVisible || hasStarted) return null;

  return (
    <div data-banner className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white shadow-lg" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Mensaje principal */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex-shrink-0">
              <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="text-sm sm:text-base font-bold uppercase tracking-wide">
                  {isToday 
                    ? (language === 'es' ? '¡Inicia Hoy!' : 'Starts Today!')
                    : isTomorrow
                    ? (language === 'es' ? '¡Inicia Mañana!' : 'Starts Tomorrow!')
                    : (language === 'es' ? 'Próximamente' : 'Coming Soon')
                  }
                </span>
                <span className="hidden sm:inline text-xs sm:text-sm opacity-90">
                  {language === 'es' 
                    ? 'Seminario Internacional de Inteligencia Energética'
                    : 'International Energy Intelligence Seminar'
                  }
                </span>
              </div>
              {isToday || isTomorrow ? (
                <div className="flex items-center gap-2 mt-1 text-xs sm:text-sm opacity-90">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>
                    {language === 'es' 
                      ? `6-8 Diciembre 2025 • Hotel Galería Plaza Reforma, CDMX`
                      : `December 6-8, 2025 • Hotel Galería Plaza Reforma, CDMX`
                    }
                  </span>
                </div>
              ) : null}
            </div>
          </div>

          {/* Contador y acciones */}
          <div className="flex items-center gap-3 sm:gap-4">
            {(isToday || isTomorrow) && (
              <div className="hidden sm:flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/30">
                <Clock className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-semibold">
                  {timeUntilStart.hours > 0 
                    ? `${timeUntilStart.hours}h ${timeUntilStart.minutes}m`
                    : `${timeUntilStart.minutes}m`
                  }
                </span>
              </div>
            )}
            
            {/* Botones de acción */}
            <div className="flex items-center gap-2">
              <a
                href="#acceso"
                className="flex items-center gap-1.5 sm:gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-white/30 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">
                  {language === 'es' ? 'Presencial' : 'In-Person'}
                </span>
                <span className="sm:hidden">
                  {language === 'es' ? 'Lugar' : 'Venue'}
                </span>
              </a>
              <a
                href="#acceso"
                className="flex items-center gap-1.5 sm:gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-white/30 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Video className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">
                  {language === 'es' ? 'Online' : 'Online'}
                </span>
                <span className="sm:hidden">
                  {language === 'es' ? 'Live' : 'Live'}
                </span>
              </a>
            </div>

            {/* Botón cerrar */}
            <button
              onClick={() => setIsVisible(false)}
              className="flex-shrink-0 p-1.5 hover:bg-white/20 rounded-lg transition-all duration-200 active:scale-95"
              aria-label={language === 'es' ? 'Cerrar' : 'Close'}
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventStartsBanner;

