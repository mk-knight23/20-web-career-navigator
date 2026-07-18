export default function About() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <section>
        <h2 className="text-3xl font-display font-black tracking-tight mb-4">About MK PathForge</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          MK PathForge is a free technology roadmap explorer for developers, engineers, and technology leaders. Track the evolution of key technologies — from AI agents and React ecosystem to quantum computing and cybersecurity — through interactive timelines with past, present, and future milestones.
        </p>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
          Built and maintained by <strong>Qazi Musharof</strong>, an AI engineer and full-stack developer.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-display font-black tracking-tight mb-4">Features</h3>
        <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
          <li>• Interactive technology roadmaps with timeline visualization</li>
          <li>• Category filtering (Web, AI, Cloud, Security)</li>
          <li>• Growth and demand indicators per technology</li>
          <li>• Dark mode support with system preference detection</li>
          <li>• Responsive design for all devices</li>
          <li>• Keyboard accessible navigation</li>
        </ul>
      </section>

      <section id="privacy">
        <h3 className="text-xl font-display font-black tracking-tight mb-4">Privacy Policy</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          <strong>Data Collection:</strong> MK PathForge does not collect personal data. No accounts, no registration required. Your theme preferences are stored locally in your browser&apos;s localStorage and never leave your device.
        </p>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-3">
          <strong>Analytics:</strong> When analytics are enabled via environment configuration, we track anonymous usage events such as page views and technology selections. No personal information is collected.
        </p>
        <p className="text-slate-400 text-xs mt-4">Last updated: July 2026</p>
      </section>

      <section id="terms">
        <h3 className="text-xl font-display font-black tracking-tight mb-4">Terms of Service</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          MK PathForge is provided &ldquo;as is&rdquo; without warranty of any kind. Technology roadmap data is curated from public sources and expert analysis; timelines are projections and may not reflect actual release dates. This is a free educational and informational tool.
        </p>
        <p className="text-slate-400 text-xs mt-4">Last updated: July 2026</p>
      </section>

      <section>
        <h3 className="text-xl font-display font-black tracking-tight mb-4">Contact</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          For questions, suggestions, or corrections, visit{' '}
          <a
            href="https://github.com/mk-knight23/20-web-career-navigator/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tech-primary hover:underline"
          >
            GitHub Issues
          </a>.
        </p>
      </section>
    </div>
  );
}
