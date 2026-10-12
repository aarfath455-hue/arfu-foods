import React, { useState } from 'react';
import { MessageCircle, Maximize2, UtensilsCrossed } from 'lucide-react';
import { getItemWhatsAppUrl } from '../data/business';

export default function MenuCard({ item, onOpenPreview }) {
  const [imgError, setImgError] = useState(false);
  const whatsappUrl = getItemWhatsAppUrl(item);

  return (
    <article className="group bg-white dark:bg-charcoal-850 rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col border border-cocoa-800/10 dark:border-white/10 hover:border-gold/60 dark:hover:border-gold/60 shadow-card-light dark:shadow-card-dark hover:shadow-card-light-hover dark:hover:shadow-card-dark-hover transition-all duration-300">
      
      {/* Real Food Image with Click for Preview */}
      <div 
        className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200 dark:bg-charcoal-900 cursor-pointer"
        onClick={() => onOpenPreview(item)}
        title="Tap to view photo"
      >
        {!imgError ? (
          <img
            src={item.image}
            alt={item.alt || `${item.name} dish`}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            width="400"
            height="300"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-cocoa-700/60 dark:text-cream-300/60 bg-cream-200 dark:bg-charcoal-800">
            <UtensilsCrossed className="w-8 h-8 mb-2 stroke-1 text-gold" />
            <span className="text-xs uppercase tracking-wider font-serif">
              ARFU Homemade Special
            </span>
          </div>
        )}

        {/* Subtle Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

        {/* Top-Left Veg / Non-Veg Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-md backdrop-blur-md border ${
              item.isVeg
                ? 'bg-white/95 dark:bg-charcoal-950/90 text-badge-veg border-badge-veg/30'
                : 'bg-white/95 dark:bg-charcoal-950/90 text-badge-nonveg border-badge-nonveg/30'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                item.isVeg ? 'bg-badge-veg' : 'bg-badge-nonveg'
              }`}
              aria-hidden="true"
            />
            <span>{item.isVeg ? 'Veg' : 'Non-Veg'}</span>
          </span>
        </div>

        {/* Top-Right Tap to Expand Icon */}
        <div className="absolute top-3 right-3 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
          <span className="p-2 rounded-full bg-black/60 text-white shadow-sm flex items-center justify-center backdrop-blur-md hover:bg-gold hover:text-charcoal-950 transition-colors">
            <Maximize2 className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Dish Name */}
          <h3 className="font-serif font-bold text-lg sm:text-xl text-cocoa-900 dark:text-cream-50 group-hover:text-gold-600 dark:group-hover:text-gold transition-colors leading-snug">
            {item.name}
          </h3>

          {/* Serving Size / Quantity */}
          {item.quantity && (
            <span className="text-[11px] sm:text-xs font-semibold text-cocoa-700/70 dark:text-gold/90 block mt-0.5 mb-2 font-mono uppercase tracking-wide">
              {item.quantity}
            </span>
          )}

          {/* Short Description */}
          {item.description && (
            <p className="text-xs text-cocoa-800/80 dark:text-cream-300/75 line-clamp-2 leading-relaxed mb-4 font-normal">
              {item.description}
            </p>
          )}
        </div>

        {/* Bottom Bar: Price & Order Action */}
        <div className="pt-3.5 border-t border-cocoa-800/10 dark:border-white/10 flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-cocoa-700/60 dark:text-cream-300/60 block">
              Price
            </span>
            <span className="font-serif text-xl sm:text-2xl font-black text-cocoa-900 dark:text-cream-50">
              ₹{Number(item.price).toLocaleString('en-IN')}
            </span>
          </div>

          {/* WhatsApp Order Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-whatsapp-glow active:scale-95 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#25D366]"
            title={`Order ${item.name} on WhatsApp`}
            aria-label={`Order ${item.name} on WhatsApp for rupees ${item.price}`}
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Order</span>
          </a>
        </div>

      </div>
    </article>
  );
}
