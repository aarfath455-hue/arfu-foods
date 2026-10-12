import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, Phone, MessageCircle } from 'lucide-react';
import { businessInfo } from '../data/business';

export default function Navbar({ onOpenNavOverlay, onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-forest-950/90 backdrop-blur-md py-3 border-b border-white/10 shadow-lg'
          : 'bg-transparent py-5 sm:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* Top-Left: Minimal ARFU Brand Logo & Text */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-limeAccent rounded-full p-1"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-white/30 shadow-sm flex-shrink-0 bg-forest-900">
              <img
                src={businessInfo.logo}
                onError={(e) => {
                  e.currentTarget.src = '/assets/logo.svg';
                }}
                alt="ARFU Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="font-serif font-black text-lg sm:text-xl tracking-widest text-cream block uppercase leading-none group-hover:text-limeAccent transition-colors">
                ARFU
              </span>
              <span className="text-[9px] uppercase tracking-ultra-wide text-limeAccent font-medium block">
                HOMEMADE FOODS
              </span>
            </div>
          </a>

          {/* Center/Right Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            <a
              href="#breakfast"
              className="text-xs uppercase tracking-widest text-cream/80 hover:text-limeAccent font-medium transition-colors"
            >
              BREAKFAST
            </a>
            <a
              href="#lunch"
              className="text-xs uppercase tracking-widest text-cream/80 hover:text-limeAccent font-medium transition-colors"
            >
              LUNCH
            </a>
            <a
              href="#dinner"
              className="text-xs uppercase tracking-widest text-cream/80 hover:text-limeAccent font-medium transition-colors"
            >
              DINNER
            </a>
            <a
              href="#contact"
              className="text-xs uppercase tracking-widest text-cream/80 hover:text-limeAccent font-medium transition-colors"
            >
              CONTACT
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => onOpenContact('call')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/20 hover:border-limeAccent text-cream hover:text-limeAccent text-xs uppercase tracking-widest font-semibold transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-limeAccent" />
              <span>CALL</span>
            </button>

            <button
              onClick={() => onOpenContact('whatsapp')}
              data-cursor="ORDER"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-cream hover:text-white text-xs uppercase tracking-wider font-bold transition-all border border-[#25D366]/40 active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current text-limeAccent" />
              <span>WHATSAPP</span>
            </button>

            {/* Mobile / Full Menu Drawer Button */}
            <button
              onClick={onOpenNavOverlay}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-cream hover:text-limeAccent border border-white/15 transition-colors lg:hidden"
              aria-label="Open menu overlay"
            >
              <MenuIcon className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
