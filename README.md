# TechVista - Technology Roadmap Viewer

A professional platform for exploring and visualizing the future of technology through interactive roadmaps. Built with React 18, TypeScript, and Tailwind CSS.

## Features

- **Interactive Roadmaps** - Explore detailed timelines and milestones for cutting-edge technologies.
- **Real-time Discovery** - Instant search and category-based filtering to find specific technologies.
- **Detailed Milestones** - Visual timeline tracking past, present, and future developments.
- **Impact Metrics** - View growth and demand statistics for each technology.
- **Dark/Light Mode** - Sophisticated interface design with full theme support.
- **Mobile Responsive** - Optimized for all screen sizes with smooth touch interactions.
- **High Performance** - Fast, fluid UI powered by Vite and Framer Motion.

## Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - High-speed build tool
- **Tailwind CSS** - Advanced utility-first styling
- **Zustand** - Global state management & persistence
- **Framer Motion** - Production-grade animations
- **Lucide React** - Modern icon system

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/mk-knight23/38-Tech-Roadmaps-Viewer.git

# Navigate to project
cd 38-Tech-Roadmaps-Viewer

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
# Build optimized bundle
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
38-Tech-Roadmaps-Viewer/
├── src/
│   ├── components/
│   │   └── RoadmapExplorer.tsx # Core viewer logic
│   ├── data/
│   │   └── roadmaps.ts        # Roadmap datasets
│   ├── stores/
│   │   └── techStore.ts       # Global state
│   ├── types/
│   │   └── tech.ts            # TS interfaces
│   ├── App.tsx               # Main layout
│   └── index.css             # Global styles & timeline
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Deployment

This project includes a GitHub Actions workflow for automatic deployment to GitHub Pages.

1. Enable GitHub Pages in repository settings.
2. Set source to "GitHub Actions".
3. Push to the `main` branch to trigger deployment.

## License

MIT License - see [LICENSE](LICENSE) for details.

---

**Live Demo:** [https://mk-knight23.github.io/38-Tech-Roadmaps-Viewer/](https://mk-knight23.github.io/38-Tech-Roadmaps-Viewer/)
