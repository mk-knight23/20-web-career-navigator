import { RoadmapExplorer } from '@/components/RoadmapExplorer';

export default function Home() {
  return (
    <div className="home">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-black mb-4">
          Technology <span className="text-tech-primary">Roadmaps</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">
          Explore interactive roadmaps for various tech careers. Track milestones, view growth trends, and plan your learning journey.
        </p>
      </div>
      <RoadmapExplorer />
    </div>
  );
}
