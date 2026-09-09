import { Component } from 'react';

function toError(value) {
  if (value instanceof Error) return value;
  if (typeof value === 'string') return new Error(value);
  try { return new Error(JSON.stringify(value)); } catch { return new Error(String(value)); }
}

function DefaultFallback({ error, resetError }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#edf7f6] p-6">
      <div className="max-w-lg w-full text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e3f3f0] text-[#20777b]">!</div>
        <h1 className="mt-4 text-xl font-semibold text-[#285b61]">Something went wrong</h1>
        <p className="mt-2 text-sm text-[#78908f]">This part of the cockpit hit an error. The rest of ORCA is still running.</p>
        {import.meta.env.DEV ? <pre className="mt-4 overflow-x-auto rounded-xl bg-[#e0efec] p-3 text-left text-xs text-[#41676a]">{error.message || String(error)}</pre> : null}
        <button type="button" onClick={resetError} className="mt-4 rounded-xl bg-[#126972] px-4 py-2 text-sm font-bold text-white hover:bg-[#0d5961]" data-testid="button-retry-error">Try again</button>
      </div>
    </div>
  );
}

export class ErrorBoundary extends Component {
  state = { error: null };
  static getDerivedStateFromError(error) { return { error: toError(error) }; }
  componentDidCatch(error, info) { console.error('ErrorBoundary caught an error:', toError(error), info.componentStack); }
  componentDidUpdate(previousProps) {
    if (this.state.error !== null && previousProps.resetKey !== this.props.resetKey) this.resetError();
  }
  resetError = () => { this.setState({ error: null }); };
  render() {
    if (this.state.error === null) return this.props.children;
    const Fallback = this.props.FallbackComponent || DefaultFallback;
    return <Fallback error={this.state.error} resetError={this.resetError} />;
  }
}