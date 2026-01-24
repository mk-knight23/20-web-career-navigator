export const STORAGE_KEYS = {
  SETTINGS: 'techvista-settings',
  STATS: 'techvista-stats',
} as const

export const KEYBOARD_SHORTCUTS = [
  { key: 'Ctrl + F', action: 'Search' },
  { key: 'Escape', action: 'Close / Clear' },
  { key: 'H', action: 'Toggle Help' },
  { key: '?', action: 'Show Shortcuts' },
] as const
