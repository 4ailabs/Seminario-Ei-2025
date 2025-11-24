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
      <button
        className={`w-full text-left p-3 sm:p-4 rounded-xl transition-all duration-200 border relative overflow-hidden group touch-manipulation min-h-[60px] sm:min-h-[auto] active:scale-[0.98] ${
          activeTab === session
            ? `bg-gradient-to-br ${getSessionColor(session)} text-white shadow-sm border-transparent`
            : 'bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300 hover:shadow-sm'
        }`}
        onClick={() => setActiveTab(session)}
      >
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1">
            {getSessionIcon(session)}
            <span className={`block text-xs sm:text-sm font-semibold ${activeTab === session ? 'opacity-90' : 'opacity-70'}`}>
              SESIÓN {session}
            </span>
          </div>
          <h3 className={`text-sm sm:text-base font-semibold mb-1 ${activeTab === session ? 'text-white' : 'text-slate-900'}`}>
            {label}
          </h3>
          <p className={`text-xs ${activeTab === session ? 'text-white/80' : 'text-slate-600'}`}>
            {scheduleData[session as keyof typeof scheduleData].date}
          </p>
        </div>
      </button>
    );
  };

  const handleViewSessions = () => {
    window.location.href = `/sesion/${activeTab}`;
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4 sm:mb-6 text-slate-900 tracking-tight leading-tight">{t.program.title}</h2>
      <p className="text-center text-slate-600 text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl mx-auto">
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
            <div className="flex items-center justify-between text-xs text-slate-600 mb-2 font-medium">
              <span>Progreso</span>
              <span>{activeTab}/5</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(activeTab / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3">
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-slate-200 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${
                activeTab === 1 ? 'from-blue-500 to-cyan-500' :
                activeTab === 2 ? 'from-purple-500 to-pink-500' :
                activeTab === 3 ? 'from-green-500 to-emerald-500' :
                activeTab === 4 ? 'from-orange-500 to-red-500' :
                'from-yellow-500 to-amber-500'
              } text-white rounded-xl flex items-center justify-center`}>
                <span className="text-lg sm:text-xl font-bold">{activeTab}</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1 tracking-tight">
                  {scheduleData[activeTab as keyof typeof scheduleData].title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {scheduleData[activeTab as keyof typeof scheduleData].date}
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-3 mb-6">
              {scheduleData[activeTab as keyof typeof scheduleData].topics.map((topic, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2.5 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base font-semibold text-slate-900 mb-1.5 sm:mb-1 leading-tight">{topic?.title || 'Tema'}</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{topic?.description || 'Descripción no disponible'}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleViewSessions}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 sm:py-4 px-6 rounded-xl transition-all duration-200 active:scale-[0.98] touch-manipulation min-h-[48px] text-sm sm:text-base"
            >
              Ver Sesión {activeTab}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramSection;
