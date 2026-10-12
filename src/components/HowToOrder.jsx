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
    <section id="how-to-order" className="py-16 sm:py-24 border-t border-cocoa-800/10 dark:border-white/10 bg-cream-100 dark:bg-charcoal-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-gold-600 dark:text-gold font-bold">
            Transparent & Simple
          </span>
          <h2 className="font-serif font-black text-2xl sm:text-4xl text-cocoa-900 dark:text-cream-50 mt-2 mb-3 tracking-tight">
            How to Order
          </h2>
          <p className="text-sm text-cocoa-700/80 dark:text-cream-200/80 font-normal">
            No complicated online checkout. Connect directly with our kitchen to place your order.
          </p>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {businessInfo.orderSteps.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              className="bg-white dark:bg-charcoal-850 rounded-2xl sm:rounded-3xl p-7 sm:p-8 flex flex-col items-center text-center border border-cocoa-800/10 dark:border-white/10 shadow-card-light dark:shadow-card-dark hover:border-gold/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-cream-100 dark:bg-charcoal-800 border border-gold/30 flex items-center justify-center mb-5 shadow-sm">
                {icons[idx]}
              </div>

              <span className="text-xs font-bold text-gold-600 dark:text-gold uppercase tracking-widest mb-1.5 block font-mono">
                Step {stepItem.step}
              </span>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-cocoa-900 dark:text-cream-50 mb-2">
                {stepItem.title}
              </h3>

              <p className="text-xs sm:text-sm text-cocoa-800/75 dark:text-cream-300/75 font-normal leading-relaxed">
                {stepItem.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
