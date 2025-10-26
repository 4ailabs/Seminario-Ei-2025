
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { 
    MapPin, 
    Brain, 
    Zap, 
    Clock, 
    Cpu, 
    Check, 
    HeartPulse, 
    Briefcase, 
    User, 
    Quote, 
    MessageCircle,
    ArrowUp,
    ArrowRight,
    Timer,
    BookOpen,
    FileText,
    Award,
    Smartphone,
    RefreshCw,
    Sparkles,
    Compass,
    Play,
    Phone,
    Globe
} from 'lucide-react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { useIntersectionObserver } from './useIntersectionObserver';
import ChatButton from './components/ChatButton';
import SessionsPage from './pages/SessionsPage';
import SessionDetailPage from './pages/SessionDetailPage';
import WebinarLandingPage from './pages/WebinarLandingPage';
import GalleryPage from './pages/GalleryPage';
import TRSBApp from './pages/TRSBApp';
import LazyGalleryImage from './components/LazyGalleryImage';
import LazyVimeoVideo from './components/LazyVimeoVideo';
import Header from './components/Header';
import AnimatedSection from './components/AnimatedSection';
import ProgramSection from './components/ProgramSection';
import ErrorBoundary from './components/ErrorBoundary';
import InfoCard from './components/InfoCard';
import WebinarCard from './components/WebinarCard';
import TestimonialCard from './components/TestimonialCard';
import IncludeCard from './components/IncludeCard';
import StickyCtaBar from './components/StickyCtaBar';
import CountdownTimer from './components/CountdownTimer';
import SocialProofBadge from './components/SocialProofBadge';
import { 
  MapPinIcon, 
  SparklesIcon, 
  GemIcon, 
  BrainIcon, 
  EnergyIcon, 
  DecisionIcon, 
  CpuIcon, 
  CheckIcon, 
  HeartPulseIcon, 
  BriefcaseIcon, 
  UserIcon, 
  QuoteIcon, 
  WhatsAppIcon,
  BookOpenIcon,
  FileTextIcon,
  AwardIcon,
  SmartphoneIcon,
  RefreshCwIcon
} from './components/Icons';
import { sessionsData } from './data/sessionsData';





// --- Program Section Component ---


// --- Countdown Timer Component moved to separate file ---

