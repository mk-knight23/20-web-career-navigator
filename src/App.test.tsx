import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryRouter, RouterProvider } from 'react-router';
import App from './App';
import Home from './pages/Home';
import Stats from './pages/Stats';
import Settings from './pages/Settings';
import About from './pages/About';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { initial, animate, transition, ...rest } = props;
      return <div {...rest}>{children}</div>;
    },
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Mock Zustand stores
vi.mock('./stores/settings', () => ({
  useSettingsStore: () => ({
    isDarkMode: false,
    toggleDarkMode: vi.fn(),
    toggleHelp: vi.fn(),
    applyTheme: vi.fn(),
  }),
}));

const renderApp = () => {
  const router = createMemoryRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: 'stats', element: <Stats /> },
        { path: 'settings', element: <Settings /> },
        { path: 'about', element: <About /> },
      ],
    },
  ], {
    initialEntries: ['/'],
  });
  return render(<RouterProvider router={router} />);
};


describe('MK PathForge Technology Roadmap Viewer', () => {
  it('renders without crashing', async () => {
    renderApp();
    expect(await screen.findByRole('application')).toBeInTheDocument();
  });

  it('renders navigation with correct elements', async () => {
    renderApp();
    expect(await screen.findByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
    expect(await screen.findAllByText(/Tech/i)).toBeTruthy();
  });

  it('renders navigation links', async () => {
    renderApp();
    expect(await screen.findAllByText(/Home/i)).toBeTruthy();
    expect(await screen.findAllByText(/Stats/i)).toBeTruthy();
    expect(await screen.findAllByText(/Settings/i)).toBeTruthy();
  });

  it('renders hero section', async () => {
    renderApp();
    expect(await screen.findAllByText(/Technology/i)).toBeTruthy();
  });

  it('renders action buttons', async () => {
    renderApp();
    expect(await screen.findByRole('button', { name: /Open settings panel/i })).toBeInTheDocument();
  });

  it('has proper ARIA labels for accessibility', async () => {
    renderApp();
    expect(
      await screen.findByRole('application', { name: /MK PathForge Technology Roadmap Viewer/i })
    ).toBeInTheDocument();
    expect(await screen.findByRole('main', { name: /Main content/i })).toBeInTheDocument();
  });

  it('renders theme toggle button', async () => {
    renderApp();
    const themeButton = await screen.findByRole('button', { name: /Switch to/i });
    expect(themeButton).toBeInTheDocument();
  });
});



