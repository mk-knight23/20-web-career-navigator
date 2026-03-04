import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronRight, ArrowUpRight, Layers, Zap, BarChart, Target, X } from 'lucide-react';
import { useTechStore } from '@/stores/techStore';
import { ROADMAPS } from '@/data/roadmaps';
import type { TechCategory } from '@/types/tech';

export function RoadmapExplorer() {
  const {
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    selectedTechId,
    setSelectedTechId,
  } = useTechStore();

  const categories: { id: TechCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All Tech' },
    { id: 'web', label: 'Web Development' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
    { id: 'data', label: 'Data Science' },
    { id: 'security', label: 'Cybersecurity' },
  ];

  const filteredRoadmaps = ROADMAPS.filter(tech => {
    const matchesSearch =
      tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || tech.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const selectedTech = ROADMAPS.find(t => t.id === selectedTechId);

  return (
    <div className="space-y-12">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-x-auto max-w-full no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={clsx(
                'px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all',
                activeCategory === cat.id
                  ? 'bg-white dark:bg-slate-800 shadow-sm text-tech-primary'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search technologies..."
            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-tech-primary/20 transition-all"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRoadmaps.map((tech, idx) => (
          <motion.div
            key={tech.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedTechId(tech.id)}
            className="group relative glass p-8 rounded-[2.5rem] cursor-pointer hover:border-tech-primary transition-all overflow-hidden"
          >
            <div
              className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${tech.color} opacity-5 group-hover:opacity-10 transition-opacity blur-3xl`}
            />

            <div className="text-4xl mb-6">{tech.icon}</div>
            <h3 className="text-2xl font-display font-black mb-3">{tech.name}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
              {tech.description}
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5 text-xs font-bold text-tech-secondary">
                  <Zap size={14} /> {tech.growth}%
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-tech-accent">
                  <BarChart size={14} /> {tech.demand}%
                </div>
              </div>
              <ChevronRight className="text-slate-300 group-hover:text-tech-primary transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredRoadmaps.length === 0 && (
        <div className="text-center py-24">
          <Layers className="w-16 h-16 text-slate-200 dark:text-slate-800 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-400">No technologies found</h3>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
            }}
            className="text-tech-primary font-bold mt-2"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Roadmap Modal */}
      <AnimatePresence>
        {selectedTech && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTechId(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Sidebar Info */}
              <div
                className={`w-full md:w-1/3 p-10 bg-gradient-to-br ${selectedTech.color} text-white space-y-8`}
              >
                <div className="flex items-center justify-between md:flex-col md:items-start gap-4">
                  <div className="text-6xl p-4 bg-white/20 rounded-3xl backdrop-blur-sm">
                    {selectedTech.icon}
                  </div>
                  <button
                    onClick={() => setSelectedTechId(null)}
                    className="md:hidden p-2 bg-white/20 rounded-full"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-4">
                  <h2 className="text-4xl font-display font-black leading-tight">
                    {selectedTech.name}
                  </h2>
                  <p className="text-white/80 font-medium leading-relaxed">
                    {selectedTech.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-1">
                      Growth
                    </p>
                    <p className="text-2xl font-black">{selectedTech.growth}%</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-1">
                      Demand
                    </p>
                    <p className="text-2xl font-black">{selectedTech.demand}%</p>
                  </div>
                </div>

                <div className="hidden md:block pt-8">
                  <button className="w-full bg-white text-slate-900 font-black p-4 rounded-2xl flex items-center justify-center gap-2 hover:scale-105 transition-transform active:scale-95">
                    DOWNLOAD PDF <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>

              {/* Roadmap Timeline */}
              <div className="w-full md:w-2/3 p-10 overflow-y-auto custom-scrollbar bg-white dark:bg-slate-900">
                <div className="flex items-center justify-between mb-12">
                  <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                    <Target size={16} /> Roadmap Milestones
                  </h4>
                  <button
                    onClick={() => setSelectedTechId(null)}
                    className="hidden md:flex p-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="relative space-y-12 pl-8 roadmap-line">
                  {selectedTech.milestones.map(ms => (
                    <div key={ms.id} className="relative">
                      <div
                        className={clsx(
                          'absolute -left-[2.35rem] top-1 w-6 h-6 rounded-full border-4 border-white dark:border-slate-900 z-10 transition-all',
                          ms.status === 'past'
                            ? 'bg-tech-secondary'
                            : ms.status === 'present'
                              ? 'bg-tech-primary scale-125 shadow-lg shadow-tech-primary/50'
                              : 'bg-slate-200 dark:bg-slate-800'
                        )}
                      />

                      <div className="space-y-2">
                        <span
                          className={clsx(
                            'text-xs font-black px-2 py-0.5 rounded-md',
                            ms.status === 'past'
                              ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30'
                              : ms.status === 'present'
                                ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30'
                                : 'bg-slate-100 text-slate-500 dark:bg-slate-800'
                          )}
                        >
                          {ms.year}
                        </span>
                        <h5 className="text-xl font-bold">{ms.title}</h5>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                          {ms.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function clsx(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
