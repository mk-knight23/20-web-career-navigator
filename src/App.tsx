import { motion } from 'framer-motion'
import { useSettingsStore } from '@/stores/settings'
import {
  Telescope,
  Zap,
  Moon,
  Sun,
  Github,
  ChevronRight,
  TrendingUp,
  Users,
  Compass,
  Settings as SettingsIcon,
} from 'lucide-react'
import { RoadmapExplorer } from './components/RoadmapExplorer'
import { SettingsPanel } from './components/SettingsPanel'

export default function App() {
  const { isDarkMode, toggleDarkMode, toggleHelp } = useSettingsStore()

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <SettingsPanel onClose={() => toggleHelp()} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-20">
          <div className="flex items-center gap-3">
            <div className="bg-tech-primary p-2.5 rounded-2xl shadow-lg shadow-tech-primary/30">
              <Telescope className="text-white w-7 h-7" />
            </div>
            <h1 className="text-2xl font-display font-black tracking-tight">
              Tech<span className="text-tech-primary">Vista</span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-8 mr-8">
              {['Vision', 'Technologies', 'Stats', 'Comparison'].map(item => (
                <a key={item} href="#" className="text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-tech-primary transition-colors">
                  {item}
                </a>
              ))}
            </div>
            <button
              onClick={() => toggleHelp()}
              className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-tech-primary transition-all"
            >
              <SettingsIcon size={20} />
            </button>
            <button
              onClick={() => { toggleDarkMode(); useSettingsStore.getState().applyTheme() }}
              className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-tech-primary transition-all"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="https://github.com/mk-knight23/38-Tech-Roadmaps-Viewer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-tech-primary transition-all"
            >
              <Github size={20} />
            </a>
          </div>
        </nav>

        <section className="relative mb-32">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-tech-primary opacity-5 blur-[120px] pointer-events-none" />
          <div className="absolute top-0 -right-24 w-96 h-96 bg-tech-secondary opacity-5 blur-[120px] pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tech-primary/10 text-tech-primary text-xs font-black uppercase tracking-widest">
                <Zap size={14} className="fill-current" /> Future of Innovation
              </span>
              <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-[0.85]">
                Navigate <br />
                <span className="text-tech-primary italic">Technology</span> Today
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-xl font-medium max-w-xl mx-auto">
                Explore high-impact roadmaps for cutting-edge technologies. Discover trends, milestones, and the future.
              </p>
            </motion.div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button className="bg-tech-primary text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-tech-primary/20 hover:scale-105 transition-all active:scale-95">
                Explore Roadmaps
              </button>
              <button className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-2xl font-black text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                View Statistics
              </button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {[
            { icon: <TrendingUp className="text-tech-primary" />, label: 'Technologies', value: '12+' },
            { icon: <Compass className="text-tech-secondary" />, label: 'Milestones', value: '48+' },
            { icon: <Users className="text-tech-accent" />, label: 'Categories', value: '5' },
            { icon: <Zap className="text-quiz-secondary" />, label: 'Live Data', value: '100%' }
          ].map((stat, idx) => (
            <div key={idx} className="glass p-8 rounded-[2rem] text-center space-y-2">
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <p className="text-3xl font-display font-black tracking-tight">{stat.value}</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
            </div>
          ))}
        </section>

        <main id="technologies" className="space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-4xl font-display font-black tracking-tight">Interactive Roadmaps</h2>
              <p className="text-slate-500 font-medium">Click any technology to see its detailed future timeline</p>
            </div>
            <div className="text-sm font-bold text-tech-primary flex items-center gap-2 cursor-pointer hover:underline">
              Compare all technologies <ChevronRight size={18} />
            </div>
          </div>

          <RoadmapExplorer />
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
                  <a href="#" className="hover:text-tech-primary">Roadmaps</a>
                  <a href="#" className="hover:text-tech-primary">Comparison</a>
                  <a href="#" className="hover:text-tech-primary">Stats</a>
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
