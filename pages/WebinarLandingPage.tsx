import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Zap,
  Star,
  MessageCircle,
  Share2
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import LazyVimeoVideo from '../components/LazyVimeoVideo';

const WebinarLandingPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const webinarDate = new Date('2025-12-06T10:00:00'); // Fecha del segundo webinar
      const difference = webinarDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const generateWhatsAppMessage = () => {
    const message = language === 'es' 
      ? `¡Hola! Vi el webinar "Priming Neurofisiológico - Entrena tu Cerebro para Estados Óptimos" y me interesa conocer más sobre el Seminario Internacional de Inteligencia Energética. ¿Podrían brindarme más información?`
      : `Hello! I watched the webinar "Neurophysiological Priming - Train Your Brain for Optimal States" and I'm interested in learning more about the International Energy Intelligence Conference. Could you provide me with more information?`;
    return encodeURIComponent(message);
  };

  const webinarData = {
    es: {
      title: "Priming Neurofisiológico",
      subtitle: "Entrena tu Cerebro para Estados Óptimos",
      date: "Ya transmitido - Disponible para ver",
      time: "Duración: 1 hora",
      location: "Grabación disponible 24/7",
      videoUrl: "https://vimeo.com/1122501757/9d6c991bc4", // URL del webinar grabado
      benefits: [
        "Aprende técnicas de priming neurofisiológico",
        "Entrena tu cerebro para estados óptimos de rendimiento",
        "Domina la regulación del sistema nervioso autónomo",
        "Workshop práctico de entrenamiento cerebral",
        "Herramientas para el control consciente"
      ],
      testimonials: [
        {
          quote: "El priming neurofisiológico transformó completamente mi capacidad de concentración y rendimiento. Una técnica revolucionaria.",
          name: "Dr. María González",
          role: "Psicóloga Clínica"
        }
      ]
    },
      en: {
        title: "Neurophysiological Priming",
        subtitle: "Train Your Brain for Optimal States",
        date: "Already aired - Available to watch",
        time: "Duration: 1 hour",
        location: "Recording available 24/7",
        videoUrl: "https://vimeo.com/1122501757/9d6c991bc4",
      benefits: [
        "Learn neurophysiological priming techniques",
        "Train your brain for optimal performance states",
        "Master autonomic nervous system regulation",
        "Practical brain training workshop",
        "Tools for conscious control"
      ],
      testimonials: [
        {
          quote: "Neurophysiological priming completely transformed my concentration and performance capacity. A revolutionary technique.",
          name: "Dr. María González",
          role: "Clinical Psychologist"
        }
      ]
    }
  };

  const data = webinarData[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              <Play className="w-3 h-3 sm:w-4 sm:h-4" />
              {language === 'es' ? '¡GRABACIÓN DISPONIBLE!' : 'RECORDING AVAILABLE!'}
            </div>
            
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              {data.title}
            </h1>
            
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-sm sm:text-lg text-slate-300 mb-6 sm:mb-8">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-xs sm:text-base">{data.date}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-xs sm:text-base">{data.time}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-xs sm:text-base">{data.location}</span>
              </div>
            </div>

            {/* Access Info */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto border border-slate-700">
              <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-3 sm:mb-4">
                {language === 'es' ? '¡Acceso inmediato y gratuito!' : 'Immediate and free access!'}
              </h3>
              <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                <div className="bg-green-500/20 p-2 sm:p-4 rounded-lg">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-1 sm:mb-2" />
                  <p className="text-xs sm:text-sm text-slate-300">
                    {language === 'es' ? 'Ver ahora' : 'Watch now'}
                  </p>
                </div>
                <div className="bg-blue-500/20 p-2 sm:p-4 rounded-lg">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mx-auto mb-1 sm:mb-2" />
                  <p className="text-xs sm:text-sm text-slate-300">
                    {language === 'es' ? '1 hora' : '1 hour'}
                  </p>
                </div>
                <div className="bg-purple-500/20 p-2 sm:p-4 rounded-lg">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mx-auto mb-1 sm:mb-2" />
                  <p className="text-xs sm:text-sm text-slate-300">
                    {language === 'es' ? 'Gratis' : 'Free'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Preview */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-3 sm:p-6 border border-slate-700">
              <h3 className="text-lg sm:text-2xl font-bold text-center mb-4 sm:mb-6 text-cyan-400">
                {language === 'es' ? 'Ver webinar completo' : 'Watch full webinar'}
              </h3>
              <LazyVimeoVideo videoUrl={data.videoUrl} title={data.title} />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <a 
              href={`https://wa.me/+525579076626?text=${generateWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-lg transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 touch-manipulation"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              {language === 'es' ? 'Más info del seminario' : 'More seminar info'}
            </a>
            
            <button 
              onClick={() => window.history.back()}
              className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-lg transition duration-300 flex items-center justify-center gap-2 sm:gap-3 touch-manipulation"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              {language === 'es' ? 'Ver seminario' : 'View seminar'}
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            {language === 'es' ? '¿Qué aprenderás?' : 'What will you learn?'}
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {data.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-0.5 sm:mt-1" />
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            {language === 'es' ? 'Testimonios' : 'Testimonials'}
          </h2>
          
          {data.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700 text-center">
              <p className="text-base sm:text-xl text-slate-300 italic mb-4 sm:mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-white text-base sm:text-lg">{testimonial.name}</p>
                <p className="text-cyan-400 text-sm sm:text-base">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            {language === 'es' 
              ? '¿Listo para transformar tu práctica?' 
              : 'Ready to transform your practice?'}
          </h2>
          <p className="text-base sm:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed">
            {language === 'es' 
              ? 'Únete a cientos de profesionales que ya están aplicando estas metodologías revolucionarias.'
              : 'Join hundreds of professionals who are already applying these revolutionary methodologies.'}
          </p>
          
          <a 
            href={`https://wa.me/+525579076626?text=${generateWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-lg transition duration-300 transform hover:scale-105 touch-manipulation"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            {language === 'es' ? 'Inscribirse ahora' : 'Register now'}
          </a>
        </div>
      </section>
    </div>
  );
};

export default WebinarLandingPage;
