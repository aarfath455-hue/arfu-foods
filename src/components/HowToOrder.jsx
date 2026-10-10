import React from 'react';
import { BookOpen, PhoneCall, HeartHandshake } from 'lucide-react';
import { businessInfo } from '../data/business';

export default function HowToOrder() {
  const icons = [
    <BookOpen className="w-5 h-5 text-limeAccent" />,
    <PhoneCall className="w-5 h-5 text-limeAccent" />,
    <HeartHandshake className="w-5 h-5 text-limeAccent" />,
  ];

  return (
    <section id="how-to-order" className="py-24 bg-forest-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-limeAccent font-bold">
            Transparent & Simple
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-5xl text-cream mt-2 mb-3 uppercase tracking-tight">
            How to Order
          </h2>
          <p className="text-sm text-cream/70 font-light">
            No complicated online checkout. Connect directly with our kitchen to place your order.
          </p>
          <div className="w-12 h-0.5 bg-limeAccent mx-auto mt-4" />
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessInfo.orderSteps.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              className="forest-card rounded-3xl p-8 flex flex-col items-center text-center group border border-white/10"
            >
              <div className="w-14 h-14 rounded-2xl bg-forest-900 border border-white/15 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:border-limeAccent/40 transition-all duration-300">
                {icons[idx]}
              </div>

              <span className="text-xs font-bold text-limeAccent uppercase tracking-widest mb-2 block font-mono">
                Step {stepItem.step}
              </span>

              <h3 className="font-serif text-xl font-bold text-cream mb-2">
                {stepItem.title}
              </h3>

              <p className="text-xs sm:text-sm text-cream/70 font-light leading-relaxed">
                {stepItem.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
