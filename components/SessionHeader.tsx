import React from 'react';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

interface SessionHeaderProps {
  sessionNumber: number;
  title: string;
  date: string;
  time: string;
  location: string;
  onBack: () => void;
  sessionColor: string;
}

const SessionHeader: React.FC<SessionHeaderProps> = ({
  sessionNumber,
  title,
  date,
  time,
  location,
  onBack,
  sessionColor
}) => {
  return (
    <div className="bg-slate-900 text-slate-300">
      {/* Navigation Bar */}
      <div className={`flex items-center justify-between p-3 sm:p-4 border-b border-slate-700 border-t-4 bg-gradient-to-r ${sessionColor}`}>
        <button
          onClick={onBack}
          className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 rounded-lg transition-colors border border-slate-600 text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-medium hidden sm:inline">Regresar al Programa</span>
          <span className="font-medium sm:hidden">Regresar</span>
        </button>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-cyan-400 text-slate-900 rounded-full flex items-center justify-center">
            <span className="text-xs sm:text-sm font-bold">EI</span>
          </div>
        </div>
      </div>

      {/* Session Info */}
      <div className="p-4 sm:p-6 lg:p-8 pt-8 sm:pt-10 lg:pt-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${sessionColor} text-white rounded-lg flex items-center justify-center font-bold text-base sm:text-lg`}>
              {sessionNumber}
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              SESIÓN {sessionNumber}: {title}
            </h1>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-10 lg:mt-12 text-slate-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">{time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">{location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionHeader;
