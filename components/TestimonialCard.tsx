import React from 'react';
import { QuoteIcon } from './Icons';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = React.memo(({ name, role, content, index }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 touch-manipulation">
      <div className="flex items-start gap-3 sm:gap-4 mb-4">
        <QuoteIcon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 italic">"{content}"</p>
          <div className="border-t border-slate-700 pt-3 sm:pt-4">
            <h4 className="text-white font-semibold text-sm sm:text-base">{name}</h4>
            <p className="text-cyan-400 text-xs sm:text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

export default TestimonialCard;
