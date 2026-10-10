import React from 'react';
import { ArrowDown, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/business';
import { allMenuItems } from '../data/menu';

export default function Hero({ onOpenContact, onOpenPreview }) {
  // Select items for floating pill panels
  const biryaniItem = allMenuItems.find((i) => i.id === 'nv-6') || allMenuItems[0];
  const chickenFryItem = allMenuItems.find((i) => i.id === 'nv-1') || allMenuItems[1];
  const dosaItem = allMenuItems.find((i) => i.id === 'bf-4') || allMenuItems[2];
  const idlyItem = allMenuItems.find((i) => i.id === 'bf-1') || allMenuItems[3];
  const muttonBiryaniItem = allMenuItems.find((i) => i.id === 'nv-5') || allMenuItems[4];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-forest-950">
      
      {/* ============================================================ */}
      {/* 1. CINEMATIC HEAVILY BLURRED REAL FOOD BACKGROUND             */}
      {/* ============================================================ */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/assets/food/chicken-biryani.jpg"
          alt="Cinematic homemade feast background"
          className="w-full h-full object-cover object-center scale-110 filter blur-xl saturate-50 brightness-40 opacity-45"
        />
        {/* Radial vignette & dark forest gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-forest-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#060F0A_80%)]" />
      </div>

      {/* ============================================================ */}
      {/* 2. MAIN EDITORIAL CONTENT & DRAMATIC OVERSIZED TYPOGRAPHY   */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full my-auto py-8">
        
        {/* Top/Center: Official Brand Logo with Subtle Halo */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative group">
            <div className="absolute -inset-3 bg-limeAccent/20 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-b from-white/40 to-white/10 shadow-2xl flex items-center justify-center backdrop-blur-md">
              <div className="w-full h-full rounded-full overflow-hidden bg-forest-900 flex items-center justify-center">
                <img
                  src={businessInfo.logo}
                  onError={(e) => {
                    e.currentTarget.src = '/assets/logo.svg';
                  }}
                  alt="ARFU HOMEMADE FOODS Logo"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          <span className="font-editorial italic text-xs sm:text-sm text-limeAccent tracking-widest mt-3">
            "{businessInfo.tagline}"
          </span>
        </div>

        {/* Oversized Controlled-Asymmetry Editorial Typography */}
        <div className="text-center max-w-5xl mx-auto mb-10">
          <div className="inline-block">
            <h1 className="font-serif font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter-dramatic text-cream leading-[0.9] uppercase select-none">
              ARFU
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-center sm:gap-6 mt-1 sm:mt-2">
              <span className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-limeAccent tracking-tight uppercase">
                HOMEMADE
              </span>
              <span className="font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl text-cream/80 tracking-tight">
                FOODS
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-base text-cream/70 max-w-lg mx-auto mt-5 font-light tracking-wide leading-relaxed">
            Freshly prepared traditional South Indian recipes & authentic homemade specialties, crafted for your order.
          </p>
        </div>

        {/* ============================================================ */}
        {/* 3. FLOATING HORIZONTAL PILL-SHAPED FOOD IMAGE PANELS         */}
        {/* ============================================================ */}
        <div className="relative my-8 sm:my-12 max-w-5xl mx-auto">
          
          {/* Desktop/Tablet Layout: Asymmetric Layered Floating Pills */}
          <div className="hidden sm:flex flex-col gap-4 relative">
            
            {/* Pill Panel 1: Left-aligned (Chicken Biryani) */}
            <div
              onClick={() => onOpenPreview(biryaniItem)}
              data-cursor="VIEW"
              className="pill-image-panel animate-float-1 self-start ml-2 sm:ml-8 max-w-md w-full p-2 pr-6 flex items-center gap-4 cursor-pointer group"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 border border-white/40">
                <img
                  src={biryaniItem.image}
                  alt={biryaniItem.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase font-bold tracking-widest text-limeAccent block">
                  Signature Specialty
                </span>
                <span className="font-serif font-bold text-base sm:text-lg text-cream truncate block">
                  {biryaniItem.name}
                </span>
              </div>
              <span className="font-serif text-base font-bold text-limeAccent">
                ₹{biryaniItem.price}
              </span>
            </div>

            {/* Pill Panel 2: Right-aligned (Crispy Chicken Fry) */}
            <div
              onClick={() => onOpenPreview(chickenFryItem)}
              data-cursor="VIEW"
              className="pill-image-panel animate-float-2 self-end mr-2 sm:mr-10 max-w-lg w-full p-2.5 pr-7 flex items-center gap-4 cursor-pointer group -mt-2 sm:-mt-4"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 border border-white/40">
                <img
                  src={chickenFryItem.image}
                  alt={chickenFryItem.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase font-bold tracking-widest text-terracotta block">
                  Kongu Country Roast
                </span>
                <span className="font-serif font-bold text-base sm:text-lg text-cream truncate block">
                  {chickenFryItem.name} (1 kg)
                </span>
              </div>
              <span className="font-serif text-base font-bold text-cream">
                ₹{chickenFryItem.price}
              </span>
            </div>

            {/* Pill Panel 3: Center-left aligned (Dosa & Idly Breakfast) */}
            <div
              onClick={() => onOpenPreview(dosaItem)}
              data-cursor="VIEW"
              className="pill-image-panel animate-float-1 self-center max-w-md w-full p-2 pr-6 flex items-center gap-4 cursor-pointer group -mt-1"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 border border-white/40">
                <img
                  src={dosaItem.image}
                  alt={dosaItem.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase font-bold tracking-widest text-limeAccent block">
                  Crispy Homestyle
                </span>
                <span className="font-serif font-bold text-base sm:text-lg text-cream truncate block">
                  Golden Roast Dosa
                </span>
              </div>
              <span className="font-serif text-base font-bold text-limeAccent">
                ₹{dosaItem.price}
              </span>
            </div>

          </div>

          {/* Mobile Layout: Horizontal Pill Slider */}
          <div className="sm:hidden flex overflow-x-auto no-scrollbar gap-3 px-2 py-2">
            {[biryaniItem, chickenFryItem, dosaItem, idlyItem, muttonBiryaniItem].map((item) => (
              <div
                key={`mobile-pill-${item.id}`}
                onClick={() => onOpenPreview(item)}
                className="pill-image-panel flex-shrink-0 w-64 p-2 pr-4 flex items-center gap-3 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border border-white/30">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-serif font-bold text-sm text-cream truncate block">
                    {item.name}
                  </span>
                  <span className="text-xs text-limeAccent font-bold">
                    ₹{item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* CTA Buttons & Direct Lines */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mt-6">
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-limeAccent hover:bg-limeAccent-400 text-forest-950 font-black text-xs uppercase tracking-widest shadow-glow-lime active:scale-95 transition-all text-center inline-flex items-center justify-center gap-2"
          >
            <span>EXPLORE MENU</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            onClick={() => onOpenContact('whatsapp')}
            data-cursor="ORDER"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 hover:border-limeAccent text-cream hover:text-limeAccent font-bold text-xs uppercase tracking-widest backdrop-blur-md active:scale-95 transition-all text-center inline-flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
            <span>WHATSAPP ORDER</span>
          </button>
        </div>

        {/* Kitchen Phone Lines (Both Clickable, Zero Address) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-cream/70">
          <span className="uppercase tracking-widest text-[10px] text-limeAccent/80">
            Direct Kitchen Lines:
          </span>
          <a
            href={businessInfo.phone1.tel}
            className="hover:text-limeAccent transition-colors font-semibold underline decoration-white/20 underline-offset-4"
          >
            {businessInfo.phone1.display}
          </a>
          <span className="text-white/20">•</span>
          <a
            href={businessInfo.phone2.tel}
            className="hover:text-limeAccent transition-colors font-semibold underline decoration-white/20 underline-offset-4"
          >
            {businessInfo.phone2.display}
          </a>
        </div>

      </div>

      {/* ============================================================ */}
      {/* 4. BOTTOM SCROLL INDICATOR                                   */}
      {/* ============================================================ */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center pt-4 pb-2">
        <a
          href="#menu-transition"
          className="group inline-flex flex-col items-center gap-2 text-[10px] uppercase tracking-ultra-wide text-cream/60 hover:text-limeAccent transition-colors"
        >
          <span>SCROLL TO EXPLORE</span>
          <div className="w-px h-8 bg-gradient-to-b from-limeAccent to-transparent animate-pulse" />
        </a>
      </div>

    </section>
  );
}
