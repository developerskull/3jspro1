import React, { useState } from 'react';
import { Palette, RotateCcw, Shuffle, ChevronRight, ChevronLeft, Check, Layers, Sparkles } from 'lucide-react';

/**
 * Floating customizable color swatch & part selector panel
 */
export default function ColorPanel({
  product,
  partColors,
  onColorChange,
  selectedPartId,
  onSelectPart,
  onResetColors,
  onRandomizeColors,
  isOpen,
  onToggleOpen,
}) {
  const parts = product.parts || [];
  const activePart = parts.find((p) => p.id === selectedPartId) || parts[0];

  const currentColor = activePart
    ? partColors[activePart.id] || activePart.defaultColor
    : '#ffffff';

  const [customHexInput, setCustomHexInput] = useState(currentColor);

  // Keep custom hex input in sync when part or color changes
  React.useEffect(() => {
    setCustomHexInput(currentColor);
  }, [currentColor]);

  const handleHexSubmit = (e) => {
    e.preventDefault();
    if (/^#[0-9A-Fa-f]{6}$/.test(customHexInput)) {
      if (activePart) {
        onColorChange(activePart.id, customHexInput);
      }
    }
  };

  return (
    <div
      className={`fixed top-20 right-4 z-30 transition-all duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-[calc(100%+1.5rem)]'
      }`}
    >
      {/* Toggle button pinned to side of panel */}
      <button
        onClick={onToggleOpen}
        title={isOpen ? 'Collapse panel' : 'Customize product'}
        className="absolute -left-12 top-4 w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-all shadow-xl cursor-pointer"
      >
        {isOpen ? <ChevronRight className="w-5 h-5" /> : <Palette className="w-5 h-5 text-indigo-400" />}
      </button>

      {/* Main Card */}
      <div className="w-80 sm:w-92 glass-panel rounded-3xl p-6 shadow-2xl flex flex-col gap-5 max-h-[calc(100vh-7rem)] overflow-y-auto">
        {/* Panel Header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Palette className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Custom Studio</h3>
              <p className="text-[11px] text-slate-400">Select part & apply colors</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={onRandomizeColors}
              title="Surprise me with colors"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition cursor-pointer"
            >
              <Shuffle className="w-4 h-4" />
            </button>
            <button
              onClick={onResetColors}
              title="Reset all colors"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Part Selector */}
        {parts.length > 1 && (
          <div>
            <div className="flex items-center justify-between text-xs font-medium text-slate-300 mb-2">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                Select Part ({parts.length})
              </span>
              <span className="text-[10px] text-slate-500">or click model</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {parts.map((part) => {
                const isSelected = part.id === activePart?.id;
                const partColor = partColors[part.id] || part.defaultColor;

                return (
                  <button
                    key={part.id}
                    onClick={() => onSelectPart(part.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all text-left cursor-pointer border ${
                      isSelected
                        ? 'bg-indigo-600/20 border-indigo-500/60 text-white shadow-sm shadow-indigo-500/20'
                        : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200'
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-white/20 shrink-0 shadow-sm"
                      style={{ backgroundColor: partColor }}
                    />
                    <span className="truncate">{part.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Active Part Info */}
        {activePart && (
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div
                className="w-6 h-6 rounded-full border-2 border-white/20 shadow-md transition-colors duration-300"
                style={{ backgroundColor: currentColor }}
              />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">{activePart.name}</span>
                <span className="text-[10px] font-mono text-slate-400">{currentColor.toUpperCase()}</span>
              </div>
            </div>

            <button
              onClick={() => onColorChange(activePart.id, activePart.defaultColor)}
              title="Reset part color"
              className="text-[11px] text-indigo-400 hover:text-indigo-300 hover:underline cursor-pointer"
            >
              Default
            </button>
          </div>
        )}

        {/* Curated Color Swatches */}
        {activePart && (
          <div>
            <div className="text-xs font-medium text-slate-300 mb-2.5 flex items-center justify-between">
              <span>Curated Finishes</span>
              <span className="text-[10px] text-slate-500">Smooth 60fps lerp</span>
            </div>

            <div className="grid grid-cols-4 gap-2.5">
              {activePart.palette.map((colorHex) => {
                const isSelected = currentColor.toLowerCase() === colorHex.toLowerCase();

                return (
                  <button
                    key={colorHex}
                    onClick={() => onColorChange(activePart.id, colorHex)}
                    title={colorHex}
                    className={`group relative h-11 rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer border ${
                      isSelected
                        ? 'border-indigo-400 scale-105 shadow-lg shadow-indigo-500/30 ring-2 ring-indigo-500/50'
                        : 'border-white/10 hover:scale-105 hover:border-white/30'
                    }`}
                    style={{ backgroundColor: colorHex }}
                  >
                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Custom Color Picker & Hex Input */}
        {activePart && (
          <div className="pt-2 border-t border-white/5">
            <div className="text-xs font-medium text-slate-300 mb-2 flex items-center justify-between">
              <span>Custom Palette</span>
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            </div>

            <div className="flex items-center gap-2">
              {/* Native color picker button styled */}
              <label
                className="relative flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 overflow-hidden cursor-pointer shrink-0 hover:border-indigo-500 transition shadow-inner"
                style={{ backgroundColor: currentColor }}
              >
                <input
                  type="color"
                  value={currentColor}
                  onChange={(e) => onColorChange(activePart.id, e.target.value)}
                  className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                />
              </label>

              {/* Hex Input Form */}
              <form onSubmit={handleHexSubmit} className="flex-1 flex items-center gap-1.5">
                <input
                  type="text"
                  value={customHexInput}
                  onChange={(e) => setCustomHexInput(e.target.value)}
                  placeholder="#FFFFFF"
                  maxLength={7}
                  className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-3 py-2 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
                />
                <button
                  type="submit"
                  className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition cursor-pointer"
                >
                  Apply
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