// --- Back to Top Component ---
const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-16 right-4 sm:bottom-20 md:bottom-24 sm:right-8 z-50 p-2.5 sm:p-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg transition-all duration-300 transform back-to-top-iphone16 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            } hover:scale-110 active:scale-95 min-w-[44px] min-h-[44px] sm:min-w-[48px] sm:min-h-[48px] flex items-center justify-center touch-manipulation`}
            aria-label="Back to top"
        >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" strokeWidth={2} />
        </button>
    );
};

// --- Main App Component ---
const AppContent: React.FC = () => {
    const { language, t } = useLanguage();
    
    const handleScrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const generateWhatsAppMessage = () => {
        // Always generate Spanish message for WhatsApp
        const message = `¡Hola! Me interesa inscribirme al Seminario Internacional de Inteligencia Energética (5-7 Dic 2025 + sesiones 24 Ene & 28 Feb 2026) en el Hotel Galería Plaza Reforma, Ciudad de México. ¿Podrían brindarme más información sobre el proceso de inscripción y formas de pago?`;
        return encodeURIComponent(message);
    };

    return (
        <div className="bg-gradient-to-b from-slate-50 to-white text-slate-800 antialiased">
            <Header onScrollTo={handleScrollTo} />

            <main>

                {/* --- Hero Section --- */}
                <section className="relative min-h-[90vh] flex items-center justify-center text-center px-4 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-white to-slate-50">
                    <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50"></div>
                    <div className="relative z-10 max-w-6xl mx-auto">
                        <AnimatedSection>
                            <div className="flex flex-col items-center mb-6 sm:mb-8 mt-16 sm:mt-8 md:mt-0">
                                <img
                                    src="/images/portada-seminario-ei.png"
                                    alt="Seminario Internacional de Inteligencia Energética"
                                    className="w-full max-w-3xl mx-auto mb-6 rounded-2xl shadow-sm border border-slate-200"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl text-slate-800 font-medium mb-3 sm:mb-4 gap-1 sm:gap-2">
                                <span className="flex items-center">
                                    <MapPinIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                                    {t.hero.location}
                                </span>
                                <div className="text-slate-900 font-semibold flex flex-col gap-1 text-center">
                                    <span className="text-base sm:text-lg md:text-xl">
                                        {language === 'es' ? '5-7 Diciembre 2025' : 'December 5-7, 2025'}
                                    </span>
                                    <div className="text-xs sm:text-sm text-slate-600 font-medium px-2">
                                        {language === 'es' ? '+ 2 Sesiones: 24 Ene & 28 Feb 2026' : '+ 2 Sessions: Jan 24 & Feb 28, 2026'}
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 mb-2">
                                    <span className="text-green-600 text-base sm:text-lg font-semibold uppercase tracking-wide">
                                        {language === 'es' ? 'Modalidad Presencial' : 'In-Person Modality'}
                                    </span>
                                    <span className="text-slate-300 text-lg font-normal hidden sm:inline">
                                        |
                                    </span>
                                    <span className="text-blue-600 text-base sm:text-lg font-semibold uppercase tracking-wide">
                                        {language === 'es' ? 'Versión Online' : 'Online Version'}
                                    </span>
                                </div>
                            </div>
                            <p className="text-sm sm:text-base md:text-lg text-slate-900 mb-4 sm:mb-6 max-w-4xl mx-auto font-medium leading-relaxed px-4">
                                {t.hero.subtitle}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed px-4">
                                {t.hero.description}
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
                                <a href="#inversion" onClick={(e) => {e.preventDefault(); handleScrollTo('inversion')}} className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 active:from-cyan-700 active:to-blue-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-sm sm:text-base md:text-lg transition-all duration-200 shadow-sm touch-manipulation w-full sm:w-auto active:scale-[0.98]">
                                    {t.hero.ctaInscribirse}
                                </a>
                                <a href="#programa" onClick={(e) => {e.preventDefault(); handleScrollTo('programa')}} className="bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-300 text-slate-800 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-sm sm:text-base md:text-lg transition-all duration-200 touch-manipulation w-full sm:w-auto active:scale-[0.98]">
                                    {t.hero.ctaVerPrograma}
                                </a>
                                <a href="/trsb" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 active:from-purple-800 active:to-purple-900 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-sm sm:text-base md:text-lg transition-all duration-200 shadow-sm touch-manipulation w-full sm:w-auto flex items-center justify-center gap-2 active:scale-[0.98]">
                                    App TRSB
                                </a>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* --- Webinar TRSB Banner --- */}
                <AnimatedSection className="bg-white py-8 sm:py-12 border-y border-slate-200" delay={100}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
                                {/* Left side - Content */}
                                <div className="flex-1 text-center lg:text-left">
                                    <div className="inline-block bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-4">
                                        <span className="text-blue-700 text-sm font-semibold">WEBINAR EN VIVO HOY</span>
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-3 leading-tight tracking-tight">
                                        De Reactivo a Creativo en 90 Días
                                    </h2>
                                    <p className="text-lg sm:text-xl text-purple-600 mb-4 font-semibold">
                                        TRSB en Acción - Webinar Experiencial
                                    </p>
                                    <p className="text-slate-700 text-sm sm:text-base mb-4">
                                        Técnica de Reprocesamiento Somato-Cognitivo Bilateral - 45 minutos + Práctica guiada de 12 minutos
                                    </p>
                                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                                        <div className="flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-2 border border-slate-200">
                                            <Clock size={16} className="text-slate-700" />
                                            <span className="text-slate-900 text-sm font-medium">Hoy • Early Bird termina</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-2 border border-slate-200">
                                            <Zap size={16} className="text-slate-700" />
                                            <span className="text-slate-900 text-sm font-medium">Práctica experiencial incluida</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right side - CTA */}
                                <div className="flex flex-col gap-4 items-center lg:items-end">
                                    <a
                                        href="/trsb"
                                        className="group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-4 px-8 rounded-xl text-base sm:text-lg transition-all duration-200 shadow-sm flex items-center gap-3 touch-manipulation active:scale-[0.98]"
                                    >
                                        <span>Acceder a la App TRSB</span>
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
                                    </a>
                                    <p className="text-xs sm:text-sm text-slate-600 text-center max-w-xs">
                                        Usa la app para tu práctica diaria de 5 minutos durante los 90 días de transformación
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Divider */}
                <div className="w-full border-t border-slate-200"></div>

                {/* --- Hotel Information Section --- */}
                <AnimatedSection id="ubicacion" className="relative py-24 sm:py-28 md:py-32 overflow-hidden bg-gradient-to-b from-white to-slate-50" delay={150}>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        {/* Header */}
                        <div className="text-center mb-8 sm:mb-10 md:mb-16 px-4">
                            <div className="inline-block mb-3 sm:mb-4">
                                <span className="bg-slate-100/80 text-slate-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide border border-slate-200">
                                    {language === 'es' ? 'CDMX, MÉXICO' : 'CDMX, MEXICO'}
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-3 sm:mb-4 md:mb-6 px-2 tracking-tight">
                                {language === 'es' ? 'Ubicación del Evento' : 'Event Location'}
                            </h2>
                            <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2">
                                {language === 'es'
                                    ? 'En el corazón de la zona financiera y turística de la Ciudad de México'
                                    : 'In the heart of Mexico City\'s financial and tourist district'}
                            </p>
                        </div>

                        {/* Main Content */}
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                                <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">

                                    {/* Hotel Details */}
                                    <div className="p-6 sm:p-8 md:p-10 group hover:bg-slate-50/50 transition-all duration-200">
                                        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6 tracking-tight">
                                            Hotel Galería Plaza Reforma
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 flex-shrink-0">
                                                    <MapPin className="w-5 h-5 text-blue-600" />
                                                </div>
                                                <div>
                                                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                                                        Paseo de la Reforma 334, Juárez, 06600 Ciudad de México, CDMX
                                                    </p>
                                                    <p className="text-slate-500 text-xs sm:text-sm mt-1">
                                                        {language === 'es' 
                                                            ? 'Zona financiera y turística premium'
                                                            : 'Premium financial and tourist district'
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 flex-shrink-0">
                                                    <Phone className="w-5 h-5 text-blue-600" />
                                                </div>
                                                <a 
                                                    href="tel:+525552301712"
                                                    className="text-slate-700 hover:text-blue-600 transition-colors text-sm sm:text-base flex items-center min-h-[40px]"
                                                >
                                                    +52 55 5230 1712
                                                </a>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 flex-shrink-0">
                                                    <Globe className="w-5 h-5 text-blue-600" />
                                                </div>
                                                <a 
                                                    href="https://www.galeriaplazahotels.com.mx/es/reforma/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-slate-700 hover:text-blue-600 transition-colors text-sm sm:text-base break-words flex items-center min-h-[40px]"
                                                >
                                                    {language === 'es' ? 'Visitar sitio web' : 'Visit website'}
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Amenities */}
                                    <div className="p-6 sm:p-8 md:p-10 group hover:bg-slate-50/50 transition-all duration-200">
                                        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6 tracking-tight">
                                            {language === 'es' ? 'Amenidades' : 'Amenities'}
                                        </h3>
                                        <div className="space-y-2.5 sm:space-y-3">
                                            {(language === 'es' ? [
                                                "Ubicación estratégica en zona financiera",
                                                "Cerca de Paseo de la Reforma",
                                                "Acceso a Roma Norte y Condesa",
                                                "Alberca en el penthouse",
                                                "Business Club",
                                                "Restaurantes exclusivos"
                                            ] : [
                                                "Strategic financial district location",
                                                "Near Paseo de la Reforma",
                                                "Access to Roma Norte and Condesa",
                                                "Penthouse pool",
                                                "Business Club",
                                                "Exclusive restaurants"
                                            ]).map((amenity, index) => (
                                                <div key={index} className="flex items-start gap-2 sm:gap-3">
                                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                                        {amenity}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Divider */}
                <div className="w-full border-t border-slate-200"></div>

                {/* --- Online Modality Benefits --- */}
                <AnimatedSection className="relative py-24 sm:py-28 md:py-32 overflow-hidden bg-white" delay={150}>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        {/* Header */}
                        <div className="text-center mb-8 sm:mb-10 md:mb-16 px-4">
                            <div className="inline-block mb-3 sm:mb-4">
                                <span className="bg-blue-50/80 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide border border-blue-200">
                                    {language === 'es' ? 'TRANSMISIÓN PROFESIONAL' : 'PROFESSIONAL STREAMING'}
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-3 sm:mb-4 md:mb-6 px-2 tracking-tight">
                                {language === 'es' ? 'Participa desde cualquier lugar' : 'Join from anywhere'}
                            </h2>
                            <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2">
                                {language === 'es'
                                    ? 'Misma calidad que estar presente. Tecnología de transmisión en vivo de nivel profesional.'
                                    : 'Same quality as being there. Professional-level live streaming technology.'}
                            </p>
                        </div>

                        {/* Main Content - Horizontal Layout */}
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                                <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">

                                    {/* HD */}
                                    <div className="p-6 sm:p-8 md:p-10 text-center group hover:bg-slate-50/50 transition-all duration-200">
                                        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-50 mb-4 sm:mb-6 group-hover:bg-blue-100 transition-all duration-200">
                                            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2 sm:mb-3 tracking-tight">
                                            {language === 'es' ? 'Calidad HD' : 'HD Quality'}
                                        </h3>
                                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                            {language === 'es'
                                                ? 'Video en alta definición 1080p para que no pierdas ningún detalle'
                                                : '1080p high definition video so you don\'t miss any detail'}
                                        </p>
                                    </div>

                                    {/* Live */}
                                    <div className="p-6 sm:p-8 md:p-10 text-center group hover:bg-slate-50/50 transition-all duration-200">
                                        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-50 mb-4 sm:mb-6 group-hover:bg-green-100 transition-all duration-200">
                                            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2 sm:mb-3 tracking-tight">
                                            {language === 'es' ? 'Totalmente En Vivo' : 'Fully Live'}
                                        </h3>
                                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                            {language === 'es'
                                                ? 'Transmisión en tiempo real sin delays. Vive cada momento al instante'
                                                : 'Real-time streaming without delays. Experience every moment instantly'}
                                        </p>
                                    </div>

                                    {/* Multi-camera */}
                                    <div className="p-6 sm:p-8 md:p-10 text-center group hover:bg-slate-50/50 transition-all duration-200">
                                        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-purple-50 mb-4 sm:mb-6 group-hover:bg-purple-100 transition-all duration-200">
                                            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2 sm:mb-3 tracking-tight">
                                            {language === 'es' ? 'Sistema Multicámara' : 'Multi-camera System'}
                                        </h3>
                                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                            {language === 'es'
                                                ? 'Múltiples ángulos profesionales capturan cada movimiento y técnica'
                                                : 'Multiple professional angles capture every movement and technique'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* --- Program Section --- */}
                <AnimatedSection id="programa" delay={200}>
                    <ProgramSection/>
                </AnimatedSection>
                
                {/* --- Webinars Section --- */}
                <AnimatedSection id="webinars" className="bg-white py-16 sm:py-20 md:py-24" delay={250}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-6 sm:mb-8">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                                {t.webinars.title}
                            </h2>
                            <p className="text-lg sm:text-xl text-blue-600 font-semibold mb-4">
                                {t.webinars.subtitle}
                            </p>
                            <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                                {t.webinars.description}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-7xl mx-auto">
                            {t.webinars.videos.map((webinar, index) => (
                                <WebinarCard 
                                    key={index} 
                                    title={webinar.title}
                                    description={webinar.description}
                                    videoUrl={webinar.videoUrl}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* Divider */}
                <div className="w-full border-t border-slate-200"></div>
                
                {/* --- Who is it for Section --- */}
                <AnimatedSection id="para-quien" className="bg-white py-24 sm:py-28 md:py-32" delay={400}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-slate-900 leading-tight">{t.whoIsItFor.title}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
                           <InfoCard icon={<Brain className="w-7 h-7 text-purple-400" />} title={t.whoIsItFor.cards[0].title} description={t.whoIsItFor.cards[0].description}/>
                           <InfoCard icon={<Zap className="w-7 h-7 text-yellow-400" />} title={t.whoIsItFor.cards[1].title} description={t.whoIsItFor.cards[1].description}/>
                           <InfoCard icon={<Clock className="w-7 h-7 text-green-400" />} title={t.whoIsItFor.cards[2].title} description={t.whoIsItFor.cards[2].description}/>
                           <InfoCard icon={<Cpu className="w-7 h-7 text-blue-400" />} title={t.whoIsItFor.cards[3].title} description={t.whoIsItFor.cards[3].description}/>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Divider */}
                <div className="w-full border-t border-slate-200"></div>
                
                {/* --- Results Section --- */}
                <AnimatedSection id="resultados" className="bg-gradient-to-b from-slate-50 to-white py-24 sm:py-28 md:py-32" delay={600}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="flex flex-col sm:flex-row items-center justify-center text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 sm:mb-12 text-slate-900 leading-tight tracking-tight">
                            <SparklesIcon className="w-6 h-6 sm:w-8 sm:h-8 mr-0 sm:mr-3 mb-2 sm:mb-0 text-amber-500" />
                            {t.results.title}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
                            <BenefitCard 
                                icon={<HeartPulse className="w-7 h-7 text-red-400" />} 
                                title={t.results.cards[0].title} 
                                benefits={t.results.cards[0].benefits}
                                bgColor="bg-gradient-to-br from-red-500/10 to-pink-500/10"
                                borderColor="border-red-500/30"
                            />
                            <BenefitCard 
                                icon={<Briefcase className="w-7 h-7 text-emerald-400" />} 
                                title={t.results.cards[1].title} 
                                benefits={t.results.cards[1].benefits}
                                bgColor="bg-gradient-to-br from-emerald-500/10 to-green-500/10"
                                borderColor="border-emerald-500/30"
                            />
                            <BenefitCard 
                                icon={<User className="w-7 h-7 text-indigo-400" />} 
                                title={t.results.cards[2].title} 
                                benefits={t.results.cards[2].benefits}
                                bgColor="bg-gradient-to-br from-indigo-500/10 to-purple-500/10"
                                borderColor="border-indigo-500/30"
                            />
                        </div>
                    </div>
                </AnimatedSection>

                {/* Divider */}
                <div className="w-full border-t border-slate-200"></div>

                {/* --- Testimonials Section --- */}
                <AnimatedSection id="testimonios" className="bg-white py-24 sm:py-28 md:py-32" delay={800}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-900 leading-tight">{t.testimonials.title}</h2>
                        <p className="text-center text-base sm:text-lg text-slate-600 mt-4 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">{t.testimonials.subtitle}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
                            <TestimonialCard
                                content={t.testimonials.testimonials[0].quote}
                                name={t.testimonials.testimonials[0].name}
                                role={t.testimonials.testimonials[0].role}
                                index={0}
                            />
                            <TestimonialCard
                                content={t.testimonials.testimonials[1].quote}
                                name={t.testimonials.testimonials[1].name}
                                role={t.testimonials.testimonials[1].role}
                                index={1}
                            />
                            <TestimonialCard
                                content={t.testimonials.testimonials[2].quote}
                                name={t.testimonials.testimonials[2].name}
                                role={t.testimonials.testimonials[2].role}
                                index={2}
                            />
                        </div>
                    </div>
                </AnimatedSection>

                {/* --- Gallery Preview Section --- */}
                {/* <AnimatedSection id="galeria" className="bg-slate-800 py-20 sm:py-24 md:py-28" delay={900}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8 sm:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                {t.gallery.title}
                            </h2>
                            <p className="text-lg sm:text-xl text-cyan-400 font-semibold mb-4">
                                {t.gallery.subtitle}
                            </p>
                            <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
                                {t.gallery.description}
                            </p>
                            <a 
                                href="/galeria" 
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-full text-base transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-xl shadow-cyan-500/25"
                            >
                                Ver Galería Completa
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 max-w-5xl mx-auto">
                            {galleryImages.slice(0, 6).map((image, index) => (
                                <ErrorBoundary key={index}>
                                    <LazyGalleryImage 
                                        src={image}
                                        index={index}
                                    />
                                </ErrorBoundary>
                            ))}
                        </div>
                    </div>
                </AnimatedSection> */}

                {/* Divider */}
                <div className="w-full border-t border-slate-200"></div>

                {/* --- Includes Section --- */}
                <AnimatedSection id="incluye" className="bg-white py-24 sm:py-28 md:py-32" delay={1000}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4 sm:mb-6 text-slate-900 leading-tight tracking-tight">
                            {t.includes.title}
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-12 max-w-3xl mx-auto text-center leading-relaxed">
                            {t.includes.subtitle}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                            {t.includes.items.map((item, index) => (
                                <IncludeCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* Divider */}
                <div className="w-full border-t border-slate-200"></div>

                {/* --- Extensions & Investment Section --- */}
                 <AnimatedSection id="inversion" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-slate-50 to-white" delay={1100}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="flex flex-col sm:flex-row items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-3 sm:mb-4 leading-tight tracking-tight">
                            <GemIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mr-0 sm:mr-3 mb-2 sm:mb-0 text-blue-600" />
                            {t.investment.title}
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2">{t.investment.subtitle}</p>

                        <div className="max-w-xs sm:max-w-sm md:max-w-lg mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 relative">
                            <div className="absolute -top-2 sm:-top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 font-bold px-2 sm:px-3 md:px-4 py-1 rounded-full text-xs sm:text-sm">
                                {language === 'es' ? 'CUPOS LIMITADOS' : 'LIMITED SPOTS'}
                            </div>

                            <div className="mb-3 sm:mb-4 md:mb-6">
                                <p className="text-sm sm:text-base md:text-lg font-semibold text-amber-600">{t.investment.earlyBird}</p>
                                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">{t.investment.earlyBirdPrice}</p>
                                <p className="text-slate-600 text-xs sm:text-sm md:text-base">{t.investment.validUntil}</p>

                                {/* Early Bird Benefit */}
                                <div className="mt-4 p-3 bg-green-50 rounded-xl border border-green-200">
                                    <p className="text-green-800 text-sm font-semibold mb-1">
                                        🎁 {language === 'es' ? 'Beneficio Early Bird' : 'Early Bird Benefit'}
                                    </p>
                                    <p className="text-green-700 text-xs leading-relaxed">
                                        {language === 'es' ? 'Acceso GRATIS a las grabaciones del seminario' : 'FREE access to seminar recordings'}
                                    </p>
                                </div>
                            </div>
                            <div className="mb-4 sm:mb-6 md:mb-8">
                                <p className="text-sm sm:text-base md:text-lg font-semibold text-slate-700">{t.investment.regular}</p>
                                <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-500 line-through">{t.investment.regularPrice}</p>
                            </div>
                            <p className="text-slate-700 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed px-2 font-medium">{t.investment.includes}</p>
                            <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-200 mb-4 sm:mb-6 md:mb-8">
                                <p className="text-slate-700 text-xs sm:text-sm md:text-base font-medium text-center leading-relaxed">
                                    {t.investment.reservationInfo}
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <a href={`https://wa.me/+525579076626?text=${generateWhatsAppMessage()}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-3 sm:py-4 md:py-3 px-4 sm:px-6 md:px-8 rounded-full text-sm sm:text-base md:text-lg transition duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20 touch-manipulation w-full sm:w-auto">
                                    <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3" />
                                    {t.investment.ctaWhatsApp}
                                </a>
                            </div>
                        </div>
                        
                        {/* Additional Note */}
                        <div className="mt-8 max-w-2xl mx-auto">
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                                <p className="text-slate-600 text-xs sm:text-sm text-center leading-relaxed">
                                    <span className="text-slate-500">*</span> {language === 'es' 
                                        ? 'Si pagas después del 16 de octubre, las grabaciones tendrán costo extra tanto para modalidad presencial como online'
                                        : 'If you pay after October 16, recordings will have an extra cost for both in-person and online modalities'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </main>

            <footer className="text-center p-6 sm:p-8 pb-20 sm:pb-8 text-slate-600 bg-white border-t border-slate-200 safe-area-inset-bottom">
                <div className="max-w-4xl mx-auto">
                    <p className="text-base sm:text-lg md:text-xl italic mb-4 sm:mb-6 px-4">"{t.footer.quote}"</p>
                    <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-8 px-4">
                        <a 
                            href="https://www.institutocentrobioenergetica.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300 font-medium text-sm sm:text-base"
                        >
                            <img 
                                src="/images/logo-seminario.png" 
                                alt="Logo Inteligencia Energética" 
                                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                            />
                            Visita nuestro sitio principal
                        </a>
                        <div className="hidden sm:block w-px h-6 bg-slate-300"></div>
                        <a 
                            href="https://www.institutocentrobioenergetica.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium text-sm sm:text-base"
                        >
                            Instituto Centro Bioenergética
                        </a>
                        <div className="hidden sm:block w-px h-6 bg-slate-300"></div>
                        <p className="text-xs sm:text-sm text-slate-500 text-center">
                            © 2025 Seminario Internacional de Inteligencia Energética
                        </p>
                    </div>
                </div>
            </footer>

            <BackToTop />
            {/* <ChatButton /> */}
            <StickyCtaBar onScrollTo={handleScrollTo} />
            <SocialProofBadge />
        </div>
    );
};

