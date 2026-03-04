export type TechCategory = 'web' | 'ai' | 'cloud' | 'data' | 'security';

export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
  status: 'past' | 'present' | 'future';
}

export interface Technology {
  id: string;
  name: string;
  category: TechCategory;
  description: string;
  icon: string;
  color: string;
  milestones: Milestone[];
  growth: number;
  demand: number;
}

export interface ViewerState {
  searchQuery: string;
  activeCategory: TechCategory | 'all';
  selectedTechId: string | null;
  comparisonIds: string[];
  isDarkMode: boolean;
}
