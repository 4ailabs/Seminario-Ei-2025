import React from 'react';
import { 
  BookOpenIcon, 
  FileTextIcon, 
  AwardIcon, 
  SmartphoneIcon, 
  RefreshCwIcon,
  CheckIcon 
} from './Icons';

interface IncludeCardProps {
  title: string;
  description: string;
  index: number;
}

const IncludeCard: React.FC<IncludeCardProps> = React.memo(({ title, description, index }) => {
  const getIcon = (title: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      // Materiales
      'Materiales': <BookOpenIcon className="w-6 h-6 text-cyan-400" />,
      'Materials': <BookOpenIcon className="w-6 h-6 text-cyan-400" />,
      'Material Digital': <BookOpenIcon className="w-6 h-6 text-cyan-400" />,
      'Digital Material': <BookOpenIcon className="w-6 h-6 text-cyan-400" />,
      
      // Manuales
      'Manuales': <FileTextIcon className="w-6 h-6 text-green-400" />,
      'Manuals': <FileTextIcon className="w-6 h-6 text-green-400" />,
      
      // Protocolos
      'Protocolos': <RefreshCwIcon className="w-6 h-6 text-yellow-400" />,
      'Protocols': <RefreshCwIcon className="w-6 h-6 text-yellow-400" />,
      
      // Certificación
      'Certificación': <AwardIcon className="w-6 h-6 text-purple-400" />,
      'Certification': <AwardIcon className="w-6 h-6 text-purple-400" />,
      'Certificado': <AwardIcon className="w-6 h-6 text-purple-400" />,
      'Certificate': <AwardIcon className="w-6 h-6 text-purple-400" />,
      
      // App Oficial
      'App Oficial': <SmartphoneIcon className="w-6 h-6 text-pink-400" />,
      'Official App': <SmartphoneIcon className="w-6 h-6 text-pink-400" />,
      'Acceso Móvil': <SmartphoneIcon className="w-6 h-6 text-pink-400" />,
      'Mobile Access': <SmartphoneIcon className="w-6 h-6 text-pink-400" />,
      
      // Extensiones
      'Extensiones 2026': <RefreshCwIcon className="w-6 h-6 text-orange-400" />,
      '2026 Extensions': <RefreshCwIcon className="w-6 h-6 text-orange-400" />,
      
      // Grabaciones
      'Grabaciones': <FileTextIcon className="w-6 h-6 text-blue-400" />,
      'Recordings': <FileTextIcon className="w-6 h-6 text-blue-400" />
    };
    return iconMap[title] || <CheckIcon className="w-6 h-6 text-cyan-400" />;
  };

  const getGradientColor = (index: number) => {
    const gradients = [
      'from-cyan-500 to-blue-500',
      'from-emerald-500 to-teal-500',
      'from-purple-500 to-pink-500',
      'from-orange-500 to-amber-500',
      'from-indigo-500 to-purple-500',
      'from-pink-500 to-rose-500',
      'from-blue-500 to-cyan-500',
      'from-teal-500 to-emerald-500',
      'from-violet-500 to-purple-500'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="group bg-white p-6 sm:p-7 rounded-2xl border-2 border-slate-200 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 touch-manipulation relative overflow-hidden">
      {/* Gradient accent on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getGradientColor(index)} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
      
      {/* Icon with gradient background */}
      <div className="relative z-10 flex items-start gap-4 sm:gap-5">
        <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${getGradientColor(index)} p-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <div className="text-white [&>svg]:text-white [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-7 sm:[&>svg]:h-7">
            {getIcon(title)}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 leading-tight tracking-tight group-hover:text-slate-800 transition-colors">{title}</h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{description}</p>
        </div>
      </div>
      
      {/* Decorative corner element */}
      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${getGradientColor(index)} opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-300`}></div>
    </div>
  );
});

IncludeCard.displayName = 'IncludeCard';

export default IncludeCard;
