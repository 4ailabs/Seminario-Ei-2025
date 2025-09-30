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
    <div className="mb-16 sm:mb-20">
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-400 to-purple-500 text-white rounded-lg flex items-center justify-center">
          <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">TEMAS DETALLADOS</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {topics.map((topic, index) => (
          <div key={topic.id} className="bg-slate-800/50 p-3 sm:p-4 lg:p-6 rounded-xl border border-slate-700 h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
            <div className="flex items-center mb-3 sm:mb-4 lg:mb-5">
              <div className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white bg-gradient-to-br ${index % 2 === 0 ? 'from-cyan-400 to-blue-500' : 'from-emerald-400 to-green-500'} rounded-lg flex-shrink-0`}>
                <span className="text-sm sm:text-base lg:text-lg font-bold">{index + 1}</span>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white ml-2 sm:ml-3 lg:ml-4 leading-tight">{topic.title}</h3>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
              {topic.description}
            </p>
            
            {topic.subTopics.length > 0 && (
              <ul className="space-y-1 sm:space-y-2 lg:space-y-3 text-xs sm:text-sm lg:text-base text-slate-300">
                {topic.subTopics.map((subTopic, subIndex) => (
                  <li key={subIndex} className="flex items-start">
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 mt-1 mr-1 sm:mr-2 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-slate-300">{subTopic.title}:</span>
                      <span className="text-slate-400 ml-1">{subTopic.description}</span>
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
