import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(_error: Error, _errorInfo: ErrorInfo) {
        // Could send to error tracking service in production
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-gradient-to-br from-tech-primary/10 to-tech-secondary/10 flex items-center justify-center p-8" role="alert" aria-live="assertive">
                    <div className="max-w-2xl w-full bg-white dark:bg-slate-800 border-2 border-tech-primary/20 p-12 rounded-[2rem] shadow-2xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-tech-primary/10 p-4 rounded-2xl">
                                <svg className="w-12 h-12 text-tech-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h1 className="text-4xl font-display font-black text-slate-900 dark:text-white">Navigation <span className="text-tech-primary">Error</span></h1>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 font-medium mb-8 leading-relaxed">
                            We encountered an unexpected detour while loading the technology roadmaps. Don't worry, you'll be back on track in no time!
                        </p>
                        {this.state.error && (
                            <details className="mb-8">
                                <summary className="text-xs font-black uppercase tracking-widest cursor-pointer hover:text-tech-primary transition-colors text-slate-500">
                                    Technical Details
                                </summary>
                                <pre className="mt-4 p-4 bg-slate-50 dark:bg-slate-900 text-xs overflow-auto font-mono rounded-xl text-slate-600 dark:text-slate-400">
                                    {this.state.error.toString()}
                                </pre>
                            </details>
                        )}
                        <button
                            onClick={() => window.location.reload()}
                            className="w-full px-8 py-4 bg-tech-primary hover:bg-tech-secondary text-white rounded-2xl font-black uppercase tracking-widest text-sm transition-all active:scale-95 shadow-lg shadow-tech-primary/30"
                        >
                            Reload Navigator
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
