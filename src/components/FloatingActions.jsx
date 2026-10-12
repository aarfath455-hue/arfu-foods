import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions({ onOpenContact }) {
  return (
    <aside
      aria-label="Quick kitchen contact"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5 pointer-events-auto"
    >
      {/* Quick Call Button (48px touch target) */}
      <button
        onClick={() => onOpenContact('call')}
        className="w-12 h-12 rounded-full bg-cream-50 dark:bg-forest-900 text-wood-950 dark:text-cream-50 border border-gold/40 shadow-3d-card-light dark:shadow-3d-card hover:scale-105 active:scale-95 transition-all flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-gold"
        title="Call ARFU Kitchen"
        aria-label="Call kitchen"
      >
        <Phone className="w-4.5 h-4.5 text-gold-700 dark:text-gold group-hover:scale-110 transition-transform" />
      </button>

      {/* Primary WhatsApp Action Pill (48px touch target) with Antique Gold Rim */}
      <button
        onClick={() => onOpenContact('whatsapp')}
        className="inline-flex items-center gap-2 px-4 py-3 min-h-[48px] rounded-full bg-[#1b7a43] hover:bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#1b7a43]/30 hover:shadow-whatsapp-glow border border-gold/50 hover:border-gold hover:scale-105 active:scale-95 transition-all group focus:outline-none focus:ring-2 focus:ring-gold"
        title="Order via WhatsApp"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle className="w-4.5 h-4.5 fill-current group-hover:scale-110 transition-transform" />
        <span className="font-semibold">WhatsApp</span>
      </button>
    </aside>
  );
}
