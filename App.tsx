
import React, { useState, useEffect, useRef } from 'react';
import { 
    Sparkles, 
    Zap, 
    Compass, 
    MapPin, 
    Gem, 
    Brain, 
    Zap as Energy, 
    Clock, 
    Cpu, 
    Check, 
    HeartPulse, 
    Briefcase, 
    User, 
    Quote, 
    MessageCircle,
    Languages,
    ArrowUp,
    Timer,
    BookOpen,
    FileText,
    Award,
    Smartphone,
    RefreshCw
} from 'lucide-react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { useIntersectionObserver } from './useIntersectionObserver';
import ChatButton from './components/ChatButton';


// --- Icons ---
const MapPinIcon = ({ className = "w-6 h-6" }) => <MapPin className={className} strokeWidth={1.5} />;
const SparklesIcon = ({ className = "w-6 h-6" }) => <Sparkles className={className} strokeWidth={1.5} />;
const GemIcon = ({ className = "w-6 h-6" }) => <Gem className={className} strokeWidth={1.5} />;
const BrainIcon = () => <Brain className="w-7 h-7" strokeWidth={1.5} />;
const EnergyIcon = () => <Energy className="w-7 h-7" strokeWidth={1.5} />;
const DecisionIcon = () => <Clock className="w-7 h-7" strokeWidth={1.5} />;
const CpuIcon = ({ className = "w-7 h-7" }) => <Cpu className={className} strokeWidth={1.5} />;
const CheckIcon = ({ className = "w-6 h-6 mr-3 text-cyan-400 flex-shrink-0 mt-1" }) => <Check className={className} strokeWidth={1.5} />;
const HeartPulseIcon = ({ className = "w-7 h-7" }) => <HeartPulse className={className} strokeWidth={1.5} />;
const BriefcaseIcon = ({ className = "w-7 h-7" }) => <Briefcase className={className} strokeWidth={1.5} />;
const UserIcon = ({ className = "w-7 h-7" }) => <User className={className} strokeWidth={1.5} />;
const QuoteIcon = ({ className = "w-6 h-6" }) => <Quote className={className} strokeWidth={1.5} />;
const WhatsAppIcon = ({className = "w-6 h-6"}) => <MessageCircle className={className} strokeWidth={1.5} />;


