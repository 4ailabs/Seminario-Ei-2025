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

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 touch-manipulation">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="flex-shrink-0 mt-1">
          {getIcon(title)}
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">{title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
});

IncludeCard.displayName = 'IncludeCard';

export default IncludeCard;
