
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
    Compass
} from 'lucide-react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { useIntersectionObserver } from './useIntersectionObserver';
import ChatButton from './components/ChatButton';
import SessionsPage from './pages/SessionsPage';
import SessionDetailPage from './pages/SessionDetailPage';
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


// --- Countdown Timer Component ---
const CountdownTimer: React.FC<{ targetDate: string }> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date(targetDate).getTime() - new Date().getTime();
            
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
        <div className="text-center">
            <div className="bg-slate-800 text-white text-lg sm:text-xl font-bold rounded-md p-2 sm:p-3 min-w-[50px] sm:min-w-[60px] flex items-center justify-center">
                {value.toString().padStart(2, '0')}
            </div>
            <div className="text-slate-400 text-xs mt-1 font-medium">
                {label}
            </div>
        </div>
    );

    return (
        <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
            <Timer className="w-4 h-4 text-yellow-400 mr-1" />
            <TimeUnit value={timeLeft.days} label="Días" />
            <span className="text-slate-400 text-sm sm:text-base mx-1">:</span>
            <TimeUnit value={timeLeft.hours} label="Horas" />
            <span className="text-slate-400 text-sm sm:text-base mx-1">:</span>
            <TimeUnit value={timeLeft.minutes} label="Min" />
            <span className="text-slate-400 text-sm sm:text-base mx-1">:</span>
            <TimeUnit value={timeLeft.seconds} label="Seg" />
        </div>
    );
};

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
            className={`fixed bottom-8 right-8 z-50 p-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg transition-all duration-300 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            } hover:scale-110 active:scale-95`}
            aria-label="Back to top"
        >
            <ArrowUp className="w-6 h-6" strokeWidth={2} />
        </button>
    );
};

