import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

interface Session {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  topics: string[];
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
    <div className="min-h-screen bg-slate-900 text-slate-300">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white">Programa de Sesiones</h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-400">
            Explora cada sesión en detalle y accede a todos los recursos disponibles
          </p>
        </div>
      </div>

            {/* Sessions Grid */}
            <div className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {sessions.map((session) => (
            <div
              key={session.id}
              onClick={() => handleSessionClick(session.id)}
              className="bg-slate-800 rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group border border-slate-700 hover:border-cyan-400"
            >
              {/* Session Number */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${getSessionColor(session.id)} text-white rounded-lg flex items-center justify-center font-bold text-base sm:text-lg`}>
                  {session.id}
                </div>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </div>

              {/* Session Title */}
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors">
                {session.title}
              </h3>

              {/* Session Info */}
              <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{session.date}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{session.time}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{session.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
                {session.description}
              </p>

              {/* Topics Preview */}
              <div className="mb-3 sm:mb-4">
                <h4 className="text-xs sm:text-sm font-semibold text-slate-300 mb-1 sm:mb-2">Temas principales:</h4>
                <div className="flex flex-wrap gap-1">
                  {session.topics.slice(0, 3).map((topic, index) => (
                    <span
                      key={index}
                      className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-slate-700 text-cyan-400 text-xs rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                  {session.topics.length > 3 && (
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-slate-600 text-slate-300 text-xs rounded-full">
                      +{session.topics.length - 3} más
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 sm:pt-4 border-t border-slate-600">
                <span className="text-cyan-400 font-medium text-xs sm:text-sm group-hover:text-cyan-300">
                  Ver detalles completos →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SessionsPage;