// --- Section Wrapper ---
const AnimatedSection: React.FC<{ children: React.ReactNode, className?: string, id?: string, delay?: number }> = ({ children, className, id, delay = 0 }) => {
    const [ref, isIntersecting] = useIntersectionObserver();
    
    return (
        <div 
            ref={ref}
            id={id} 
            className={`transition-all duration-1000 ease-out ${
                isIntersecting 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
            } ${className || ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};


// --- Header Component ---
const Header: React.FC<{ onScrollTo: (id: string) => void }> = ({ onScrollTo }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'programa', text: t.nav.programa },
        { id: 'webinars', text: t.nav.webinars },
        { id: 'para-quien', text: t.nav.paraQuien },
        { id: 'resultados', text: t.nav.resultados },
        { id: 'testimonios', text: t.nav.testimonios },
        { id: 'incluye', text: t.nav.incluye },
        { id: 'inversion', text: t.nav.inversion },
    ];

    const handleMobileNavClick = (id: string) => {
        onScrollTo(id);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                <a 
                    href="https://inteligencia-energetica.com/home-ei" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300"
                >
                    <img 
                        src="/images/logo-seminario.png" 
                        alt="Logo Seminario Inteligencia Energética" 
                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                    />
                    <div className="text-lg sm:text-xl font-bold text-white tracking-wider">
                        <span className="text-cyan-400">Inteligencia</span> Energética
                    </div>
                </a>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navLinks.map(link => (
                         <a href={`#${link.id}`} onClick={(e) => {e.preventDefault(); onScrollTo(link.id)}} key={link.id} className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">{link.text}</a>
                    ))}
                </nav>
                
                {/* Language Toggle */}
                <div className="hidden md:flex items-center gap-2 mr-4">
                    <Languages className="w-4 h-4 text-slate-300" />
                    <button
                        onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                        className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
                    >
                        {language === 'es' ? 'EN' : 'ES'}
                    </button>
                </div>

                {/* Desktop CTA Button */}
                 <a href="#inversion" onClick={(e) => {e.preventDefault(); onScrollTo('inversion')}} className="hidden md:block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-5 rounded-full text-sm transition duration-300 ease-in-out transform hover:scale-105">
                    {t.nav.inscribirse}
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-white hover:text-cyan-400 transition-colors duration-300"
                    aria-label="Toggle mobile menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-slate-700 shadow-lg max-h-[80vh] overflow-y-auto">
                    <nav className="container mx-auto px-4 py-4">
                        {navLinks.map(link => (
                            <a
                                href={`#${link.id}`}
                                onClick={(e) => {e.preventDefault(); handleMobileNavClick(link.id)}}
                                key={link.id}
                                className="block py-4 text-slate-300 hover:text-cyan-400 transition-colors duration-300 border-b border-slate-700 last:border-b-0 touch-manipulation text-base"
                            >
                                {link.text}
                            </a>
                        ))}
                        {/* Mobile Language Toggle */}
                        <div className="flex items-center justify-between py-4 border-b border-slate-700">
                            <span className="text-slate-300 text-base">Idioma</span>
                            <button
                                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-base font-medium touch-manipulation px-3 py-2 rounded-lg hover:bg-slate-800"
                            >
                                {language === 'es' ? 'English' : 'Español'}
                            </button>
                        </div>
                        
                        <a
                            href="#inversion"
                            onClick={(e) => {e.preventDefault(); handleMobileNavClick('inversion')}}
                            className="block bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white font-bold py-4 px-6 rounded-full text-center transition duration-300 touch-manipulation text-base"
                        >
                            {t.nav.inscribirse}
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