// --- Main App Component ---
const AppContent: React.FC = () => {
    const { t } = useLanguage();
    
    const handleScrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const generateWhatsAppMessage = () => {
        const message = t.language === 'es' 
            ? `¡Hola! Me interesa inscribirme al Seminario Internacional de Inteligencia Energética del 5-7 de diciembre 2025 en Ciudad de México. ¿Podrían brindarme más información sobre el proceso de inscripción y formas de pago?`
            : `Hello! I'm interested in registering for the International Energy Intelligence Conference on December 5-7, 2025 in Mexico City. Could you provide me with more information about the registration process and payment methods?`;
        return encodeURIComponent(message);
    };

    return (
        <div className="bg-slate-900 text-slate-300 antialiased">
            <Header onScrollTo={handleScrollTo} />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative min-h-screen flex items-center justify-center text-center px-4 py-20 sm:py-24 overflow-hidden">
                    <div className="absolute inset-0 animated-gradient"></div>
                    <div className="absolute inset-0 bg-slate-900/60"></div>
                    <div className="relative z-10 max-w-6xl mx-auto">
                        <AnimatedSection>
                            <div className="flex flex-col items-center mb-8">
                                <img 
                                    src="/images/logo-seminario.png" 
                                    alt="Logo Seminario Inteligencia Energética" 
                                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mb-4"
                                />
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight leading-tight text-center">
                                    {t.hero.title}
                                </h1>
                            </div>
                            <p className="flex flex-col sm:flex-row items-center justify-center text-base sm:text-lg md:text-xl text-cyan-400 font-semibold mb-4 gap-2">
                                <span className="flex items-center">
                                    <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                                    {t.hero.location}
                                </span>
                                <span className="hidden sm:inline">|</span>
                                <span>{t.hero.date}</span>
                            </p>
                             <p className="text-sm sm:text-base md:text-lg text-yellow-300 mb-6 max-w-4xl mx-auto font-semibold leading-relaxed">
                                {t.hero.subtitle}
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                                {t.hero.description}
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                                <a href="#inversion" onClick={(e) => {e.preventDefault(); handleScrollTo('inversion')}} className="bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white font-bold py-4 px-8 rounded-full text-base sm:text-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-lg touch-manipulation ripple btn-enhanced pulse-cta">
                                    {t.hero.ctaInscribirse}
                                </a>
                                <a href="#programa" onClick={(e) => {e.preventDefault(); handleScrollTo('programa')}} className="bg-slate-700/50 hover:bg-slate-700 active:bg-slate-600 border border-slate-600 text-white font-bold py-4 px-8 rounded-full text-base sm:text-lg transition duration-300 touch-manipulation ripple btn-enhanced">
                                    {t.hero.ctaVerPrograma}
                                </a>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* --- Program Section --- */}
                <AnimatedSection id="programa" delay={200}>
                    <ProgramSection/>
                </AnimatedSection>
                
                {/* --- Webinars Section --- */}
                <AnimatedSection id="webinars" className="bg-slate-900 py-12 sm:py-16 md:py-24" delay={250}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8 sm:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                {t.webinars.title}
                            </h2>
                            <p className="text-lg sm:text-xl text-cyan-400 font-semibold mb-4">
                                {t.webinars.subtitle}
                            </p>
                            <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                                {t.webinars.description}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
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
                
                {/* --- Who is it for Section --- */}
                <AnimatedSection id="para-quien" className="bg-slate-900 py-12 sm:py-16 md:py-24" delay={400}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-white leading-tight">{t.whoIsItFor.title}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
                           <InfoCard icon={<Brain className="w-7 h-7 text-purple-400" />} title={t.whoIsItFor.cards[0].title} description={t.whoIsItFor.cards[0].description}/>
                           <InfoCard icon={<Zap className="w-7 h-7 text-yellow-400" />} title={t.whoIsItFor.cards[1].title} description={t.whoIsItFor.cards[1].description}/>
                           <InfoCard icon={<Clock className="w-7 h-7 text-green-400" />} title={t.whoIsItFor.cards[2].title} description={t.whoIsItFor.cards[2].description}/>
                           <InfoCard icon={<Cpu className="w-7 h-7 text-blue-400" />} title={t.whoIsItFor.cards[3].title} description={t.whoIsItFor.cards[3].description}/>
                        </div>
                    </div>
                </AnimatedSection>
                
                {/* --- Results Section --- */}
                <AnimatedSection id="resultados" className="py-12 sm:py-16 md:py-24" delay={600}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="flex flex-col sm:flex-row items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-white leading-tight">
                            <SparklesIcon className="w-6 h-6 sm:w-8 sm:h-8 mr-0 sm:mr-3 mb-2 sm:mb-0 text-yellow-400" />
                            {t.results.title}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
                            <BenefitCard 
                                icon={<HeartPulse className="w-7 h-7 text-red-400" />} 
                                title={t.results.cards[0].title} 
                                benefits={t.results.cards[0].benefits} 
                            />
                            <BenefitCard 
                                icon={<Briefcase className="w-7 h-7 text-emerald-400" />} 
                                title={t.results.cards[1].title} 
                                benefits={t.results.cards[1].benefits} 
                            />
                            <BenefitCard 
                                icon={<User className="w-7 h-7 text-indigo-400" />} 
                                title={t.results.cards[2].title} 
                                benefits={t.results.cards[2].benefits} 
                            />
                        </div>
                    </div>
                </AnimatedSection>

                {/* --- Testimonials Section --- */}
                <AnimatedSection id="testimonios" className="bg-slate-900 py-12 sm:py-16 md:py-24" delay={800}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white leading-tight">{t.testimonials.title}</h2>
                        <p className="text-center text-base sm:text-lg text-slate-400 mt-4 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">{t.testimonials.subtitle}</p>
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

                {/* --- Gallery Section --- */}
                <AnimatedSection id="galeria" className="bg-slate-800 py-12 sm:py-16 md:py-24" delay={900}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8 sm:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                {t.gallery.title}
                            </h2>
                            <p className="text-lg sm:text-xl text-cyan-400 font-semibold mb-4">
                                {t.gallery.subtitle}
                            </p>
                            <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                                {t.gallery.description}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto">
                            {galleryImages.map((image, index) => (
                                <ErrorBoundary key={index}>
                                    <LazyGalleryImage 
                                        src={image}
                                        index={index}
                                    />
                                </ErrorBoundary>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* --- Includes Section --- */}
                <AnimatedSection id="incluye" className="py-12 sm:py-16 md:py-24" delay={1000}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 text-white leading-tight">
                            {t.includes.title}
                        </h2>
                        <p className="text-base sm:text-lg text-slate-400 mb-8 sm:mb-12 max-w-3xl mx-auto text-center leading-relaxed">
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

                {/* --- Extensions & Investment Section --- */}
                 <AnimatedSection id="inversion" className="py-12 sm:py-16 md:py-24 bg-slate-900" delay={1100}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="flex flex-col sm:flex-row items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                            <GemIcon className="w-6 h-6 sm:w-8 sm:h-8 mr-0 sm:mr-3 mb-2 sm:mb-0 text-cyan-400" />
                            {t.investment.title}
                        </h2>
                        <p className="text-base sm:text-lg text-slate-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">{t.investment.subtitle}</p>

                        <div className="max-w-sm sm:max-w-lg mx-auto bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-8 rounded-2xl shadow-2xl border border-cyan-500/30 relative">
                            <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 font-bold px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">CUPOS LIMITADOS</div>
                            
                            {/* Countdown Timer */}
                            <div className="mb-6 p-4 bg-slate-900/50 rounded-xl border border-yellow-400/30">
                                <p className="text-center text-yellow-400 text-sm font-semibold mb-3">¡Oferta Early Bird termina en!</p>
                                <CountdownTimer targetDate="2025-10-16T23:59:59" />
                            </div>
                            
                            <div className="mb-4 sm:mb-6">
                                <p className="text-base sm:text-lg font-semibold text-yellow-400">{t.investment.earlyBird}</p>
                                <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{t.investment.earlyBirdPrice}</p>
                                <p className="text-slate-400 text-sm sm:text-base">{t.investment.validUntil}</p>
                            </div>
                            <div className="mb-6 sm:mb-8">
                                <p className="text-base sm:text-lg font-semibold text-slate-300">{t.investment.regular}</p>
                                <p className="text-xl sm:text-2xl font-bold text-slate-500">{t.investment.regularPrice}</p>
                            </div>
                            <p className="text-slate-400 mb-4 text-sm sm:text-base leading-relaxed">{t.investment.includes}</p>
                            <div className="bg-slate-700/50 p-4 rounded-lg mb-6 sm:mb-8">
                                <p className="text-cyan-400 text-sm sm:text-base font-medium text-center leading-relaxed">
                                    {t.investment.reservationInfo}
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <a href={`https://wa.me/+525579076626?text=${generateWhatsAppMessage()}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-4 px-6 sm:py-3 sm:px-8 rounded-full text-base sm:text-lg transition duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20 touch-manipulation ripple btn-enhanced">
                                    <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                                    {t.investment.ctaWhatsApp}
                                </a>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </main>

            <footer className="text-center p-8 text-slate-400 bg-slate-900 border-t border-slate-800">
                <div className="max-w-4xl mx-auto">
                    <p className="text-xl italic mb-6">"{t.footer.quote}"</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                        <a 
                            href="https://inteligencia-energetica.com/home-ei" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                        >
                            <img 
                                src="/images/logo-seminario.png" 
                                alt="Logo Inteligencia Energética" 
                                className="w-6 h-6 object-contain"
                            />
                            Visita nuestro sitio principal
                        </a>
                        <div className="hidden sm:block w-px h-6 bg-slate-600"></div>
                        <a 
                            href="https://www.institutocentrobioenergetica.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 font-medium"
                        >
                            Instituto Centro Bioenergética
                        </a>
                        <div className="hidden sm:block w-px h-6 bg-slate-600"></div>
                        <p className="text-sm text-slate-500">
                            © 2025 Seminario Internacional de Inteligencia Energética
                        </p>
                    </div>
                </div>
            </footer>

            <BackToTop />
            <ChatButton />
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
                </Routes>
            </Router>
        </LanguageProvider>
    );
};


const BenefitCard: React.FC<{ icon: React.ReactNode, title: string, benefits: string[] }> = ({ icon, title, benefits }) => (
    <div className="bg-slate-800/50 p-4 sm:p-6 rounded-xl border border-slate-700 h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
        <div className="flex items-center mb-4 sm:mb-5">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 bg-slate-900 rounded-lg flex-shrink-0">
                {icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white ml-3 sm:ml-4 leading-tight">{title}</h3>
        </div>
        <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-300">
            {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                    <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-cyan-400 flex-shrink-0 mt-0.5" /> 
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
