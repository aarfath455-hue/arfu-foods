import React, { useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { getItemWhatsAppUrl } from '../data/business';

export default function ImageLightbox({ item, onClose }) {
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

  const whatsappUrl = getItemWhatsAppUrl(item);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.name} details`}
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
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-forest-950/80 hover:bg-forest-950 text-cream flex items-center justify-center shadow-lg border border-white/20 transition-transform hover:scale-110 active:scale-95"
          aria-label="Close preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Food Image */}
        <div className="relative h-72 sm:h-96 w-full bg-forest-950 overflow-hidden">
          <img
            src={item.image}
            alt={item.alt || item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
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
          </div>
        </div>

        {/* Dish Info & Direct Order Action */}
        <div className="p-6 sm:p-8 bg-forest-900 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream">
                {item.name}
              </h3>
              {item.quantity && (
                <span className="text-xs uppercase tracking-widest font-semibold text-limeAccent mt-1 block">
                  Portion: {item.quantity}
                </span>
              )}
            </div>
            <div className="text-left sm:text-right">
              <span className="font-serif text-3xl font-bold text-limeAccent">
                ₹{item.price}
              </span>
            </div>
          </div>

          {item.description && (
            <p className="text-sm text-cream/70 leading-relaxed mb-6 font-light">
              {item.description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-widest shadow-md active:scale-95 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>WhatsApp to Order (₹{item.price})</span>
            </a>
            <button
              onClick={onClose}
              className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-cream font-semibold text-xs uppercase tracking-widest transition-colors border border-white/10"
            >
              Back to Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
