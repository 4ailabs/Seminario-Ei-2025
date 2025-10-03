import React from 'react';
import { useLanguage } from '../LanguageContext';
import LazyVimeoVideo from '../components/LazyVimeoVideo';
import ChatButton from '../components/ChatButton';
import { ArrowLeft, Play, Clock, Users, Star, MapPin, Phone, Globe } from 'lucide-react';

const WebinarLandingPage: React.FC = () => {
    const { language, t } = useLanguage();

    const webinarData = {
        es: {
            title: "Priming Neurofisiológico",
            subtitle: "Entrena tu Cerebro para Estados Óptimos",
            date: "Evento Presencial",
            time: "Duración: 1 hora",
            location: "Hotel Galería Plaza Reforma",
            videoUrl: "https://vimeo.com/1122509089/a1f5880cc0",
            hotelInfo: {
                name: "Hotel Galería Plaza Reforma",
                address: "Paseo de la Reforma 334, Juárez, 06600 Ciudad de México, CDMX",
                phone: "+52 55 5230 1712",
                website: "https://www.galeriaplazahotels.com.mx/es/reforma/",
                amenities: [
                    "Ubicación estratégica en zona financiera y turística",
                    "A unas cuadras de Paseo de la Reforma",
                    "Cerca de Roma Norte, Condesa y Centro Histórico",
                    "Alberca en el penthouse con vista a la ciudad",
                    "Business Club con desayunos y cocteles",
                    "Restaurantes y bares exclusivos"
                ]
            },
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
            date: "In-Person Event",
            time: "Duration: 1 hour",
            location: "Hotel Galería Plaza Reforma",
            videoUrl: "https://vimeo.com/1122509089/a1f5880cc0",
            hotelInfo: {
                name: "Hotel Galería Plaza Reforma",
                address: "Paseo de la Reforma 334, Juárez, 06600 Mexico City, CDMX",
                phone: "+52 55 5230 1712",
                website: "https://www.galeriaplazahotels.com.mx/es/reforma/",
                amenities: [
                    "Strategic location in financial and tourist district",
                    "A few blocks from Paseo de la Reforma",
                    "Near Roma Norte, Condesa and Historic Center",
                    "Penthouse pool with city views",
                    "Business Club with breakfasts and cocktails",
                    "Exclusive restaurants and bars"
                ]
            },
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
        <div className="min-h-screen bg-slate-900 text-slate-300">
            <ChatButton />
            
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 px-4">
                <div className="container mx-auto flex items-center justify-between">
                    <a 
                        href="/" 
                        className="flex items-center gap-2 text-white hover:text-blue-100 transition-colors duration-300"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="text-sm sm:text-base font-medium">
                            {language === 'es' ? 'Volver al inicio' : 'Back to home'}
                        </span>
                    </a>
                    <div className="flex items-center gap-2">
                        <Play className="w-5 h-5" />
                        <span className="text-sm sm:text-base font-medium">
                            {language === 'es' ? 'Webinar Gratuito' : 'Free Webinar'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-8 sm:py-12 px-4">
                <div className="container mx-auto text-center max-w-4xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                        {data.title}
                    </h1>
                    <h2 className="text-lg sm:text-xl md:text-2xl text-cyan-400 mb-6 font-semibold">
                        {data.subtitle}
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-sm sm:text-base">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-yellow-400" />
                            <span className="text-slate-300">{data.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Play className="w-4 h-4 text-green-400" />
                            <span className="text-slate-300">{data.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-blue-400" />
                            <span className="text-slate-300">{data.location}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="py-8 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-slate-800 rounded-xl p-4 sm:p-6 shadow-2xl">
                        <div className="aspect-video rounded-lg overflow-hidden">
                            <LazyVimeoVideo 
                                videoUrl={data.videoUrl}
                                title={data.title}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-8 sm:py-12 px-4 bg-slate-800">
                <div className="container mx-auto max-w-4xl">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
                        {language === 'es' ? 'Lo que aprenderás' : 'What you will learn'}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {data.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3 p-4 bg-slate-700 rounded-lg">
                                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-white text-sm font-bold">{index + 1}</span>
                                </div>
                                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                    {benefit}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hotel Information Section */}
            <section className="py-8 sm:py-12 px-4">
                <div className="container mx-auto max-w-4xl">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
                        {language === 'es' ? 'Ubicación del Evento' : 'Event Location'}
                    </h3>
                    <div className="bg-slate-800 rounded-xl p-6 sm:p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Hotel Details */}
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-semibold text-cyan-400 mb-4">
                                        {data.hotelInfo.name}
                                    </h4>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="text-slate-300 text-sm sm:text-base">
                                                    {data.hotelInfo.address}
                                                </p>
                                                <p className="text-slate-400 text-xs mt-1">
                                                    {language === 'es' 
                                                        ? 'Ubicado en la principal zona financiera y turística de la Ciudad'
                                                        : 'Located in the main financial and tourist district of the City'
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                                            <a 
                                                href={`tel:${data.hotelInfo.phone}`}
                                                className="text-slate-300 hover:text-white transition-colors"
                                            >
                                                {data.hotelInfo.phone}
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Globe className="w-5 h-5 text-purple-400 flex-shrink-0" />
                                            <a 
                                                href={data.hotelInfo.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base"
                                            >
                                                {language === 'es' ? 'Visitar sitio web' : 'Visit website'}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Amenities */}
                            <div>
                                <h5 className="text-lg font-semibold text-white mb-4">
                                    {language === 'es' ? 'Amenidades del Hotel' : 'Hotel Amenities'}
                                </h5>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {data.hotelInfo.amenities.map((amenity, index) => (
                                        <div key={index} className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                                                {amenity}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-8 sm:py-12 px-4">
                <div className="container mx-auto max-w-4xl">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
                        {language === 'es' ? 'Testimonios' : 'Testimonials'}
                    </h3>
                    <div className="bg-slate-800 rounded-xl p-6 sm:p-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <Star className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                                <blockquote className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4 italic">
                                    "{data.testimonials[0].quote}"
                                </blockquote>
                                <div className="text-right">
                                    <p className="text-white font-semibold">{data.testimonials[0].name}</p>
                                    <p className="text-slate-400 text-sm">{data.testimonials[0].role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-8 sm:py-12 px-4 bg-gradient-to-r from-blue-500 to-cyan-500">
                <div className="container mx-auto text-center max-w-2xl">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                        {language === 'es' 
                            ? '¿Te interesa el seminario completo?' 
                            : 'Interested in the complete seminar?'
                        }
                    </h3>
                    <p className="text-blue-100 mb-6 text-sm sm:text-base leading-relaxed">
                        {language === 'es'
                            ? 'Descubre más sobre nuestro Seminario Internacional de Inteligencia Energética con 5 sesiones presenciales y online en el Hotel Galería Plaza Reforma.'
                            : 'Discover more about our International Energy Intelligence Seminar with 5 in-person and online sessions at Hotel Galería Plaza Reforma.'
                        }
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="/"
                            className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-50 transition duration-300 flex items-center justify-center gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            {language === 'es' ? 'Ver Seminario Completo' : 'View Complete Seminar'}
                        </a>
                        <a 
                            href="https://wa.me/+525579076626?text=Hola%2C%20me%20interesa%20el%20Seminario%20Internacional%20de%20Inteligencia%20Energética"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center justify-center gap-2"
                        >
                            <span>📱</span>
                            {language === 'es' ? 'WhatsApp Info' : 'WhatsApp Info'}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebinarLandingPage;