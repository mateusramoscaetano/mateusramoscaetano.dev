'use client';

import React from 'react';
import { useLanguageContext } from '../../../lib/contexts/LanguageContext';
import Container from '../../ui/Container';
import Badge from '../../ui/Badge';

const About: React.FC = () => {
  const { translations } = useLanguageContext();
  
  const skillsByCategory = {
    frontend: translations.skills.frontend,
    backend: translations.skills.backend,
    database: translations.skills.database,
    tools: translations.skills.tools
  };
  
  return (
    <section id="about" className="py-20 bg-gray-900">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                {translations.about.title}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full"></div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              {translations.about.bio}
            </p>

                         <div className="space-y-4">
               <h3 className="text-2xl font-semibold text-white">{translations.about.technologies}</h3>
              
              <div className="space-y-4">
                {Object.entries(skillsByCategory).map(([category, skills]) => (
                  <div key={category} className="space-y-2">
                    <h4 className="text-lg font-medium text-gray-300 capitalize">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.slice(0, 4).map((skill) => (
                        <Badge
                          key={skill}
                          variant="technology"
                          color={category === 'frontend' ? 'blue' : 
                                 category === 'backend' ? 'violet' : 
                                 category === 'database' ? 'pink' : 'gray'}
                        >
                          {skill}
                        </Badge>
                      ))}
                                             {skills.length > 4 && (
                         <Badge variant="technology" color="gray">
                           +{skills.length - 4} {translations.about.more}
                         </Badge>
                       )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-violet-500 to-pink-500 rounded-2xl p-1">
              <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-violet-500 to-pink-500 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">MRC</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-800 rounded w-48 mx-auto"></div>
                    <div className="h-4 bg-gray-800 rounded w-32 mx-auto"></div>
                    <div className="h-4 bg-gray-800 rounded w-40 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full opacity-80"></div>
            <div className="absolute top-1/2 -left-6 w-4 h-4 bg-violet-500 rounded-full opacity-60"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About; 