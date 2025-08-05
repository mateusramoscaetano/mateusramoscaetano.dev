'use client';

import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Container from '../../ui/Container';
import { translations } from '@/lib/translations';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      platform: 'GitHub',
      url: 'https://github.com/mateusramoscaetano',
      icon: <Github className="w-4 h-4" />
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mateus-ramos-caetano-aaa425255',
      icon: <Linkedin className="w-4 h-4" />
    },

    {
      platform: 'Email',
      url: 'mailto:mateuscaetanodev@gmail.com',
      icon: <Mail className="w-4 h-4" />
    }
  ];

  return (
    <footer className="border-t border-gray-800 bg-gray-950 py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} Mateus Ramos Caetano
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 border border-gray-700 rounded-full text-gray-300 hover:text-white hover:border-gray-600 transition-colors duration-200"
              >
                {link.icon}
                <span className="text-sm">{link.platform}</span>
              </a>
            ))}
          </div>
        </div>

     
      </Container>
    </footer>
  );
};

export default Footer; 