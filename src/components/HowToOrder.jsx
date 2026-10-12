import React from 'react';
import { BookOpen, PhoneCall, HeartHandshake } from 'lucide-react';
import { businessInfo } from '../data/business';

export default function HowToOrder() {
  const icons = [
    <BookOpen className="w-5 h-5 text-gold" />,
    <PhoneCall className="w-5 h-5 text-gold" />,
    <HeartHandshake className="w-5 h-5 text-gold" />,
  ];

  return (
    <section id="how-to-order" className="py-20 sm:py-28 border-t border-wood-800/10 dark:border-gold/20 bg-cream-100/70 dark:bg-forest-950/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-18">
          <span className="text-xs uppercase tracking-widest text-gold-700 dark:text-gold font-bold">
            Transparent & Simple
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-5xl text-wood-950 dark:text-cream-50 mt-2 mb-3 tracking-tight">
            How to Order
          </h2>
          <p className="text-sm sm:text-base text-wood-800/80 dark:text-cream-200/80 font-normal">
            No complicated apps or online checkout. Connect directly with our kitchen to place your order.
          </p>
          <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {businessInfo.orderSteps.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              className="bg-white/95 dark:bg-forest-900/90 rounded-3xl p-7 sm:p-8 flex flex-col items-center text-center border border-wood-800/10 dark:border-gold/30 shadow-3d-card-light dark:shadow-3d-card hover:border-gold/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-cream-200/80 dark:bg-forest-950 border border-gold/40 flex items-center justify-center mb-5 shadow-sm">
                {icons[idx]}
              </div>

              <span className="text-xs font-bold text-gold-700 dark:text-gold uppercase tracking-widest mb-1.5 block font-mono">
                Step {stepItem.step}
              </span>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-wood-950 dark:text-cream-50 mb-2">
                {stepItem.title}
              </h3>

              <p className="text-xs sm:text-sm text-wood-800/75 dark:text-cream-300/75 font-normal leading-relaxed">
                {stepItem.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
