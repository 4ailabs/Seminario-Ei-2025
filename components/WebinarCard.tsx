import React from 'react';
import LazyVimeoVideo from './LazyVimeoVideo';

interface WebinarCardProps {
  title: string;
  description: string;
  videoUrl: string;
  index: number;
}

const WebinarCard: React.FC<WebinarCardProps> = React.memo(({ title, description, videoUrl, index }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-200 hover:shadow-sm overflow-hidden h-full flex flex-col touch-manipulation">
      <div className="relative">
        <LazyVimeoVideo videoUrl={videoUrl} title={title} />
      </div>
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-2 line-clamp-2 leading-tight tracking-tight">{title}</h3>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed flex-1 line-clamp-2">{description}</p>
      </div>
    </div>
  );
});

WebinarCard.displayName = 'WebinarCard';

export default WebinarCard;
