import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { TechCategory } from '@/types/tech';

interface TechStore {
  searchQuery: string;
  activeCategory: TechCategory | 'all';
  selectedTechId: string | null;
  comparisonIds: string[];
  isDarkMode: boolean;

  // Actions
  setSearchQuery: (query: string) => void;
  setActiveCategory: (category: TechCategory | 'all') => void;
  setSelectedTechId: (id: string | null) => void;
  toggleComparisonId: (id: string) => void;
  clearComparison: () => void;
  toggleDarkMode: () => void;
}

export const useTechStore = create<TechStore>()(
  persist(
    set => ({
      searchQuery: '',
      activeCategory: 'all',
      selectedTechId: null,
      comparisonIds: [],
      isDarkMode: true,

      setSearchQuery: searchQuery => set({ searchQuery }),
      setActiveCategory: activeCategory => set({ activeCategory }),
      setSelectedTechId: selectedTechId => set({ selectedTechId }),
      toggleComparisonId: id =>
        set(state => {
          const exists = state.comparisonIds.includes(id);
          if (exists) {
            return { comparisonIds: state.comparisonIds.filter(cid => cid !== id) };
          }
          if (state.comparisonIds.length >= 3) return state;
          return { comparisonIds: [...state.comparisonIds, id] };
        }),
      clearComparison: () => set({ comparisonIds: [] }),
      toggleDarkMode: () => set(state => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: 'techvista-storage',
    }
  )
);
