import { Outlet, Link } from 'react-router'
import { useSettingsStore } from '@/stores/settings'
import {
  Telescope,
  Moon,
  Sun,
  Github,
  Settings as SettingsIcon,
} from 'lucide-react'
import { SettingsPanel } from './components/SettingsPanel'

export default function App() {
  const { isDarkMode, toggleDarkMode, toggleHelp } = useSettingsStore()

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`} role="application" aria-label="TechVista Technology Roadmap Viewer">
      <SettingsPanel onClose={() => toggleHelp()} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-20" role="navigation" aria-label="Main navigation">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-tech-primary p-2.5 rounded-2xl shadow-lg shadow-tech-primary/30" aria-hidden="true">
                <Telescope className="text-white w-7 h-7" />
              </div>
              <h1 className="text-2xl font-display font-black tracking-tight">
                Tech<span className="text-tech-primary">Vista</span>
              </h1>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-8 mr-8" role="list">
              <Link to="/" className="text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-tech-primary transition-colors" aria-label="Navigate to Home" role="listitem">Home</Link>
              <Link to="/stats" className="text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-tech-primary transition-colors" aria-label="Navigate to Stats" role="listitem">Stats</Link>
              <Link to="/settings" className="text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-tech-primary transition-colors" aria-label="Navigate to Settings" role="listitem">Settings</Link>
            </div>
            <button
              onClick={() => toggleHelp()}
              className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-tech-primary transition-all"
              aria-label="Open settings panel"
            >
              <SettingsIcon size={20} />
            </button>
            <button
              onClick={() => { toggleDarkMode(); useSettingsStore.getState().applyTheme() }}
              className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-tech-primary transition-all"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="https://github.com/mk-knight23/38-Tech-Roadmaps-Viewer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-tech-primary transition-all"
              aria-label="View source code on GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </nav>

        <main role="main" aria-label="Main content">
          <Outlet />
        </main>

        <footer className="mt-48 pb-12 border-t border-slate-200 dark:border-slate-800 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="space-y-4 max-w-xs">
              <div className="flex items-center gap-2">
                <Telescope className="text-tech-primary w-6 h-6" />
                <span className="text-xl font-display font-black">TechVista</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Building a clearer vision of the technological future through data-driven roadmaps and expert insights.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-16 uppercase tracking-widest text-[10px] font-black">
              <div className="space-y-4">
                <p className="text-slate-400">Platform</p>
                <div className="flex flex-col gap-3">
                  <Link to="/" className="hover:text-tech-primary">Home</Link>
                  <Link to="/stats" className="hover:text-tech-primary">Stats</Link>
                  <Link to="/settings" className="hover:text-tech-primary">Settings</Link>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-slate-400">Resources</p>
                <div className="flex flex-col gap-3">
                  <a href="#" className="hover:text-tech-primary">API Docs</a>
                  <a href="#" className="hover:text-tech-primary">Newsletter</a>
                  <a href="#" className="hover:text-tech-primary">Blog</a>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-slate-400">Legal</p>
                <div className="flex flex-col gap-3">
                  <a href="#" className="hover:text-tech-primary">Privacy</a>
                  <a href="#" className="hover:text-tech-primary">Terms</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            <p>&copy; 2026 TechVista Labs. All rights reserved.</p>
            <p>Built with React + Vite + Framer Motion</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
