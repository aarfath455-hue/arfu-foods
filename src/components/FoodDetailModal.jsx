import React, { useEffect } from 'react';
import { X, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { businessInfo, getItemWhatsAppUrl } from '../data/business';

export default function FoodDetailModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const whatsappUrlLine1 = getItemWhatsAppUrl(item, businessInfo.phone1.number);
  const whatsappUrlLine2 = getItemWhatsAppUrl(item, businessInfo.phone2.number);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.name} details and order`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-cream-50 dark:bg-charcoal-900 rounded-3xl overflow-hidden shadow-2xl border border-gold/30 dark:border-white/15 text-cocoa-900 dark:text-cream-50 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 dark:bg-charcoal-850/80 hover:bg-white dark:hover:bg-charcoal-800 text-cocoa-900 dark:text-cream-50 flex items-center justify-center shadow-lg border border-gold/30 dark:border-white/20 transition-transform hover:scale-110 active:scale-95"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Food Image Container */}
        <div className="relative h-60 sm:h-72 w-full bg-cream-200 dark:bg-charcoal-950 flex-shrink-0 overflow-hidden">
          <img
            src={item.image}
            alt={item.alt || item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream-50/60 dark:from-charcoal-900/80 via-transparent to-transparent" />

          {/* Badges Overlay */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-md border ${
                item.isVeg
                  ? 'bg-cream-50/90 dark:bg-charcoal-900/90 text-[#25D366] border-[#25D366]/40'
                  : 'bg-cream-50/90 dark:bg-charcoal-900/90 text-badge-nonveg border-badge-nonveg/40'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  item.isVeg ? 'bg-badge-veg' : 'bg-badge-nonveg'
                }`}
              />
              <span>{item.isVeg ? 'VEGETARIAN' : 'NON-VEG'}</span>
            </span>

            {item.isFeatured && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-gold/20 text-gold-700 dark:text-gold border border-gold/40 backdrop-blur-md">
                <Sparkles className="w-3 h-3" />
                <span>POPULAR</span>
              </span>
            )}
          </div>
        </div>

        {/* Dish Info & Direct Order Actions */}
        <div className="p-6 sm:p-7 overflow-y-auto flex-1">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cocoa-900 dark:text-cream-50">
                {item.name}
              </h3>
              {item.quantity && (
                <span className="text-xs uppercase tracking-widest font-semibold text-gold-700 dark:text-gold mt-1 block">
                  Portion: {item.quantity}
                </span>
              )}
            </div>
            <div>
              <span className="font-serif text-3xl font-black text-gold-600 dark:text-gold">
                ₹{item.price}
              </span>
            </div>
          </div>

          {item.description && (
            <p className="text-xs sm:text-sm text-cocoa-700/80 dark:text-cream-300/80 leading-relaxed mb-6 font-normal">
              {item.description}
            </p>
          )}

          {/* Direct WhatsApp Ordering on Both Lines */}
          <div className="space-y-2.5 pt-4 border-t border-cocoa-800/10 dark:border-white/10">
            <div className="text-[11px] font-bold uppercase tracking-widest text-gold-700 dark:text-gold mb-1">
              Order this dish directly on WhatsApp:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href={whatsappUrlLine1}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#25D366]/15 hover:bg-[#25D366] text-cocoa-900 dark:text-cream-50 hover:text-white font-bold text-xs uppercase tracking-wider border border-[#25D366]/40 transition-all active:scale-95 group min-h-[48px]"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 fill-current text-[#25D366] group-hover:text-white" />
                  <span>Line 1: {businessInfo.phone1.display}</span>
                </div>
                <span className="text-[11px] font-medium text-cocoa-600 dark:text-cream-300 group-hover:text-white">Order →</span>
              </a>

              <a
                href={whatsappUrlLine2}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#25D366]/15 hover:bg-[#25D366] text-cocoa-900 dark:text-cream-50 hover:text-white font-bold text-xs uppercase tracking-wider border border-[#25D366]/40 transition-all active:scale-95 group min-h-[48px]"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 fill-current text-[#25D366] group-hover:text-white" />
                  <span>Line 2: {businessInfo.phone2.display}</span>
                </div>
                <span className="text-[11px] font-medium text-cocoa-600 dark:text-cream-300 group-hover:text-white">Order →</span>
              </a>
            </div>

            {/* Direct Phone Call Alternative */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-3 text-xs text-cocoa-700/70 dark:text-cream-300/60 gap-1.5">
              <span>Prefer to call directly?</span>
              <div className="flex gap-3">
                <a
                  href={businessInfo.phone1.tel}
                  className="hover:text-gold-700 dark:hover:text-gold font-semibold underline underline-offset-2 flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-gold-600 dark:text-gold" /> {businessInfo.phone1.display}
                </a>
                <span>•</span>
                <a
                  href={businessInfo.phone2.tel}
                  className="hover:text-gold-700 dark:hover:text-gold font-semibold underline underline-offset-2 flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-gold-600 dark:text-gold" /> {businessInfo.phone2.display}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
