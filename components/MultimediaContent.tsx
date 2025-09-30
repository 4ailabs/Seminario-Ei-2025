import React from 'react';
import { Play, Download, Headphones, FileText, ExternalLink } from 'lucide-react';

interface MultimediaItem {
  id: string;
  type: 'video' | 'download' | 'podcast' | 'article';
  title: string;
  description: string;
  url: string;
  duration?: string;
  fileSize?: string;
  category: 'intro' | 'practice' | 'reference' | 'supplement';
}

interface MultimediaContentProps {
  items: MultimediaItem[];
}

const MultimediaContent: React.FC<MultimediaContentProps> = ({ items }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play className="w-6 h-6" />;
      case 'download': return <Download className="w-6 h-6" />;
      case 'podcast': return <Headphones className="w-6 h-6" />;
      case 'article': return <FileText className="w-6 h-6" />;
      default: return <ExternalLink className="w-6 h-6" />;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'video': return 'from-red-400 to-orange-500';
      case 'download': return 'from-blue-400 to-cyan-500';
      case 'podcast': return 'from-green-400 to-emerald-500';
      case 'article': return 'from-yellow-400 to-amber-500';
      default: return 'from-slate-400 to-slate-500';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-cyan-400 text-slate-900';
      case 'download': return 'bg-cyan-400 text-slate-900';
      case 'podcast': return 'bg-cyan-400 text-slate-900';
      case 'article': return 'bg-cyan-400 text-slate-900';
      default: return 'bg-slate-600 text-slate-300';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'intro': return 'bg-slate-700 text-cyan-400';
      case 'practice': return 'bg-slate-700 text-cyan-400';
      case 'reference': return 'bg-slate-700 text-cyan-400';
      case 'supplement': return 'bg-slate-700 text-cyan-400';
      default: return 'bg-slate-700 text-slate-300';
    }
  };

  return (
    <div className="mb-16 sm:mb-20">
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-pink-500 text-white rounded-lg flex items-center justify-center">
          <Play className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">CONTENIDO MULTIMEDIA</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-slate-800 p-3 sm:p-4 lg:p-6 rounded-xl text-center border border-slate-700 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer group"
            onClick={() => window.open(item.url, '_blank')}
          >
            <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mb-3 sm:mb-4 lg:mb-6 text-white bg-gradient-to-br ${getIconColor(item.type)} rounded-full mx-auto`}>
              {getIcon(item.type)}
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 leading-tight group-hover:text-cyan-400 transition-colors">
              {item.title}
            </h3>
            <div className="flex items-center justify-center gap-1 sm:gap-2 mb-2 sm:mb-3">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                {item.category}
              </span>
              {item.duration && (
                <span className="text-xs text-slate-400">{item.duration}</span>
              )}
              {item.fileSize && (
                <span className="text-xs text-slate-400">{item.fileSize}</span>
              )}
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-slate-400 leading-relaxed mb-3 sm:mb-4">
              {item.description}
            </p>
            <div className="text-xs sm:text-sm text-cyan-400 font-medium group-hover:text-cyan-300">
              {item.type === 'video' ? 'Ver video' : 
               item.type === 'download' ? 'Descargar' :
               item.type === 'podcast' ? 'Escuchar' : 'Leer artículo'} →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultimediaContent;
