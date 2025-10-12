import React from 'react';
import { useLanguage } from '../LanguageContext';
import LazyGalleryImage from '../components/LazyGalleryImage';
import ErrorBoundary from '../components/ErrorBoundary';
import ChatButton from '../components/ChatButton';
import { ArrowLeft } from 'lucide-react';

const GalleryPage: React.FC = () => {
    const { language, t } = useLanguage();

    // Gallery Images Data
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
                        <span className="text-sm sm:text-base font-medium">
                            {language === 'es' ? 'Galería' : 'Gallery'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <section className="py-12 sm:py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                            {t.gallery.title}
                        </h1>
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
            </section>

            {/* Back to Home CTA */}
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
                    <a 
                        href="/"
                        className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-50 transition duration-300 inline-flex items-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {language === 'es' ? 'Ver Seminario Completo' : 'View Complete Seminar'}
                    </a>
                </div>
            </section>
        </div>
    );
};

export default GalleryPage;
