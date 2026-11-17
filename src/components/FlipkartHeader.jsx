import React, { useState } from 'react';
import { Search, ShoppingCart, User, ChevronDown, Sparkles, Footprints, Armchair, Watch, Glasses, Shield } from 'lucide-react';
import { FLIPKART_CATEGORIES } from '../data/products';

const CATEGORY_ICONS = {
  all: Sparkles,
  footwear: Footprints,
  furniture: Armchair,
  watches: Watch,
  eyewear: Glasses,
  tech: Shield,
};

/**
 * Authentic Flipkart Navbar with Search, 3D Studio Badge, Categories, and Cart
 */
export default function FlipkartHeader({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  cartCount,
  onOpenCart,
}) {
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#2874f0] shadow-md select-none">
      {/* Top Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-14 flex items-center justify-between gap-3 sm:gap-6">
        {/* Brand Logo & Explore Plus */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-white font-extrabold italic text-xl sm:text-2xl tracking-tight leading-none">
                Flipkart
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#ffe500] text-[#2874f0] shadow-sm">
                3D
              </span>
            </div>
            <a
              href="#explore"
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-0.5 text-[10px] text-white/90 hover:underline italic font-medium -mt-0.5"
            >
              <span>Explore</span>
              <span className="text-[#ffe500] font-bold not-italic">Plus</span>
              <span className="text-[#ffe500] font-bold text-xs">✦</span>
            </a>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl relative">
          <div className="flex items-center bg-white rounded-sm shadow-sm overflow-hidden px-3 py-1.5 sm:py-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search for 3D products, brands, or categories..."
              className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
            />
            <Search className="w-4 h-4 text-[#2874f0] shrink-0 ml-1" />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {/* Sign In / Account */}
          <div className="relative">
            <button
              onClick={() => setShowAccountMenu((prev) => !prev)}
              className="hidden md:flex items-center gap-1.5 px-3 py-1 bg-white text-[#2874f0] font-semibold text-xs rounded-sm hover:bg-slate-50 transition cursor-pointer shadow-sm"
            >
              <User className="w-3.5 h-3.5" />
              <span>Login</span>
              <ChevronDown className="w-3 h-3 ml-0.5 text-slate-500" />
            </button>

            {showAccountMenu && (
              <div className="absolute right-0 top-9 w-48 bg-white text-slate-800 rounded-sm shadow-xl p-2 z-50 border border-slate-200 text-xs">
                <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between font-semibold">
                  <span>Welcome to Flipkart</span>
                  <span className="text-[#2874f0] text-[10px]">3D AR</span>
                </div>
                <button
                  onClick={() => setShowAccountMenu(false)}
                  className="w-full text-left px-3 py-2 hover:bg-slate-50 rounded-sm text-slate-700"
                >
                  My Profile
                </button>
                <button
                  onClick={() => setShowAccountMenu(false)}
                  className="w-full text-left px-3 py-2 hover:bg-slate-50 rounded-sm text-slate-700"
                >
                  Flipkart Plus Zone ✦
                </button>
                <button
                  onClick={() => setShowAccountMenu(false)}
                  className="w-full text-left px-3 py-2 hover:bg-slate-50 rounded-sm text-slate-700"
                >
                  Orders & Wishlist
                </button>
              </div>
            )}
          </div>

          {/* Become a Seller */}
          <span className="hidden lg:inline text-xs font-semibold text-white cursor-pointer hover:underline">
            Become a Seller
          </span>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-white font-semibold text-xs sm:text-sm hover:text-[#ffe500] transition cursor-pointer relative"
          >
            <div className="relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#ff6161] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#2874f0] shadow-sm animate-pulse">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden sm:inline">Cart</span>
          </button>
        </div>
      </div>

      {/* Category Ribbon */}
      <div className="bg-[#1259cb] border-t border-white/10 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 flex items-center gap-1 sm:gap-2 py-1.5 text-xs text-white/90">
          {FLIPKART_CATEGORIES.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.id] || Sparkles;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition cursor-pointer ${
                  isActive
                    ? 'bg-[#ffe500] text-[#1259cb] font-bold shadow-sm'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#1259cb]' : 'text-white/80'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
