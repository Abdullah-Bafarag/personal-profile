import type { Translation } from "@/locales/translations";

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
  whatsapp: string;
  website?: string;
  twitter?: string;
}

export interface AboutHighlight {
  label: string;
  value: string;
  description: string;
}

export interface AboutConfig {
  paragraphs: string[];
  principles: {
    title: string;
    description: string;
    icon: 'code' | 'cpu' | 'layers' | 'zap';
  }[];
  highlights: AboutHighlight[];
}

export interface ContactConfig {
  email: string;
  phone: string;
  displayPhone: string;
  whatsapp: string;
  whatsappDisplay: string;
  whatsappUrl: string;
  location: string;
  github: string;
  githubUsername: string;
  linkedin: string;
  linkedinUsername: string;
  website?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  headline: string;
  bio: string;
  availableForHire: boolean;
  location: string;
  website?: string;
  navLinks: NavLink[];
  about: AboutConfig;
  contact: ContactConfig;
  socialLinks: SocialLinks;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools & DevOps' | 'Database';
  icon?: string;
  level?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  icon: 'layout' | 'server' | 'wrench';
  skills: Skill[];
}


export type Language = 'ar' | 'en'
export type Direction = 'rtl' | 'ltr'

export interface LanguageContextType {
  language: Language;
  direction: Direction;
  t: Translation;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}