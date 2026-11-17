import React from 'react';
import { X, CheckCircle2, ShieldCheck, ShoppingCart, ArrowRight, Sparkles, Trash2 } from 'lucide-react';

/**
 * Flipkart Cart & Checkout Drawer Modal
 */
export default function FlipkartCartModal({
  isOpen,
  onClose,
  product,
  partColors,
  onPlaceOrder,
}) {
  if (!isOpen || !product) return null;

  const originalTotal = product.originalPrice;
  const discountTotal = product.originalPrice - product.price;
  const finalPrice = product.price;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-in select-none">
      <div className="glass-panel w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-slate-700 bg-[#0e1422] flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-[#2874f0] text-white flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2.5">
            <ShoppingCart className="w-5 h-5 text-[#ffe500]" />
            <h2 className="text-base sm:text-lg font-bold">Flipkart 3D Cart</h2>
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-medium">1 Item</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          {/* Item Card */}
          <div className="bg-slate-900/60 border border-white/5 rounded-xl p-4 flex flex-col sm:flex-row items-start gap-4">
            <div className="w-16 h-16 rounded-lg bg-[#2874f0]/10 border border-[#2874f0]/30 flex items-center justify-center shrink-0">
              <span className="text-2xl">📦</span>
            </div>

            <div className="flex-1 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#2874f0]/20 text-[#2874f0] border border-[#2874f0]/30">
                  {product.brand}
                </span>
                {product.fAssured && (
                  <span className="f-assured-badge">
                    <span>f</span>Assured<span className="f-assured-plus">✦</span>
                  </span>
                )}
              </div>

              <h3 className="text-sm font-bold text-white leading-snug">{product.name}</h3>

              {/* Customized 3D colors summary */}
              <div className="pt-1 flex flex-wrap items-center gap-2">
                <span className="text-[11px] text-slate-400">Custom Finishes:</span>
                {product.parts.map((part) => {
                  const hex = partColors[part.id] || part.defaultColor;
                  return (
                    <span
                      key={part.id}
                      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-200"
                    >
                      <span className="w-2.5 h-2.5 rounded-full border border-white/30" style={{ backgroundColor: hex }} />
                      <span>{part.name}: {hex.toUpperCase()}</span>
                    </span>
                  );
                })}
              </div>

              {/* Price Row */}
              <div className="flex items-baseline gap-2 pt-1 font-mono">
                <span className="text-lg font-bold text-white">₹{finalPrice.toLocaleString('en-IN')}</span>
                <span className="text-xs text-slate-400 line-through">₹{originalTotal.toLocaleString('en-IN')}</span>
                <span className="text-xs font-bold text-[#388e3c]">{product.discount}</span>
              </div>
            </div>
          </div>

          {/* Delivery Address Pill */}
          <div className="bg-slate-900/40 border border-white/5 rounded-xl p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">Deliver to: Customer, 400001</span>
                <span className="text-[11px] text-slate-400">Nariman Point, Mumbai • {product.delivery}</span>
              </div>
            </div>
            <button className="text-xs text-[#2874f0] font-semibold hover:underline cursor-pointer">
              Change
            </button>
          </div>

          {/* Price Details Breakdown */}
          <div className="bg-slate-900/50 border border-white/5 rounded-xl p-4 space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block border-b border-white/5 pb-2">
              Price Details
            </span>

            <div className="flex justify-between text-slate-300">
              <span>Price (1 item)</span>
              <span className="font-mono">₹{originalTotal.toLocaleString('en-IN')}</span>
            </div>

            <div className="flex justify-between text-[#388e3c]">
              <span>Discount</span>
              <span className="font-mono">- ₹{discountTotal.toLocaleString('en-IN')}</span>
            </div>

            <div className="flex justify-between text-slate-300">
              <span>Delivery Charges</span>
              <span className="text-[#388e3c] font-semibold">FREE</span>
            </div>

            <div className="flex justify-between text-slate-300">
              <span>Secured Packaging Fee</span>
              <span className="font-mono">₹29</span>
            </div>

            <div className="border-t border-white/10 pt-2.5 flex justify-between text-sm font-bold text-white">
              <span>Total Amount</span>
              <span className="font-mono text-base text-[#ffe500]">
                ₹{(finalPrice + 29).toLocaleString('en-IN')}
              </span>
            </div>

            <div className="text-[11px] text-[#388e3c] font-semibold flex items-center gap-1 pt-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>You will save ₹{discountTotal.toLocaleString('en-IN')} on this order</span>
            </div>
          </div>

          {/* Safe & Secure Guarantee */}
          <div className="flex items-center justify-center gap-2 text-slate-400 text-[11px] pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Safe and Secure Payments • 100% Authentic 3D Verified Products</span>
          </div>
        </div>

        {/* Footer Checkout Button */}
        <div className="p-4 bg-slate-950/80 border-t border-white/10 flex items-center justify-between">
          <div className="flex flex-col font-mono">
            <span className="text-[11px] text-slate-400">Total Payable</span>
            <span className="text-lg font-extrabold text-white">
              ₹{(finalPrice + 29).toLocaleString('en-IN')}
            </span>
          </div>

          <button
            onClick={onPlaceOrder}
            className="btn-flipkart-buy px-8 py-3 rounded-lg flex items-center gap-2 text-xs sm:text-sm font-bold uppercase cursor-pointer"
          >
            <span>Place Order</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
