'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, User, Briefcase, FolderOpen, Mail, Home } from 'lucide-react';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import { useLanguageContext } from '../../../lib/contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, changeLanguage, translations } = useLanguageContext();

  const navigationItems = [
    { href: '#about', label: translations.navigation.about, icon: <User className="w-5 h-5" /> },
    { href: '#experience', label: translations.navigation.experience, icon: <Briefcase className="w-5 h-5" /> },
    { href: '#projects', label: translations.navigation.projects, icon: <FolderOpen className="w-5 h-5" /> },
    { href: '#contact', label: translations.navigation.contact, icon: <Mail className="w-5 h-5" /> }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => changeLanguage(language === 'pt' ? 'en' : 'pt');

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <Container>
          <nav className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold text-white font-mono">
              MRC
            </div>

            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="icon"
                size="sm"
                onClick={toggleLanguage}
                icon={<Globe className="w-4 h-4 text-white" />}
              >
                <span className="text-sm text-white">{language.toUpperCase()}</span>
              </Button>

              <Button
                variant="icon"
                size="sm"
                onClick={toggleMenu}
                className="md:hidden relative z-50"
                icon={isMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
              >
                <span className="sr-only">Menu</span>
              </Button>
            </div>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className={`transform transition-all duration-700 ease-out ${
            isMenuOpen 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-8 opacity-0 scale-95'
          }`}>
            <div className="bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 mx-4 w-full max-w-sm">
              <div className="text-center mb-8">
                <div className="text-3xl font-bold text-white font-mono mb-2">MRC</div>
                <div className="text-gray-400 text-sm">Portfolio</div>
              </div>
              
              <nav className="space-y-2">
                {navigationItems.map((item, index) => (
                  <div
                    key={item.href}
                    className={`transform transition-all duration-500 ease-out ${
                      isMenuOpen 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="w-full flex items-center gap-4 p-4 text-left text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-300 group"
                    >
                      <div className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-violet-500/20 transition-all duration-300">
                        {item.icon}
                      </div>
                      <span className="text-lg font-medium">{item.label}</span>
                    </button>
                  </div>
                ))}
              </nav>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-gray-400 text-sm">Language</span>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={toggleLanguage}
                    className="min-w-[60px]"
                  >
                    {language.toUpperCase()}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header; 