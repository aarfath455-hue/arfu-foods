import React from 'react';
import { Phone, MessageCircle, Sparkles, ArrowUpRight } from 'lucide-react';
import { businessInfo } from '../data/business';

export default function ContactSection({ onOpenContact }) {
  return (
    <section id="contact" className="py-28 sm:py-36 bg-forest-900 border-t border-white/10 relative overflow-hidden text-center">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(159,232,112,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/15 text-limeAccent text-xs font-bold tracking-widest uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Direct Kitchen Kitchen Connection</span>
        </div>

        {/* Dramatic Oversized Headline */}
        <h2 className="font-serif font-black text-6xl sm:text-8xl md:text-9xl text-cream tracking-tighter-dramatic leading-[0.85] uppercase mb-4 select-none">
          FEELING <br />
          <span className="text-limeAccent italic font-normal">HUNGRY?</span>
        </h2>

        {/* Subtitle */}
        <p className="font-editorial italic text-2xl sm:text-3xl text-cream/80 max-w-lg mx-auto mb-12">
          "Let's make something delicious."
        </p>

        {/* Large Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-14">
          {/* CALL */}
          <button
            onClick={() => onOpenContact('call')}
            data-cursor="ORDER"
            className="w-full sm:w-1/2 py-5 px-8 rounded-full bg-limeAccent hover:bg-limeAccent-400 text-forest-950 font-black text-xs uppercase tracking-widest shadow-glow-lime active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>CALL NOW</span>
          </button>

          {/* WHATSAPP */}
          <button
            onClick={() => onOpenContact('whatsapp')}
            data-cursor="ORDER"
            className="w-full sm:w-1/2 py-5 px-8 rounded-full bg-white/10 hover:bg-[#25D366] text-cream hover:text-white font-bold text-xs uppercase tracking-widest border border-white/20 hover:border-transparent active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current text-limeAccent group-hover:text-white" />
            <span>WHATSAPP</span>
          </button>
        </div>

        {/* Dual Primary Phone Cards (Both Clickable, Zero Address) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
          {/* Primary Line 1 */}
          <div className="p-6 sm:p-7 rounded-3xl bg-forest-950/80 border border-white/10 hover:border-limeAccent/40 shadow-xl flex flex-col justify-between transition-all">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-limeAccent/80 block mb-1">
                Primary Kitchen Line 1
              </span>
              <p className="font-serif font-bold text-xl sm:text-2xl text-cream mb-4">
                {businessInfo.phone1.display}
              </p>
            </div>
            <div className="flex items-center gap-2 pt-3 border-t border-white/10">
              <a
                href={businessInfo.phone1.tel}
                className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/15 text-cream text-xs font-bold text-center inline-flex items-center justify-center gap-1.5 transition-colors border border-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-limeAccent" />
                <span>Call Line</span>
              </a>
              <a
                href={businessInfo.phone1.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="ORDER"
                className="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] text-xs font-bold text-center inline-flex items-center justify-center gap-1.5 transition-colors border border-[#25D366]/40"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Primary Line 2 */}
          <div className="p-6 sm:p-7 rounded-3xl bg-forest-950/80 border border-white/10 hover:border-limeAccent/40 shadow-xl flex flex-col justify-between transition-all">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-limeAccent/80 block mb-1">
                Primary Kitchen Line 2
              </span>
              <p className="font-serif font-bold text-xl sm:text-2xl text-cream mb-4">
                {businessInfo.phone2.display}
              </p>
            </div>
            <div className="flex items-center gap-2 pt-3 border-t border-white/10">
              <a
                href={businessInfo.phone2.tel}
                className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/15 text-cream text-xs font-bold text-center inline-flex items-center justify-center gap-1.5 transition-colors border border-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-limeAccent" />
                <span>Call Line</span>
              </a>
              <a
                href={businessInfo.phone2.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="ORDER"
                className="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] text-xs font-bold text-center inline-flex items-center justify-center gap-1.5 transition-colors border border-[#25D366]/40"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
