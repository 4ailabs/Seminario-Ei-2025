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
    <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-200 hover:shadow-sm touch-manipulation">
      <div className="flex items-start gap-3 sm:gap-4 mb-4">
        <QuoteIcon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4 italic">"{content}"</p>
          <div className="border-t border-slate-200 pt-3 sm:pt-4">
            <h4 className="text-slate-900 font-semibold text-sm sm:text-base">{name}</h4>
            <p className="text-cyan-600 text-xs sm:text-sm font-medium">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

export default TestimonialCard;
