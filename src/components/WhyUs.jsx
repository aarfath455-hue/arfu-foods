import React from 'react';
import { Leaf, Flame, Heart, Clock } from 'lucide-react';
import { businessInfo } from '../data/business';

export default function WhyUs() {
  const iconList = [
    <Leaf className="w-5 h-5 text-limeAccent" />,
    <Flame className="w-5 h-5 text-terracotta" />,
    <Heart className="w-5 h-5 text-terracotta" />,
    <Clock className="w-5 h-5 text-limeAccent" />,
  ];

  return (
    <section id="why-us" className="py-24 bg-forest-900 border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-limeAccent font-bold">
            Our Kitchen Standard
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-5xl text-cream mt-2 mb-3 uppercase tracking-tight">
            Why Choose ARFU?
          </h2>
          <p className="text-sm text-cream/70 font-light">
            Every dish is prepared using authentic small-batch homemade methods with fresh, selected ingredients.
          </p>
          <div className="w-12 h-0.5 bg-limeAccent mx-auto mt-4" />
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessInfo.highlights.map((item, idx) => (
            <div
              key={item.title}
              className="forest-card rounded-3xl p-7 flex flex-col items-start border border-white/10 hover:border-limeAccent/30 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-forest-950 border border-white/15 flex items-center justify-center mb-5">
                {iconList[idx]}
              </div>

              <h3 className="font-serif text-lg font-bold text-cream mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-cream/70 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
