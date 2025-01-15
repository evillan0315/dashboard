export interface TechnologySet {
  technologies: string[];
  features: string[];
}

export default interface Project {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  description: string;
  url: string;
  frontend: TechnologySet;
  backend: TechnologySet;
  database: TechnologySet;
  api: TechnologySet;
  deployment: TechnologySet;
}
