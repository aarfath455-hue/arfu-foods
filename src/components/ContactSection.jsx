import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/business';

export default function ContactSection({ onOpenContact }) {
  return (
    <section id="contact" className="py-20 sm:py-32 border-t border-wood-800/10 dark:border-gold/20 bg-cream-50/80 dark:bg-forest-950 relative overflow-hidden text-center transition-colors duration-200">
      
      {/* Ambient background amber lantern glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(245,158,11,0.18)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/10 dark:bg-forest-900/80 border border-gold/40 text-gold-700 dark:text-gold text-xs font-bold tracking-widest uppercase mb-5">
          <Sparkles className="w-3.5 h-3.5 text-gold animate-amber-breathe" />
          <span>Direct Kitchen Ordering</span>
        </div>

        {/* Dramatic Headline */}
        <h2 className="font-serif font-black text-4xl sm:text-6xl lg:text-7xl text-wood-950 dark:text-cream-50 tracking-tight uppercase leading-[0.95] mb-3">
          Feeling <br />
          <span className="text-gold-600 dark:text-gold italic font-normal">Hungry?</span>
        </h2>

        {/* Subtitle */}
        <p className="font-serif italic text-lg sm:text-2xl text-wood-800/80 dark:text-cream-200/80 max-w-lg mx-auto mb-10">
          "Fresh homestyle food for your cottage, stay, or gathering in Ooty."
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto mb-14">
          {/* CALL */}
          <button
            onClick={() => onOpenContact('call')}
            className="w-full sm:w-1/2 py-4 px-6 rounded-full bg-forest-900 dark:bg-gold text-cream-50 dark:text-forest-950 font-bold text-xs uppercase tracking-wider shadow-3d-card-light dark:shadow-gold-rim active:scale-95 transition-all flex items-center justify-center gap-2 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <Phone className="w-4 h-4 fill-current text-gold dark:text-forest-950" />
            <span>Call Now</span>
          </button>

          {/* WHATSAPP */}
          <button
            onClick={() => onOpenContact('whatsapp')}
            className="w-full sm:w-1/2 py-4 px-6 rounded-full bg-[#1b7a43] hover:bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-whatsapp-glow border border-gold/40 hover:border-gold active:scale-95 transition-all flex items-center justify-center gap-2 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp Order</span>
          </button>
        </div>

        {/* Dual Primary Phone Cards (Both Clickable, Zero Address) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto text-left">
          
          {/* Primary Line 1: 9442791057 */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white/95 dark:bg-forest-900/90 border border-wood-800/10 dark:border-gold/30 hover:border-gold/60 shadow-3d-card-light dark:shadow-3d-card flex flex-col justify-between transition-all">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold-700 dark:text-gold block mb-1">
                Order Line 1
              </span>
              <p className="font-serif font-bold text-xl sm:text-2xl text-wood-950 dark:text-cream-50 mb-4">
                {businessInfo.phone1.display}
              </p>
            </div>
            <div className="flex items-center gap-2.5 pt-3.5 border-t border-wood-800/10 dark:border-white/10">
              <a
                href={businessInfo.phone1.tel}
                className="flex-1 py-2.5 px-3 rounded-2xl bg-cream-200/80 hover:bg-cream-300 dark:bg-forest-950 dark:hover:bg-forest-850 text-wood-950 dark:text-cream-50 text-xs font-bold text-center inline-flex items-center justify-center gap-1.5 transition-colors border border-wood-800/10 dark:border-gold/30 min-h-[44px]"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>Call Line</span>
              </a>
              <a
                href={businessInfo.phone1.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-2xl bg-[#1b7a43]/15 hover:bg-[#1b7a43]/30 dark:bg-[#25D366]/20 text-[#128C7E] dark:text-[#25D366] text-xs font-bold text-center inline-flex items-center justify-center gap-1.5 transition-colors border border-[#25D366]/40 min-h-[44px]"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Primary Line 2: 9585991057 */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white/95 dark:bg-forest-900/90 border border-wood-800/10 dark:border-gold/30 hover:border-gold/60 shadow-3d-card-light dark:shadow-3d-card flex flex-col justify-between transition-all">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold-700 dark:text-gold block mb-1">
                Order Line 2
              </span>
              <p className="font-serif font-bold text-xl sm:text-2xl text-wood-950 dark:text-cream-50 mb-4">
                {businessInfo.phone2.display}
              </p>
            </div>
            <div className="flex items-center gap-2.5 pt-3.5 border-t border-wood-800/10 dark:border-white/10">
              <a
                href={businessInfo.phone2.tel}
                className="flex-1 py-2.5 px-3 rounded-2xl bg-cream-200/80 hover:bg-cream-300 dark:bg-forest-950 dark:hover:bg-forest-850 text-wood-950 dark:text-cream-50 text-xs font-bold text-center inline-flex items-center justify-center gap-1.5 transition-colors border border-wood-800/10 dark:border-gold/30 min-h-[44px]"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>Call Line</span>
              </a>
              <a
                href={businessInfo.phone2.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-2xl bg-[#1b7a43]/15 hover:bg-[#1b7a43]/30 dark:bg-[#25D366]/20 text-[#128C7E] dark:text-[#25D366] text-xs font-bold text-center inline-flex items-center justify-center gap-1.5 transition-colors border border-[#25D366]/40 min-h-[44px]"
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
