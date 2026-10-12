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
    <section id="why-us" className="py-16 sm:py-24 border-t border-cocoa-800/10 dark:border-white/10 bg-cream-50 dark:bg-charcoal-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-gold-600 dark:text-gold font-bold">
            Honest Homestyle Hospitality
          </span>
          <h2 className="font-serif font-black text-2xl sm:text-4xl text-cocoa-900 dark:text-cream-50 mt-2 mb-3 tracking-tight">
            Why Choose ARFU?
          </h2>
          <p className="text-sm text-cocoa-700/80 dark:text-cream-200/80 font-normal leading-relaxed">
            Authentic South Indian recipes cooked fresh with care for your stay in Ooty.
          </p>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
        </div>

        {/* 4 Truthful Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {businessInfo.benefits.map((item, idx) => (
            <div
              key={item.title}
              className="bg-white dark:bg-charcoal-800/80 rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col items-start border border-cocoa-800/10 dark:border-white/10 hover:border-gold/50 shadow-card-light dark:shadow-card-dark transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-cream-100 dark:bg-charcoal-900 border border-gold/30 flex items-center justify-center mb-5 shadow-sm">
                {icons[idx]}
              </div>

              <h3 className="font-serif text-base sm:text-lg font-bold text-cocoa-900 dark:text-cream-50 mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-cocoa-800/75 dark:text-cream-300/75 font-normal leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
