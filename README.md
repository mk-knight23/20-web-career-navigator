# 20-web-career-navigator

# 20 Web Career Navigator

A professional platform for exploring and visualizing the future of technology through interactive roadmaps. Built with React 19, TypeScript, and Tailwind CSS v4.

## Live Demo

| Platform | Status | URL |
|----------|--------|-----|
| Render | Ready | https://20-web-career-navigator.onrender.com |
| Vercel | Ready | https://20-web-career-navigator.vercel.app |
| Firebase | Ready | https://web-career-navigator.web.app |
| AWS Amplify | Ready | https://main.web-career-navigator.amplifyapp.com |

## Deployment

### Render (One-Click Deploy)
This repository includes a `render.yaml` blueprint for automated deployment:
1. Visit [dashboard.render.com](https://dashboard.render.com)
2. Click "New +" → "Blueprint"
3. Connect repository: `mk-knight23/20-web-career-navigator`
4. Render will auto-detect and apply the blueprint configuration

### Vercel
```bash
npm i -g vercel
vercel --prod
```

### Firebase
```bash
npm i -g firebase-tools
firebase login
firebase deploy
```

### Manual Deployment
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`



## ✨ Features

This repository has been upgraded with the following features:

1. **Add React.memo for performance** ✅
2. **Implement custom hooks** ✅
3. **Add context API for state** ✅
4. **Implement lazy loading** ✅
5. **Add error boundaries** ✅
6. **Create reusable components** ✅
7. **Add TypeScript types** ✅
8. **Implement responsive design** ✅
9. **Add animations with Framer Motion** ✅
10. **Create unit tests with React Testing Library** ✅

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📦 Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 19.2.3, TypeScript 5.9.3 |
| **Build Tool** | Vite 6.4.1 |
| **Styling** | Tailwind CSS v4 |
| **Routing** | React Router 7.13.0 |
| **State Management** | Zustand 5.0.11 |
| **Animations** | Framer Motion 12.29.2 |
| **Testing** | Vitest 4.0.18, React Testing Library |
| **Icons** | Lucide React 0.474.0 |

---

## 🏗️ Architecture

### Project Structure

```
20-web-career-navigator/
├── src/
│   ├── components/       # Reusable components
│   │   ├── ui/           # UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Progress.tsx
│   │   ├── sections/     # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Roadmap.tsx
│   │   │   ├── Skills.tsx
│   │   │   └── Footer.tsx
│   │   ├── layout/       # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Navigation.tsx
│   │   └── features/     # Feature-specific components
│   │       ├── RoadmapCard.tsx
│   │       ├── SkillBadge.tsx
│   │       └── PathSelector.tsx
│   ├── store/            # Zustand state management
│   │   └── useStore.ts
│   ├── data/             # Content data
│   │   ├── roadmaps.ts
│   │   ├── skills.ts
│   │   └── paths.ts
│   ├── hooks/            # Custom hooks
│   │   ├── useMediaQuery.ts
│   │   ├── useLocalStorage.ts
│   │   └── useRoadmap.ts
│   ├── styles/           # Global styles
│   │   └── globals.css
│   ├── utils/            # Utility functions
│   │   ├── formatters.ts
│   │   └── constants.ts
│   ├── App.tsx           # Root component
│   └── main.tsx          # Entry point
├── public/               # Static assets
├── .github/workflows/    # CI/CD pipelines
│   ├── ci.yml           # Lint and test
│   └── deploy.yml       # Deploy to Vercel
├── render.yaml           # Render deployment config
├── index.html            # HTML entry point
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite config
├── tailwind.config.ts    # Tailwind config
└── README.md             # This file
```

### Technology Stack

| Layer | Technology |
|-------|------------|
| **Framework** | React 19.2.3 |
| **Language** | TypeScript 5.9.3 |
| **Styling** | Tailwind CSS v4 |
| **State** | Zustand 5.0.11 (lightweight state management) |
| **Routing** | React Router 7.13.0 |
| **Animations** | Framer Motion 12.29.2 |
| **Build Tool** | Vite 6.4.1 |
| **Testing** | Vitest 4.0.18, React Testing Library |

### Key Architectural Patterns

- **Component-First**: Reusable, composable UI components
- **Type Safety**: Full TypeScript coverage with strict mode
- **State Management**: Zustand for global state (lightweight, performant)
- **Custom Hooks**: Encapsulated logic for roadmaps, local storage, media queries
- **Lazy Loading**: Route and component-based code splitting
- **Performance-First**: React.memo for expensive components
- **Error Boundaries**: Graceful error handling

### Career Roadmap System

```typescript
{
  roadmaps: {
    frontend: {
      title: "Frontend Developer",
      path: "HTML → CSS → JavaScript → React → TypeScript",
      skills: ["React", "TypeScript", "Tailwind CSS", "Git"],
      duration: "6-12 months"
    },
    backend: {
      title: "Backend Developer",
      path: "Node.js → Express → Databases → API Design",
      skills: ["Node.js", "Express", "PostgreSQL", "Redis"],
      duration: "8-14 months"
    },
    fullstack: {
      title: "Full Stack Developer",
      path: "Frontend + Backend + DevOps + Cloud",
      skills: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
      duration: "12-24 months"
    }
  }
}
```

### State Management

```
User Selection → Zustand Store → Component Updates
       ↓               ↓                ↓
   Roadmap ID    Global State    UI Refresh
   Skill Level    (1.5KB)         React Re-render
```

- **useStore**: Global state for roadmap selection, skill progress
- **Local State**: Component-specific UI states
- **Persistence**: LocalStorage for user preferences

### Performance Optimizations

- **Code Splitting**: Route and component-based lazy loading
- **React.memo**: Prevent unnecessary re-renders
- **GPU Acceleration**: Framer Motion transforms
- **Tree Shaking**: Icon library and dependencies
- **Minimal Bundle**: Zustand is ~1.5KB (vs Redux ~10KB)
- **CSS Optimization**: Tailwind's purge for production

### Design System

```typescript
// Career Navigator Theme
{
  typography: {
    heading: "Modern sans-serif",
    body: "Clean, readable",
    mono: "Technical code blocks"
  },
  color: {
    primary: "indigo-600",
    secondary: "slate-600",
    accent: "emerald-500",
    neutral: "slate-50"
  },
  spacing: {
    roadmap: "Generous whitespace for clarity",
    skills: "Optimal card layout"
  },
  layout: {
    container: "Max-width 1200px",
    grid: "CSS Grid + Flexbox",
    responsive: "Mobile-first breakpoints"
  }
}
```

### Multi-Platform Deployment

| Platform | URL | Auto-Deploy |
|----------|-----|-------------|
| Vercel | https://20-web-career-navigator.vercel.app | ✅ GitHub Actions |
| Render | https://20-web-career-navigator.onrender.com | ✅ render.yaml |
| Firebase | https://web-career-navigator.web.app | Manual |
| AWS Amplify | https://main.web-career-navigator.amplifyapp.com | Manual |

### CI/CD Pipeline

```yaml
Push to main → CI Check → Build → Deploy
     ↓            ↓          ↓         ↓
  Trigger     Lint+Test   Production   Vercel/Render
              (Vitest)   Build
```

- **Linting**: ESLint + TypeScript strict mode
- **Testing**: Vitest + React Testing Library
- **Build**: Production-optimized bundle
- **Deploy**: Automatic to Vercel and Render

---

## 🛠️ Installation

```bash
git clone https://github.com/mk-knight23/20-web-career-navigator.git
cd 20-web-career-navigator
npm install
```

## 📝 License

MIT

---

*Last updated: 2026-03-01*
