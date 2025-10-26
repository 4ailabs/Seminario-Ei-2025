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
    <div className="bg-white">
      {/* Navigation Bar */}
      <div className={`flex items-center justify-between p-3 sm:p-4 border-b border-slate-200 border-t-4 bg-gradient-to-r ${sessionColor}`}>
        <button
          onClick={onBack}
          className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-all duration-200 active:scale-[0.98] text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-medium hidden sm:inline">Regresar al Programa</span>
          <span className="font-medium sm:hidden">Regresar</span>
        </button>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center shadow-sm">
            <span className="text-xs sm:text-sm font-bold">EI</span>
          </div>
        </div>
      </div>

      {/* Session Info */}
      <div className="p-4 sm:p-6 lg:p-8 pt-8 sm:pt-10 lg:pt-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${sessionColor} text-white rounded-xl flex items-center justify-center font-bold text-base sm:text-lg shadow-sm`}>
              {sessionNumber}
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight tracking-tight">
              SESIÓN {sessionNumber}: {title}
            </h1>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-10 lg:mt-12 text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">{time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">{location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionHeader;
