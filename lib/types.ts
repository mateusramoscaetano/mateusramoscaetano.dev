import { ReactNode } from 'react';

// UI Component Props
export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'icon';
  size: 'sm' | 'md' | 'lg';
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  variant: 'project' | 'experience' | 'skill';
  title: string;
  description?: string;
  image?: string;
  tags?: string[];
  className?: string;
  children?: ReactNode;
}

export interface BadgeProps {
  variant: 'technology' | 'status' | 'category';
  children: ReactNode;
  color?: 'blue' | 'violet' | 'pink' | 'gray';
  className?: string;
}

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

// Data Interfaces
export interface ExperienceData {
  id: number;
  company: string;
  position: string;
  period: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
}

export interface SkillData {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

// Navigation Interfaces
export interface NavigationItem {
  href: string;
  label: string;
  icon: ReactNode;
}

// Form Interfaces
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FormFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: 'text' | 'email' | 'textarea';
}

// Language and Translation Interfaces
export interface LanguageContextType {
  language: 'pt' | 'en';
  changeLanguage: (language: 'pt' | 'en') => void;
  t: (key: string) => string;
  translations: Translations;
}

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
    data: ExperienceData[];
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

// Component Props
export interface HeroProps {}

export interface AboutProps {}

export interface ExperienceProps {}

export interface ProjectsProps {}

export interface ContactProps {}

export interface HeaderProps {}

export interface FooterProps {}

// Utility Types
export type Language = 'pt' | 'en';

export type FilterType = 'all' | 'featured';

// Legacy interfaces for backward compatibility
export interface Experience extends ExperienceData {}
export interface Project extends ProjectData {}
export interface Skill extends SkillData {}

export interface HeroContent {
  name: string;
  title: string;
  subtitle: string;
  experience: string;
  cta: string;
}

export interface AboutContent {
  title: string;
  bio: string;
  image: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: ReactNode;
} 