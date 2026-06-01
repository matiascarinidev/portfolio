export interface Project {
  id: string;
  title: string;
  deployUrl: string;
  repoUrl: string;
  techStack: string[];
  goal: string;
}

export interface ProjectMetadata {
  title: string;
  description: string;
  image?: {
    url: string;
  };
}
