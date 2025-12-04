import React, { useState, useEffect } from 'react';
import { Users, Star, TrendingUp } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const SocialProofBadge: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [currentBadge, setCurrentBadge] = useState(0);

  // Rotar entre diferentes badges cada 8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBadge((prev) => (prev + 1) % 3);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Mostrar después de 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const badgesEs = [
    {
      icon: <TrendingUp className="w-4 h-4" />,
      text: '12ª Edición del Seminario',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-900'
    },
    {
      icon: <Users className="w-4 h-4" />,
      text: '+2,000 participantes en 12 ediciones',
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-900'
    },
    {
      icon: <Star className="w-4 h-4" />,
      text: '6-8 Dic 2025 + 2 sesiones 2026',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-900'
    }
  ];

  const badgesEn = [
    {
      icon: <TrendingUp className="w-4 h-4" />,
      text: '12th Edition of the Seminar',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-900'
    },
    {
      icon: <Users className="w-4 h-4" />,
      text: '+2,000 participants in 12 editions',
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-900'
    },
    {
      icon: <Star className="w-4 h-4" />,
      text: 'Dec 6-8, 2025 + 2 sessions 2026',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-900'
    }
  ];

  const badges = language === 'es' ? badgesEs : badgesEn;

  const badge = badges[currentBadge];

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 sm:top-24 right-2 sm:right-4 z-30 animate-slide-in-right">
      <div
        className={`
          ${badge.bgColor} ${badge.borderColor}
          rounded-full border
          px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm
          transform transition-all duration-200 hover:shadow-md
          max-w-[260px] sm:max-w-[280px] md:max-w-xs
        `}
      >
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className={`bg-gradient-to-br ${badge.color} p-1 sm:p-1.5 rounded-full flex-shrink-0 shadow-sm`}>
            <div className="w-3 h-3 sm:w-4 sm:h-4 text-white">
              {badge.icon}
            </div>
          </div>
          <p className={`${badge.textColor} text-[10px] sm:text-xs md:text-sm font-semibold leading-tight`}>
            {badge.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialProofBadge;
