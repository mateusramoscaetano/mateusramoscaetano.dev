export type Language = 'pt' | 'en';

export interface Translations {
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    experience: string;
    cta: string;
    downloadCV: string;
  };
  about: {
    title: string;
    bio: string;
    technologies: string;
    more: string;
  };
  experience: {
    title: string;
    present: string;
    description: string;
    companies: string;
    yearsExperience: string;
    technologies: string;
    data: Array<{
      id: number;
      company: string;
      position: string;
      period: string;
      duration: string;
      description: string;
      technologies: string[];
    }>;
  };
  projects: {
    title: string;
    viewProject: string;
    viewCode: string;
    description: string;
    all: string;
    featured: string;
    interested: string;
    contact: string;
    highlight: string;
    data: Array<{
      id: number;
      title: string;
      description: string;
      technologies: string[];
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    contactInfo: string;
    contactDescription: string;
    phone: string;
    location: string;
    socialMedia: string;
    sendMessage: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
  };
  navigation: {
    about: string;
    experience: string;
    projects: string;
    contact: string;
  };
  footer: {
    copyright: string;
  };
}

export interface ExperienceData {
  
    id: number;
    company: string;
    position: string;
    period: string;
    duration: string;
    description: string;
    technologies: string[];
  
}

export const translations: Record<Language, Translations> = {
  pt: {
    hero: {
      greeting: "Olá, eu sou",
      name: "Mateus Ramos Caetano",
      title: "Desenvolvedor Full-stack",
      subtitle: "Especializado em criar soluções web modernas e escaláveis",
      experience: "3+ anos de experiência",
      cta: "Ver Projetos",
      downloadCV: "Download CV"
    },
         about: {
       title: "Sobre mim",
       bio: `Sou um desenvolvedor full-stack apaixonado por criar soluções web inovadoras e escaláveis. 
             Com experiência em React, Next.js, Node.js e diversas tecnologias modernas, 
             busco sempre aprender novas ferramentas e metodologias para entregar produtos 
             de alta qualidade. Acredito na importância do código limpo, arquitetura sólida 
             e experiência do usuário excepcional.`,
       technologies: "Tecnologias",
       more: "mais"
     },
           experience: {
        title: "Experiência",
        present: "Presente",
        description: "Minha jornada profissional em desenvolvimento de software, trabalhando com tecnologias modernas e metodologias ágeis.",
        companies: "Empresas",
        yearsExperience: "Anos de Experiência",
        technologies: "Tecnologias",
        data: [
          {
            id: 1,
            company: "Nestlab Studio",
            position: "Project Manager",
            period: "2025 - Presente",
            duration: "2 anos",
            description: "Gerenciando e desenvolvendo aplicações web escaláveis usando Next.js e Node.js. Liderança técnica de equipes e arquitetura de sistemas.",
            technologies: ["Next.js", "TypeScript", "Docker", "Node.js", "SQL"]
          },
          {
            id: 2,
            company: "BlackBird System",
            position: "Full-stack Developer",
            period: "2025 - Presente",
            duration: "1 ano",
            description: "Desenvolvimento de interfaces e integração do sistema de tickets da BlackBird.",
            technologies: ["React", "Next.js", "TypeScript", "MySQL", "Docker"]
          },
          {
            id: 3,
            company: "Fabriks CRM - 7ball",
            position: "Full-stack Developer",
            period: "2025 - Presente",
            duration: "1 ano",
            description: "Desenvolvimento de módulos para um CRM para gerenciamento de leads.",
            technologies: ["Next.js", "TypeScript", "MySQL", "Docker", "Node.js"]
          }
        ]
      },
           projects: {
        title: "Projetos",
        viewProject: "Ver Projeto",
        viewCode: "Ver Código",
        description: "Uma seleção dos meus projetos mais recentes, demonstrando habilidades em desenvolvimento full-stack.",
        all: "Todos",
        featured: "Destaques",
        interested: "Interessado em trabalhar juntos?",
        contact: "Entre em Contato",
        highlight: "Destaque",
        data: [
          {
            id: 1,
            title: "Sistema de E-commerce",
            description: "Plataforma completa de e-commerce com painel administrativo, integração de pagamentos e gestão de estoque.",
            technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Docker"]
          },
          {
            id: 2,
            title: "Dashboard Analytics",
            description: "Dashboard interativo para visualização de dados e métricas em tempo real com gráficos avançados.",
            technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Redis"]
          },
          {
            id: 3,
            title: "API de Microserviços",
            description: "Arquitetura de microserviços com Docker, orquestração de containers e CI/CD automatizado.",
            technologies: ["Docker", "Node.js", "Redis", "PostgreSQL", "Kubernetes"]
          },
          {
            id: 4,
            title: "App de Gestão Financeira",
            description: "Aplicativo mobile-first para controle de finanças pessoais com relatórios e metas.",
            technologies: ["React Native", "Firebase", "Redux", "TypeScript"]
          },
          {
            id: 5,
            title: "Sistema de Chat em Tempo Real",
            description: "Plataforma de comunicação em tempo real com WebSockets e notificações push.",
            technologies: ["Socket.io", "React", "MongoDB", "Redis", "JWT"]
          },
          {
            id: 6,
            title: "Portfolio Profissional",
            description: "Portfolio moderno e responsivo desenvolvido com Next.js e Tailwind CSS.",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
          }
        ]
      },
     contact: {
       title: "Contato",
       subtitle: "Vamos trabalhar juntos! Entre em contato comigo.",
       name: "Nome",
       email: "Email",
       message: "Mensagem",
       send: "Enviar Mensagem",
       contactInfo: "Informações de Contato",
       contactDescription: "Estou sempre aberto a novas oportunidades e projetos interessantes. Sinta-se à vontade para entrar em contato!",
       phone: "Telefone",
       location: "Localização",
       socialMedia: "Redes Sociais",
       sendMessage: "Envie uma Mensagem",
       namePlaceholder: "Seu nome completo",
       emailPlaceholder: "seu@email.com",
       messagePlaceholder: "Conte-me sobre seu projeto..."
     },
    navigation: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      contact: "Contato"
      },
    footer: {
      copyright: "© {currentYear} Mateus Ramos Caetano. Todos os direitos reservados."
    }
  },
  en: {
    hero: {
      greeting: "Hello, I'm",
      name: "Mateus Ramos Caetano",
      title: "Full-stack Developer",
      subtitle: "Specialized in creating modern and scalable web solutions",
      experience: "3+ years of experience",
      cta: "View Projects",
      downloadCV: "Download CV"
    },
         about: {
       title: "About me",
       bio: `I'm a full-stack developer passionate about creating innovative and scalable web solutions. 
             With experience in React, Next.js, Node.js and various modern technologies, 
             I always seek to learn new tools and methodologies to deliver high-quality products. 
             I believe in the importance of clean code, solid architecture and exceptional user experience.`,
       technologies: "Technologies",
       more: "more"
     },
           experience: {
        title: "Experience",
        present: "Present",
        description: "My professional journey in software development, working with modern technologies and agile methodologies.",
        companies: "Companies",
        yearsExperience: "Years of Experience",
        technologies: "Technologies",
        data: [
          {
            id: 1,
            company: "Nestlab Studio",
            position: "Project Manager",
            period: "2025 - Present",
            duration: "2 years",
            description: "Managing and developing scalable web applications using Next.js and Node.js. Technical leadership of teams and system architecture.",
            technologies: ["Next.js", "TypeScript", "Docker", "Node.js", "SQL"]
          },
          {
            id: 2,
            company: "BlackBird System",
            position: "Full-stack Developer",
            period: "2025 - Present",
            duration: "1 year",
            description: "Development of interfaces and integrating the ticket system of BlackBird.",
            technologies: ["React", "Next.js", "TypeScript", "MySQL", "Docker"]
          },
          {
            id: 3,
            company: "Fabriks CRM - 7ball ",
            position: "Full-stack Developer",
            period: "2025 - Present",
            duration: "1 year",
            description: "Development of modules for a CRM for lead management.",
            technologies: [ "Next.js", "TypeScript", "MySQL", "Docker", "Node.js"]
          }
        ]
      },
           projects: {
        title: "Projects",
        viewProject: "View Project",
        viewCode: "View Code",
        description: "A selection of my most recent projects, demonstrating full-stack development skills.",
        all: "All",
        featured: "Featured",
        interested: "Interested in working together?",
        contact: "Get in Touch",
        highlight: "Featured",
        data: [
          {
            id: 1,
            title: "E-commerce System",
            description: "Complete e-commerce platform with admin panel, payment integration and inventory management.",
            technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Docker"]
          },
          {
            id: 2,
            title: "Analytics Dashboard",
            description: "Interactive dashboard for real-time data visualization and metrics with advanced charts.",
            technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Redis"]
          },
          {
            id: 3,
            title: "Microservices API",
            description: "Microservices architecture with Docker, container orchestration and automated CI/CD.",
            technologies: ["Docker", "Node.js", "Redis", "PostgreSQL", "Kubernetes"]
          },
          {
            id: 4,
            title: "Financial Management App",
            description: "Mobile-first application for personal finance control with reports and goals.",
            technologies: ["React Native", "Firebase", "Redux", "TypeScript"]
          },
          {
            id: 5,
            title: "Real-time Chat System",
            description: "Real-time communication platform with WebSockets and push notifications.",
            technologies: ["Socket.io", "React", "MongoDB", "Redis", "JWT"]
          },
          {
            id: 6,
            title: "Professional Portfolio",
            description: "Modern and responsive portfolio developed with Next.js and Tailwind CSS.",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
          }
        ]
      },
     contact: {
       title: "Contact",
       subtitle: "Let's work together! Get in touch with me.",
       name: "Name",
       email: "Email",
       message: "Message",
       send: "Send Message",
       contactInfo: "Contact Information",
       contactDescription: "I'm always open to new opportunities and interesting projects. Feel free to get in touch!",
       phone: "Phone",
       location: "Location",
       socialMedia: "Social Media",
       sendMessage: "Send a Message",
       namePlaceholder: "Your full name",
       emailPlaceholder: "your@email.com",
       messagePlaceholder: "Tell me about your project..."
     },
    navigation: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact"
    },
    footer: {
      copyright: "© {currentYear} Mateus Ramos Caetano. All rights reserved."
    }
  }
}; 