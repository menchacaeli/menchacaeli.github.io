export interface Project {
  name: string;
  description: string;
  language: string;
  url: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}
