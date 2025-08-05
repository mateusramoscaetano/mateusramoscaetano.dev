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
  skills: {
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
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
    close: string;
    aboutProject: string;
    technologiesUsed: string;
    data: Array<{
      id: number;
      title: string;
      description: string;
      shortDescription: string;
      technologies: string[];
      image: string;
      github?: string;
      demo?: string;
      featured: boolean;
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
     skills: {
       frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript ES6+"],
       backend: ["Node.js", "Express.js", "Fastify", "RESTful APIs", "GraphQL"],
       database: ["PostgreSQL", "MongoDB", "Redis", "SQL", "NoSQL"],
       tools: ["Docker", "Git", "Zod", "React Query", "SSR/SSG", "Vercel", "AWS"]
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
        close: "Fechar",
        aboutProject: "Sobre o Projeto",
        technologiesUsed: "Tecnologias Usadas",
        data: [
          {
            id: 1,
            title: "Cora Cardiologia",
            shortDescription: "Sistema de gerenciamento completo para clínica veterinária",
            description: "Sistema de gerenciamento completo para a clínica Cora Cardiologia, que conta com acesso para clientes acessarem os laudos dos seus pets, clínicas fazerem upload dos laudos e o admin master (dono da Cora) gerenciar seus clientes, clínicas, doutores e fazer upload de laudos. O sistema oferece uma interface intuitiva e segura para todos os usuários.",
            technologies: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "Node.js"],
            image: "/projects/cora-1.png",
            featured: true
          },
          {
            id: 2,
            title: "Cardio Sarraff",
            shortDescription: "Sistema de gerenciamento de laudos com envio por email",
            description: "Sistema de gerenciamento de laudos similar ao da Cora, porém com funcionalidades adicionais como envio de laudos por email. Desenvolvido para otimizar o fluxo de trabalho da clínica, permitindo comunicação eficiente com clientes e parceiros através de notificações automatizadas.",
            technologies: ["React", "Node.js", "MySQL", "Email API", "Docker"],
            image: "/projects/cardio-2.png",
            featured: true
          },
          {
            id: 3,
            title: "Go Barber",
            shortDescription: "Sistema de gerenciamento para barbearias",
            description: "Sistema de gerenciamento para barbearias desenvolvido e layoutado pela minha empresa Nestlab. Em desenvolvimento, visa trazer uma interface moderna e simples para os clientes e um sistema completo e funcional para seus contratantes. O projeto combina design intuitivo com funcionalidades robustas de agendamento e gestão.",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker"],
            image: "/projects/go-barber.png",
            featured: true
          },
          {
            id: 4,
            title: "Revelo",
            shortDescription: "Site institucional para empresa de fotografia",
            description: "Site desenvolvido para a empresa Revelo, especializada em fotografia de formandos. O projeto apresenta uma interface elegante e profissional, destacando os serviços oferecidos e o portfólio da empresa. Desenvolvido com foco na experiência do usuário e apresentação visual impactante.",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
            image: "/projects/revelo.png",
            featured: false
          },
          {
            id: 5,
            title: "Grupo Atmosfera",
            shortDescription: "Landing page imersiva para grupo de multissoluções",
            description: "Landing page imersiva e animada desenvolvida para o Grupo Atmosfera, um grupo de multissoluções para quem está na faculdade. O projeto apresenta uma experiência visual envolvente com animações suaves e design moderno, comunicando efetivamente os serviços e valores da empresa.",
            technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
            image: "/projects/atmosfera.png",
            featured: false
          },
          {
            id: 6,
            title: "Deep Sales",
            shortDescription: "Landing page para gestão de vendas e leads",
            description: "Landing page desenvolvida para a Deep Sales, empresa especializada em gestão de vendas e leads. O projeto apresenta uma interface profissional e focada em conversão, destacando os benefícios dos serviços oferecidos e facilitando o contato com potenciais clientes.",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Email Integration"],
            image: "/projects/deep.png",
            featured: false
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
     skills: {
       frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript ES6+"],
       backend: ["Node.js", "Express.js", "Fastify", "RESTful APIs", "GraphQL"],
       database: ["PostgreSQL", "MongoDB", "Redis", "SQL", "NoSQL"],
       tools: ["Docker", "Git", "Zod", "React Query", "SSR/SSG", "Vercel", "AWS"]
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
        close: "Close",
        aboutProject: "About Project",
        technologiesUsed: "Technologies Used",
        data: [
          {
            id: 1,
            title: "Cora Cardiology",
            shortDescription: "Complete management system for veterinary clinic",
            description: "Complete management system for Cora Cardiology clinic, which includes access for clients to view their pets' reports, clinics to upload reports, and the master admin (Cora owner) to manage their clients, clinics, doctors and upload reports. The system offers an intuitive and secure interface for all users.",
            technologies: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "Node.js"],
            image: "/projects/cora-1.png",
            featured: true
          },
          {
            id: 2,
            title: "Cardio Sarraff",
            shortDescription: "Report management system with email delivery",
            description: "Report management system similar to Cora's, but with additional features such as email delivery of reports. Developed to optimize the clinic's workflow, allowing efficient communication with clients and partners through automated notifications.",
            technologies: ["React", "Node.js", "MySQL", "Email API", "Docker"],
            image: "/projects/cardio-2.png",
            featured: true
          },
          {
            id: 3,
            title: "Go Barber",
            shortDescription: "Management system for barbershops",
            description: "Management system for barbershops developed and designed by my company Nestlab. Under development, it aims to bring a modern and simple interface for clients and a complete and functional system for contractors. The project combines intuitive design with robust scheduling and management features.",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker"],
            image: "/projects/go-barber.png",
            featured: true
          },
          {
            id: 4,
            title: "Revelo",
            shortDescription: "Institutional website for photography company",
            description: "Website developed for Revelo company, specialized in graduation photography. The project presents an elegant and professional interface, highlighting the services offered and the company's portfolio. Developed with focus on user experience and impactful visual presentation.",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
            image: "/projects/revelo.png",
            featured: false
          },
          {
            id: 5,
            title: "Atmosphere Group",
            shortDescription: "Immersive landing page for multi-solutions group",
            description: "Immersive and animated landing page developed for Atmosphere Group, a multi-solutions group for college students. The project presents an engaging visual experience with smooth animations and modern design, effectively communicating the company's services and values.",
            technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
            image: "/projects/atmosfera.png",
            featured: false
          },
          {
            id: 6,
            title: "Deep Sales",
            shortDescription: "Landing page for sales and lead management",
            description: "Landing page developed for Deep Sales, a company specialized in sales and lead management. The project presents a professional and conversion-focused interface, highlighting the benefits of the services offered and facilitating contact with potential clients.",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Email Integration"],
            image: "/projects/deep.png",
            featured: false
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