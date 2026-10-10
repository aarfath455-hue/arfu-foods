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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-sm rounded-3xl bg-forest-900 border border-white/20 p-6 sm:p-7 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-cream/60 hover:text-cream hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-3 shadow-md border ${
            isCall ? 'bg-white/5 border-limeAccent/30 text-limeAccent' : 'bg-[#25D366]/20 border-[#25D366]/40 text-[#25D366]'
          }`}>
            {isCall ? (
              <Phone className="w-6 h-6 fill-current animate-bounce" />
            ) : (
              <MessageCircle className="w-6 h-6 fill-current" />
            )}
          </div>
          <h3 className="font-serif font-black text-2xl text-cream uppercase tracking-tight">
            {isCall ? 'Call Kitchen' : 'WhatsApp Kitchen'}
          </h3>
          <p className="text-xs text-cream/70 mt-1 font-light">
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
            className={`w-full p-4 rounded-2xl border flex items-center justify-between transition-all group ${
              isCall
                ? 'bg-forest-950/80 hover:bg-forest-850 border-white/10 hover:border-limeAccent text-cream'
                : 'bg-[#25D366]/15 hover:bg-[#25D366]/25 border-[#25D366]/30 text-cream'
            }`}
          >
            <div className="text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-limeAccent/80 block">
                Primary Line 1
              </span>
              <span className="font-serif font-bold text-lg text-cream group-hover:text-limeAccent transition-colors">
                {businessInfo.phone1.display}
              </span>
            </div>
            <div className={`p-2.5 rounded-xl ${isCall ? 'bg-limeAccent text-forest-950' : 'bg-[#25D366] text-white'} shadow-sm`}>
              {isCall ? <Phone className="w-4 h-4 fill-current" /> : <MessageCircle className="w-4 h-4 fill-current" />}
            </div>
          </a>

          {/* Primary Line 2 */}
          <a
            href={isCall ? businessInfo.phone2.tel : businessInfo.phone2.whatsappUrl}
            target={isCall ? '_self' : '_blank'}
            rel="noopener noreferrer"
            onClick={onClose}
            className={`w-full p-4 rounded-2xl border flex items-center justify-between transition-all group ${
              isCall
                ? 'bg-forest-950/80 hover:bg-forest-850 border-white/10 hover:border-limeAccent text-cream'
                : 'bg-[#25D366]/15 hover:bg-[#25D366]/25 border-[#25D366]/30 text-cream'
            }`}
          >
            <div className="text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-limeAccent/80 block">
                Primary Line 2
              </span>
              <span className="font-serif font-bold text-lg text-cream group-hover:text-limeAccent transition-colors">
                {businessInfo.phone2.display}
              </span>
            </div>
            <div className={`p-2.5 rounded-xl ${isCall ? 'bg-limeAccent text-forest-950' : 'bg-[#25D366] text-white'} shadow-sm`}>
              {isCall ? <Phone className="w-4 h-4 fill-current" /> : <MessageCircle className="w-4 h-4 fill-current" />}
            </div>
          </a>
        </div>

        {/* Footer info */}
        <p className="text-[11px] text-center text-cream/40 mt-5 font-light">
          Both lines are active. No online cart or payment needed — order directly.
        </p>
      </div>
    </div>
  );
}
