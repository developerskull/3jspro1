import React from 'react';
import { Footprints, Armchair, Watch, Glasses, Shield } from 'lucide-react';

const PRODUCT_ICONS = {
  shoe: Footprints,
  chair: Armchair,
  watch: Watch,
  sunglasses: Glasses,
  helmet: Shield,
};

/**
 * Bottom Flipkart 3D Product Carousel & Selector
 */
export default function FlipkartProductSwitcher({ products, activeProduct, onSelectProduct }) {
  return (
    <div className="flex items-center gap-2 p-2 glass-panel rounded-2xl shadow-2xl overflow-x-auto max-w-full bg-[#0e1422]/90 border border-slate-700/60 backdrop-blur-xl">
      {products.map((p) => {
        const Icon = PRODUCT_ICONS[p.id] || Footprints;
        const isActive = activeProduct.id === p.id;

        return (
          <button
            key={p.id}
            onClick={() => onSelectProduct(p)}
            className={`relative flex items-center gap-2.5 px-3.5 py-2 rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap border ${
              isActive
                ? 'bg-[#2874f0] border-[#ffe500] text-white shadow-lg shadow-[#2874f0]/40 scale-102'
                : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                isActive ? 'bg-[#ffe500] text-[#1259cb]' : 'bg-white/10 text-slate-300'
              }`}
            >
              <Icon className="w-4 h-4" />
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs leading-tight">{p.brand}</span>
                <span className={`text-[9px] font-bold px-1 rounded ${isActive ? 'bg-white text-[#2874f0]' : 'bg-[#388e3c] text-white'}`}>
                  {p.discount}
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5 font-mono">
                <span className={`text-xs font-bold ${isActive ? 'text-[#ffe500]' : 'text-white'}`}>
                  ₹{p.price.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-slate-400 line-through">
                  ₹{p.originalPrice.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Active Highlight Pin */}
            {isActive && (
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffe500] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ffe500]"></span>
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
