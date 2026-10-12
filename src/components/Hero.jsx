import React from 'react';
import { ArrowDown, MessageCircle, Sparkles, UtensilsCrossed } from 'lucide-react';
import { businessInfo } from '../data/business';

export default function Hero({ onOpenContact }) {
  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 lg:pb-20 overflow-hidden transition-colors duration-200"
    >
      {/* Background Ambience Layer */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Soft Radial Ambient Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] lg:w-[900px] h-[340px] sm:h-[450px] bg-gold/10 dark:bg-gold/15 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-1/3 -right-20 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-cocoa-500/5 dark:bg-cocoa-700/20 rounded-full blur-2xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand Story & CTAs (Spans 7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Subtle Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200/80 dark:bg-charcoal-800/80 border border-gold/30 text-gold-700 dark:text-gold text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold animate-subtle-1" />
              <span>Ooty's Homestyle Kitchen</span>
            </div>

            {/* Exact Hero Headline */}
            <h1 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-cocoa-900 dark:text-cream-50 leading-[1.08] mb-3.5">
              Homemade Goodness. <br className="hidden sm:inline" />
              <span className="italic font-normal text-gold-600 dark:text-gold">
                Authentic Taste.
              </span>
            </h1>

            {/* Exact Supporting Text */}
            <p className="text-base sm:text-lg text-cocoa-800/80 dark:text-cream-200/80 max-w-xl font-normal leading-relaxed mb-6 sm:mb-8">
              Freshly prepared favourites for your stay in Ooty.
            </p>

            {/* Action Buttons: Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              
              {/* Primary CTA: Explore Our Menu */}
              <button
                onClick={scrollToMenu}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-cocoa-900 dark:bg-gold text-cream-50 dark:text-charcoal-950 hover:bg-cocoa-800 dark:hover:bg-gold-400 font-bold text-sm uppercase tracking-wider shadow-card-light dark:shadow-gold-glow transition-all active:scale-[0.98] min-h-[48px] focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <span>Explore Our Menu</span>
                <ArrowDown className="w-4 h-4 text-gold dark:text-charcoal-950" />
              </button>

              {/* Secondary CTA: Order on WhatsApp */}
              <button
                onClick={() => onOpenContact('whatsapp')}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm uppercase tracking-wider shadow-sm hover:shadow-whatsapp-glow transition-all active:scale-[0.98] min-h-[48px] focus:outline-none focus:ring-2 focus:ring-[#25D366]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Order on WhatsApp</span>
              </button>

            </div>

            {/* Highlights Strip */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-10 pt-6 border-t border-cocoa-800/10 dark:border-white/10 w-full max-w-lg">
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-serif font-bold text-lg sm:text-xl text-cocoa-900 dark:text-cream-50">100%</span>
                <span className="text-[11px] sm:text-xs text-cocoa-700/70 dark:text-cream-300/70 uppercase tracking-wide">Homemade</span>
              </div>
              <div className="flex flex-col items-center lg:items-start border-x border-cocoa-800/10 dark:border-white/10 px-2">
                <span className="font-serif font-bold text-lg sm:text-xl text-cocoa-900 dark:text-cream-50">Fresh</span>
                <span className="text-[11px] sm:text-xs text-cocoa-700/70 dark:text-cream-300/70 uppercase tracking-wide">Cooked Daily</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-serif font-bold text-lg sm:text-xl text-cocoa-900 dark:text-cream-50">Direct</span>
                <span className="text-[11px] sm:text-xs text-cocoa-700/70 dark:text-cream-300/70 uppercase tracking-wide">WhatsApp Line</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D-Inspired Layered Food Showcase (Spans 5 cols on desktop) */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-4 sm:py-6">
            
            {/* Main Featured Dish Plate (Layer 1 - Center) */}
            <div className="relative w-64 sm:w-80 lg:w-96 aspect-square rounded-full p-2 bg-gradient-to-tr from-gold/30 via-gold/10 to-transparent dark:from-gold/40 dark:via-charcoal-800/40 border border-gold/40 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              
              {/* Inner Plate */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-inner bg-cream-200 dark:bg-charcoal-850">
                <img
                  src="/assets/food/chicken-biryani.jpg"
                  alt="Signature Homestyle Chicken Biryani"
                  className="w-full h-full object-cover rounded-full"
                  loading="eager"
                  width="400"
                  height="400"
                />
                
                {/* Soft Radial Vignette */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Gentle Steam Rising Above Main Plate */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none flex items-center justify-center">
                <div className="w-8 h-14 bg-white/25 rounded-full filter blur-md animate-steam-gentle-1 -mr-2" />
                <div className="w-10 h-16 bg-white/20 rounded-full filter blur-lg animate-steam-gentle-2" />
              </div>

              {/* Dish Badge - Bottom Overlay */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-cream-50/95 dark:bg-charcoal-900/95 border border-gold/40 rounded-full py-1.5 px-4 shadow-lg backdrop-blur-md flex items-center gap-2 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-badge-nonveg" />
                <span className="font-serif font-bold text-xs sm:text-sm text-cocoa-900 dark:text-cream-50">
                  Chicken Biryani
                </span>
                <span className="text-gold-600 dark:text-gold text-xs font-bold">
                  ₹1,200
                </span>
              </div>
            </div>

            {/* Floating Satellite Dish 1: Crispy Dosa (Top Left Accent) */}
            <div className="absolute -top-2 left-2 sm:-left-4 lg:-left-8 w-24 sm:w-32 aspect-square rounded-full p-1 bg-cream-50/90 dark:bg-charcoal-850/90 border border-gold/40 shadow-xl backdrop-blur-md animate-subtle-1 hidden xs:block">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="/assets/food/dosa.jpg"
                  alt="Crispy Roast Dosa"
                  className="w-full h-full object-cover"
                  loading="eager"
                  width="130"
                  height="130"
                />
              </div>
              <div className="absolute -bottom-2 right-0 bg-gold text-charcoal-950 text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                ₹44
              </div>
            </div>

            {/* Floating Satellite Dish 2: Paneer Butter Masala (Bottom Right Accent) */}
            <div className="absolute bottom-4 right-2 sm:-right-4 lg:-right-6 w-24 sm:w-32 aspect-square rounded-full p-1 bg-cream-50/90 dark:bg-charcoal-850/90 border border-gold/40 shadow-xl backdrop-blur-md animate-subtle-2 hidden xs:block">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="/assets/food/paneer-butter-masala.jpg"
                  alt="Creamy Paneer Butter Masala"
                  className="w-full h-full object-cover"
                  loading="eager"
                  width="130"
                  height="130"
                />
              </div>
              <div className="absolute -top-2 left-0 bg-badge-veg text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                Veg
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
