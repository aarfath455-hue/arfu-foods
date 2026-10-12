import React from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { businessInfo } from '../data/business';

export default function ContactModal({ isOpen, onClose, mode = 'call' }) {
  if (!isOpen) return null;

  const isCall = mode === 'call';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Direct Kitchen Contact"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-sm rounded-3xl bg-cream-50 dark:bg-forest-900 border-2 border-gold/40 p-6 sm:p-7 shadow-2xl relative text-wood-950 dark:text-cream-50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-wood-700/60 dark:text-cream-300/60 hover:text-wood-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-3 shadow-md border ${
            isCall
              ? 'bg-gold/15 border-gold/40 text-gold-700 dark:text-gold'
              : 'bg-[#1b7a43]/15 border-gold/40 text-[#1b7a43] dark:text-[#25D366]'
          }`}>
            {isCall ? (
              <Phone className="w-6 h-6 fill-current animate-bounce" />
            ) : (
              <MessageCircle className="w-6 h-6 fill-current" />
            )}
          </div>
          <h3 className="font-serif font-black text-2xl uppercase tracking-tight">
            {isCall ? 'Call Kitchen' : 'WhatsApp Kitchen'}
          </h3>
          <p className="text-xs text-wood-700/80 dark:text-cream-300/80 mt-1 font-normal">
            Tap either active direct line below to place your order:
          </p>
        </div>

        {/* Both Primary Contact Lines */}
        <div className="space-y-3">
          {/* Primary Line 1 */}
          <a
            href={isCall ? businessInfo.phone1.tel : businessInfo.phone1.whatsappUrl}
            target={isCall ? '_self' : '_blank'}
            rel="noopener noreferrer"
            onClick={onClose}
            className={`w-full p-4 rounded-2xl border flex items-center justify-between transition-all group min-h-[56px] ${
              isCall
                ? 'bg-cream-100 dark:bg-forest-950 hover:bg-cream-200 dark:hover:bg-forest-850 border-gold/30 hover:border-gold'
                : 'bg-[#1b7a43]/10 hover:bg-[#1b7a43]/20 border-gold/30 hover:border-[#25D366]'
            }`}
          >
            <div className="text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold-700 dark:text-gold block">
                Primary Line 1
              </span>
              <span className="font-serif font-bold text-lg group-hover:text-gold-700 dark:group-hover:text-gold transition-colors">
                {businessInfo.phone1.display}
              </span>
            </div>
            <div className={`p-2.5 rounded-xl ${isCall ? 'bg-forest-900 dark:bg-gold text-cream-50 dark:text-forest-950' : 'bg-[#1b7a43] hover:bg-[#25D366] text-white'} shadow-sm border border-gold/40`}>
              {isCall ? <Phone className="w-4 h-4 fill-current" /> : <MessageCircle className="w-4 h-4 fill-current" />}
            </div>
          </a>

          {/* Primary Line 2 */}
          <a
            href={isCall ? businessInfo.phone2.tel : businessInfo.phone2.whatsappUrl}
            target={isCall ? '_self' : '_blank'}
            rel="noopener noreferrer"
            onClick={onClose}
            className={`w-full p-4 rounded-2xl border flex items-center justify-between transition-all group min-h-[56px] ${
              isCall
                ? 'bg-cream-100 dark:bg-forest-950 hover:bg-cream-200 dark:hover:bg-forest-850 border-gold/30 hover:border-gold'
                : 'bg-[#1b7a43]/10 hover:bg-[#1b7a43]/20 border-gold/30 hover:border-[#25D366]'
            }`}
          >
            <div className="text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold-700 dark:text-gold block">
                Primary Line 2
              </span>
              <span className="font-serif font-bold text-lg group-hover:text-gold-700 dark:group-hover:text-gold transition-colors">
                {businessInfo.phone2.display}
              </span>
            </div>
            <div className={`p-2.5 rounded-xl ${isCall ? 'bg-forest-900 dark:bg-gold text-cream-50 dark:text-forest-950' : 'bg-[#1b7a43] hover:bg-[#25D366] text-white'} shadow-sm border border-gold/40`}>
              {isCall ? <Phone className="w-4 h-4 fill-current" /> : <MessageCircle className="w-4 h-4 fill-current" />}
            </div>
          </a>
        </div>

        {/* Footer info */}
        <p className="text-[11px] text-center text-wood-700/60 dark:text-cream-300/60 mt-5 font-normal">
          Both lines are active. No online cart or payment needed — order directly.
        </p>
      </div>
    </div>
  );
}
