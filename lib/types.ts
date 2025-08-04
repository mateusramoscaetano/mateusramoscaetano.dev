export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'icon';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
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
  children?: React.ReactNode;
}

export interface BadgeProps {
  variant: 'technology' | 'status' | 'category';
  children: React.ReactNode;
  color?: 'blue' | 'violet' | 'pink' | 'gray';
  className?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

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
  icon: React.ReactNode;
} 