import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone, MessageCircle, Sun, Moon, FileText } from 'lucide-react';
import { businessInfo } from '../data/business';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Menu Card', href: '#menu-card', isHighlighted: true },
    { label: 'About', href: '#why-us' },
    { label: 'How to Order', href: '#how-to-order' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-100/95 dark:bg-forest-950/95 backdrop-blur-md py-2.5 sm:py-3 shadow-3d-card-light dark:shadow-3d-card border-b border-wood-800/10 dark:border-gold/20'
          : 'bg-cream-100/85 dark:bg-forest-950/85 backdrop-blur-sm py-3 sm:py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo & Business Name */}
          <a
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-gold rounded-full p-1"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-gold/50 shadow-sm flex-shrink-0 bg-cream-200 dark:bg-forest-900 transition-transform duration-300 group-hover:scale-105">
              <img
                src={businessInfo.logo}
                onError={(e) => {
                  e.currentTarget.src = '/assets/logo.jpg';
                }}
                alt="ARFU HOMEMADE FOODS Logo"
                className="w-full h-full object-cover"
                width="44"
                height="44"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg tracking-wide text-wood-950 dark:text-cream-50 leading-tight group-hover:text-gold-700 dark:group-hover:text-gold transition-colors">
                ARFU
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gold-700 dark:text-gold font-semibold leading-none">
                HOMEMADE FOODS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => {
              if (link.isHighlighted) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold/15 dark:bg-gold/20 text-gold-700 dark:text-gold border border-gold/40 text-xs font-bold uppercase tracking-wider hover:bg-gold hover:text-forest-950 dark:hover:text-forest-950 transition-all shadow-sm active:scale-95"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{link.label}</span>
                  </a>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-semibold tracking-wider uppercase text-wood-800/80 hover:text-wood-950 dark:text-cream-200/80 dark:hover:text-gold transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Menu Card (Mobile) + Theme Toggle + Call/WhatsApp CTAs + Drawer Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            
            {/* Mobile Quick "Menu Card" Access Button */}
            <a
              href="#menu-card"
              className="inline-flex lg:hidden items-center gap-1 px-2.5 py-1.5 rounded-full bg-gold/15 dark:bg-gold/20 border border-gold/40 text-gold-700 dark:text-gold text-xs font-bold uppercase tracking-wider min-h-[44px] min-w-[44px] justify-center transition-all hover:bg-gold hover:text-forest-950 active:scale-95"
              aria-label="View Menu Card"
              title="View Official Menu Card"
            >
              <FileText className="w-4 h-4" />
              <span className="hidden xs:inline text-[10px]">Card</span>
            </a>

            {/* Theme Toggle Button (Light / Dark) */}
            <button
              onClick={toggleTheme}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-cream-200/70 hover:bg-cream-300 dark:bg-forest-900 dark:hover:bg-forest-850 text-wood-950 dark:text-gold border border-wood-800/10 dark:border-gold/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              title={isDark ? "Switch to light theme" : "Switch to dark theme"}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-gold animate-amber-breathe" />
              ) : (
                <Moon className="w-5 h-5 text-wood-800" />
              )}
            </button>

            {/* Direct Call Line Button (Tablet & Desktop) */}
            <button
              onClick={() => onOpenContact('call')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-wood-800/20 dark:border-gold/30 text-wood-950 dark:text-cream-100 hover:border-gold hover:text-gold-700 dark:hover:text-gold text-xs font-semibold uppercase tracking-wider transition-all min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Call kitchen order lines"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>Call</span>
            </button>

            {/* WhatsApp Order Button with Gold Accents */}
            <button
              onClick={() => onOpenContact('whatsapp')}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-[#1b7a43] hover:bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-whatsapp-glow border border-gold/40 hover:border-gold min-h-[44px] active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Order on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span className="hidden xs:inline sm:inline">WhatsApp</span>
            </button>

            {/* Mobile Hamburger Drawer Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-cream-200/70 dark:bg-forest-900 text-wood-950 dark:text-cream-100 border border-wood-800/10 dark:border-gold/30 lg:hidden focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown / Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream-50 dark:bg-forest-950 border-b border-wood-800/10 dark:border-gold/20 px-5 py-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {/* Prominent Menu Card Link */}
            <a
              href="#menu-card"
              onClick={handleNavClick}
              className="py-3 px-3.5 rounded-2xl bg-gold/15 dark:bg-gold/20 border border-gold/40 text-gold-800 dark:text-gold text-sm font-bold uppercase tracking-wider flex items-center justify-between transition-colors shadow-sm"
            >
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-gold" />
                <span>Official Menu Card</span>
              </div>
              <span className="text-xs bg-gold text-forest-950 px-2 py-0.5 rounded-full font-bold">POSTER</span>
            </a>

            {/* Standard Links */}
            {navLinks
              .filter((l) => !l.isHighlighted)
              .map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleNavClick}
                  className="py-2.5 px-3 rounded-xl text-sm font-semibold tracking-wide uppercase text-wood-950 dark:text-cream-100 hover:bg-cream-200 dark:hover:bg-forest-900 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-gold text-xs">→</span>
                </a>
              ))}
            
            <div className="pt-3 mt-2 border-t border-wood-800/10 dark:border-gold/20 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact('call');
                }}
                className="flex-1 py-2.5 rounded-xl border border-wood-800/20 dark:border-gold/30 text-wood-950 dark:text-cream-100 text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>Call Kitchen</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact('whatsapp');
                }}
                className="flex-1 py-2.5 rounded-xl bg-[#1b7a43] hover:bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-1.5 border border-gold/40"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
