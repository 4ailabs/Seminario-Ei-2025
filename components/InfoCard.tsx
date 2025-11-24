import React from 'react';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = React.memo(({ icon, title, description }) => (
  <div className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-slate-200 hover:border-slate-300 transition-all duration-200 hover:shadow-md hover:-translate-y-1 touch-manipulation">
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 leading-tight tracking-tight">{title}</h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
));

InfoCard.displayName = 'InfoCard';

export default InfoCard;
