import React from 'react';
import { ArrowDown, MessageCircle, Sparkles, UtensilsCrossed, FileText } from 'lucide-react';
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
      className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 lg:pb-24 overflow-hidden transition-colors duration-300"
    >
      {/* Amber Lantern Lighting Node (Directly behind Hero) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] lg:w-[850px] h-[300px] sm:h-[500px] bg-gradient-radial from-amberGlow/20 via-gold/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Brand Story & CTAs (Spans 7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            
            {/* Pill Tag with Antique Gold Border */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/10 dark:bg-forest-900/80 border border-gold/40 text-gold-700 dark:text-gold text-xs font-bold uppercase tracking-widest mb-5 shadow-sm backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-gold animate-amber-breathe" />
              <span>Ooty's Authentic Homestyle Kitchen</span>
            </div>

            {/* Exact Hero Headline */}
            <h1 className="font-serif font-black text-3.5xl sm:text-5xl lg:text-6.5xl tracking-tight text-wood-950 dark:text-cream-50 leading-[1.08] mb-4">
              Homemade Goodness. <br className="hidden sm:inline" />
              <span className="italic font-normal text-gold-600 dark:text-gold">
                Authentic Taste.
              </span>
            </h1>

            {/* Exact Supporting Text */}
            <p className="text-base sm:text-lg text-wood-800/80 dark:text-cream-200/80 max-w-xl font-normal leading-relaxed mb-8">
              Freshly prepared favourites for your stay in Ooty.
            </p>

            {/* Action Buttons: Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              
              {/* Primary CTA: Explore Our Menu */}
              <button
                onClick={scrollToMenu}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-forest-900 dark:bg-gold text-cream-50 dark:text-forest-950 hover:bg-forest-800 dark:hover:bg-gold-400 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-3d-card-light dark:shadow-gold-rim transition-all active:scale-[0.98] min-h-[48px] focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <span>Explore Our Menu</span>
                <ArrowDown className="w-4 h-4 text-gold dark:text-forest-950" />
              </button>

              {/* Secondary CTA: Order on WhatsApp */}
              <button
                onClick={() => onOpenContact('whatsapp')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1b7a43] hover:bg-[#25D366] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-whatsapp-glow border border-gold/40 hover:border-gold transition-all active:scale-[0.98] min-h-[48px] focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Order on WhatsApp</span>
              </button>

            </div>

            {/* Quick Menu Card Poster Link */}
            <div className="mt-4 text-xs text-wood-700/80 dark:text-cream-300/80 flex items-center gap-1.5">
              <span>Looking for the printed menu?</span>
              <a
                href="#menu-card"
                className="text-gold-700 dark:text-gold font-bold hover:underline inline-flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5 text-gold" />
                <span>View Menu Card Poster →</span>
              </a>
            </div>

            {/* Highlights Strip */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-10 pt-6 border-t border-wood-800/10 dark:border-white/10 w-full max-w-lg">
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-serif font-bold text-lg sm:text-xl text-wood-950 dark:text-cream-50">100%</span>
                <span className="text-[11px] sm:text-xs text-wood-700/70 dark:text-cream-300/70 uppercase tracking-wide">Homemade</span>
              </div>
              <div className="flex flex-col items-center lg:items-start border-x border-wood-800/10 dark:border-white/10 px-2">
                <span className="font-serif font-bold text-lg sm:text-xl text-wood-950 dark:text-cream-50">Fresh</span>
                <span className="text-[11px] sm:text-xs text-wood-700/70 dark:text-cream-300/70 uppercase tracking-wide">Cooked Daily</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-serif font-bold text-lg sm:text-xl text-wood-950 dark:text-cream-50">Direct</span>
                <span className="text-[11px] sm:text-xs text-wood-700/70 dark:text-cream-300/70 uppercase tracking-wide">WhatsApp Line</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D-Inspired Layered Food Showcase (Spans 5 cols on desktop) */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6 sm:py-10 perspective-1000">
            
            {/* Main Featured Dish Charger / Platter */}
            <div className="relative w-64 sm:w-80 lg:w-96 aspect-square rounded-full p-2.5 bg-gradient-to-tr from-gold/40 via-gold/15 to-transparent dark:from-gold/50 dark:via-forest-900/60 dark:to-transparent border-2 border-gold/50 shadow-3d-card hover:shadow-3d-card-hover transition-transform duration-500 hover:scale-[1.02] animate-plate-float">
              
              {/* Inner Charger Rim */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-inner bg-wood-900 dark:bg-forest-950 border border-gold/30">
                <img
                  src="/assets/food/chicken-biryani.jpg"
                  alt="Signature Homestyle Chicken Biriyani"
                  className="w-full h-full object-cover rounded-full"
                  loading="eager"
                  width="400"
                  height="400"
                />
                
                {/* Dramatic Vignette */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/55 via-transparent to-black/10 pointer-events-none" />
              </div>

              {/* Gentle Steam Rising Above Main Plate */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none flex items-center justify-center">
                <div className="w-8 h-14 bg-white/20 rounded-full filter blur-md animate-steam-gentle-1 -mr-2" />
                <div className="w-10 h-16 bg-white/15 rounded-full filter blur-lg animate-steam-gentle-2" />
              </div>

              {/* Centerpiece Dish Badge - Bottom Floating Overlay */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-cream-50/95 dark:bg-forest-900/95 border border-gold/50 rounded-full py-1.5 px-4 shadow-xl backdrop-blur-md flex items-center gap-2 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-badge-nonveg" />
                <span className="font-serif font-bold text-xs sm:text-sm text-wood-950 dark:text-cream-50">
                  Chicken Biriyani
                </span>
                <span className="text-gold-700 dark:text-gold text-xs font-bold font-mono">
                  ₹1,200
                </span>
              </div>
            </div>

            {/* Satellite Dish 1: Crispy Dosa (Top Left Accent) */}
            <div className="absolute -top-3 left-2 sm:-left-4 lg:-left-6 w-24 sm:w-32 aspect-square rounded-full p-1 bg-cream-50/90 dark:bg-forest-900/90 border border-gold/40 shadow-xl backdrop-blur-md hidden xs:block">
              <div className="w-full h-full rounded-full overflow-hidden border border-gold/20">
                <img
                  src="/assets/food/dosa.jpg"
                  alt="Crispy Roast Dosa"
                  className="w-full h-full object-cover"
                  loading="eager"
                  width="130"
                  height="130"
                />
              </div>
              <div className="absolute -bottom-2 right-0 bg-gold text-forest-950 text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                ₹44
              </div>
            </div>

            {/* Satellite Dish 2: Paneer Butter Masala (Bottom Right Accent) */}
            <div className="absolute bottom-2 right-2 sm:-right-4 lg:-right-6 w-24 sm:w-32 aspect-square rounded-full p-1 bg-cream-50/90 dark:bg-forest-900/90 border border-gold/40 shadow-xl backdrop-blur-md hidden xs:block">
              <div className="w-full h-full rounded-full overflow-hidden border border-gold/20">
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
