import React from 'react';
import { Target } from 'lucide-react';

interface SessionObjectivesProps {
  objectives: string[];
  sessionColor?: string;
}

const SessionObjectives: React.FC<SessionObjectivesProps> = ({ objectives, sessionColor }) => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 ${sessionColor ? `bg-gradient-to-br ${sessionColor}` : 'bg-gradient-to-br from-blue-600 to-blue-700'} text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
          <Target className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-900 leading-tight tracking-tight">OBJETIVOS DE LA SESIÓN</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
        {objectives.map((objective, index) => (
          <div key={index} className="flex items-start gap-3 p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-200 hover:shadow-sm">
            <div className={`w-6 h-6 sm:w-7 sm:h-7 ${sessionColor ? `bg-gradient-to-br ${sessionColor}` : 'bg-gradient-to-br from-green-600 to-green-700'} text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 mt-0.5 shadow-sm`}>
              {index + 1}
            </div>
            <span className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">{objective}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionObjectives;
