import React from 'react';
import { Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { businessInfo } from '../data/business';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream-200/90 dark:bg-charcoal-950 border-t border-cocoa-800/10 dark:border-white/10 text-cocoa-800 dark:text-cream-200/80 pt-16 pb-24 md:pb-14 text-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 pb-12 border-b border-cocoa-800/10 dark:border-white/10">
          
          {/* Brand Info */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/40 bg-white dark:bg-charcoal-900 flex-shrink-0 shadow-sm p-0.5">
                <img
                  src={businessInfo.logo}
                  onError={(e) => {
                    e.currentTarget.src = '/assets/logo.svg';
                  }}
                  alt="ARFU HOMEMADE FOODS Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-base sm:text-lg text-cocoa-900 dark:text-cream-50 tracking-wide block uppercase">
                  {businessInfo.name}
                </span>
                <span className="font-serif italic text-xs text-gold-700 dark:text-gold block">
                  "{businessInfo.tagline}"
                </span>
              </div>
            </div>

            <p className="text-xs text-cocoa-700/80 dark:text-cream-300/80 max-w-sm font-normal leading-relaxed mb-4">
              {businessInfo.subheadline}
            </p>

            {/* FSSAI Badge if configured */}
            {businessInfo.fssaiNumber ? (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/70 dark:bg-charcoal-900 border border-gold/30 text-xs text-cocoa-900 dark:text-cream-100 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-gold-600 dark:text-gold" />
                <span>FSSAI Reg. No: <strong>{businessInfo.fssaiNumber}</strong></span>
              </div>
            ) : null}
          </div>

          {/* Quick Menu Navigation */}
          <div className="flex flex-col">
            <h4 className="font-mono text-xs uppercase tracking-widest text-gold-700 dark:text-gold mb-3.5 font-bold">
              Menu Index
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider text-cocoa-800/90 dark:text-cream-200/90 font-medium">
              <li>
                <a href="#home" className="hover:text-gold-700 dark:hover:text-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu-card" className="hover:text-gold-700 dark:hover:text-gold transition-colors font-bold text-gold-700 dark:text-gold">
                  Menu Card (Poster)
                </a>
              </li>
              <li>
                <a href="#breakfast" className="hover:text-gold-700 dark:hover:text-gold transition-colors">
                  Breakfast (9 Dishes)
                </a>
              </li>
              <li>
                <a href="#lunch" className="hover:text-gold-700 dark:hover:text-gold transition-colors">
                  Lunch (8 Dishes)
                </a>
              </li>
              <li>
                <a href="#dinner" className="hover:text-gold-700 dark:hover:text-gold transition-colors">
                  Dinner (11 Dishes)
                </a>
              </li>
              <li>
                <a href="#how-to-order" className="hover:text-gold-700 dark:hover:text-gold transition-colors">
                  How to Order
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-gold-700 dark:hover:text-gold transition-colors">
                  Why ARFU
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-700 dark:hover:text-gold transition-colors">
                  Direct Kitchen Lines
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Phone & WhatsApp Ordering Links */}
          <div className="flex flex-col">
            <h4 className="font-mono text-xs uppercase tracking-widest text-gold-700 dark:text-gold mb-3.5 font-bold">
              Direct Contact Lines
            </h4>
            
            <div className="space-y-3.5">
              {/* Line 1 */}
              <div className="p-3 rounded-2xl bg-white/70 dark:bg-charcoal-900 border border-cocoa-800/10 dark:border-white/10 shadow-sm">
                <span className="text-[10px] uppercase tracking-widest text-gold-700 dark:text-gold font-bold block mb-1">
                  Primary Line 1
                </span>
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={businessInfo.phone1.tel}
                    className="flex items-center gap-1.5 text-cocoa-900 dark:text-cream-50 hover:text-gold-700 dark:hover:text-gold transition-colors font-bold text-sm"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-600 dark:text-gold" />
                    <span>{businessInfo.phone1.display}</span>
                  </a>
                  <a
                    href={businessInfo.phone1.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] text-[#128C7E] dark:text-[#25D366] hover:text-white text-xs font-semibold transition-all"
                  >
                    <MessageCircle className="w-3 h-3 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Line 2 */}
              <div className="p-3 rounded-2xl bg-white/70 dark:bg-charcoal-900 border border-cocoa-800/10 dark:border-white/10 shadow-sm">
                <span className="text-[10px] uppercase tracking-widest text-gold-700 dark:text-gold font-bold block mb-1">
                  Primary Line 2
                </span>
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={businessInfo.phone2.tel}
                    className="flex items-center gap-1.5 text-cocoa-900 dark:text-cream-50 hover:text-gold-700 dark:hover:text-gold transition-colors font-bold text-sm"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-600 dark:text-gold" />
                    <span>{businessInfo.phone2.display}</span>
                  </a>
                  <a
                    href={businessInfo.phone2.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] text-[#128C7E] dark:text-[#25D366] hover:text-white text-xs font-semibold transition-all"
                  >
                    <MessageCircle className="w-3 h-3 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <p className="text-[11px] text-cocoa-700/70 dark:text-cream-300/60 pt-1 font-normal">
                Call or WhatsApp anytime to place your order. Delivery across cottages & resorts in Ooty.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-cocoa-700/70 dark:text-cream-300/60 gap-3">
          <p>© {currentYear} {businessInfo.name}. All rights reserved.</p>
          <p className="font-serif italic text-cocoa-800 dark:text-cream-200">
            "{businessInfo.tagline}"
          </p>
        </div>

      </div>
    </footer>
  );
}
