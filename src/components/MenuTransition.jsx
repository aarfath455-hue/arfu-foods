import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function MenuTransition() {
  return (
    <section
      id="menu-intro"
      className="py-24 sm:py-32 bg-forest-950 border-t border-white/10 relative overflow-hidden text-center"
    >
      {/* Subtle Environmental Backdrop Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(25,48,34,0.35)_0%,_transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Editorial Section Number */}
        <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-limeAccent font-bold block mb-4">
          01 — THE DIGITAL MENU
        </span>

        {/* Large Typography: EXPLORE THE MENU */}
        <h2 className="font-serif font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-cream tracking-tight uppercase leading-[0.88] select-none mb-6">
          EXPLORE <br />
          <span className="font-normal italic text-cream/90">THE MENU</span>
        </h2>

        {/* Subtitle: "Freshly prepared favourites, made with love." */}
        <p className="font-editorial italic text-xl sm:text-2xl md:text-3xl text-cream/80 max-w-lg mx-auto leading-relaxed">
          "Freshly prepared favourites, made with love."
        </p>

        {/* Subtle Indicator */}
        <div className="w-10 h-0.5 bg-limeAccent/60 mx-auto mt-8" />
      </div>
    </section>
  );
}
