import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

/**
 * ErrorBoundary for handling 3D scene / asset load failures gracefully
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('3D Viewer Error caught:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-[#090a0f] p-6 text-center">
          <div className="glass-panel max-w-md p-8 rounded-2xl flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 text-rose-400">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Model Failed to Load</h3>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              We encountered an issue rendering the 3D model. This can happen if WebGL is disabled or the network interrupted the model asset transfer.
            </p>
            <button
              onClick={this.handleReset}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-600/30 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              Reload Experience
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

