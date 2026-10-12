import React, { useState, useRef, useCallback } from 'react';
import { MessageCircle, Maximize2, UtensilsCrossed, Sparkles } from 'lucide-react';
import { getItemWhatsAppUrl } from '../data/business';

export default function MenuCard({ item, onOpenPreview }) {
  const [imgError, setImgError] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, isHovered: false });
  const cardRef = useRef(null);

  const whatsappUrl = getItemWhatsAppUrl(item);

  // Desktop 3D Tilt calculation (smooth and lightweight)
  const handleMouseMove = useCallback((e) => {
    // Skip if on touch device
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Max 7 degrees tilt to keep it subtle & elegant
    const rotateX = -((y - centerY) / centerY) * 7;
    const rotateY = ((x - centerX) / centerX) * 7;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({
      rotateX: Math.max(-7, Math.min(7, rotateX)),
      rotateY: Math.max(-7, Math.min(7, rotateY)),
      glareX,
      glareY,
      isHovered: true,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({
      rotateX: 0,
      rotateY: 0,
      glareX: 50,
      glareY: 50,
      isHovered: false,
    });
  }, []);

  return (
    <div className="perspective-1000">
      <article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: tilt.isHovered
            ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(-6px)`
            : 'rotateX(0deg) rotateY(0deg) translateY(0px)',
          transition: tilt.isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
        className="group relative rounded-3xl overflow-hidden flex flex-col preserve-3d bg-white/95 dark:bg-forest-900/90 border border-wood-800/10 dark:border-gold/30 hover:border-gold/60 dark:hover:border-gold shadow-3d-card-light dark:shadow-3d-card hover:shadow-3d-card-light-hover dark:hover:shadow-3d-card-hover transition-all duration-300 active:scale-[0.98]"
      >
        {/* Dynamic Specular Glare Effect on Desktop */}
        {tilt.isHovered && (
          <div
            className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300 rounded-3xl"
            style={{
              background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(197, 160, 89, 0.18) 0%, transparent 60%)`,
            }}
          />
        )}

        {/* Real Food Image with 3D Depth */}
        <div
          className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200 dark:bg-forest-950 cursor-pointer"
          onClick={() => onOpenPreview(item)}
          title={`Tap to view photo of ${item.name}`}
          style={{ transform: 'translateZ(12px)' }}
        >
          {!imgError ? (
            <img
              src={item.image}
              alt={item.alt || `${item.name} dish`}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              width="400"
              height="300"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-wood-700/60 dark:text-cream-300/60 bg-cream-200 dark:bg-forest-950">
              <UtensilsCrossed className="w-8 h-8 mb-2 stroke-1 text-gold" />
              <span className="text-xs uppercase tracking-wider font-serif">
                ARFU Homemade Special
              </span>
            </div>
          )}

          {/* Dramatic Vignette & Ambient Rim */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/75 via-transparent to-black/20 pointer-events-none" />

          {/* Top-Left Veg / Non-Veg Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-2" style={{ transform: 'translateZ(24px)' }}>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-md backdrop-blur-md border ${
                item.isVeg
                  ? 'bg-cream-50/95 dark:bg-forest-950/90 text-badge-veg border-badge-veg/40'
                  : 'bg-cream-50/95 dark:bg-forest-950/90 text-badge-nonveg border-badge-nonveg/40'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  item.isVeg ? 'bg-badge-veg shadow-sm' : 'bg-badge-nonveg shadow-sm'
                }`}
                aria-hidden="true"
              />
              <span>{item.isVeg ? 'Veg' : 'Non-Veg'}</span>
            </span>

            {item.isSignature && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-gold/20 text-gold-700 dark:text-gold border border-gold/40 backdrop-blur-md shadow-sm">
                <Sparkles className="w-2.5 h-2.5" />
                <span>Special</span>
              </span>
            )}
          </div>

          {/* Top-Right Tap to Expand Icon */}
          <div
            className="absolute top-3 right-3 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200"
            style={{ transform: 'translateZ(20px)' }}
          >
            <span className="p-2 rounded-full bg-black/60 text-white shadow-sm flex items-center justify-center backdrop-blur-md hover:bg-gold hover:text-charcoal-950 transition-colors">
              <Maximize2 className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Content Area with Elevation */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between" style={{ transform: 'translateZ(18px)' }}>
          <div>
            {/* Dish Name */}
            <h3 className="font-serif font-bold text-lg sm:text-xl text-wood-950 dark:text-cream-50 group-hover:text-gold-700 dark:group-hover:text-gold transition-colors leading-snug">
              {item.name}
            </h3>

            {/* Serving Size / Quantity */}
            {item.quantity && (
              <span className="text-[11px] sm:text-xs font-semibold text-gold-700 dark:text-gold/90 block mt-0.5 mb-2 font-mono uppercase tracking-wide">
                {item.quantity}
              </span>
            )}

            {/* Short Description */}
            {item.description && (
              <p className="text-xs text-wood-800/80 dark:text-cream-300/75 line-clamp-2 leading-relaxed mb-4 font-normal">
                {item.description}
              </p>
            )}
          </div>

          {/* Bottom Bar: Price & Premium WhatsApp Order Action */}
          <div className="pt-3.5 border-t border-wood-800/10 dark:border-white/10 flex items-center justify-between gap-3">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-wood-700/60 dark:text-cream-300/60 block">
                Price
              </span>
              <span className="font-serif text-xl sm:text-2xl font-black text-wood-950 dark:text-cream-50">
                ₹{Number(item.price).toLocaleString('en-IN')}
              </span>
            </div>

            {/* Premium Emerald Green WhatsApp Order Button with Gold Accents */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#1b7a43] hover:bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-whatsapp-glow border border-gold/50 hover:border-gold active:scale-95 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-gold"
              title={`Order ${item.name} on WhatsApp`}
              aria-label={`Order ${item.name} on WhatsApp for rupees ${item.price}`}
            >
              <MessageCircle className="w-4 h-4 fill-current text-white" />
              <span>Order</span>
            </a>
          </div>

        </div>
      </article>
    </div>
  );
}
