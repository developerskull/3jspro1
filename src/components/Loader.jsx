import React, { useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';
import { Box, Sparkles } from 'lucide-react';

/**
 * Fullscreen loading screen with animated progress bar and asset counter
 * Driven by @react-three/drei useProgress
 */
export default function Loader() {
  const { active, progress, item, loaded, total } = useProgress();
  const [show, setShow] = useState(true);

  // Fade out smoothly once progress reaches 100%
  useEffect(() => {
    if (!active && progress === 100) {
      const timer = setTimeout(() => setShow(false), 400);
      return () => clearTimeout(timer);
    } else if (active) {
      setShow(true);
    }
  }, [active, progress]);

  if (!show) return null;

  // Extract clean file name from path
  const currentFileName = item ? item.split('/').pop() : 'assets';

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090a0f]/95 backdrop-blur-xl transition-opacity duration-500 ${
        !active && progress === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Center card */}
      <div className="relative flex flex-col items-center max-w-sm px-8 py-10 text-center">
        {/* Animated 3D Box Icon */}
        <div className="relative flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-sky-500/20 border border-white/10 shadow-2xl shadow-indigo-500/20 animate-pulse">
          <Box className="w-10 h-10 text-indigo-400 animate-bounce" />
          <div className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold tracking-tight text-white mb-1 flex items-center gap-2">
          <span>Loading 3D Studio</span>
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
        </h2>
        <p className="text-xs text-slate-400 mb-6">
          Preparing high-fidelity textures & geometry
        </p>

        {/* Progress Bar Container */}
        <div className="w-64 h-2 bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-white/5 mb-3 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400 rounded-full transition-all duration-300 ease-out shadow-sm shadow-indigo-500/50"
            style={{ width: `${Math.round(progress)}%` }}
          />
        </div>

        {/* Status text & percentages */}
        <div className="flex items-center justify-between w-64 text-xs font-mono text-slate-400">
          <span className="truncate max-w-[150px] text-left text-slate-500" title={currentFileName}>
            {loaded}/{total} files
          </span>
          <span className="font-semibold text-indigo-400">{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
}

