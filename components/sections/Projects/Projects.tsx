'use client';

import React, { useState } from 'react';
import { ExternalLink, Github, Eye, X } from 'lucide-react';
import { useLanguageContext } from '../../../lib/contexts/LanguageContext';
import { ProjectData, FilterType } from '../../../lib/types';
import Container from '../../ui/Container';
import Card from '../../ui/Card';
import Badge from '../../ui/Badge';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';

const Projects: React.FC = () => {
  const { translations } = useLanguageContext();
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  
  const filteredProjects: ProjectData[] = filter === 'featured' 
    ? translations.projects.data.filter(project => project.featured)
    : translations.projects.data;

  const handleProjectClick = (project: ProjectData) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {translations.projects.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            {translations.projects.description}
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant={filter === 'all' ? 'primary' : 'secondary'}
            size="md"
            onClick={() => setFilter('all')}
          >
            {translations.projects.all} ({translations.projects.data.length})
          </Button>
          <Button
            variant={filter === 'featured' ? 'primary' : 'secondary'}
            size="md"
            onClick={() => setFilter('featured')}
          >
            {translations.projects.featured} ({translations.projects.data.filter(p => p.featured).length})
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              variant="project"
              title={project.title}
              description={project.shortDescription}
              image={project.image}
              tags={project.technologies}
              className="group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <div className="flex gap-3 mt-6">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handleProjectClick(project)}
                  icon={<Eye className="w-4 h-4" />}
                  className="flex-1"
                >
                  Ver Detalhes
                </Button>
                {project.github && (
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => window.open(project.github, '_blank')}
                    icon={<Github className="w-4 h-4" />}
                  >
                    {translations.projects.viewCode}
                  </Button>
                )}
              </div>

              {project.featured && (
                <div className="absolute top-4 right-4">
                  <Badge variant="status" color="violet">
                    {translations.projects.highlight}
                  </Badge>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            {translations.projects.interested}
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            icon={<ExternalLink className="w-5 h-5" />}
          >
            {translations.projects.contact}
          </Button>
        </div>
      </Container>

      {/* Project Modal */}
      <Modal isOpen={!!selectedProject} onClose={closeModal}>
        {selectedProject && (
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image */}
              <div className="relative group flex items-center justify-center">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-96 object-contain rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    {selectedProject.shortDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Sobre o Projeto
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Tecnologias Utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="technology"
                        color="gray"
                        className="text-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  {selectedProject.demo && (
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => window.open(selectedProject.demo, '_blank')}
                      icon={<ExternalLink className="w-4 h-4" />}
                    >
                      {translations.projects.viewProject}
                    </Button>
                  )}
                  {selectedProject.github && (
                    <Button
                      variant="secondary"
                      size="md"
                      onClick={() => window.open(selectedProject.github, '_blank')}
                      icon={<Github className="w-4 h-4" />}
                    >
                      {translations.projects.viewCode}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects; 