import React, { useEffect } from 'react';
import { X, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { businessInfo } from '../data/business';

export default function EditorialNavOverlay({ isOpen, onClose, onOpenContact }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const links = [
    { num: '01', label: "THE MENU", href: '#menu' },
    { num: '02', label: "BREAKFAST", href: '#breakfast' },
    { num: '03', label: "LUNCH", href: '#lunch' },
    { num: '04', label: "DINNER", href: '#dinner' },
    { num: '05', label: "HOW TO ORDER", href: '#how-to-order' },
    { num: '06', label: "WHY CHOOSE US", href: '#why-us' },
    { num: '07', label: "DIRECT CONTACT", href: '#contact' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Editorial Navigation"
      className="fixed inset-0 z-50 bg-forest-950/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-12 overflow-y-auto animate-fade-in text-cream"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-forest-900">
            <img
              src={businessInfo.logo}
              alt="ARFU Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="font-serif font-bold text-sm tracking-widest text-cream uppercase block">
              ARFU HOMEMADE FOODS
            </span>
            <span className="text-[10px] text-limeAccent font-light uppercase tracking-wider">
              {businessInfo.tagline}
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-3 rounded-full bg-white/5 hover:bg-white/15 text-cream hover:text-limeAccent transition-all border border-white/10"
          aria-label="Close navigation"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Center: Oversized Editorial Links */}
      <div className="py-12 max-w-4xl mx-auto w-full">
        <span className="text-xs uppercase font-bold tracking-widest text-limeAccent block mb-6">
          Navigation Index
        </span>
        <nav className="flex flex-col gap-4 sm:gap-6">
          {links.map((link) => (
            <a
              key={link.num}
              href={link.href}
              onClick={onClose}
              className="group flex items-baseline justify-between py-2 border-b border-white/5 hover:border-limeAccent/40 transition-colors"
            >
              <div className="flex items-baseline gap-4 sm:gap-8">
                <span className="text-xs sm:text-sm font-mono text-limeAccent/70 group-hover:text-limeAccent">
                  {link.num}
                </span>
                <span className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-cream group-hover:text-limeAccent group-hover:translate-x-2 transition-all duration-300">
                  {link.label}
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-limeAccent group-hover:translate-x-1 transition-all" />
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom Bar: Direct Kitchen Contact */}
      <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-cream/50 block mb-1">
            Order Lines (Call or WhatsApp)
          </span>
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
            <a href={businessInfo.phone1.tel} className="hover:text-limeAccent transition-colors">
              {businessInfo.phone1.display}
            </a>
            <span className="text-white/20">•</span>
            <a href={businessInfo.phone2.tel} className="hover:text-limeAccent transition-colors">
              {businessInfo.phone2.display}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenContact('call');
            }}
            className="px-5 py-2.5 rounded-full border border-limeAccent text-limeAccent hover:bg-limeAccent hover:text-forest-950 font-bold text-xs uppercase tracking-wider transition-all"
          >
            Call Lines
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenContact('whatsapp');
            }}
            className="px-5 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#20ba59] transition-all"
          >
            WhatsApp Order
          </button>
        </div>
      </div>
    </div>
  );
}
