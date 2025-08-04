'use client';

import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import Container from '../../ui/Container';
import Button from '../../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('PT');

  const navigationItems = [
    { href: '#about', label: 'Sobre' },
    { href: '#experience', label: 'Experiência' },
    { href: '#projects', label: 'Projetos' },
    { href: '#contact', label: 'Contato' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => setLanguage(language === 'PT' ? 'EN' : 'PT');

  return (
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
              <span className="text-sm text-white">{language}</span>
            </Button>

            <Button
              variant="icon"
              size="sm"
              onClick={toggleMenu}
              className="md:hidden"
              icon={isMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            >
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header; 