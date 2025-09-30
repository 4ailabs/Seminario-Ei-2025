import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SessionHeader from '../components/SessionHeader';
import SessionObjectives from '../components/SessionObjectives';
import MultimediaContent from '../components/MultimediaContent';
import DetailedTopics from '../components/DetailedTopics';
import MaterialsNeeded from '../components/MaterialsNeeded';

interface SessionData {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  objectives: string[];
  multimedia: Array<{
    id: string;
    type: 'video' | 'download' | 'podcast' | 'article';
    title: string;
    description: string;
    url: string;
    duration?: string;
    fileSize?: string;
    category: 'intro' | 'practice' | 'reference' | 'supplement';
  }>;
  topics: Array<{
    id: string;
    title: string;
    description: string;
    subTopics: Array<{
      title: string;
      description: string;
    }>;
    duration: string;
  }>;
  materials: string[];
}

interface SessionDetailPageProps {
  sessions: SessionData[];
}

const SessionDetailPage: React.FC<SessionDetailPageProps> = ({ sessions }) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  
  const sessionId = parseInt(id || '1');
  const session = sessions.find(s => s.id === sessionId);

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

  if (!session) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-300 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Sesión no encontrada</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-cyan-400 text-slate-900 rounded-lg hover:bg-cyan-300 transition-colors font-medium"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      <SessionHeader
        sessionNumber={session.id}
        title={session.title}
        date={session.date}
        time={session.time}
        location={session.location}
        onBack={handleBack}
        sessionColor={getSessionColor(session.id)}
      />

      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-12 sm:py-16 lg:py-20">
        <SessionObjectives objectives={session.objectives} sessionColor={getSessionColor(session.id)} />
        
        {session.multimedia.length > 0 && (
          <MultimediaContent items={session.multimedia} />
        )}
        
        <DetailedTopics topics={session.topics} />
        
        <MaterialsNeeded materials={session.materials} />
      </div>
    </div>
  );
};

export default SessionDetailPage;
