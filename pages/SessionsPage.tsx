import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import ChatButton from '../components/ChatButton';

interface Session {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  topics: Array<string | { id: string; title: string; description: string; duration: string; subTopics: Array<{ title: string; description: string }> }>;
}

interface SessionsPageProps {
  sessions: Session[];
}

const SessionsPage: React.FC<SessionsPageProps> = ({ sessions }) => {
  const navigate = useNavigate();

  const handleSessionClick = (sessionId: number) => {
    navigate(`/sesion/${sessionId}`);
  };

  const getSessionColor = (sessionNum: number) => {
    switch (sessionNum) {
      case 1: return "from-blue-500 to-cyan-500";
      case 2: return "from-purple-500 to-pink-500";
      case 3: return "from-green-500 to-emerald-500";
      case 4: return "from-orange-500 to-red-500";
      case 5: return "from-yellow-500 to-amber-500";
      default: return "from-slate-500 to-slate-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 sm:mb-6 text-slate-900 leading-tight tracking-tight">Programa de Sesiones</h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl">
            Explora cada sesión en detalle y accede a todos los recursos disponibles
          </p>
        </div>
      </div>

      {/* Sessions Grid */}
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-16 pb-12 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {sessions.map((session) => (
            <div
              key={session.id}
              onClick={() => handleSessionClick(session.id)}
              className="bg-white rounded-2xl shadow-sm p-5 sm:p-6 lg:p-7 hover:shadow-md transition-all duration-200 cursor-pointer group border border-slate-200 hover:border-slate-300 active:scale-[0.98] touch-manipulation"
            >
              {/* Session Number */}
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${getSessionColor(session.id)} text-white rounded-lg flex items-center justify-center font-bold text-lg sm:text-xl`}>
                  {session.id}
                </div>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>

              {/* Session Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors leading-tight tracking-tight">
                {session.title}
              </h3>

              {/* Session Info */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
                <div className="flex items-center gap-3 text-slate-600">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{session.date}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{session.time}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{session.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base mb-4 sm:mb-5 line-clamp-3 leading-relaxed">
                {session.description}
              </p>

              {/* Topics Preview */}
              <div className="mb-4 sm:mb-5">
                <h4 className="text-sm sm:text-base font-semibold text-slate-700 mb-2 sm:mb-3">Temas principales:</h4>
                <div className="flex flex-wrap gap-2">
                  {session.topics.slice(0, 3).map((topic, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 sm:py-1.5 bg-slate-100 text-blue-600 text-xs sm:text-sm rounded-full border border-slate-200"
                    >
                      {typeof topic === 'string' ? topic : topic?.title || 'Tema'}
                    </span>
                  ))}
                  {session.topics.length > 3 && (
                    <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-slate-100 text-slate-600 text-xs sm:text-sm rounded-full border border-slate-200">
                      +{session.topics.length - 3} más
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 sm:pt-5 border-t border-slate-200">
                <span className="text-blue-600 font-medium text-sm sm:text-base group-hover:text-blue-700 transition-colors">
                  Ver detalles completos →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Chat Button - Always visible on mobile */}
      <ChatButton />
    </div>
  );
};

export default SessionsPage;
