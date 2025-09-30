import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import ChatWindow from './ChatWindow';

const ChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 p-3 sm:p-4 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 group touch-manipulation min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] flex items-center justify-center border-2 border-cyan-400/30"
          aria-label="Abrir chat - ¿Tienes preguntas?"
        >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2} />
        
        {/* Pulse animation - only on desktop */}
        <div className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-20 hidden sm:block"></div>
        
        {/* Tooltip - only on desktop */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden sm:block">
          ¿Tienes preguntas?
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-900"></div>
        </div>

        {/* Mobile badge - removed to avoid visual confusion */}
        </button>
      )}

      {/* Chat Window */}
      <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default ChatButton;