// --- Program Section Component ---
const ProgramSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState(1);
    const { t } = useLanguage();
    
    const scheduleData = {
        1: {
            sessionLabel: t.program.sessions.session1,
            title: t.program.topics.session1.title,
            date: t.program.topics.session1.date,
            topics: t.program.topics.session1.topics
        },
        2: {
            sessionLabel: t.program.sessions.session2,
            title: t.program.topics.session2.title,
            date: t.program.topics.session2.date,
            topics: t.program.topics.session2.topics
        },
        3: {
            sessionLabel: t.program.sessions.session3,
            title: t.program.topics.session3.title,
            date: t.program.topics.session3.date,
            topics: t.program.topics.session3.topics
        },
        4: {
            sessionLabel: t.program.sessions.session4,
            title: t.program.topics.session4.title,
            date: t.program.topics.session4.date,
            topics: t.program.topics.session4.topics
        },
        5: {
            sessionLabel: t.program.sessions.session5,
            title: t.program.topics.session5.title,
            date: t.program.topics.session5.date,
            topics: t.program.topics.session5.topics
        },
    };

    const TabButton: React.FC<{ session: number; label: string; }> = ({ session, label }) => {
        const getSessionIcon = (sessionNum: number) => {
            switch(sessionNum) {
                case 1: return <Sparkles className="w-5 h-5" strokeWidth={1.5} />;
                case 2: return <Zap className="w-5 h-5" strokeWidth={1.5} />;
                case 3: return <Compass className="w-5 h-5" strokeWidth={1.5} />;
                case 4: return <Brain className="w-5 h-5" strokeWidth={1.5} />;
                case 5: return <Award className="w-5 h-5" strokeWidth={1.5} />;
                default: return <Sparkles className="w-5 h-5" strokeWidth={1.5} />;
            }
        };

        const getSessionColor = (sessionNum: number) => {
            switch(sessionNum) {
                case 1: return "from-blue-500 to-cyan-500";
                case 2: return "from-purple-500 to-pink-500";
                case 3: return "from-green-500 to-emerald-500";
                case 4: return "from-orange-500 to-red-500";
                case 5: return "from-yellow-500 to-amber-500";
                default: return "from-slate-500 to-slate-600";
            }
        };

        return (
        <button
            onClick={() => setActiveTab(session)}
                className={`w-full text-left p-3 sm:p-4 rounded-lg transition-all duration-300 border-2 relative overflow-hidden ${
                    activeTab === session 
                        ? `bg-gradient-to-br ${getSessionColor(session)} text-white shadow-lg border-white/30 transform scale-105` 
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-600 hover:border-slate-500 hover:shadow-md hover:scale-102'
                }`}
            >
                {/* Efecto de brillo para la sesión activa */}
                {activeTab === session && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                )}
                
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-1">
                        {getSessionIcon(session)}
                        <span className={`block text-xs sm:text-sm font-semibold ${activeTab === session ? 'opacity-90' : 'opacity-70'}`}>
                            SESIÓN {session}
                        </span>
                    </div>
                    <span className="font-bold text-sm sm:text-base block">{label}</span>
                    {activeTab === session && (
                        <div className="mt-2 w-full h-1 bg-white rounded-full opacity-60"></div>
                    )}
                </div>
        </button>
    );
    };
    
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 text-white tracking-tight leading-tight">{t.program.title}</h2>
             <p className="text-center text-slate-400 text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl mx-auto">
                {t.program.subtitle}
             </p>
             <p className="text-center text-slate-500 text-xs mb-4 italic">
                {t.program.disclaimer}
             </p>
             <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 max-w-6xl mx-auto">
                <div className="lg:w-1/3">
                    <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
                        <TabButton session={1} label={t.program.sessions.session1}/>
                        <TabButton session={2} label={t.program.sessions.session2}/>
                        <TabButton session={3} label={t.program.sessions.session3}/>
                        <TabButton session={4} label={t.program.sessions.session4}/>
                        <TabButton session={5} label={t.program.sessions.session5}/>
                    </div>
                    {/* Indicador de progreso */}
                    <div className="mt-4 hidden lg:block">
                        <div className="text-center text-slate-400 text-sm mb-2">Progreso del Programa</div>
                        <div className="flex gap-2 justify-center">
                            {[1, 2, 3, 4, 5].map((session) => (
                                <div
                                    key={session}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        activeTab === session 
                                            ? 'bg-cyan-400 scale-125' 
                                            : activeTab > session 
                                                ? 'bg-slate-500' 
                                                : 'bg-slate-700 border border-slate-600'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/3 bg-slate-800/50 border border-slate-700 p-4 sm:p-6 md:p-8 rounded-2xl">
                     <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-2 leading-tight">{scheduleData[activeTab].title}</h3>
                     <p className="text-slate-300 mb-2 text-sm sm:text-base font-medium">{scheduleData[activeTab].date}</p>
                     <p className="text-slate-400 mb-4 sm:mb-6 text-sm sm:text-base">Temas principales de la sesión:</p>
                     <ul className="space-y-4 sm:space-y-6">
                        {scheduleData[activeTab].topics.map((topic, index) => (
                            <li key={index} className="flex items-start">
                                <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-cyan-400 flex-shrink-0 mt-1" />
                                <div className="flex-1">
                                    <h4 className="font-semibold text-slate-200 text-sm sm:text-base leading-tight">{topic.title}</h4>
                                    <p className="text-slate-400 mt-1 text-xs sm:text-sm leading-relaxed">{topic.description}</p>
                                </div>
                            </li>
                        ))}
                     </ul>
                </div>
             </div>
        </div>
    );
};


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
                <AnimatedSection id="webinars" className="bg-slate-900 py-12 sm:py-16 md:py-24" delay={300}>
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
                                <WebinarCard key={index} webinar={webinar} />
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
                                quote={t.testimonials.testimonials[0].quote}
                                name={t.testimonials.testimonials[0].name}
                                role={t.testimonials.testimonials[0].role}
                            />
                            <TestimonialCard
                                quote={t.testimonials.testimonials[1].quote}
                                name={t.testimonials.testimonials[1].name}
                                role={t.testimonials.testimonials[1].role}
                            />
                            <TestimonialCard
                                quote={t.testimonials.testimonials[2].quote}
                                name={t.testimonials.testimonials[2].name}
                                role={t.testimonials.testimonials[2].role}
                            />
                        </div>
                    </div>
                </AnimatedSection>

                {/* --- Includes Section --- */}
                <AnimatedSection id="incluye" className="py-12 sm:py-16 md:py-24" delay={900}>
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
                                    icon={getIncludeIcon(item.title)}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* --- Extensions & Investment Section --- */}
                 <AnimatedSection id="inversion" className="py-12 sm:py-16 md:py-24 bg-slate-900" delay={1000}>
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
            <AppContent />
        </LanguageProvider>
    );
};

const InfoCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="bg-slate-800 p-6 sm:p-8 rounded-xl text-center border border-slate-700 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 h-full">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 text-cyan-400 bg-slate-900 rounded-full">
            {icon}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-tight">{title}</h3>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{description}</p>
    </div>
);

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

const TestimonialCard: React.FC<{ quote: string, name: string, role: string }> = ({ quote, name, role }) => (
    <div className="bg-slate-800 p-6 sm:p-8 rounded-xl border border-slate-700 relative h-full flex flex-col justify-between transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
        <div>
            <QuoteIcon className="absolute top-4 left-4 sm:top-6 sm:left-6 w-8 h-8 sm:w-12 sm:h-12 text-slate-700" />
            <p className="relative z-10 text-sm sm:text-base text-slate-300 mb-4 sm:mb-6 italic leading-relaxed">"{quote}"</p>
        </div>
        <div className="relative z-10 mt-auto">
            <p className="font-bold text-white text-sm sm:text-base">{name}</p>
            <p className="text-cyan-400 text-xs sm:text-sm">{role}</p>
        </div>
    </div>
);

// --- Webinar Card Component ---
const WebinarCard: React.FC<{ webinar: { title: string; description: string; videoUrl: string; session: string } }> = ({ webinar }) => {
    return (
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-colors duration-300">
                        <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                    <div>
                        <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">{webinar.session}</span>
                    </div>
                </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{webinar.title}</h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-4">{webinar.description}</p>
            
            {/* Embedded Video with official Vimeo embed code */}
            <div className="relative w-full rounded-lg overflow-hidden mb-4" style={{padding: '56.25% 0 0 0', position: 'relative'}}>
                <iframe 
                    src="https://player.vimeo.com/video/1122501757?h=9d6c991bc4&badge=0&autopause=0&player_id=0&app_id=58479" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} 
                    title="webinar 1"
                ></iframe>
            </div>
        </div>
    );
};

// --- Include Card Component ---
const IncludeCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group">
        <div className="flex items-center mb-4">
            <div className="p-3 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-colors duration-300">
                {icon}
            </div>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{title}</h3>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
);

// --- Function to get include icon with different colors ---
const getIncludeIcon = (title: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
        'Materiales': <BookOpen className="w-6 h-6 text-blue-400" />,
        'Materials': <BookOpen className="w-6 h-6 text-blue-400" />,
        'Manuales': <FileText className="w-6 h-6 text-green-400" />,
        'Manuals': <FileText className="w-6 h-6 text-green-400" />,
        'Protocolos': <Zap className="w-6 h-6 text-yellow-400" />,
        'Protocols': <Zap className="w-6 h-6 text-yellow-400" />,
        'Certificación': <Award className="w-6 h-6 text-purple-400" />,
        'Certification': <Award className="w-6 h-6 text-purple-400" />,
        'App Oficial': <Smartphone className="w-6 h-6 text-pink-400" />,
        'Official App': <Smartphone className="w-6 h-6 text-pink-400" />,
        'Extensiones 2026': <RefreshCw className="w-6 h-6 text-orange-400" />,
        '2026 Extensions': <RefreshCw className="w-6 h-6 text-orange-400" />
    };
    return iconMap[title] || <Check className="w-6 h-6 text-cyan-400" />;
};


export default App;
