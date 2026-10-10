import React from 'react';
import { Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { businessInfo } from '../data/business';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 border-t border-white/10 text-cream/70 pt-20 pb-32 md:pb-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/30 bg-forest-900 flex-shrink-0">
                <img
                  src={businessInfo.logo}
                  onError={(e) => {
                    e.currentTarget.src = '/assets/logo.svg';
                  }}
                  alt="ARFU HOMEMADE FOODS Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-cream tracking-wide block uppercase">
                  {businessInfo.name}
                </span>
                <span className="font-editorial text-xs text-limeAccent italic block">
                  "{businessInfo.tagline}"
                </span>
              </div>
            </div>

            <p className="text-xs text-cream/60 max-w-sm font-light leading-relaxed mb-4">
              {businessInfo.subheadline}
            </p>

            {/* FSSAI Registration badge (hidden when empty string) */}
            {businessInfo.fssaiNumber ? (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-forest-900 border border-white/15 text-xs text-cream">
                <ShieldCheck className="w-4 h-4 text-limeAccent" />
                <span>FSSAI Reg. No: <strong>{businessInfo.fssaiNumber}</strong></span>
              </div>
            ) : null}
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="font-mono text-xs uppercase tracking-widest text-limeAccent mb-4 font-bold">
              Index
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-widest text-cream/80">
              <li>
                <a href="#home" className="hover:text-limeAccent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-limeAccent transition-colors">
                  The Menu
                </a>
              </li>
              <li>
                <a href="#breakfast" className="hover:text-limeAccent transition-colors">
                  Breakfast
                </a>
              </li>
              <li>
                <a href="#lunch" className="hover:text-limeAccent transition-colors">
                  Lunch
                </a>
              </li>
              <li>
                <a href="#dinner" className="hover:text-limeAccent transition-colors">
                  Dinner
                </a>
              </li>
              <li>
                <a href="#how-to-order" className="hover:text-limeAccent transition-colors">
                  How to Order
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-limeAccent transition-colors">
                  Contact Lines
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Phone & WhatsApp Ordering Links */}
          <div className="flex flex-col">
            <h4 className="font-mono text-xs uppercase tracking-widest text-limeAccent mb-4 font-bold">
              Direct Contact Lines
            </h4>
            
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-cream/50 font-bold block mb-1">
                  Primary Line 1
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={businessInfo.phone1.tel}
                    className="flex items-center gap-1.5 text-cream hover:text-limeAccent transition-colors font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5 text-limeAccent" />
                    <span>{businessInfo.phone1.display}</span>
                  </a>
                  <a
                    href={businessInfo.phone1.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline text-xs inline-flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-cream/50 font-bold block mb-1">
                  Primary Line 2
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={businessInfo.phone2.tel}
                    className="flex items-center gap-1.5 text-cream hover:text-limeAccent transition-colors font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5 text-limeAccent" />
                    <span>{businessInfo.phone2.display}</span>
                  </a>
                  <a
                    href={businessInfo.phone2.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline text-xs inline-flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <p className="text-[11px] text-cream/50 pt-2 font-light">
                Call or WhatsApp anytime to place your homemade food order.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/50 gap-4">
          <p>© {currentYear} {businessInfo.name}. All rights reserved.</p>
          <p className="font-editorial italic text-cream/70">
            "{businessInfo.tagline}"
          </p>
        </div>

      </div>
    </footer>
  );
}
