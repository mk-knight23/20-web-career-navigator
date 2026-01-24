import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface StatsState {
  totalRoadmapsViewed: number
  totalSearches: number
  totalComparisons: number
  totalTimeSpent: number
  lastSessionDate: string | null

  recordRoadmapViewed: () => void
  recordSearch: () => void
  recordComparison: () => void
  addTimeSpent: (seconds: number) => void
  resetStats: () => void
}

export const useStatsStore = create<StatsState>()(
  persist(
    (set) => ({
      totalRoadmapsViewed: 0,
      totalSearches: 0,
      totalComparisons: 0,
      totalTimeSpent: 0,
      lastSessionDate: null,

      recordRoadmapViewed: () => set((state) => ({
        totalRoadmapsViewed: state.totalRoadmapsViewed + 1,
        lastSessionDate: new Date().toISOString()
      })),
      recordSearch: () => set((state) => ({
        totalSearches: state.totalSearches + 1
      })),
      recordComparison: () => set((state) => ({
        totalComparisons: state.totalComparisons + 1
      })),
      addTimeSpent: (seconds) => set((state) => ({
        totalTimeSpent: state.totalTimeSpent + seconds
      })),
      resetStats: () => set({
        totalRoadmapsViewed: 0,
        totalSearches: 0,
        totalComparisons: 0,
        totalTimeSpent: 0,
        lastSessionDate: null,
      }),
    }),
    {
      name: 'techvista-stats',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
