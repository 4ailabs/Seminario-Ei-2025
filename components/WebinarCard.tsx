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
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 overflow-hidden h-full flex flex-col touch-manipulation">
      <div className="relative">
        <LazyVimeoVideo videoUrl={videoUrl} title={title} />
      </div>
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-base sm:text-xl font-bold text-white mb-3 line-clamp-2 min-h-[3rem] sm:min-h-[3.5rem] leading-tight">{title}</h3>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed flex-1 line-clamp-3">{description}</p>
      </div>
    </div>
  );
});

WebinarCard.displayName = 'WebinarCard';

export default WebinarCard;
