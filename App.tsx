
import React, { useState, useEffect, useRef } from 'react';


// --- Icons ---
const MapPinIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const SparklesIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.9 1.9-1.4 2.8-2.8 1.4-1.9 1.9 1.9 1.9 2.8 1.4 1.4 2.8 1.9 1.9 1.9-1.9 1.4-2.8 2.8-1.4 1.9-1.9-1.9-1.9-2.8-1.4-1.4-2.8Z"/><path d="M18 6h.01"/><path d="M6 18h.01"/></svg>
);
const GemIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M12 22V9"/><path d="m3.5 8.5 8.5 4 8.5-4"/><path d="M2 9h20"/></svg>
);
const BrainIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.98-1.57A3.5 3.5 0 0 1 8 11.5V9a3 3 0 0 1 3-3m.5 0A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.98-1.57A3.5 3.5 0 0 0 16 11.5V9a3 3 0 0 0-3-3"/></svg>
);
const EnergyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
);
const DecisionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 8v4l2 2m-4-3h6"/></svg>
);
const CpuIcon = ({ className = "w-7 h-7" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
);
const CheckIcon = ({ className = "w-6 h-6 mr-3 text-cyan-400 flex-shrink-0 mt-1" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
);
const HeartPulseIcon = ({ className = "w-7 h-7" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.7-1.5L13.5 14l.5-2H21"/></svg>
);
const BriefcaseIcon = ({ className = "w-7 h-7" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);
const UserIcon = ({ className = "w-7 h-7" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const QuoteIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 4.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5c-2.4 0-4.6-1-6.2-2.6l-3.3 1.1 1.1-3.3C4.9 15.6 4 13.4 4 11c0-4.7 3.8-8.5 8.5-8.5z" opacity="0.1"></path><path d="M10.1 10.1c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5c.3 0 .6-.1.8-.3l1.8 1.8c-.5.4-1.2.7-1.9.7-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3 0 .7-.3 1.4-.7 1.9l-1.8-1.8c.2-.2.3-.5.3-.8 0-.8-.7-1.5-1.5-1.5z"></path><path d="M14.9 10.1c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5c.3 0 .6-.1.8-.3l1.8 1.8c-.5.4-1.2.7-1.9.7-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3 0 .7-.3 1.4-.7 1.9l-1.8-1.8c.2-.2.3-.5.3-.8 0-.8-.7-1.5-1.5-1.5z"></path></svg>
);
const WhatsAppIcon = ({className = "w-6 h-6"}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.447-4.435-9.884-9.888-9.884-5.448 0-9.886 4.434-9.889 9.884.001 2.245.75 4.422 2.134 6.224l-1.415 5.176 5.317-1.387z"/></svg>
);


// --- Section Wrapper ---
const AnimatedSection: React.FC<{ children: React.ReactNode, className?: string, id?: string }> = ({ children, className, id }) => {
    return (
        <div 
            id={id} 
            className={className}
        >
            {children}
        </div>
    );
};


// --- Header Component ---
const Header: React.FC<{ onScrollTo: (id: string) => void }> = ({ onScrollTo }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'programa', text: 'Programa' },
        { id: 'para-quien', text: 'Para Quién' },
        { id: 'resultados', text: 'Resultados' },
        { id: 'testimonios', text: 'Testimonios' },
        { id: 'inversion', text: 'Inversión' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-xl font-bold text-white tracking-wider">
                    <span className="text-cyan-400">Inteligencia</span> Energética
                </div>
                <nav className="hidden md:flex items-center space-x-6">
                    {navLinks.map(link => (
                         <a href={`#${link.id}`} onClick={(e) => {e.preventDefault(); onScrollTo(link.id)}} key={link.id} className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">{link.text}</a>
                    ))}
                </nav>
                 <a href="#inversion" onClick={(e) => {e.preventDefault(); onScrollTo('inversion')}} className="hidden md:block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-5 rounded-full text-sm transition duration-300 ease-in-out transform hover:scale-105">
                    Inscribirse
                </a>
            </div>
        </header>
    );
};

// --- Program Section Component ---
const ProgramSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState(1);
    
    const scheduleData = {
        1: {
            dayLabel: "VIERNES",
            title: "Neuroplasticidad, IA y Sistemas de Inteligencia Estratégica",
            topics: [
                { title: "El cerebro reactivo: supervivencia vs. felicidad", description: "Explora la evolución del cerebro, sus bases neurobiológicas y cómo pasar del piloto automático al control consciente." },
                { title: "Priming neurofisiológico: entrenamiento de estados óptimos", description: "Aprende a regular tu sistema nervioso autónomo a través de la coherencia cardíaca (HRV) y técnicas de visualización." },
                { title: "Inteligencia Aumentada: IA para el Crecimiento", description: "Utiliza modelos de IA como asistente para profundizar en los conceptos, generar nuevas perspectivas y personalizar tu aprendizaje." },
                { title: "LSP Insight System: del símbolo a la acción", description: "Descubre los principios de LEGO® Serious Play® para materializar ideas y 'pensar con las manos'." },
                { title: "Descubrimiento de insights y estrategias con LSP", description: "Transforma los descubrimientos de los modelos en arquetipos, estrategias claras y un plan de acción concreto." },
            ]
        },
        2: {
            dayLabel: "SÁBADO",
            title: "Bioenergética y Context Engineering Aplicado",
            topics: [
                { title: "Context Engineering y Esquema de Contexto", description: "Domina el arte de formular preguntas de alta calidad para pasar de un modelo reactivo a uno estructurado." },
                { title: "Rastreo guiado con Esquema de Contexto", description: "Aplica un marco metodológico para explorar los niveles Presente, Pasado y Sistema que sostienen tus patrones actuales." },
                { title: "Del síntoma al escenario energético", description: "Aprende a identificar la sensación raíz corporal y a comprender la dinámica cuerpo-emoción-creencia." },
                { title: "Los cuatro protocolos principales (Alpha, Beta, Gamma, Delta)", description: "Integra protocolos específicos para abordar síntomas físicos, conflictos emocionales y dinámicas del sistema." },
                { title: 'Evento Especial: Obra de Teatro "Yo fui calor"', description: "Una experiencia artística nocturna para complementar el aprendizaje del día." },
            ]
        },
        3: {
            dayLabel: "DOMINGO",
            title: "Sistemas de Decisión Consciente - Experiencia Vivencial",
            topics: [
                { title: "Los Tres Elementos de Decisión Consciente", description: "Aprende el marco de transformación personal basado en el enfoque, el significado y la acción específica." },
                { title: "Maestría del Enfoque Consciente", description: "Entrena tu atención y utiliza preguntas transformadoras para cultivar estados internos óptimos." },
                { title: "Resignificación y Reencuadre Consciente", description: "Desarrolla la habilidad de asignar nuevos significados y reencuadrar limitaciones para potenciar tu vida." },
                { title: "Metodología de Acción Efectiva", description: "Conecta la comprensión con la implementación a través de protocolos que aseguran un compromiso auténtico." },
                { title: "Síntesis de Transformación Integral y Certificación", description: "Integra los aprendizajes de los 3 días, establece compromisos personalizados y recibe tu certificación." },
            ]
        },
    };

    const TabButton: React.FC<{ day: number; label: string; }> = ({ day, label }) => (
        <button
            onClick={() => setActiveTab(day)}
            className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${activeTab === day ? 'bg-cyan-500 text-white shadow-lg' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}`}
        >
            <span className="block text-sm opacity-80">DÍA {day}</span>
            <span className="font-bold">{label}</span>
        </button>
    );
    
    return (
        <div className="container mx-auto px-6 lg:px-8 py-16 md:py-24">
             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white tracking-tight">Programa Detallado</h2>
             <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
                <div className="md:w-1/3 flex md:flex-col gap-4">
                    <TabButton day={1} label="VIERNES"/>
                    <TabButton day={2} label="SÁBADO"/>
                    <TabButton day={3} label="DOMINGO"/>
                </div>
                <div className="md:w-2/3 bg-slate-800/50 border border-slate-700 p-6 md:p-8 rounded-2xl">
                     <h3 className="text-2xl font-bold text-cyan-400 mb-2">{scheduleData[activeTab].title}</h3>
                     <p className="text-slate-400 mb-6">Temas principales del día:</p>
                     <ul className="space-y-6">
                        {scheduleData[activeTab].topics.map((topic, index) => (
                            <li key={index} className="flex items-start">
                                <CheckIcon />
                                <div>
                                    <h4 className="font-semibold text-slate-200">{topic.title}</h4>
                                    <p className="text-slate-400 mt-1">{topic.description}</p>
                                </div>
                            </li>
                        ))}
                     </ul>
                </div>
             </div>
        </div>
    );
};


// --- Main App Component ---
const App: React.FC = () => {
    const handleScrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="bg-slate-900 text-slate-300 antialiased">
            <Header onScrollTo={handleScrollTo} />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative min-h-screen flex items-center justify-center text-center p-4 overflow-hidden">
                    <div className="absolute inset-0 animated-gradient"></div>
                    <div className="absolute inset-0 bg-slate-900/60"></div>
                    <div className="relative z-10">
                        <AnimatedSection>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter mb-4">
                                Seminario Internacional de Inteligencia Energética
                            </h1>
                            <p className="flex items-center justify-center text-lg md:text-xl text-cyan-400 font-semibold mb-2">
                                <MapPinIcon className="w-5 h-5 mr-2" />
                                Hotel Reef, Playa del Carmen | 5–7 Diciembre 2025
                            </p>
                             <p className="text-md md:text-lg text-yellow-300 mb-4 max-w-3xl mx-auto font-semibold">
                                Ahora potenciado con herramientas de Inteligencia Artificial para acelerar tu transformación.
                            </p>
                            <p className="text-md md:text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
                                Una inmersión profunda de 3 días para transformar tu cerebro reactivo en una herramienta de creación consciente.
                            </p>
                            <div className="mt-10 flex justify-center gap-4">
                                <a href="#inversion" onClick={(e) => {e.preventDefault(); handleScrollTo('inversion')}} className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
                                    Inscribirme Ahora
                                </a>
                                <a href="#programa" onClick={(e) => {e.preventDefault(); handleScrollTo('programa')}} className="bg-slate-700/50 hover:bg-slate-700 border border-slate-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
                                    Ver Programa
                                </a>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* --- Program Section --- */}
                <AnimatedSection id="programa">
                    <ProgramSection/>
                </AnimatedSection>
                
                {/* --- Who is it for Section --- */}
                <AnimatedSection id="para-quien" className="bg-slate-900 py-16 md:py-24">
                    <div className="container mx-auto px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">¿Para Quién es este Seminario?</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                           <InfoCard icon={<BrainIcon />} title="Profesionales de la Salud" description="Terapeutas, coaches y psicólogos que buscan herramientas de vanguardia para generar resultados profundos."/>
                           <InfoCard icon={<EnergyIcon />} title="Líderes y Facilitadores" description="Quienes desean mejorar su impacto y guiar a otros a través de la transformación personal y profesional."/>
                           <InfoCard icon={<DecisionIcon />} title="Público en General" description="Cualquier persona interesada en el crecimiento personal y en descubrir nuevas herramientas para el bienestar."/>
                           <InfoCard icon={<CpuIcon />} title="Innovadores y Pioneros" description="Profesionales que buscan integrar tecnologías de vanguardia como la IA para potenciar sus habilidades y resultados."/>
                        </div>
                    </div>
                </AnimatedSection>
                
                {/* --- Results Section --- */}
                <AnimatedSection id="resultados" className="py-16 md:py-24">
                    <div className="container mx-auto px-6 lg:px-8">
                        <h2 className="flex items-center justify-center text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                            <SparklesIcon className="w-8 h-8 mr-3 text-yellow-400" />
                            Lo Que Lograrás
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            <BenefitCard 
                                icon={<HeartPulseIcon className="w-7 h-7" />} 
                                title="En tu Práctica Profesional" 
                                benefits={[
                                    "Diagnósticos más precisos y profundos al identificar la raíz bioenergética de los síntomas.",
                                    "Intervenciones más efectivas y rápidas para tus pacientes o clientes.",
                                    "Menor desgaste profesional (burnout) al trabajar desde un nivel más sistémico.",
                                    "Nuevas herramientas para complementar tus metodologías actuales."
                                ]} 
                            />
                            <BenefitCard 
                                icon={<BriefcaseIcon className="w-7 h-7" />} 
                                title="En tu Liderazgo y Proyectos" 
                                benefits={[
                                    "Desbloqueo de la creatividad y la innovación en tu equipo con metodologías como LSP.",
                                    "Toma de decisiones más estratégicas y alineadas con la visión del proyecto.",
                                    "Acelera el análisis y la obtención de insights utilizando herramientas de IA como asistente estratégico.",
                                    "Identificación de puntos ciegos y oportunidades ocultas en tus proyectos."
                                ]} 
                            />
                            <BenefitCard 
                                icon={<UserIcon className="w-7 h-7" />} 
                                title="En tu Vida Personal" 
                                benefits={[
                                    "Mayor claridad mental y capacidad para gestionar el estrés y la ansiedad.",
                                    "Comprensión profunda de tus patrones de comportamiento y cómo transformarlos.",
                                    "Relaciones más auténticas y conscientes al entender las dinámicas sistémicas.",
                                    "Un sentido renovado de propósito y dirección en tu vida."
                                ]} 
                            />
                        </div>
                    </div>
                </AnimatedSection>

                {/* --- Testimonials Section --- */}
                <AnimatedSection id="testimonios" className="bg-slate-900 py-16 md:py-24">
                    <div className="container mx-auto px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">Voces de la Transformación</h2>
                        <p className="text-center text-lg text-slate-400 mt-4 mb-12 max-w-3xl mx-auto">Más de una década y 12 seminarios transformando vidas. Esto es lo que dicen nuestros alumnos.</p>
                        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            <TestimonialCard
                                quote="Este seminario fue un antes y un después en mi práctica. Las herramientas de bioenergética me dieron una nueva dimensión para entender y tratar a mis pacientes."
                                name="Laura Fernández"
                                role="Psicoterapeuta"
                            />
                            <TestimonialCard
                                quote="Como gerente, la metodología de LSP, ahora combinada con IA, cambió por completo cómo abordamos la estrategia. Aprendí a desbloquear la creatividad de mi equipo a un nivel que no creía posible."
                                name="Carlos Mendoza"
                                role="Gerente de Proyectos"
                            />
                            <TestimonialCard
                                quote="Fui con la mente abierta y salí con un plan de vida. Entender mis patrones reactivos y cómo cambiarlos fue el regalo más grande que me he dado."
                                name="Sofía Ramírez"
                                role="Alumna, 12ª Edición"
                            />
                        </div>
                    </div>
                </AnimatedSection>

                {/* --- Extensions & Investment Section --- */}
                 <AnimatedSection id="inversion" className="py-16 md:py-24 bg-slate-900">
                    <div className="container mx-auto px-6 lg:px-8 text-center">
                        <h2 className="flex items-center justify-center text-3xl md:text-4xl font-bold text-white mb-4">
                            <GemIcon className="w-8 h-8 mr-3 text-cyan-400" />
                            Inversión en tu Transformación
                        </h2>
                        <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">La experiencia continúa con encuentros de seguimiento en 2026 para consolidar tu aprendizaje.</p>

                        <div className="max-w-lg mx-auto bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-2xl border border-cyan-500/30 relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 font-bold px-4 py-1 rounded-full text-sm">CUPOS LIMITADOS</div>
                            <div className="mb-4">
                                <p className="text-lg font-semibold text-yellow-400">Precio Early Bird</p>
                                <p className="text-4xl font-bold text-white tracking-tight">$7,000 MXN</p>
                                <p className="text-slate-400">Válido hasta el 10 de Noviembre de 2025</p>
                            </div>
                            <div className="mb-8">
                                <p className="text-lg font-semibold text-slate-300">Precio Regular</p>
                                <p className="text-2xl font-bold text-slate-500">$8,500 MXN</p>
                            </div>
                            <p className="text-slate-400 mb-8">Precios para modalidad Presencial y Online. Incluye: Materiales, manuales, protocolos, certificación, acceso a la app oficial con recursos y a las extensiones 2026.</p>
                            <div className="flex justify-center">
                                <a href="https://wa.me/+525579076626" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg shadow-green-500/20">
                                    <WhatsAppIcon className="w-6 h-6 mr-3" />
                                    Inscríbete vía WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </main>

            <footer className="text-center p-8 text-slate-400 bg-slate-900 border-t border-slate-800">
                <p className="text-xl italic">"Transforma tu cerebro reactivo en una herramienta de creación consciente"</p>
            </footer>

        </div>
    );
};

const InfoCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="bg-slate-800 p-8 rounded-xl text-center border border-slate-700 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-cyan-400 bg-slate-900 rounded-full">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400">{description}</p>
    </div>
);

const BenefitCard: React.FC<{ icon: React.ReactNode, title: string, benefits: string[] }> = ({ icon, title, benefits }) => (
    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
        <div className="flex items-center mb-5">
            <div className="inline-flex items-center justify-center w-12 h-12 text-cyan-400 bg-slate-900 rounded-lg">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white ml-4">{title}</h3>
        </div>
        <ul className="space-y-3 text-slate-300">
            {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 text-cyan-400 flex-shrink-0 mt-0.5" /> 
                    <span>{benefit}</span>
                </li>
            ))}
        </ul>
    </div>
);

const TestimonialCard: React.FC<{ quote: string, name: string, role: string }> = ({ quote, name, role }) => (
    <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 relative h-full flex flex-col justify-between transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
        <div>
            <QuoteIcon className="absolute top-6 left-6 w-12 h-12 text-slate-700" />
            <p className="relative z-10 text-slate-300 mb-6 italic">"{quote}"</p>
        </div>
        <div className="relative z-10 mt-auto">
            <p className="font-bold text-white">{name}</p>
            <p className="text-cyan-400 text-sm">{role}</p>
        </div>
    </div>
);


export default App;
