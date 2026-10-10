import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions({ onOpenContact }) {
  return (
    <>
      {/* ============================================================ */}
      {/* DESKTOP FLOATING ACTION (Bottom Right, Minimal Glass Pill)   */}
      {/* ============================================================ */}
      <aside aria-label="Quick contact" className="hidden md:block fixed bottom-6 right-6 z-30">
        <button
          onClick={() => onOpenContact('whatsapp')}
          data-cursor="ORDER"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-forest-900/80 hover:bg-[#25D366] text-cream hover:text-white font-medium text-xs uppercase tracking-widest border border-white/20 hover:border-transparent backdrop-blur-md shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group"
          title="Order via WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5 text-limeAccent group-hover:text-white fill-current transition-colors" />
          <span>WHATSAPP →</span>
        </button>
      </aside>

      {/* ============================================================ */}
      {/* MOBILE STICKY BOTTOM BAR (Sleek Minimal CALL | WHATSAPP)      */}
      {/* ============================================================ */}
      <nav 
        aria-label="Mobile quick actions" 
        className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-forest-950/90 backdrop-blur-xl border-t border-white/10 px-4 py-2.5"
      >
        <div className="flex items-center gap-2.5 max-w-sm mx-auto">
          {/* CALL Button */}
          <button
            onClick={() => onOpenContact('call')}
            className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-cream font-medium text-xs uppercase tracking-wider active:scale-95 transition-all border border-white/15"
          >
            <Phone className="w-3.5 h-3.5 text-limeAccent fill-current" />
            <span>CALL</span>
          </button>

          {/* WHATSAPP Button */}
          <button
            onClick={() => onOpenContact('whatsapp')}
            className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366] text-cream hover:text-white font-bold text-xs uppercase tracking-wider border border-[#25D366]/40 active:scale-95 transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current text-limeAccent" />
            <span>WHATSAPP →</span>
          </button>
        </div>
      </nav>
    </>
  );
}
