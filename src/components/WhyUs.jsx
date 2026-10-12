import React from 'react';
import { UtensilsCrossed, Sparkles, Flame, MessageCircle } from 'lucide-react';
import { businessInfo } from '../data/business';

export default function WhyUs() {
  const icons = [
    <UtensilsCrossed className="w-5 h-5 text-gold" />,
    <Sparkles className="w-5 h-5 text-gold" />,
    <Flame className="w-5 h-5 text-gold" />,
    <MessageCircle className="w-5 h-5 text-[#25D366]" />,
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 border-t border-wood-800/10 dark:border-gold/20 bg-cream-50/70 dark:bg-forest-950/90 transition-colors duration-200 relative">
      {/* Subtle Amber Glow behind Why Us */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] bg-gradient-radial from-amberGlow/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <span className="text-xs uppercase tracking-widest text-gold-700 dark:text-gold font-bold">
            Honest Homestyle Hospitality
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-5xl text-wood-950 dark:text-cream-50 mt-2 mb-3 tracking-tight">
            Why Choose ARFU?
          </h2>
          <p className="text-sm sm:text-base text-wood-800/80 dark:text-cream-200/80 font-normal leading-relaxed">
            Authentic South Indian recipes cooked fresh with care and traditional hospitality for your stay in Ooty.
          </p>
          <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
        </div>

        {/* 4 Elevated 3D Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {businessInfo.benefits.map((item, idx) => (
            <div
              key={item.title}
              className="bg-white/95 dark:bg-forest-900/90 rounded-3xl p-6 sm:p-7 flex flex-col items-start border border-wood-800/10 dark:border-gold/30 hover:border-gold/60 shadow-3d-card-light dark:shadow-3d-card hover:shadow-3d-card-light-hover dark:hover:shadow-3d-card-hover transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-13 h-13 rounded-2xl bg-cream-200/80 dark:bg-forest-950 border border-gold/40 flex items-center justify-center mb-5 shadow-sm p-3 group-hover:scale-105 transition-transform">
                {icons[idx]}
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-wood-950 dark:text-cream-50 mb-2.5">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-wood-800/75 dark:text-cream-300/75 font-normal leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
