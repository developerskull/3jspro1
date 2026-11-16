import React, { useState } from 'react';
import {
  RotateCcw,
  Play,
  Pause,
  Camera,
  Grid3X3,
  Sun,
  Info,
  X,
  ExternalLink,
  Sparkles,
  MousePointerClick,
  Check,
} from 'lucide-react';
import ProductSelector from './ProductSelector';
import { LIGHTING_PRESETS } from '../data/products';

/**
 * Top, bottom, and floating action overlays around the 3D canvas
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
  const [showSpecsModal, setShowSpecsModal] = useState(false);
  const [showLightingMenu, setShowLightingMenu] = useState(false);

  return (
    <>
      {/* ================= TOP HEADER BAR ================= */}
      <header className="fixed top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        {/* Left: Brand & Product Info */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <div className="glass-panel px-4 py-2.5 rounded-2xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center text-white font-bold text-xs shadow-md shadow-indigo-500/30">
              3D
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-bold text-white tracking-tight">{activeProduct.name}</h1>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {activeProduct.badge}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <span>{activeProduct.category}</span>
                <span>•</span>
                <span className="font-semibold text-white font-mono">{activeProduct.price}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowSpecsModal(true)}
            title="View Product Specifications"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2.5 rounded-2xl glass-panel text-slate-300 hover:text-white transition text-xs font-medium cursor-pointer"
          >
            <Info className="w-4 h-4 text-indigo-400" />
            <span>Specs</span>
          </button>
        </div>

        {/* Right: Quick Hint or Link */}
        <div className="hidden md:flex items-center gap-2 pointer-events-auto">
          <div className="glass-panel px-3 py-2 rounded-2xl text-[11px] text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Orbit, zoom, & click parts to customize</span>
          </div>
        </div>
      </header>

      {/* ================= BOTTOM BAR: PRODUCT SELECTOR & QUICK ACTIONS ================= */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pointer-events-none max-w-[calc(100vw-2rem)]">
        {/* Floating Part Hover Pill */}
        {hoveredPart && (
          <div className="glass-pill px-4 py-1.5 rounded-full text-xs font-medium text-white flex items-center gap-2 animate-fade-in shadow-xl border-indigo-500/40">
            <MousePointerClick className="w-3.5 h-3.5 text-indigo-400 animate-bounce" />
            <span>Customize:</span>
            <span className="font-semibold text-indigo-300">{hoveredPart.name}</span>
          </div>
        )}

        {/* Product Switcher */}
        <div className="pointer-events-auto">
          <ProductSelector
            products={products}
            activeProduct={activeProduct}
            onSelectProduct={onSelectProduct}
          />
        </div>
      </div>

      {/* ================= FLOATING ACTION TOOLBAR (BOTTOM LEFT) ================= */}
      <div className="fixed bottom-6 left-4 z-20 flex items-center gap-1.5 glass-panel p-1.5 rounded-2xl shadow-2xl">
        {/* Reset Camera View */}
        <button
          onClick={onResetView}
          title="Reset Camera View"
          className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Auto Rotate Toggle */}
        <button
          onClick={onToggleAutoRotate}
          title={isAutoRotating ? 'Pause Turntable' : 'Play Turntable'}
          className={`p-2.5 rounded-xl transition cursor-pointer ${
            isAutoRotating ? 'text-indigo-400 bg-indigo-500/20' : 'text-slate-400 hover:text-white hover:bg-white/10'
          }`}
        >
          {isAutoRotating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        {/* Wireframe Toggle */}
        <button
          onClick={onToggleWireframe}
          title={isWireframe ? 'Disable Wireframe' : 'View Wireframe Mesh'}
          className={`p-2.5 rounded-xl transition cursor-pointer ${
            isWireframe ? 'text-indigo-400 bg-indigo-500/20' : 'text-slate-400 hover:text-white hover:bg-white/10'
          }`}
        >
          <Grid3X3 className="w-4 h-4" />
        </button>

        {/* Environment / Lighting Selector */}
        <div className="relative">
          <button
            onClick={() => setShowLightingMenu((prev) => !prev)}
            title="Lighting Environment"
            className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer flex items-center"
          >
            <Sun className="w-4 h-4 text-amber-400" />
          </button>

          {showLightingMenu && (
            <div className="absolute bottom-12 left-0 w-44 glass-panel rounded-2xl p-2 shadow-2xl flex flex-col gap-1 border border-white/10">
              <span className="text-[10px] uppercase font-semibold text-slate-400 px-2 py-1">Environment</span>
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
                        ? 'bg-indigo-600 text-white shadow-sm'
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

        {/* Take Screenshot */}
        <button
          onClick={onTakeScreenshot}
          title="Take High-Res Screenshot (PNG)"
          className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer group"
        >
          <Camera className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* ================= TOAST NOTIFICATION ================= */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 glass-panel px-5 py-2.5 rounded-2xl text-xs font-medium text-white flex items-center gap-2 shadow-2xl border border-indigo-500/30 animate-bounce">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ================= PRODUCT SPECIFICATIONS MODAL ================= */}
      {showSpecsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="glass-panel w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 relative">
            <button
              onClick={() => setShowSpecsModal(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {activeProduct.badge}
              </span>
              <span className="text-xs text-slate-400">{activeProduct.category}</span>
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">{activeProduct.name}</h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">{activeProduct.description}</p>

            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Specifications</h3>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {activeProduct.specs.map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-3 flex flex-col">
                  <span className="text-[11px] text-slate-400">{s.label}</span>
                  <span className="text-sm font-semibold text-white mt-0.5">{s.value}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-xs text-slate-400">Starting at</span>
                <span className="text-xl font-bold font-mono text-white">{activeProduct.price}</span>
              </div>
              <button
                onClick={() => setShowSpecsModal(false)}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition cursor-pointer shadow-lg shadow-indigo-600/30"
              >
                Continue Customizing
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

