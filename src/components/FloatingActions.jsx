import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions({ onOpenContact }) {
  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5 pointer-events-auto"
    >
      {/* Quick Call Button (48px minimum touch target) */}
      <button
        onClick={() => onOpenContact('call')}
        className="w-12 h-12 rounded-full bg-cream-50 dark:bg-charcoal-850 text-cocoa-900 dark:text-cream-50 border border-gold/40 shadow-card-light dark:shadow-card-dark hover:scale-105 active:scale-95 transition-all flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-gold"
        title="Call ARFU Kitchen"
        aria-label="Call kitchen"
      >
        <Phone className="w-4 h-4 text-gold-600 dark:text-gold group-hover:scale-110 transition-transform" />
      </button>

      {/* Primary WhatsApp Action Pill (48px minimum touch target) */}
      <button
        onClick={() => onOpenContact('whatsapp')}
        className="inline-flex items-center gap-2 px-4 py-3 min-h-[48px] rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all group focus:outline-none focus:ring-2 focus:ring-[#25D366]"
        title="Order via WhatsApp"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
        <span className="font-semibold">WhatsApp</span>
      </button>
    </aside>
  );
}
