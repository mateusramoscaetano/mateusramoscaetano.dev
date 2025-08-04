'use client';

import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { useLanguageContext } from '../../../lib/contexts/LanguageContext';
import Button from '../../ui/Button';
import Container from '../../ui/Container';

const Hero: React.FC = () => {
  const { translations } = useLanguageContext();
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    console.log('Downloading CV...');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-950 text-white py-20">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-violet-400 font-mono text-sm mb-4">
            {translations.hero.greeting}
          </p>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {translations.hero.name}
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-4 font-mono">
            {translations.hero.title}
          </h2>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            {translations.hero.subtitle}
          </p>

          <div className="inline-flex items-center px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-gray-300 text-sm mb-12">
            <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
            {translations.hero.experience}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToProjects}
              icon={<ArrowRight className="w-5 h-5" />}
            >
              {translations.hero.cta}
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={downloadCV}
              icon={<Download className="w-5 h-5" />}
              
            >
              {translations.hero.downloadCV}
            </Button>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero; 