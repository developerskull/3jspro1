import React, { useState } from 'react';
import {
  RotateCcw,
  Play,
  Pause,
  Camera,
  Grid3X3,
  Sun,
  Sparkles,
  MousePointerClick,
  Check,
  Compass,
} from 'lucide-react';
import FlipkartProductSwitcher from './FlipkartProductSwitcher';
import { LIGHTING_PRESETS } from '../data/products';

/**
 * Overlay around the 3D canvas with 3D viewer tools, bottom product switcher,
 * hover indicators, and toast alerts
 */
export default function ControlsOverlay({
  products,
  activeProduct,
  onSelectProduct,
  isAutoRotating,
  onToggleAutoRotate,
  isWireframe,
  onToggleWireframe,
  lightingPreset,
  onSelectLightingPreset,
  onResetView,
  onTakeScreenshot,
  hoveredPart,
  toastMessage,
}) {
  const [showLightingMenu, setShowLightingMenu] = useState(false);

  return (
    <>
      {/* 360° Interactive 3D View floating pill badge */}
      <div className="fixed top-24 left-4 z-20 pointer-events-none">
        <div className="glass-panel px-3.5 py-1.5 rounded-full flex items-center gap-2 border border-[#2874f0]/40 shadow-xl pointer-events-auto">
          <div className="w-2 h-2 rounded-full bg-[#ffe500] animate-ping" />
          <span className="text-[11px] font-bold text-white tracking-wide uppercase flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#2874f0] animate-spin" style={{ animationDuration: '8s' }} />
            <span>360° 3D View</span>
          </span>
          <span className="text-[10px] text-slate-400 border-l border-white/10 pl-2 hidden sm:inline">
            Drag to Rotate • Scroll to Zoom
          </span>
        </div>
      </div>

      {/* Floating Part Hover Pill */}
      {hoveredPart && (
        <div className="fixed top-36 left-4 z-20 pointer-events-none animate-fade-in">
          <div className="glass-pill px-3.5 py-1.5 rounded-full text-xs font-medium text-white flex items-center gap-2 shadow-xl border-[#2874f0]/60 bg-[#2874f0]/20">
            <MousePointerClick className="w-3.5 h-3.5 text-[#ffe500] animate-bounce" />
            <span className="text-slate-300">Click to recolor:</span>
            <span className="font-bold text-[#ffe500]">{hoveredPart.name}</span>
          </div>
        </div>
      )}

      {/* ================= BOTTOM BAR: FLIPKART PRODUCT SWITCHER ================= */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-auto max-w-[calc(100vw-1.5rem)]">
        <FlipkartProductSwitcher
          products={products}
          activeProduct={activeProduct}
          onSelectProduct={onSelectProduct}
        />
      </div>

      {/* ================= FLOATING 3D ACTION TOOLBAR (BOTTOM LEFT) ================= */}
      <div className="fixed bottom-4 left-4 z-20 flex items-center gap-1.5 glass-panel p-1.5 rounded-2xl shadow-2xl border border-slate-700/60">
        {/* Reset Camera View */}
        <button
          onClick={onResetView}
          title="Reset 3D Camera View"
          className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Auto Rotate Toggle */}
        <button
          onClick={onToggleAutoRotate}
          title={isAutoRotating ? 'Pause 360° Turntable' : 'Play 360° Turntable'}
          className={`p-2.5 rounded-xl transition cursor-pointer ${
            isAutoRotating ? 'text-[#ffe500] bg-[#2874f0]/30 ring-1 ring-[#2874f0]' : 'text-slate-300 hover:text-white hover:bg-white/10'
          }`}
        >
          {isAutoRotating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        {/* Wireframe Toggle */}
        <button
          onClick={onToggleWireframe}
          title={isWireframe ? 'Disable Wireframe Mesh' : 'View Wireframe Mesh'}
          className={`p-2.5 rounded-xl transition cursor-pointer ${
            isWireframe ? 'text-[#ffe500] bg-[#2874f0]/30 ring-1 ring-[#2874f0]' : 'text-slate-300 hover:text-white hover:bg-white/10'
          }`}
        >
          <Grid3X3 className="w-4 h-4" />
        </button>

        {/* Lighting / Environment Selector */}
        <div className="relative">
          <button
            onClick={() => setShowLightingMenu((prev) => !prev)}
            title="Lighting Environment"
            className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition cursor-pointer flex items-center"
          >
            <Sun className="w-4 h-4 text-[#ffe500]" />
          </button>

          {showLightingMenu && (
            <div className="absolute bottom-12 left-0 w-44 glass-panel rounded-2xl p-2 shadow-2xl flex flex-col gap-1 border border-white/10 z-50">
              <span className="text-[10px] uppercase font-bold text-slate-400 px-2 py-1">Environment</span>
              {LIGHTING_PRESETS.map((preset) => {
                const isSelected = preset.id === lightingPreset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => {
                      onSelectLightingPreset(preset);
                      setShowLightingMenu(false);
                    }}
                    className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                      isSelected
                        ? 'bg-[#2874f0] text-white shadow-sm'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{preset.name}</span>
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Take High-Res Screenshot */}
        <button
          onClick={onTakeScreenshot}
          title="Take High-Res Snapshot (PNG)"
          className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition cursor-pointer group"
        >
          <Camera className="w-4 h-4 group-hover:scale-110 transition-transform text-[#2874f0]" />
        </button>
      </div>

      {/* ================= TOAST NOTIFICATION ================= */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 glass-panel px-5 py-2.5 rounded-2xl text-xs font-bold text-white flex items-center gap-2 shadow-2xl border border-[#2874f0]/60 animate-bounce bg-[#0e1422]">
          <Sparkles className="w-4 h-4 text-[#ffe500]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
}
