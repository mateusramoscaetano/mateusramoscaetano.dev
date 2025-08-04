'use client';

import React from 'react';
import { experience } from '../../../lib/constants';
import Container from '../../ui/Container';
import Card from '../../ui/Card';
import Badge from '../../ui/Badge';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-950">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Experiência Profissional
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Minha jornada profissional em desenvolvimento de software, 
            trabalhando com tecnologias modernas e metodologias ágeis.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-800"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-violet-500 rounded-full border-4 border-gray-950 z-10"></div>

                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <Card
                    variant="experience"
                    title={exp.company}
                    description={exp.description}
                    tags={[exp.period, exp.position]}
                    className="relative"
                  >
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="technology"
                          color="gray"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-violet-500 mb-2">
              {experience.length}+
            </div>
            <div className="text-gray-400">Empresas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">
              3+
            </div>
            <div className="text-gray-400">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-500 mb-2">
              20+
            </div>
            <div className="text-gray-400">Tecnologias</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience; 