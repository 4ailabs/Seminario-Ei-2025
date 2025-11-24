import React from 'react';
import { Sparkles, Zap, Compass, Brain, Award, ArrowRight, Calendar, Users } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const ProgramTimeline: React.FC = () => {
  const { language, t } = useLanguage();

  const presencialSessions = [
    {
      id: 1,
      date: language === 'es' ? '5 Dic 2025' : 'Dec 5, 2025',
      title: language === 'es' ? 'Neuroplasticidad y Reprocesamiento Bilateral' : 'Neuroplasticity and Bilateral Reprocessing',
      keywords: language === 'es' 
        ? ['PONS', 'TRSB', 'Protocolo 4 etapas']
        : ['PONS', 'TRSB', '4-Stage Protocol'],
      icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-500',
      borderColor: 'border-green-400'
    },
    {
      id: 2,
      date: language === 'es' ? '6 Dic 2025' : 'Dec 6, 2025',
      title: language === 'es' ? 'Bioenergética + Context Engineering' : 'Bioenergetics + Context Engineering',
      keywords: language === 'es'
        ? ['13 hologramas', '20 sensaciones viscerales', 'Protocolos Alpha, Beta, Gamma, Delta']
        : ['13 holograms', '20 visceral sensations', 'Alpha, Beta, Gamma, Delta Protocols'],
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'from-orange-500 to-amber-600',
      bgColor: 'bg-orange-500',
      borderColor: 'border-orange-400'
    },
    {
      id: 3,
      date: language === 'es' ? '7 Dic 2025' : 'Dec 7, 2025',
      title: language === 'es' ? 'Integración y Transformación Sostenible' : 'Integration and Sustainable Transformation',
      keywords: language === 'es'
        ? ['Protocolo avanzado', 'Programa 90 días', 'LSP Insight System', 'Herramientas IA']
        : ['Advanced Protocol', '90-Day Program', 'LSP Insight System', 'AI Tools'],
      icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-500',
      borderColor: 'border-purple-400'
    }
  ];

  const onlineSessions = [
    {
      id: 4,
      date: language === 'es' ? '25 Ene 2026' : 'Jan 25, 2026',
      title: language === 'es' ? 'LSP Insight System: Del Símbolo a la Acción' : 'LSP Insight System: From Symbol to Action',
      icon: <Compass className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-500',
      isOnline: true
    },
    {
      id: 5,
      date: language === 'es' ? '22 Feb 2026' : 'Feb 22, 2026',
      title: language === 'es' ? 'Maestría y Proyección Futura' : 'Mastery and Future Projection',
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'from-amber-500 to-yellow-600',
      bgColor: 'bg-amber-500',
      isOnline: true
    }
  ];

  return (
    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="relative z-10">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 md:mb-20">
        <div className="inline-block mb-4">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide shadow-md">
            {language === 'es' ? 'Programa Académico Completo' : 'Complete Academic Program'}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight">
          {language === 'es' ? 'Estructura del Programa' : 'Program Structure'}
        </h2>
        <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          {language === 'es' 
            ? 'Un viaje transformador de 5 sesiones diseñado para tu crecimiento profesional y personal'
            : 'A transformative 5-session journey designed for your professional and personal growth'}
        </p>
      </div>

      {/* Bloque Presencial - Timeline Horizontal */}
      <div className="mb-16 sm:mb-20 md:mb-24">
        <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10 md:mb-12">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg shadow-md">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
            {language === 'es' ? 'Bloque Presencial: 5-7 Diciembre 2025' : 'In-Person Block: December 5-7, 2025'}
          </h3>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Timeline with arrows */}
          <div className="hidden lg:flex items-stretch justify-center gap-4 mb-8">
            {presencialSessions.map((session, index) => (
              <React.Fragment key={session.id}>
                <div className="flex-1 max-w-xs">
                  <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-xl border-2 border-slate-300 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                    <div className="relative z-10">
                      {/* Icon Container */}
                      <div className="flex items-center justify-center mb-3">
                        <div className={`bg-gradient-to-br ${session.color} rounded-lg p-1.5 shadow-md group-hover:shadow-lg transition-all duration-300`}>
                          <div className="text-white">
                            {session.icon}
                          </div>
                        </div>
                      </div>
                      
                      {/* Date Badge */}
                      <div className="text-center mb-3">
                        <div className={`inline-block bg-gradient-to-r ${session.color} text-white rounded-full px-3 py-1 mb-2 shadow-md`}>
                          <span className="text-xs font-bold">{session.date}</span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-3 leading-tight min-h-[2.5rem] flex items-center justify-center">
                          {session.title}
                        </h4>
                      </div>
                      
                      {/* Keywords */}
                      <div className="space-y-1.5">
                        {session.keywords.map((keyword, idx) => (
                          <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-semibold text-center text-slate-700 hover:bg-slate-100 transition-colors">
                            {keyword}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {index < presencialSessions.length - 1 && (
                  <div className="flex-shrink-0 flex items-center mx-2">
                    <div className="bg-gradient-to-r from-slate-200 to-slate-300 rounded-full p-3 shadow-lg">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile/Tablet Timeline - Stacked */}
          <div className="lg:hidden space-y-6 sm:space-y-8">
            {presencialSessions.map((session, index) => (
              <React.Fragment key={session.id}>
                <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-xl border-2 border-slate-300 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className={`bg-gradient-to-br ${session.color} rounded-lg p-1.5 flex-shrink-0 shadow-md`}>
                        <div className="text-white">
                          {session.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`inline-block bg-gradient-to-r ${session.color} text-white rounded-full px-2.5 py-1 mb-2 shadow-md`}>
                          <span className="text-xs font-bold">{session.date}</span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-3 leading-tight">{session.title}</h4>
                        <div className="space-y-1.5">
                          {session.keywords.map((keyword, idx) => (
                            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700">
                              {keyword}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {index < presencialSessions.length - 1 && (
                  <div className="flex justify-center">
                    <div className="bg-gradient-to-b from-slate-200 to-slate-300 rounded-full p-2 shadow-md">
                      <ArrowRight className="w-5 h-5 text-white rotate-90" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Divider con línea punteada */}
      <div className="relative mb-12 sm:mb-16 md:mb-20">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-dashed border-slate-300"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-white px-6 py-2 rounded-full shadow-lg border-2 border-slate-200">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
              <span className="text-xs sm:text-sm font-semibold text-slate-700">
                {language === 'es' ? 'Seguimiento Online' : 'Online Follow-up'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bloque de Consolidación - Sesiones Online */}
      <div>
        <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10 md:mb-12">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-2 rounded-lg shadow-md">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
            {language === 'es' ? 'Bloque de Consolidación: Enero-Febrero 2026' : 'Consolidation Block: January-February 2026'}
          </h3>
        </div>

        {/* Online Sessions - Horizontal layout */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 max-w-5xl mx-auto">
          {onlineSessions.map((session, index) => (
            <React.Fragment key={session.id}>
              <div className="flex-1 w-full sm:w-auto max-w-[280px]">
                <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-xl border-2 border-slate-300 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                  {/* Online Badge - Fixed position */}
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg z-20">
                    {language === 'es' ? 'ONLINE' : 'ONLINE'}
                  </div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center pt-1">
                    <div className={`bg-gradient-to-br ${session.color} rounded-lg p-1.5 mb-3 shadow-md group-hover:shadow-lg transition-all duration-300`}>
                      <div className="text-white">
                        {session.icon}
                      </div>
                    </div>
                    <div className={`inline-block bg-gradient-to-r ${session.color} text-white rounded-full px-3 py-1 mb-2 shadow-md`}>
                      <span className="text-xs font-bold">{session.date}</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight min-h-[2.5rem] flex items-center justify-center">
                      {session.title}
                    </h4>
                  </div>
                </div>
              </div>
              {index < onlineSessions.length - 1 && (
                <div className="hidden sm:flex flex-shrink-0 items-center">
                  <div className="bg-gradient-to-r from-slate-200 to-slate-300 rounded-full p-2 shadow-lg">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProgramTimeline;

