'use client';

import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { projects } from '../../../lib/constants';
import Container from '../../ui/Container';
import Card from '../../ui/Card';
import Badge from '../../ui/Badge';
import Button from '../../ui/Button';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = filter === 'featured' 
    ? projects.filter(project => project.featured)
    : projects;

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Projetos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Uma seleção dos meus projetos mais recentes, 
            demonstrando habilidades em desenvolvimento full-stack.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant={filter === 'all' ? 'primary' : 'secondary'}
            size="md"
            onClick={() => setFilter('all')}
          >
            Todos ({projects.length})
          </Button>
          <Button
            variant={filter === 'featured' ? 'primary' : 'secondary'}
            size="md"
            onClick={() => setFilter('featured')}
          >
            Destaques ({projects.filter(p => p.featured).length})
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              variant="project"
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.technologies}
              className="group"
            >
              <div className="flex gap-3 mt-6">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => window.open(project.github, '_blank')}
                  icon={<Github className="w-4 h-4" />}
                >
                  Código
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => window.open(project.demo, '_blank')}
                  icon={<Eye className="w-4 h-4" />}
                >
                  Demo
                </Button>
              </div>

              {project.featured && (
                <div className="absolute top-4 right-4">
                  <Badge variant="status" color="violet">
                    Destaque
                  </Badge>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Interessado em trabalhar juntos?
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            icon={<ExternalLink className="w-5 h-5" />}
          >
            Entre em Contato
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Projects; 