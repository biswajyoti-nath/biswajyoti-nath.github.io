import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  /** Custom fallback UI. Defaults to a minimal terminal-style error message. */
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

/** Catches runtime errors in the subtree and shows a fallback instead of
 *  crashing the entire page. Wrap around any high-risk component (e.g. Spline). */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // In production you'd send this to Sentry / LogRocket
    console.error("[ErrorBoundary]", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div className="flex items-center justify-center p-8 border border-red-500/20 rounded-lg bg-black/60 font-mono text-sm">
          <div className="text-center space-y-2">
            <p className="text-red-400">{">"} RUNTIME_ERROR_</p>
            <p className="text-neutral-500 text-xs max-w-xs">{this.state.errorMessage}</p>
            <button
              onClick={() => this.setState({ hasError: false, errorMessage: "" })}
              className="mt-4 px-4 py-1.5 border border-white/10 text-neutral-300 text-xs rounded hover:border-white/30 transition-colors"
            >
              RETRY_
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
