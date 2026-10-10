import React, { useState } from 'react';
import { MessageCircle, Maximize2, UtensilsCrossed } from 'lucide-react';
import { getItemWhatsAppUrl } from '../data/business';

export default function MenuCard({ item, onOpenPreview }) {
  const [imgError, setImgError] = useState(false);
  const whatsappUrl = getItemWhatsAppUrl(item);

  return (
    <article className="forest-card rounded-3xl overflow-hidden flex flex-col group border border-white/10 hover:border-limeAccent/40 transition-all duration-300">
      
      {/* Real Food Image with Click for Detail Modal */}
      <div 
        className="relative h-60 sm:h-64 w-full overflow-hidden bg-forest-900 cursor-pointer"
        onClick={() => onOpenPreview(item)}
        data-cursor="VIEW"
        title="Tap to view photo"
      >
        {!imgError ? (
          <img
            src={item.image}
            alt={item.alt || `${item.name} dish`}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-cream/40 bg-forest-900">
            <UtensilsCrossed className="w-10 h-10 mb-2 stroke-1 text-limeAccent/60" />
            <span className="text-xs uppercase tracking-widest font-serif text-cream/60">
              ARFU Homemade Special
            </span>
          </div>
        )}

        {/* Ambient Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/25 to-transparent opacity-75 group-hover:opacity-45 transition-opacity" />

        {/* Top Badges: Veg/Non-Veg */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-md backdrop-blur-md border ${
              item.isVeg
                ? 'bg-forest-950/85 text-limeAccent border-limeAccent/40'
                : 'bg-forest-950/85 text-terracotta border-terracotta/40'
            }`}
          >
            {item.isVeg ? (
              <span className="w-2 h-2 rounded-full bg-limeAccent" aria-hidden="true" />
            ) : (
              <span className="w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-b-[7px] border-b-terracotta" aria-hidden="true" />
            )}
            <span>{item.isVeg ? 'VEG' : 'NON-VEG'}</span>
          </span>
        </div>

        {/* Tap/Click Zoom Icon Hint */}
        <div className="absolute bottom-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="p-2 rounded-full bg-forest-950/80 text-limeAccent border border-white/20 shadow-sm flex items-center justify-center backdrop-blur-md">
            <Maximize2 className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* FOOD NAME (Large, high-contrast) */}
          <h3 className="font-serif font-bold text-2xl text-cream group-hover:text-limeAccent transition-colors uppercase tracking-tight leading-snug">
            {item.name}
          </h3>

          {/* QUANTITY (Small uppercase) */}
          {item.quantity && (
            <span className="text-[11px] uppercase tracking-widest font-semibold text-limeAccent/80 block mt-1 mb-2 font-mono">
              {item.quantity}
            </span>
          )}

          {/* Short Description */}
          {item.description && (
            <p className="text-xs sm:text-sm text-cream/70 line-clamp-2 font-light leading-relaxed mb-6">
              {item.description}
            </p>
          )}
        </div>

        {/* Bottom Area: High Contrast PRICE & WHATSAPP → */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-cream/40 block">
              PRICE
            </span>
            <span className="font-serif text-2xl sm:text-3xl font-black text-cream">
              ₹{item.price}
            </span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="ORDER"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-cream hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-[#25D366]/40 hover:border-[#25D366] active:scale-95 group/btn shadow-sm"
            title={`Order ${item.name} on WhatsApp`}
          >
            <MessageCircle className="w-3.5 h-3.5 text-limeAccent group-hover/btn:text-white fill-current transition-colors" />
            <span>WHATSAPP →</span>
          </a>
        </div>

      </div>
    </article>
  );
}
