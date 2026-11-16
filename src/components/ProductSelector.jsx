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
 * Product Switcher with animated pill tabs and price tags
 */
export default function ProductSelector({ products, activeProduct, onSelectProduct }) {
  return (
    <div className="flex items-center gap-2 p-1.5 glass-panel rounded-2xl shadow-2xl overflow-x-auto max-w-full">
      {products.map((p) => {
        const Icon = PRODUCT_ICONS[p.id] || Footprints;
        const isActive = activeProduct.id === p.id;

        return (
          <button
            key={p.id}
            onClick={() => onSelectProduct(p)}
            className={`relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 cursor-pointer whitespace-nowrap ${
              isActive
                ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
            <div className="flex flex-col text-left">
              <span className="font-semibold leading-tight">{p.name.split(' ')[0]}</span>
              <span className={`text-[10px] leading-tight font-mono ${isActive ? 'text-indigo-200' : 'text-slate-500'}`}>
                {p.price}
              </span>
            </div>

            {isActive && (
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-400"></span>
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

