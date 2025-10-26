import React from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';

interface SubTopic {
  title: string;
  description: string;
}

interface Topic {
  id: string;
  title: string;
  description: string;
  subTopics: SubTopic[];
  duration: string;
}

interface DetailedTopicsProps {
  topics: Topic[];
}

const DetailedTopics: React.FC<DetailedTopicsProps> = ({ topics }) => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
          <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-900 leading-tight tracking-tight">TEMAS DETALLADOS</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {topics.map((topic, index) => (
          <div key={topic.id} className="bg-white p-4 sm:p-5 lg:p-6 rounded-2xl border border-slate-200 h-full transform transition-all duration-200 hover:shadow-sm hover:border-slate-300">
            <div className="flex items-start mb-4 sm:mb-5">
              <div className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-600 to-blue-700' : 'from-green-600 to-green-700'} rounded-xl flex-shrink-0 shadow-sm`}>
                <span className="text-sm sm:text-base lg:text-lg font-bold">{index + 1}</span>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-slate-900 ml-3 sm:ml-4 leading-tight flex-1 tracking-tight">{topic?.title || 'Tema'}</h3>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed mb-4 sm:mb-5">
              {topic?.description || 'Descripción no disponible'}
            </p>
            
            {topic?.subTopics && topic.subTopics.length > 0 && (
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-700">
                {topic.subTopics.map((subTopic, subIndex) => (
                  <li key={subIndex} className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="font-medium text-slate-900">{subTopic?.title || 'Tema'}:</span>
                      <span className="text-slate-600 ml-1">{subTopic?.description || 'Descripción no disponible'}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedTopics;
