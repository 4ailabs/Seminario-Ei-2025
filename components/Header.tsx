import React, { useState, useEffect } from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface HeaderProps {
  onScrollTo: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onScrollTo }) => {
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
    { id: 'sesiones', text: 'Sesiones', isRoute: true },
    { id: 'galeria', text: t.nav.galeria },
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
      <div className="container mx-auto px-3 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
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
          <div className="text-base sm:text-lg md:text-xl font-bold text-white tracking-wider">
            <span className="text-cyan-400">Inteligencia</span> Energética
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            link.isRoute ? (
              <a href={`/${link.id}`} key={link.id} className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">{link.text}</a>
            ) : (
              <a href={`#${link.id}`} onClick={(e) => {e.preventDefault(); onScrollTo(link.id)}} key={link.id} className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">{link.text}</a>
            )
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
          className="md:hidden p-3 text-white hover:text-cyan-400 transition-colors duration-300 touch-manipulation min-w-[48px] min-h-[48px] flex items-center justify-center"
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-lg border-t border-slate-700 shadow-lg max-h-[calc(100vh-60px)] overflow-y-auto overscroll-contain safe-area-inset-bottom">
          <nav className="container mx-auto px-4 py-4">
            {navLinks.map(link => (
              link.isRoute ? (
                <a
                  href={`/${link.id}`}
                  key={link.id}
                  className="block py-4 px-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-all duration-300 border-b border-slate-700 last:border-b-0 touch-manipulation text-base font-medium rounded-lg"
                >
                  {link.text}
                </a>
              ) : (
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {e.preventDefault(); handleMobileNavClick(link.id)}}
                  key={link.id}
                  className="block py-4 px-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-all duration-300 border-b border-slate-700 last:border-b-0 touch-manipulation text-base font-medium rounded-lg"
                >
                  {link.text}
                </a>
              )
            ))}
            {/* Mobile Language Toggle */}
            <div className="flex items-center justify-between py-4 px-2 border-b border-slate-700">
              <span className="text-slate-300 text-base font-medium">Idioma</span>
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-base font-medium touch-manipulation px-4 py-2 rounded-lg hover:bg-slate-800/50"
              >
                {language === 'es' ? 'English' : 'Español'}
              </button>
            </div>
            
            <a
              href="#inversion"
              onClick={(e) => {e.preventDefault(); handleMobileNavClick('inversion')}}
              className="block bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white font-bold py-4 px-6 rounded-full text-center transition duration-300 touch-manipulation text-base mt-4"
            >
              {t.nav.inscribirse}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
