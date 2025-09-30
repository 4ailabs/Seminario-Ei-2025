import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Loader2 } from 'lucide-react';
import { openaiService, ChatMessage } from '../services/openaiService';
import { useLanguage } from '../LanguageContext';

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chat opens
      const welcomeMessage: ChatMessage = {
        id: 'welcome',
        text: language === 'es' 
          ? '¡Hola! Soy tu asistente virtual del Seminario Internacional de Inteligencia Energética. ¿En qué puedo ayudarte? Puedes preguntarme sobre precios, fechas, ubicación, modalidades o qué incluye el seminario.'
          : 'Hello! I\'m your virtual assistant for the International Energy Intelligence Conference. How can I help you? You can ask me about prices, dates, location, modalities, or what the seminar includes.',
        isUser: false,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, language]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Use real OpenAI API
      const response = await openaiService.sendMessage(inputMessage, language);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: language === 'es' 
          ? 'Lo siento, hubo un error. Por favor intenta de nuevo o contacta directamente vía WhatsApp al +52 557 907 6626.'
          : 'Sorry, there was an error. Please try again or contact directly via WhatsApp at +52 557 907 6626.',
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = language === 'es' 
    ? [
        '¿Cuál es el precio?',
        '¿Cuándo es el seminario?',
        '¿Dónde se realiza?',
        '¿Qué incluye?'
      ]
    : [
        'What is the price?',
        'When is the seminar?',
        'Where is it held?',
        'What does it include?'
      ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-slate-900 rounded-t-3xl sm:rounded-2xl shadow-2xl w-full h-[90vh] sm:h-[600px] sm:max-w-md flex flex-col border border-slate-700 sm:border-t-0 safe-area-inset-bottom chat-container">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700 sticky top-0 bg-slate-900 z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/20 rounded-lg">
              <Bot className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-sm sm:text-base">
                {language === 'es' ? 'Asistente Virtual' : 'Virtual Assistant'}
              </h3>
              <p className="text-xs text-slate-400 hidden sm:block">
                {language === 'es' ? 'Seminario Inteligencia Energética' : 'Energy Intelligence Seminar'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors touch-manipulation"
            aria-label={language === 'es' ? 'Cerrar chat' : 'Close chat'}
          >
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 -webkit-overflow-scrolling-touch overscroll-contain">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-3 text-sm sm:text-base ${
                  message.isUser
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800 text-slate-200'
                }`}
              >
                <div className="flex items-start gap-2">
                  {!message.isUser && (
                    <Bot className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  )}
                  {message.isUser && (
                    <User className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  )}
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-800 text-slate-200 rounded-2xl p-3">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-cyan-400" />
                  <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                  <span className="text-sm">
                    {language === 'es' ? 'Escribiendo...' : 'Typing...'}
                  </span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        {messages.length <= 1 && (
          <div className="px-3 sm:px-4 pb-2">
            <p className="text-xs text-slate-400 mb-2">
              {language === 'es' ? 'Preguntas frecuentes:' : 'Frequently asked:'}
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInputMessage(question)}
                  className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-2 sm:px-3 py-1.5 sm:py-1 rounded-full transition-colors touch-manipulation"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-3 sm:p-4 border-t border-slate-700 bg-slate-900 sticky bottom-0 pb-safe">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={language === 'es' ? 'Escribe tu pregunta...' : 'Type your question...'}
              className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-3 py-3 sm:py-2 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-base touch-manipulation min-h-[44px]"
              disabled={isLoading}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="p-3 sm:p-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-slate-700 disabled:cursor-not-allowed text-white rounded-lg transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={language === 'es' ? 'Enviar mensaje' : 'Send message'}
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
