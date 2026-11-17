import React, { useState } from 'react';
import {
  Palette,
  RotateCcw,
  Shuffle,
  ChevronRight,
  ChevronLeft,
  Check,
  Layers,
  Sparkles,
  Tag,
  Truck,
  ShieldCheck,
  Star,
  Info,
  ShoppingCart,
  Zap,
  MapPin,
  HelpCircle,
} from 'lucide-react';

/**
 * Authentic Flipkart Product Detail & 3D Customizer Panel
 */
export default function FlipkartProductPanel({
  product,
  partColors,
  onColorChange,
  onApplyColorway,
  selectedPartId,
  onSelectPart,
  onResetColors,
  onRandomizeColors,
  onAddToCart,
  onBuyNow,
  isOpen,
  onToggleOpen,
}) {
  const parts = product.parts || [];
  const activePart = parts.find((p) => p.id === selectedPartId) || parts[0];

  const currentColor = activePart
    ? partColors[activePart.id] || activePart.defaultColor
    : '#ffffff';

  const [customHexInput, setCustomHexInput] = useState(currentColor);
  const [activeTab, setActiveTab] = useState('customize'); // 'customize' | 'specs' | 'offers'
  const [pincode, setPincode] = useState('400001');
  const [pincodeMsg, setPincodeMsg] = useState('Delivery available to Mumbai');

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

  const handlePincodeCheck = (e) => {
    e.preventDefault();
    if (/^\d{6}$/.test(pincode)) {
      setPincodeMsg(`Available! Fast delivery to ${pincode}`);
    } else {
      setPincodeMsg('Please enter a valid 6-digit PIN code');
    }
  };

  return (
    <div
      className={`fixed top-24 right-3 sm:right-6 z-30 transition-all duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-[calc(100%+2rem)]'
      }`}
    >
      {/* Floating Toggle Button */}
      <button
        onClick={onToggleOpen}
        title={isOpen ? 'Hide Flipkart Panel' : 'Show Flipkart Panel'}
        className="absolute -left-12 top-6 w-11 h-11 rounded-xl glass-panel flex items-center justify-center text-white hover:bg-white/10 transition-all shadow-2xl cursor-pointer border border-[#2874f0]/40 group"
      >
        {isOpen ? (
          <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-white" />
        ) : (
          <div className="flex flex-col items-center">
            <span className="text-[9px] font-bold text-[#ffe500] leading-none mb-0.5">3D</span>
            <Palette className="w-4 h-4 text-[#2874f0] group-hover:scale-110 transition-transform" />
          </div>
        )}
      </button>

      {/* Main Flipkart E-Commerce Card */}
      <div className="w-[340px] sm:w-[410px] glass-panel rounded-2xl shadow-2xl flex flex-col max-h-[calc(100vh-7.5rem)] overflow-hidden border border-slate-700/60 bg-[#0e1422]/95 backdrop-blur-xl">
        {/* Top Header & Breadcrumbs */}
        <div className="px-5 pt-4 pb-3 border-b border-white/5 bg-slate-900/60">
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
            <span className="truncate">
              Home &gt; {product.categoryLabel} &gt; <strong className="text-white">{product.brand}</strong>
            </span>
            <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              In Stock
            </span>
          </div>

          <h1 className="text-base sm:text-lg font-bold text-white leading-snug line-clamp-2">
            {product.name}
          </h1>

          {/* Rating & Assured Badge */}
          <div className="flex items-center gap-2.5 mt-2">
            <div className="flex items-center gap-1 px-2 py-0.5 bg-[#388e3c] text-white text-xs font-bold rounded-sm shadow-sm">
              <span>{product.rating}</span>
              <Star className="w-3 h-3 fill-white" />
            </div>

            <span className="text-xs text-slate-400 font-medium truncate">
              {product.ratingCount}
            </span>

            {/* Iconic Flipkart Assured Badge */}
            {product.fAssured && (
              <span className="f-assured-badge shrink-0" title="Flipkart Assured Quality Check">
                <span>f</span>
                <span className="text-slate-800">Assured</span>
                <span className="f-assured-plus">✦</span>
              </span>
            )}
          </div>
        </div>

        {/* Price & Offers Banner */}
        <div className="px-5 py-3 border-b border-white/5 bg-slate-950/40">
          <div className="flex items-baseline gap-2.5">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            <span className="text-xs sm:text-sm text-slate-400 line-through font-mono">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#388e3c]">
              {product.discount}
            </span>
          </div>

          <div className="mt-1 flex items-center gap-1.5 text-[11px] text-[#ffe500]">
            <Sparkles className="w-3 h-3" />
            <span>Earn 50 SuperCoins on this purchase</span>
          </div>
        </div>

        {/* Tab Switcher: Customizer | Offers | Specs */}
        <div className="flex items-center border-b border-white/5 bg-slate-900/40 text-xs font-semibold text-slate-400 px-4">
          <button
            onClick={() => setActiveTab('customize')}
            className={`py-2.5 px-3 border-b-2 transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'customize'
                ? 'border-[#2874f0] text-[#2874f0]'
                : 'border-transparent hover:text-slate-200'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>3D Customizer</span>
          </button>

          <button
            onClick={() => setActiveTab('offers')}
            className={`py-2.5 px-3 border-b-2 transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'offers'
                ? 'border-[#2874f0] text-[#2874f0]'
                : 'border-transparent hover:text-slate-200'
            }`}
          >
            <Tag className="w-3.5 h-3.5" />
            <span>Offers ({product.offers.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('specs')}
            className={`py-2.5 px-3 border-b-2 transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'specs'
                ? 'border-[#2874f0] text-[#2874f0]'
                : 'border-transparent hover:text-slate-200'
            }`}
          >
            <Info className="w-3.5 h-3.5" />
            <span>Highlights & Specs</span>
          </button>
        </div>

        {/* Scrollable Main Body Content */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 text-xs">
          {/* TAB 1: 3D REAL-TIME COLOR CUSTOMIZER */}
          {activeTab === 'customize' && (
            <div className="space-y-4 animate-fade-in">
              {/* SIGNATURE 3D COLORWAYS / THEMES */}
              {product.colorways && product.colorways.length > 0 && (
                <div className="space-y-2 pb-1 border-b border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white flex items-center gap-1.5 text-xs">
                      <Sparkles className="w-3.5 h-3.5 text-[#ffe500]" />
                      Signature Colorways ({product.colorways.length})
                    </span>
                    <span className="text-[10px] text-slate-400">1-Click Full Theme</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {product.colorways.map((cw) => {
                      return (
                        <button
                          key={cw.id}
                          onClick={() => onApplyColorway && onApplyColorway(cw.colors)}
                          title={cw.description}
                          className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/80 border border-white/10 hover:border-[#ffe500] hover:bg-[#2874f0]/15 transition-all text-left cursor-pointer group"
                        >
                          {/* Multi-Color Preview Dots */}
                          <div className="flex items-center -space-x-1 shrink-0">
                            {cw.preview.map((color, i) => (
                              <span
                                key={i}
                                className="w-3.5 h-3.5 rounded-full border border-white/40 shadow-sm"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>

                          <div className="flex flex-col min-w-0">
                            <span className="font-bold text-[11px] text-white truncate group-hover:text-[#ffe500]">
                              {cw.name}
                            </span>
                            <span className="text-[9px] text-slate-400 truncate">
                              {cw.description}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Part Selector */}
              {parts.length > 1 && (
                <div>
                  <div className="flex items-center justify-between text-slate-300 font-semibold mb-2">
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#2874f0]" />
                      Select 3D Part ({parts.length})
                    </span>
                    <span className="text-[10px] text-slate-400 font-normal">or click 3D model</span>
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
                              ? 'bg-[#2874f0]/20 border-[#2874f0] text-white shadow-sm'
                              : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200'
                          }`}
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-white/30 shrink-0 shadow-sm"
                            style={{ backgroundColor: partColor }}
                          />
                          <span className="truncate">{part.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Active Part Finishes */}
              {activePart && (
                <div className="bg-slate-900/70 border border-white/5 rounded-xl p-3.5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-6 h-6 rounded-full border-2 border-white/40 shadow-md transition-colors duration-300"
                        style={{ backgroundColor: currentColor }}
                      />
                      <div className="flex flex-col">
                        <span className="font-semibold text-white">{activePart.name}</span>
                        <span className="text-[10px] font-mono text-slate-400">{currentColor.toUpperCase()}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={onRandomizeColors}
                        title="Randomize Finishes"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
                      >
                        <Shuffle className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onColorChange(activePart.id, activePart.defaultColor)}
                        title="Reset part color"
                        className="text-[11px] text-[#2874f0] hover:underline cursor-pointer font-semibold ml-1"
                      >
                        Reset
                      </button>
                    </div>
                  </div>

                  {/* Swatch Grid */}
                  <div>
                    <div className="text-[11px] text-slate-400 mb-2 flex items-center justify-between font-medium">
                      <span>Popular Finishes</span>
                      <span className="text-[10px] text-slate-500">60 FPS Smooth Lerp</span>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                      {activePart.palette.map((colorHex) => {
                        const isSelected = currentColor.toLowerCase() === colorHex.toLowerCase();

                        return (
                          <button
                            key={colorHex}
                            onClick={() => onColorChange(activePart.id, colorHex)}
                            title={colorHex}
                            className={`group relative h-9 rounded-lg transition-all duration-200 flex items-center justify-center cursor-pointer border ${
                              isSelected
                                ? 'border-white scale-105 shadow-md shadow-[#2874f0]/30 ring-2 ring-[#2874f0]'
                                : 'border-white/10 hover:scale-105 hover:border-white/30'
                            }`}
                            style={{ backgroundColor: colorHex }}
                          >
                            {isSelected && (
                              <span className="w-4 h-4 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white">
                                <Check className="w-3 h-3" />
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Custom Color Input */}
                  <div className="pt-2 border-t border-white/5 flex items-center gap-2">
                    <label
                      className="relative flex items-center justify-center w-8 h-8 rounded-lg border border-white/20 overflow-hidden cursor-pointer shrink-0 shadow-inner"
                      style={{ backgroundColor: currentColor }}
                    >
                      <input
                        type="color"
                        value={currentColor}
                        onChange={(e) => onColorChange(activePart.id, e.target.value)}
                        className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                      />
                    </label>

                    <form onSubmit={handleHexSubmit} className="flex-1 flex items-center gap-1.5">
                      <input
                        type="text"
                        value={customHexInput}
                        onChange={(e) => setCustomHexInput(e.target.value)}
                        placeholder="#FFFFFF"
                        maxLength={7}
                        className="w-full bg-slate-950 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-[#2874f0]"
                      />
                      <button
                        type="submit"
                        className="px-3 py-1.5 rounded-lg bg-[#2874f0] text-white text-[11px] font-bold hover:bg-[#1259cb] transition cursor-pointer"
                      >
                        Apply
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {/* Delivery Check */}
              <div className="bg-slate-900/40 border border-white/5 rounded-xl p-3 space-y-2">
                <div className="flex items-center justify-between font-semibold text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-[#2874f0]" />
                    Delivery Options
                  </span>
                </div>

                <form onSubmit={handlePincodeCheck} className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <MapPin className="w-3.5 h-3.5 absolute left-2.5 top-2 text-slate-400" />
                    <input
                      type="text"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      maxLength={6}
                      className="w-full bg-slate-950 border border-white/10 rounded-lg pl-8 pr-2 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-[#2874f0]"
                      placeholder="Enter Pincode"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-semibold cursor-pointer transition"
                  >
                    Check
                  </button>
                </form>

                <p className="text-[11px] text-[#388e3c] font-medium flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>{product.delivery}</span>
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: OFFERS */}
          {activeTab === 'offers' && (
            <div className="space-y-3 animate-fade-in">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Available Bank & Special Offers
              </span>
              {product.offers.map((offer, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <Tag className="w-4 h-4 text-[#388e3c] shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-200 leading-relaxed">{offer}</p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: HIGHLIGHTS & SPECS */}
          {activeTab === 'specs' && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                  Product Highlights
                </span>
                <ul className="space-y-1.5">
                  {product.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2874f0] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                  Specifications
                </span>
                <div className="space-y-1.5">
                  {product.specs.map((s, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-white/5 text-xs">
                      <span className="text-slate-400">{s.label}</span>
                      <span className="font-semibold text-white">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sticky Flipkart Action Buttons Footer */}
        <div className="p-3 bg-slate-950/90 border-t border-white/10 grid grid-cols-2 gap-2 shrink-0">
          <button
            onClick={() => onAddToCart(product)}
            className="btn-flipkart-cart py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 text-xs sm:text-sm uppercase cursor-pointer"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>

          <button
            onClick={() => onBuyNow(product)}
            className="btn-flipkart-buy py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 text-xs sm:text-sm uppercase cursor-pointer"
          >
            <Zap className="w-4 h-4 fill-white" />
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
