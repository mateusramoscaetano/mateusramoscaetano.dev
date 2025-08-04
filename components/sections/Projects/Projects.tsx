'use client';

import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
// Removendo import do constants, agora usando dados traduzidos
import { useLanguageContext } from '../../../lib/contexts/LanguageContext';
import Container from '../../ui/Container';
import Card from '../../ui/Card';
import Badge from '../../ui/Badge';
import Button from '../../ui/Button';

const Projects: React.FC = () => {
  const { translations } = useLanguageContext();
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  // Adicionando propriedade featured aos dados traduzidos
  const projectsWithFeatured = translations.projects.data.map((project, index) => ({
    ...project,
    featured: index < 3, // Primeiros 3 projetos são destaque
    image: `/placeholder-project-${project.id}.jpg`,
    github: "#",
    demo: "#"
  }));

  const filteredProjects = filter === 'featured' 
    ? projectsWithFeatured.filter(project => project.featured)
    : projectsWithFeatured;

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
              {translations.projects.all} ({projectsWithFeatured.length})
            </Button>
            <Button
              variant={filter === 'featured' ? 'primary' : 'secondary'}
              size="md"
              onClick={() => setFilter('featured')}
            >
              {translations.projects.featured} ({projectsWithFeatured.filter(p => p.featured).length})
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
                  {translations.projects.viewCode}
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => window.open(project.demo, '_blank')}
                  icon={<Eye className="w-4 h-4" />}
                >
                  {translations.projects.viewProject}
                </Button>
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
    </section>
  );
};

export default Projects; 