import React from 'react';
import { Target } from 'lucide-react';

interface SessionObjectivesProps {
  objectives: string[];
  sessionColor?: string;
}

const SessionObjectives: React.FC<SessionObjectivesProps> = ({ objectives, sessionColor }) => {
  return (
    <div className="mb-16 sm:mb-20">
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 ${sessionColor ? `bg-gradient-to-br ${sessionColor}` : 'bg-gradient-to-br from-cyan-400 to-blue-500'} text-white rounded-lg flex items-center justify-center`}>
          <Target className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">OBJETIVOS DE LA SESIÓN</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {objectives.map((objective, index) => (
          <div key={index} className="flex items-start gap-3 p-3 sm:p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors">
            <div className={`w-5 h-5 sm:w-6 sm:h-6 ${sessionColor ? `bg-gradient-to-br ${sessionColor}` : 'bg-gradient-to-br from-emerald-400 to-green-500'} text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1`}>
              {index + 1}
            </div>
            <span className="text-sm sm:text-base text-slate-300 leading-relaxed">{objective}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionObjectives;
