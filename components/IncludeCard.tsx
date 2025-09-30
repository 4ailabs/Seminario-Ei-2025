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
      'Material Digital': <BookOpenIcon className="w-6 h-6 text-cyan-400" />,
      'Digital Material': <BookOpenIcon className="w-6 h-6 text-cyan-400" />,
      'Certificado': <AwardIcon className="w-6 h-6 text-yellow-400" />,
      'Certificate': <AwardIcon className="w-6 h-6 text-yellow-400" />,
      'Acceso Móvil': <SmartphoneIcon className="w-6 h-6 text-green-400" />,
      'Mobile Access': <SmartphoneIcon className="w-6 h-6 text-green-400" />,
      'Grabaciones': <FileTextIcon className="w-6 h-6 text-purple-400" />,
      'Recordings': <FileTextIcon className="w-6 h-6 text-purple-400" />,
      'Extensiones 2026': <RefreshCwIcon className="w-6 h-6 text-orange-400" />,
      '2026 Extensions': <RefreshCwIcon className="w-6 h-6 text-orange-400" />
    };
    return iconMap[title] || <CheckIcon className="w-6 h-6 text-cyan-400" />;
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          {getIcon(title)}
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
});

IncludeCard.displayName = 'IncludeCard';

export default IncludeCard;
