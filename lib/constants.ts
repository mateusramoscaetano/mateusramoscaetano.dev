import { HeroContent, AboutContent, Experience, Project, Skill } from './types';

export const heroContent: HeroContent = {
  name: "Mateus Ramos Caetano",
  title: "Desenvolvedor Full-stack",
  subtitle: "Especializado em criar soluções web modernas e escaláveis",
  experience: "3+ anos de experiência",
  cta: "Ver Projetos"
};

export const aboutContent: AboutContent = {
  title: "Sobre mim",
  bio: `Sou um desenvolvedor full-stack apaixonado por criar soluções web inovadoras e escaláveis. 
        Com experiência em React, Next.js, Node.js e diversas tecnologias modernas, 
        busco sempre aprender novas ferramentas e metodologias para entregar produtos 
        de alta qualidade. Acredito na importância do código limpo, arquitetura sólida 
        e experiência do usuário excepcional.`,
  image: "/placeholder-profile.jpg"
};

export const experience: Experience[] = [
  {
    id: 1,
    company: "Empresa Atual",
    position: "Desenvolvedor Full-stack Sênior",
    period: "2022 - Presente",
    duration: "2 anos",
    description: "Desenvolvimento de aplicações web escaláveis usando React, Next.js e Node.js. Liderança técnica de equipes e arquitetura de sistemas.",
    technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "Docker"]
  },
  {
    id: 2,
    company: "Empresa Anterior",
    position: "Desenvolvedor Full-stack",
    period: "2021 - 2022",
    duration: "1 ano",
    description: "Criação de APIs RESTful e interfaces de usuário responsivas. Trabalho com metodologias ágeis e entrega contínua.",
    technologies: ["Node.js", "Express", "MongoDB", "React", "AWS"]
  },
  {
    id: 3,
    company: "Startup",
    position: "Desenvolvedor Frontend",
    period: "2020 - 2021",
    duration: "1 ano",
    description: "Desenvolvimento de interfaces modernas e responsivas. Otimização de performance e acessibilidade.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "GraphQL"]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de E-commerce",
    description: "Plataforma completa de e-commerce com painel administrativo, integração de pagamentos e gestão de estoque.",
    image: "/placeholder-project-1.jpg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Docker"],
    github: "#",
    demo: "#",
    featured: true
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Dashboard interativo para visualização de dados e métricas em tempo real com gráficos avançados.",
    image: "/placeholder-project-2.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Redis"],
    github: "#",
    demo: "#",
    featured: true
  },
  {
    id: 3,
    title: "API de Microserviços",
    description: "Arquitetura de microserviços com Docker, orquestração de containers e CI/CD automatizado.",
    image: "/placeholder-project-3.jpg",
    technologies: ["Docker", "Node.js", "Redis", "PostgreSQL", "Kubernetes"],
    github: "#",
    demo: "#",
    featured: true
  },
  {
    id: 4,
    title: "App de Gestão Financeira",
    description: "Aplicativo mobile-first para controle de finanças pessoais com relatórios e metas.",
    image: "/placeholder-project-4.jpg",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    github: "#",
    demo: "#",
    featured: false
  },
  {
    id: 5,
    title: "Sistema de Chat em Tempo Real",
    description: "Plataforma de comunicação em tempo real com WebSockets e notificações push.",
    image: "/placeholder-project-5.jpg",
    technologies: ["Socket.io", "React", "MongoDB", "Redis", "JWT"],
    github: "#",
    demo: "#",
    featured: false
  },
  {
    id: 6,
    title: "Portfolio Profissional",
    description: "Portfolio moderno e responsivo desenvolvido com Next.js e Tailwind CSS.",
    image: "/placeholder-project-6.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "#",
    featured: false
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: "expert" },
  { name: "Next.js", category: "frontend", level: "expert" },
  { name: "TypeScript", category: "frontend", level: "advanced" },
  { name: "Tailwind CSS", category: "frontend", level: "advanced" },
  { name: "HTML5", category: "frontend", level: "expert" },
  { name: "CSS3", category: "frontend", level: "expert" },
  { name: "JavaScript ES6+", category: "frontend", level: "expert" },
  
  // Backend
  { name: "Node.js", category: "backend", level: "advanced" },
  { name: "Express.js", category: "backend", level: "advanced" },
  { name: "Fastify", category: "backend", level: "intermediate" },
  { name: "RESTful APIs", category: "backend", level: "expert" },
  { name: "GraphQL", category: "backend", level: "intermediate" },
  
  // Database
  { name: "PostgreSQL", category: "database", level: "advanced" },
  { name: "MongoDB", category: "database", level: "advanced" },
  { name: "Redis", category: "database", level: "intermediate" },
  { name: "SQL", category: "database", level: "advanced" },
  { name: "NoSQL", category: "database", level: "advanced" },
  
  // Tools
  { name: "Docker", category: "tools", level: "intermediate" },
  { name: "Git", category: "tools", level: "expert" },
  { name: "Zod", category: "tools", level: "advanced" },
  { name: "React Query", category: "tools", level: "advanced" },
  { name: "SSR/SSG", category: "tools", level: "advanced" },
  { name: "Vercel", category: "tools", level: "advanced" },
  { name: "AWS", category: "tools", level: "intermediate" }
];

export const skillsByCategory = {
  frontend: skills.filter(skill => skill.category === 'frontend'),
  backend: skills.filter(skill => skill.category === 'backend'),
  database: skills.filter(skill => skill.category === 'database'),
  tools: skills.filter(skill => skill.category === 'tools')
}; 