// --- Main App Component with Provider ---
const App: React.FC = () => {
    return (
        <LanguageProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<AppContent />} />
                    <Route path="/sesiones" element={<SessionsPage sessions={sessionsData} />} />
                    <Route path="/sesion/:id" element={<SessionDetailPage sessions={sessionsData} />} />
                    <Route path="/webinar-2" element={<WebinarLandingPage />} />
                    <Route path="/galeria" element={<GalleryPage />} />
                    <Route path="/trsb" element={<TRSBApp />} />
                </Routes>
            </Router>
        </LanguageProvider>
    );
};


const BenefitCard: React.FC<{ 
    icon: React.ReactNode,
    title: string,
    benefits: string[],
    bgColor?: string,
    borderColor?: string
}> = ({ icon, title, benefits, bgColor = "bg-white", borderColor = "border-slate-200" }) => (
    <div className={`${bgColor} ${borderColor} p-5 sm:p-6 rounded-2xl border h-full transform transition-all duration-200 hover:shadow-sm touch-manipulation`}>
        <div className="flex items-center mb-4 sm:mb-5">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-12 sm:h-12 bg-slate-100 rounded-xl flex-shrink-0">
                {icon}
            </div>
            <h3 className="text-base sm:text-xl font-semibold text-slate-900 ml-3 sm:ml-4 leading-tight tracking-tight">{title}</h3>
        </div>
        <ul className="space-y-3 sm:space-y-3 text-sm sm:text-base text-slate-700">
            {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 sm:w-5 sm:h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{benefit}</span>
                </li>
            ))}
        </ul>
    </div>
);


