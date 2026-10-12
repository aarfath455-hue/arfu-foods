import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/business';

export default function ContactSection({ onOpenContact }) {
  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-cocoa-800/10 dark:border-white/10 bg-cream-50 dark:bg-charcoal-900 relative overflow-hidden text-center transition-colors duration-200">
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(197,160,89,0.12)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200/80 dark:bg-charcoal-800/80 border border-gold/30 text-gold-700 dark:text-gold text-xs font-bold tracking-wider uppercase mb-5">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>Direct Kitchen Ordering</span>
        </div>

        {/* Dramatic Headline */}
        <h2 className="font-serif font-black text-4xl sm:text-6xl lg:text-7xl text-cocoa-900 dark:text-cream-50 tracking-tight uppercase leading-[0.95] mb-3">
          Feeling <br />
          <span className="text-gold-600 dark:text-gold italic font-normal">Hungry?</span>
        </h2>

        {/* Subtitle */}
        <p className="font-serif italic text-lg sm:text-2xl text-cocoa-700/80 dark:text-cream-200/80 max-w-lg mx-auto mb-10">
          "Fresh homestyle food for your cottage, stay, or gathering in Ooty."
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto mb-12">
          {/* CALL */}
          <button
            onClick={() => onOpenContact('call')}
            className="w-full sm:w-1/2 py-4 px-6 rounded-full bg-cocoa-900 dark:bg-gold text-cream-50 dark:text-charcoal-950 font-bold text-xs uppercase tracking-wider shadow-card-light dark:shadow-gold-glow active:scale-95 transition-all flex items-center justify-center gap-2 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <Phone className="w-4 h-4 fill-current text-gold dark:text-charcoal-950" />
            <span>Call Now</span>
          </button>

          {/* WHATSAPP */}
          <button
            onClick={() => onOpenContact('whatsapp')}
            className="w-full sm:w-1/2 py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-whatsapp-glow active:scale-95 transition-all flex items-center justify-center gap-2 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-[#25D366]"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp Order</span>
          </button>
        </div>

        {/* Dual Primary Phone Cards (Both Clickable, Zero Address) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
          
          {/* Primary Line 1: 9442791057 */}
          <div className="p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-charcoal-850 border border-cocoa-800/10 dark:border-white/10 hover:border-gold/50 shadow-card-light dark:shadow-card-dark flex flex-col justify-between transition-all">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold-600 dark:text-gold block mb-1">
                Order Line 1
              </span>
              <p className="font-serif font-bold text-xl sm:text-2xl text-cocoa-900 dark:text-cream-50 mb-4">
                {businessInfo.phone1.display}
              </p>
            </div>
            <div className="flex items-center gap-2 pt-3 border-t border-cocoa-800/10 dark:border-white/10">
              <a
                href={businessInfo.phone1.tel}
                className="flex-1 py-2.5 px-3 rounded-xl bg-cream-100 hover:bg-cream-200 dark:bg-charcoal-800 dark:hover:bg-charcoal-700 text-cocoa-900 dark:text-cream-50 text-xs font-bold text-center inline-flex items-center justify-center gap-1.5 transition-colors border border-cocoa-800/10 dark:border-white/10 min-h-[44px]"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>Call Line</span>
              </a>
              <a
                href={businessInfo.phone1.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 dark:bg-[#25D366]/20 text-[#25D366] text-xs font-bold text-center inline-flex items-center justify-center gap-1.5 transition-colors border border-[#25D366]/30 min-h-[44px]"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Primary Line 2: 9585991057 */}
          <div className="p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-charcoal-850 border border-cocoa-800/10 dark:border-white/10 hover:border-gold/50 shadow-card-light dark:shadow-card-dark flex flex-col justify-between transition-all">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold-600 dark:text-gold block mb-1">
                Order Line 2
              </span>
              <p className="font-serif font-bold text-xl sm:text-2xl text-cocoa-900 dark:text-cream-50 mb-4">
                {businessInfo.phone2.display}
              </p>
            </div>
            <div className="flex items-center gap-2 pt-3 border-t border-cocoa-800/10 dark:border-white/10">
              <a
                href={businessInfo.phone2.tel}
                className="flex-1 py-2.5 px-3 rounded-xl bg-cream-100 hover:bg-cream-200 dark:bg-charcoal-800 dark:hover:bg-charcoal-700 text-cocoa-900 dark:text-cream-50 text-xs font-bold text-center inline-flex items-center justify-center gap-1.5 transition-colors border border-cocoa-800/10 dark:border-white/10 min-h-[44px]"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>Call Line</span>
              </a>
              <a
                href={businessInfo.phone2.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 dark:bg-[#25D366]/20 text-[#25D366] text-xs font-bold text-center inline-flex items-center justify-center gap-1.5 transition-colors border border-[#25D366]/30 min-h-[44px]"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
