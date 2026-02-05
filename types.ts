
export interface TeachingRecord {
  id: number;
  title: string;
  location: string;
  date: string;
}

export interface ProjectRecord {
  id: number;
  title: string;
  client: string;
  year: string;
  description?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
  icon: string;
}
