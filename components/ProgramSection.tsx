import React, { useState } from 'react';
import { Sparkles, Zap, Compass, Brain, Award } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const ProgramSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { t } = useLanguage();
  
  const scheduleData = {
    1: {
      sessionLabel: t.program.sessions.session1,
      title: t.program.topics.session1.title,
      date: t.program.topics.session1.date,
      topics: t.program.topics.session1.topics
    },
    2: {
      sessionLabel: t.program.sessions.session2,
      title: t.program.topics.session2.title,
      date: t.program.topics.session2.date,
      topics: t.program.topics.session2.topics
    },
    3: {
      sessionLabel: t.program.sessions.session3,
      title: t.program.topics.session3.title,
      date: t.program.topics.session3.date,
      topics: t.program.topics.session3.topics
    },
    4: {
      sessionLabel: t.program.sessions.session4,
      title: t.program.topics.session4.title,
      date: t.program.topics.session4.date,
      topics: t.program.topics.session4.topics
    },
    5: {
      sessionLabel: t.program.sessions.session5,
      title: t.program.topics.session5.title,
      date: t.program.topics.session5.date,
      topics: t.program.topics.session5.topics
    },
  };

  const TabButton: React.FC<{ session: number; label: string; }> = ({ session, label }) => {
    const getSessionIcon = (sessionNum: number) => {
      switch(sessionNum) {
        case 1: return <Sparkles className="w-5 h-5" strokeWidth={1.5} />;
        case 2: return <Zap className="w-5 h-5" strokeWidth={1.5} />;
        case 3: return <Compass className="w-5 h-5" strokeWidth={1.5} />;
        case 4: return <Brain className="w-5 h-5" strokeWidth={1.5} />;
        case 5: return <Award className="w-5 h-5" strokeWidth={1.5} />;
        default: return <Sparkles className="w-5 h-5" strokeWidth={1.5} />;
      }
    };

    const getSessionColor = (sessionNum: number) => {
      switch(sessionNum) {
        case 1: return "from-blue-500 to-cyan-500";
        case 2: return "from-purple-500 to-pink-500";
        case 3: return "from-green-500 to-emerald-500";
        case 4: return "from-orange-500 to-red-500";
        case 5: return "from-yellow-500 to-amber-500";
        default: return "from-slate-500 to-slate-600";
      }
    };

    return (
      <div
        className={`w-full text-left p-3 sm:p-4 rounded-lg transition-all duration-300 border-2 relative overflow-hidden group ${
          activeTab === session 
            ? `bg-gradient-to-br ${getSessionColor(session)} text-white shadow-lg border-white/30 transform scale-105` 
            : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-600 hover:border-slate-500 hover:shadow-md hover:scale-102'
        }`}
        onClick={() => setActiveTab(session)}
      >
        {/* Efecto de brillo para la sesión activa */}
        {activeTab === session && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        )}
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1">
            {getSessionIcon(session)}
            <span className={`block text-xs sm:text-sm font-semibold ${activeTab === session ? 'opacity-90' : 'opacity-70'}`}>
              SESIÓN {session}
            </span>
          </div>
          <h3 className={`text-sm sm:text-base font-bold mb-1 ${activeTab === session ? 'text-white' : 'text-slate-200'}`}>
            {label}
          </h3>
          <p className={`text-xs ${activeTab === session ? 'text-white/80' : 'text-slate-400'}`}>
            {scheduleData[session as keyof typeof scheduleData].date}
          </p>
        </div>
      </div>
    );
  };

  const handleViewSessions = () => {
    window.location.href = '/sesion/1';
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 text-white tracking-tight leading-tight">{t.program.title}</h2>
      <p className="text-center text-slate-400 text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl mx-auto">
        {t.program.subtitle}
      </p>
      <p className="text-center text-slate-500 text-xs mb-4 italic">
        {t.program.disclaimer}
      </p>
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 max-w-6xl mx-auto">
        <div className="lg:w-1/3">
          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
            <TabButton session={1} label={t.program.sessions.session1}/>
            <TabButton session={2} label={t.program.sessions.session2}/>
            <TabButton session={3} label={t.program.sessions.session3}/>
            <TabButton session={4} label={t.program.sessions.session4}/>
            <TabButton session={5} label={t.program.sessions.session5}/>
          </div>
          {/* Indicador de progreso */}
          <div className="mt-4 hidden lg:block">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>Progreso</span>
              <span>{activeTab}/5</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(activeTab / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-2/3">
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${
                activeTab === 1 ? 'from-blue-500 to-cyan-500' :
                activeTab === 2 ? 'from-purple-500 to-pink-500' :
                activeTab === 3 ? 'from-green-500 to-emerald-500' :
                activeTab === 4 ? 'from-orange-500 to-red-500' :
                'from-yellow-500 to-amber-500'
              } text-white rounded-lg flex items-center justify-center`}>
                <span className="text-lg sm:text-xl font-bold">{activeTab}</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {scheduleData[activeTab as keyof typeof scheduleData].title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {scheduleData[activeTab as keyof typeof scheduleData].date}
                </p>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              {scheduleData[activeTab as keyof typeof scheduleData].topics.map((topic, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1">{topic?.title || 'Tema'}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm">{topic?.description || 'Descripción no disponible'}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              onClick={handleViewSessions}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Ver Primera Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramSection;
