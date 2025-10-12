import React, { useState, useEffect } from 'react';
import { Timer, Flame } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const { language } = useLanguage();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Determinar el nivel de urgencia
  const isUrgent = timeLeft.days < 7;
  const isCritical = timeLeft.days < 3;

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="text-center">
      <div
        className={`
          text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-black rounded-xl p-3 sm:p-4 md:p-5
          min-w-[60px] sm:min-w-[70px] md:min-w-[80px] lg:min-w-[90px]
          flex items-center justify-center
          transition-all duration-300 transform
          shadow-lg
          ${
            isCritical
              ? 'bg-gradient-to-br from-red-600 to-red-700 animate-pulse shadow-red-500/50 scale-105'
              : isUrgent
              ? 'bg-gradient-to-br from-orange-600 to-orange-700 shadow-orange-500/50'
              : 'bg-gradient-to-br from-slate-700 to-slate-800 shadow-slate-500/30'
          }
        `}
      >
        {value.toString().padStart(2, '0')}
      </div>
      <div
        className={`
          text-xs sm:text-sm mt-2 font-bold uppercase tracking-wide
          ${isCritical ? 'text-red-300' : isUrgent ? 'text-orange-300' : 'text-slate-400'}
        `}
      >
        {label}
      </div>
    </div>
  );

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Mensaje de urgencia */}
      {isUrgent && (
        <div
          className={`
            flex items-center justify-center gap-2 py-2 px-4 rounded-lg
            ${
              isCritical
                ? 'bg-red-500/20 border border-red-500/50 text-red-200'
                : 'bg-orange-500/20 border border-orange-500/50 text-orange-200'
            }
            animate-pulse
          `}
        >
          <Flame className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wide">
            {isCritical 
              ? (language === 'es' ? '¡Últimas Horas!' : 'Last Hours!') 
              : (language === 'es' ? '¡Oferta por Terminar!' : 'Offer Ending Soon!')}
          </span>
          <Flame className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      )}

      {/* Contador */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Timer
            className={`
              w-5 h-5 sm:w-6 sm:h-6
              ${isCritical ? 'text-red-400 animate-pulse' : isUrgent ? 'text-orange-400' : 'text-yellow-400'}
            `}
          />
        </div>

        <TimeUnit value={timeLeft.days} label={language === 'es' ? 'Días' : 'Days'} />
        <span className="text-slate-400 text-xl sm:text-2xl md:text-3xl font-bold self-center">:</span>
        <TimeUnit value={timeLeft.hours} label={language === 'es' ? 'Horas' : 'Hours'} />
        <span className="text-slate-400 text-xl sm:text-2xl md:text-3xl font-bold self-center">:</span>
        <TimeUnit value={timeLeft.minutes} label={language === 'es' ? 'Min' : 'Min'} />
        <span className="text-slate-400 text-xl sm:text-2xl md:text-3xl font-bold self-center">:</span>
        <TimeUnit value={timeLeft.seconds} label={language === 'es' ? 'Seg' : 'Sec'} />
      </div>

      {/* Indicador de urgencia adicional */}
      {isCritical && (
        <div className="text-center">
          <p className="text-red-300 text-xs sm:text-sm font-semibold animate-pulse">
            {language === 'es' 
              ? '⚠️ Esta es tu última oportunidad para obtener el precio Early Bird'
              : '⚠️ This is your last chance to get the Early Bird price'}
          </p>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
