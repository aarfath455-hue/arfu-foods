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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-forest-950/90 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-forest-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-forest-950/80 hover:bg-forest-950 text-cream flex items-center justify-center shadow-lg border border-white/20 transition-transform hover:scale-110 active:scale-95"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Food Image Container */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full bg-forest-950 overflow-hidden">
          <img
            src={item.image}
            alt={item.alt || item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/20 to-transparent" />

          {/* Badges Overlay */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-md border ${
                item.isVeg
                  ? 'bg-forest-950/85 text-limeAccent border-limeAccent/40'
                  : 'bg-forest-950/85 text-terracotta border-terracotta/40'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  item.isVeg ? 'bg-limeAccent' : 'bg-terracotta'
                }`}
              />
              <span>{item.isVeg ? 'VEGETARIAN' : 'NON-VEG'}</span>
            </span>

            {item.isFeatured && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-limeAccent/20 text-limeAccent border border-limeAccent/40 backdrop-blur-md">
                <Sparkles className="w-3 h-3" />
                <span>CHEF'S PICK</span>
              </span>
            )}
          </div>
        </div>

        {/* Dish Info & Direct Order Actions */}
        <div className="p-6 sm:p-8 bg-forest-900">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-4">
            <div>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-cream">
                {item.name}
              </h3>
              {item.quantity && (
                <span className="text-xs uppercase tracking-widest font-semibold text-limeAccent mt-1 block">
                  Portion: {item.quantity}
                </span>
              )}
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-black text-limeAccent">
                ₹{item.price}
              </span>
            </div>
          </div>

          {item.description && (
            <p className="text-xs sm:text-sm text-cream/75 leading-relaxed mb-6 font-light">
              {item.description}
            </p>
          )}

          {/* Direct WhatsApp Ordering on Both Lines */}
          <div className="space-y-2.5 pt-4 border-t border-white/10">
            <div className="text-[11px] font-bold uppercase tracking-widest text-cream/50 mb-2">
              Order this dish directly on WhatsApp:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href={whatsappUrlLine1}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#25D366]/20 hover:bg-[#25D366] text-cream hover:text-white font-bold text-xs uppercase tracking-wider border border-[#25D366]/40 transition-all active:scale-95 group"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 fill-current text-limeAccent group-hover:text-white" />
                  <span>Line 1: {businessInfo.phone1.display}</span>
                </div>
                <span className="text-[10px] text-cream/60 group-hover:text-white">Order →</span>
              </a>

              <a
                href={whatsappUrlLine2}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#25D366]/20 hover:bg-[#25D366] text-cream hover:text-white font-bold text-xs uppercase tracking-wider border border-[#25D366]/40 transition-all active:scale-95 group"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 fill-current text-limeAccent group-hover:text-white" />
                  <span>Line 2: {businessInfo.phone2.display}</span>
                </div>
                <span className="text-[10px] text-cream/60 group-hover:text-white">Order →</span>
              </a>
            </div>

            {/* Direct Phone Call Alternative */}
            <div className="flex items-center justify-between pt-3 text-[11px] text-cream/50">
              <span>Prefer to call directly?</span>
              <div className="flex gap-3">
                <a
                  href={businessInfo.phone1.tel}
                  className="hover:text-limeAccent font-serif underline underline-offset-2 flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" /> {businessInfo.phone1.display}
                </a>
                <span>•</span>
                <a
                  href={businessInfo.phone2.tel}
                  className="hover:text-limeAccent font-serif underline underline-offset-2 flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" /> {businessInfo.phone2.display}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
