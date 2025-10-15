interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
}

interface AboutInfo {
  title: string;
  description: string;
  highlights: string[];
}

export interface SkillType {
  name: string;
  level: number;
  category: string;
}

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
}

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface PortfolioType {
  personal: PersonalInfo;
  about: AboutInfo;
  skills: SkillType[];
  projects: ProjectType[];
  experience: Experience[];
  education: Education[];
}