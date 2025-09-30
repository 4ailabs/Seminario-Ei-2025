import React from 'react';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = React.memo(({ icon, title, description }) => (
  <div className="bg-slate-800/50 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 touch-manipulation">
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">{title}</h3>
        <p className="text-slate-400 text-sm sm:text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
));

InfoCard.displayName = 'InfoCard';

export default InfoCard;
