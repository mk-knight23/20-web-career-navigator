import { useUserStore } from '../stores/userStore';
import { useTechStore } from '@/stores/techStore';
import { ROADMAPS } from '@/data/roadmaps';
import { Target, Award, Eye, GraduationCap } from 'lucide-react';

export default function Stats() {
  const userStore = useUserStore();
  const { completedMilestoneIds } = useTechStore();

  const totalMilestones = ROADMAPS.reduce((acc, tech) => acc + tech.milestones.length, 0);
  const completedCount = completedMilestoneIds.length;
  const overallPercent = totalMilestones > 0 ? Math.round((completedCount / totalMilestones) * 100) : 0;

  const roadmapsInProgress = ROADMAPS.filter(tech =>
    tech.milestones.some(ms => completedMilestoneIds.includes(ms.id))
  ).length;

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-3xl font-display font-black tracking-tight dark:text-white mb-2">Learning Analytics</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Track your progress, active tracks, and overall career development metrics.
        </p>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass p-6 rounded-3xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Total Progress</span>
            <GraduationCap className="w-5 h-5 text-tech-primary" />
          </div>
          <div>
            <p className="text-2xl font-black dark:text-white">{overallPercent}%</p>
            <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
              {completedCount} / {totalMilestones} Milestones
            </p>
          </div>
        </div>

        <div className="glass p-6 rounded-3xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Tracks Started</span>
            <Target className="w-5 h-5 text-tech-secondary" />
          </div>
          <div>
            <p className="text-2xl font-black dark:text-white">
              {roadmapsInProgress} / {ROADMAPS.length}
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">Active Career Profiles</p>
          </div>
        </div>

        <div className="glass p-6 rounded-3xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Visits Count</span>
            <Eye className="w-5 h-5 text-tech-accent" />
          </div>
          <div>
            <p className="text-2xl font-black dark:text-white">{userStore.stats.totalVisits || 1}</p>
            <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">Engagement Session count</p>
          </div>
        </div>

        <div className="glass p-6 rounded-3xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Awards Earned</span>
            <Award className="w-5 h-5 text-emerald-500" />
          </div>
          <div>
            <p className="text-2xl font-black dark:text-white">
              {completedCount >= 5 ? 'Pro Learner' : completedCount >= 1 ? 'Novice' : 'Seeker'}
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">Based on milestones completed</p>
          </div>
        </div>
      </div>

      {/* Progress Breakdown list */}
      <div className="glass p-6 md:p-8 rounded-[2.5rem] space-y-6">
        <h3 className="text-lg font-display font-black tracking-tight dark:text-white">Career Track Progress Breakdown</h3>
        <div className="space-y-6">
          {ROADMAPS.map(tech => {
            const techCompleted = tech.milestones.filter(ms => completedMilestoneIds.includes(ms.id)).length;
            const techTotal = tech.milestones.length;
            const techPercent = techTotal > 0 ? Math.round((techCompleted / techTotal) * 100) : 0;

            return (
              <div key={tech.id} className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{tech.icon}</span>
                    <span className="dark:text-white">{tech.name}</span>
                  </div>
                  <span className="text-xs text-slate-400">
                    {techPercent}% ({techCompleted}/{techTotal})
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-200/50 dark:bg-slate-800/50 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${techPercent}%` }}
                    className="h-full bg-gradient-to-r from-tech-primary to-tech-secondary transition-all duration-500"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

