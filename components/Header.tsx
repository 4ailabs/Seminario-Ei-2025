import React, { useState } from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface HeaderProps {
  onScrollTo: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onScrollTo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Main navigation items (visible on desktop)
  const mainNavLinks = [
    { id: 'programa', text: t.nav.programa },
    { id: 'ubicacion', text: t.nav.ubicacion },
    { id: 'sesiones', text: 'Sesiones', isRoute: true },
    { id: 'inversion', text: t.nav.inversion },
  ];

  // Secondary navigation items (in mobile menu or dropdown)
  const secondaryNavLinks = [
    { id: 'para-quien', text: t.nav.paraQuien },
    { id: 'resultados', text: t.nav.resultados },
    { id: 'testimonios', text: t.nav.testimonios },
    // { id: 'galeria', text: t.nav.galeria },
  ];

  // All links for mobile menu
  const allNavLinks = [...mainNavLinks, ...secondaryNavLinks];

  const handleMobileNavClick = (id: string) => {
    onScrollTo(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-slate-200 transition-all duration-300">
      <div className="container mx-auto px-3 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <a
          href="https://inteligencia-energetica.com/home-ei"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200"
        >
          <img
            src="/images/logo-seminario.png"
            alt="Logo Seminario Inteligencia Energética"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          />
          <div className="text-base sm:text-lg md:text-xl font-semibold tracking-tight text-slate-900">
            <span className="text-cyan-600">Inteligencia</span> Energética
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {mainNavLinks.map(link => (
            link.isRoute ? (
              <a href={`/${link.id}`} key={link.id} className="px-3 py-2 rounded-lg transition-all duration-200 text-sm font-semibold text-slate-900 hover:text-cyan-600 hover:bg-slate-50">{link.text}</a>
            ) : (
              <a href={`#${link.id}`} onClick={(e) => {e.preventDefault(); onScrollTo(link.id)}} key={link.id} className="px-3 py-2 rounded-lg transition-all duration-200 text-sm font-semibold text-slate-900 hover:text-cyan-600 hover:bg-slate-50">{link.text}</a>
            )
          ))}
        </nav>

        {/* Tablet Navigation (hidden on mobile, visible on tablet) */}
        <nav className="hidden md:flex lg:hidden items-center space-x-1">
          {mainNavLinks.slice(0, 3).map(link => (
            link.isRoute ? (
              <a href={`/${link.id}`} key={link.id} className="px-2 py-1.5 rounded-lg transition-all duration-200 text-xs font-semibold text-slate-900 hover:text-cyan-600 hover:bg-slate-50">{link.text}</a>
            ) : (
              <a href={`#${link.id}`} onClick={(e) => {e.preventDefault(); onScrollTo(link.id)}} key={link.id} className="px-2 py-1.5 rounded-lg transition-all duration-200 text-xs font-semibold text-slate-900 hover:text-cyan-600 hover:bg-slate-50">{link.text}</a>
            )
          ))}
        </nav>

        {/* Language Toggle */}
        <div className="hidden lg:flex items-center gap-2 mr-3">
          <Languages className="w-4 h-4 text-slate-900" />
          <button
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="px-2 py-1.5 rounded-lg transition-all duration-200 text-sm font-semibold text-slate-900 hover:text-cyan-600 hover:bg-slate-50"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        {/* Desktop CTA Button */}
         <a href="#inversion" onClick={(e) => {e.preventDefault(); onScrollTo('inversion')}} className="hidden md:block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-xl text-sm transition-all duration-200 active:scale-[0.98]">
            {t.nav.inscribirse}
        </a>

        {/* Mobile/Tablet Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-3 transition-all duration-200 touch-manipulation min-w-[48px] min-h-[48px] flex items-center justify-center rounded-lg text-slate-900 hover:bg-slate-50"
          aria-label="Toggle menu"
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

      {/* Mobile/Tablet Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-t border-slate-200 shadow-sm max-h-[calc(100vh-60px)] overflow-y-auto overscroll-contain safe-area-inset-bottom">
          <nav className="container mx-auto px-4 py-4">
            {/* Main Navigation */}
            <div className="mb-4">
              <h3 className="text-slate-900 text-sm font-semibold mb-3 px-2">
                {language === 'es' ? 'Navegación Principal' : 'Main Navigation'}
              </h3>
              {mainNavLinks.map(link => (
                link.isRoute ? (
                  <a
                    href={`/${link.id}`}
                    key={link.id}
                    className="block py-3 px-3 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 border-b border-slate-200 last:border-b-0 touch-manipulation text-base font-medium rounded-lg"
                  >
                    {link.text}
                  </a>
                ) : (
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {e.preventDefault(); handleMobileNavClick(link.id)}}
                    key={link.id}
                    className="block py-3 px-3 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 border-b border-slate-200 last:border-b-0 touch-manipulation text-base font-medium rounded-lg"
                  >
                    {link.text}
                  </a>
                )
              ))}
            </div>

            {/* Secondary Navigation */}
            <div className="mb-4">
              <h3 className="text-slate-900 text-sm font-semibold mb-3 px-2">
                {language === 'es' ? 'Más Información' : 'More Information'}
              </h3>
              {secondaryNavLinks.map(link => (
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {e.preventDefault(); handleMobileNavClick(link.id)}}
                  key={link.id}
                  className="block py-2 px-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 border-b border-slate-200 last:border-b-0 touch-manipulation text-sm font-medium rounded-lg"
                >
                  {link.text}
                </a>
              ))}
            </div>

            {/* Mobile Language Toggle */}
            <div className="flex items-center justify-between py-4 px-2 border-b border-slate-200">
              <span className="text-slate-700 text-base font-medium">
                {language === 'es' ? 'Idioma' : 'Language'}
              </span>
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="text-slate-700 hover:text-slate-900 transition-colors duration-200 text-base font-medium touch-manipulation px-4 py-2 rounded-lg hover:bg-slate-100"
              >
                {language === 'es' ? 'English' : 'Español'}
              </button>
            </div>
            
            <a
              href="#inversion"
              onClick={(e) => {e.preventDefault(); handleMobileNavClick('inversion')}}
              className="block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-xl text-center transition-all duration-200 touch-manipulation text-base mt-4 active:scale-[0.98]"
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
