export interface Project {
  id: string;
  title: string;
  deployUrl: string;
  repoUrl: string;
  techStack: string[];
  problem: string;
  solution: string;
  result: string;
}

export interface ProjectMetadata {
  title: string;
  description: string;
  image?: {
    url: string;
  };
}

export interface SectionTitleProps {
  description: string;
}
export interface NavigationItem {
  href: string;
  label: string;
}

export interface CommonMessages {
  navigation: NavigationItem[];
}
export interface AboutMessages {
  description: string;
}
export interface ProjectsMessages {
  description: string;
  cta: string;
  problem: string;
  solution: string;
  result: string;
}
export interface ContactMessages {
  description: string;
  cta: string;
  send: string;
  email: string;
  linkedin: string;
  github: string;
}
export interface HomeMessages {
  description: string;
}
export interface MetadataMessages {
  title: string;
  description: string;
  keywords: string[];
  siteName: string;
  locale: string;
  imageAlt: string;
}
export interface Messages {
  common: CommonMessages;
  home: HomeMessages;
  about: AboutMessages;
  projects: ProjectsMessages;
  projectsList: Project[];
  contact: ContactMessages;
  metadata: MetadataMessages;
}
