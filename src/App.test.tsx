import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

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

describe('TechVista Technology Roadmap Viewer', () => {
    it('renders without crashing', () => {
        const { container } = render(<App />);
        expect(container.firstChild).toBeInTheDocument();
    });

    it('renders navigation with correct elements', () => {
        render(<App />);
        expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
        expect(screen.getAllByText(/Tech/i)).toBeTruthy();
        expect(screen.getAllByText(/Vista/i)).toBeTruthy();
    });

    it('renders navigation links', () => {
        render(<App />);
        expect(screen.getAllByText(/Vision/i)).toBeTruthy();
        expect(screen.getAllByText(/Technologies/i)).toBeTruthy();
        expect(screen.getAllByText(/Stats/i)).toBeTruthy();
        expect(screen.getAllByText(/Comparison/i)).toBeTruthy();
    });

    it('renders hero section', () => {
        render(<App />);
        expect(screen.getAllByText(/Navigate/i)).toBeTruthy();
        expect(screen.getAllByText(/Technology/i)).toBeTruthy();
        expect(screen.getAllByText(/Today/i)).toBeTruthy();
        expect(screen.getAllByText(/Future of Innovation/i)).toBeTruthy();
    });

    it('renders action buttons', () => {
        render(<App />);
        expect(screen.getByRole('button', { name: /Browse technology roadmaps/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /View technology statistics/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Open settings panel/i })).toBeInTheDocument();
    });

    it('has proper ARIA labels for accessibility', () => {
        render(<App />);
        expect(screen.getByRole('application', { name: /TechVista Technology Roadmap Viewer/i })).toBeInTheDocument();
        expect(screen.getByRole('main', { name: /Technology roadmaps explorer/i })).toBeInTheDocument();
    });

    it('renders theme toggle button', () => {
        render(<App />);
        const themeButton = screen.getByRole('button', { name: /Switch to/i });
        expect(themeButton).toBeInTheDocument();
    });
});
