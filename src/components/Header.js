'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import AccessibilityButton from './AccessibilityButton';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';

/**
 * Header component with navigation and theme controls
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className={`navbar-modern ${scrolled ? 'scrolled' : ''}`}>
        <div className="container flex items-center justify-between">
          <a href="#" className="text-2xl font-bold gradient-text">
            Bruno<span className="text-primary-500">PM</span>
          </a>

          {/* Desktop Navigation */}
          <div className="desktop-nav hidden md:flex items-center gap-6">
            <a href="#about" className="nav-link">{t('header.about')}</a>
            <a href="#cases" className="nav-link">{t('header.caseStudies')}</a>
            <a href="#metrics" className="nav-link">{t('header.metrics')}</a>
            <a href="#testimonials" className="nav-link">{t('header.testimonials')}</a>
            <a href="#contact" className="nav-link">{t('header.contact')}</a>
          </div>

          <div className="flex items-center gap-4">
            <AccessibilityButton />
            
            {/* Seletor de idioma extremamente simples usando apenas texto */}
            <div className="flex items-center gap-1 ml-2 mr-2 bg-white dark:bg-gray-700 p-1 rounded border border-gray-300 dark:border-gray-600">
              <button 
                className="px-2 py-1 bg-blue-100 dark:bg-blue-800 rounded font-bold text-blue-800 dark:text-blue-100"
                title="English"
                onClick={() => {
                  try {
                    localStorage.setItem('language', 'en');
                    window.location.reload();
                  } catch (e) {
                    console.error('Could not set language', e);
                  }
                }}
              >
                EN
              </button>
              
              <button 
                className="px-2 py-1 bg-green-100 dark:bg-green-800 rounded font-bold text-green-800 dark:text-green-100"
                title="Português"
                onClick={() => {
                  try {
                    localStorage.setItem('language', 'pt');
                    window.location.reload();
                  } catch (e) {
                    console.error('Could not set language', e);
                  }
                }}
              >
                PT
              </button>
              
              <button 
                className="px-2 py-1 bg-red-100 dark:bg-red-800 rounded font-bold text-red-800 dark:text-red-100"
                title="Español"
                onClick={() => {
                  try {
                    localStorage.setItem('language', 'es');
                    window.location.reload();
                  } catch (e) {
                    console.error('Could not set language', e);
                  }
                }}
              >
                ES
              </button>
            </div>
            
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              className={`hamburger ${isMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={closeMenu} className="mobile-nav-link">{t('header.about')}</a>
        <a href="#cases" onClick={closeMenu} className="mobile-nav-link">{t('header.caseStudies')}</a>
        <a href="#metrics" onClick={closeMenu} className="mobile-nav-link">{t('header.metrics')}</a>
        <a href="#testimonials" onClick={closeMenu} className="mobile-nav-link">{t('header.testimonials')}</a>
        <a href="#contact" onClick={closeMenu} className="mobile-nav-link">{t('header.contact')}</a>
      </div>

      {/* Section Scroll Indicators */}
      <div className="section-scroll">
        <a href="#hero" className="section-scroll-dot active"></a>
        <a href="#about" className="section-scroll-dot"></a>
        <a href="#cases" className="section-scroll-dot"></a>
        <a href="#metrics" className="section-scroll-dot"></a>
        <a href="#contact" className="section-scroll-dot"></a>
      </div>
    </header>
  );
}