// --- Gallery Images Data ---
const galleryImages = [
    "https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/0c987d8e-b63a-4104-aa77-147eaa644fcb/Captura+de+pantalla+2023-02-20+a+la%28s%29+2.10.00.png?format=2500w",
    "https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/0d314223-f2a9-49bd-9d56-685079cf6178/318732989_5842086489179009_1876634961710280986_n.jpg?format=1000w",
    "https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/02bfdd59-d98b-49fb-8243-cea769464db6/79100512_2651933944860962_8133227410628804608_n.jpg?format=2500w",
    "https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/3def86e3-5c8e-4e87-bbec-aeeaac6d6ed4/36187994_1750292751691757_5557467898957529088_n.jpg?format=2500w",
    "https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/07abdcd2-4ece-42a2-a845-25e28ba958e7/28336394_1620009831386717_450887483519267763_o.jpg?format=750w",
    "https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/9b785917-754f-4e3d-b7cd-c355fb1a1621/79461055_2658045480916475_3270552093357768704_n.jpg?format=1500w",
    "https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/46ce011a-dfb4-48b0-a15e-2ba13bc6f6b9/Captura+de+pantalla+2023-02-20+a+la%28s%29+2.09.32.png?format=2500w",
    "https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/49fb6ebf-6e5b-4718-afc3-f3e5720daae3/318946364_5842086535845671_6157775697751393913_n.jpg?format=1000w",
    "https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/83a4d781-dcd0-44c8-a9eb-8e67c0d839d8/44590312_1931732183547812_3189394503001702400_n-2.jpg?format=2500w",
    "https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/839b5040-b85b-4742-8012-bbb9762277eb/19420802_1384430381611331_4472760945169630011_n.jpg?format=1000w",
    "https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/983b13da-5bbb-4612-a377-b85e47912878/78708264_2658661747521515_4623076946006245376_n.jpg?format=2500w",
    "https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/6692a358-6173-41ce-ba32-001b8b828299/35532611_1739902549397444_2776592495964848128_n.jpg?format=2500w",
    "https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/ae8bf916-b9ec-40b7-88e0-41630b8f9c10/14572863_1120733867980985_4117207448982533631_n.jpg?format=1000w",
    "https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/c7c5ed1e-2fd6-4dc9-a731-b010edcd710f/318815591_5842091229178535_2014644832699938854_n.jpg?format=1500w",
    "https://images.squarespace-cdn.com/content/v1/63937c55c3c2e84a13a3ede9/f2040dfc-6559-4e92-810d-37e50e60570d/44028273_1920602174660813_2667927813331353600_n.jpg?format=2500w"
];



// --- Webinar Card Component ---




export default App;
