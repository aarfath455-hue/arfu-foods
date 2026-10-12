import React, { useState, useEffect } from 'react';
import {
  FileText,
  Download,
  Share2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  X,
  MessageCircle,
  Phone,
  Sparkles,
  Check,
  Clock,
  UtensilsCrossed,
} from 'lucide-react';
import { businessInfo, getPosterWhatsAppUrl } from '../data/business';
import { MENU_CARD_IMAGE, MEAL_TIMINGS } from '../data/menu';

export default function MenuCardPoster({ onOpenContact }) {
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [copied, setCopied] = useState(false);

  // Close zoom modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isZoomOpen) {
        setIsZoomOpen(false);
        setZoomLevel(1);
      }
    };
    if (isZoomOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isZoomOpen]);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.4, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.4, 0.8));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#menu-card`;
    const shareData = {
      title: 'ARFU HOMEMADE FOODS — Official Menu Card',
      text: 'Freshly prepared authentic South Indian food in Ooty. Check out the official ARFU HOMEMADE FOODS Menu Card!',
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        // User cancelled or share failed, fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const posterWhatsApp1 = getPosterWhatsAppUrl(businessInfo.phone1.number);
  const posterWhatsApp2 = getPosterWhatsAppUrl(businessInfo.phone2.number);

  return (
    <section
      id="menu-card"
      className="py-16 sm:py-24 border-t border-wood-800/10 dark:border-gold/20 bg-cream-100/70 dark:bg-forest-950/80 transition-colors duration-200 scroll-mt-24 relative"
    >
      {/* Soft Ambient Node */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] bg-gradient-radial from-amberGlow/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/10 dark:bg-forest-900/80 border border-gold/40 text-gold-700 dark:text-gold text-xs font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
            <FileText className="w-4 h-4 text-gold-700 dark:text-gold" />
            <span>Official Printed Menu Card</span>
          </div>

          <h2 className="font-serif font-black text-3xl sm:text-5xl text-wood-950 dark:text-cream-50 tracking-tight mb-3">
            Menu Card
          </h2>

          <p className="text-sm sm:text-base text-wood-800/80 dark:text-cream-200/80 leading-relaxed font-normal">
            View the complete official ARFU HOMEMADE FOODS menu poster with all 28 dishes, serving quantities, prices, and daily kitchen timings.
          </p>
          <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
        </div>

        {/* Meal Timings Summary Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl mx-auto mb-8">
          <div className="p-4 rounded-2xl bg-white/95 dark:bg-forest-900/90 border border-wood-800/10 dark:border-gold/30 shadow-3d-card-light dark:shadow-3d-card text-center flex flex-col items-center justify-center">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold-700 dark:text-gold font-bold flex items-center gap-1 mb-1">
              <Clock className="w-3 h-3 text-gold" /> Breakfast
            </span>
            <span className="font-serif font-bold text-sm text-wood-950 dark:text-cream-50">
              {MEAL_TIMINGS.breakfast}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/95 dark:bg-forest-900/90 border border-wood-800/10 dark:border-gold/30 shadow-3d-card-light dark:shadow-3d-card text-center flex flex-col items-center justify-center">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold-700 dark:text-gold font-bold flex items-center gap-1 mb-1">
              <Clock className="w-3 h-3 text-gold" /> Lunch
            </span>
            <span className="font-serif font-bold text-sm text-wood-950 dark:text-cream-50">
              {MEAL_TIMINGS.lunch}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/95 dark:bg-forest-900/90 border border-wood-800/10 dark:border-gold/30 shadow-3d-card-light dark:shadow-3d-card text-center flex flex-col items-center justify-center">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold-700 dark:text-gold font-bold flex items-center gap-1 mb-1">
              <Clock className="w-3 h-3 text-gold" /> Dinner
            </span>
            <span className="font-serif font-bold text-sm text-wood-950 dark:text-cream-50">
              {MEAL_TIMINGS.dinner}
            </span>
          </div>
        </div>

        {/* Action Toolbar above Poster: Zoom / Download / Share */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-7">
          {/* Zoom / Fullscreen Button */}
          <button
            onClick={() => {
              setIsZoomOpen(true);
              setZoomLevel(1);
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-forest-900 hover:bg-cream-200 dark:hover:bg-forest-850 text-wood-950 dark:text-cream-50 border border-wood-800/15 dark:border-gold/30 text-xs font-bold uppercase tracking-wider shadow-sm hover:border-gold transition-all min-h-[44px] active:scale-95"
            title="Open Fullscreen Zoom"
          >
            <ZoomIn className="w-4 h-4 text-gold-700 dark:text-gold" />
            <span>Tap to Zoom</span>
          </button>

          {/* Download Button */}
          <a
            href={MENU_CARD_IMAGE}
            download="ARFU-HOMEMADE-FOODS-Menu-Card.jpeg"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-forest-900 hover:bg-cream-200 dark:hover:bg-forest-850 text-wood-950 dark:text-cream-50 border border-wood-800/15 dark:border-gold/30 text-xs font-bold uppercase tracking-wider shadow-sm hover:border-gold transition-all min-h-[44px] active:scale-95"
            title="Download Menu Card Image"
          >
            <Download className="w-4 h-4 text-gold-700 dark:text-gold" />
            <span>Download Menu</span>
          </a>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-forest-900 hover:bg-cream-200 dark:hover:bg-forest-850 text-wood-950 dark:text-cream-50 border border-wood-800/15 dark:border-gold/30 text-xs font-bold uppercase tracking-wider shadow-sm hover:border-gold transition-all min-h-[44px] active:scale-95"
            title="Share Menu Card"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#25D366]" />
                <span className="text-[#25D366]">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-gold-700 dark:text-gold" />
                <span>Share Card</span>
              </>
            )}
          </button>

          {/* Switch to Interactive Cards Button */}
          <button
            onClick={scrollToMenu}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-forest-900 dark:bg-gold text-cream-50 dark:text-forest-950 font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-forest-800 dark:hover:bg-gold-400 transition-all min-h-[44px] active:scale-95"
          >
            <UtensilsCrossed className="w-4 h-4 text-gold dark:text-forest-950" />
            <span>Browse Dish Cards</span>
          </button>
        </div>

        {/* Poster Showcase Container on Antique Wood Pedestal */}
        <div className="max-w-2xl mx-auto">
          <div
            onClick={() => {
              setIsZoomOpen(true);
              setZoomLevel(1);
            }}
            className="relative rounded-3xl overflow-hidden border-2 border-gold/40 hover:border-gold bg-wood-900/10 dark:bg-forest-900/90 p-2.5 sm:p-4 shadow-3d-card hover:shadow-3d-card-hover transition-all duration-300 cursor-zoom-in group"
            title="Tap to zoom in and read clearly"
          >
            {/* The Original Poster Image with Intact Aspect Ratio */}
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-forest-950 border border-gold/20">
              <img
                src={MENU_CARD_IMAGE}
                onError={(e) => {
                  e.currentTarget.src = '/assets/arfu-menu-card.png';
                }}
                alt="ARFU HOMEMADE FOODS Official Menu Card Poster"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                loading="lazy"
                width="800"
                height="1200"
              />

              {/* Hover / Tap Hint Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream-50/95 dark:bg-forest-900/95 text-wood-950 dark:text-cream-50 text-xs font-bold uppercase tracking-wider shadow-xl border border-gold/50">
                  <ZoomIn className="w-4 h-4 text-gold" />
                  <span>Tap to Zoom Fullscreen</span>
                </span>
              </div>
            </div>

            {/* Mobile tap hint pill below poster */}
            <div className="mt-2 text-center sm:hidden">
              <span className="text-[11px] text-wood-700/70 dark:text-cream-300/60 inline-flex items-center gap-1 font-medium">
                <ZoomIn className="w-3 h-3 text-gold" /> Tap poster to zoom & read clearly
              </span>
            </div>
          </div>
        </div>

        {/* Direct WhatsApp Ordering Strip Below Poster */}
        <div className="max-w-xl mx-auto mt-10 sm:mt-12 p-6 sm:p-7 rounded-3xl bg-white/95 dark:bg-forest-900/90 border border-wood-800/10 dark:border-gold/30 shadow-3d-card-light dark:shadow-3d-card text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gold-700 dark:text-gold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Ready to Order?</span>
          </div>
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-wood-950 dark:text-cream-50 mb-2">
            Order Directly on WhatsApp
          </h3>
          <p className="text-xs sm:text-sm text-wood-800/80 dark:text-cream-300/80 max-w-md mx-auto mb-6 font-normal">
            Choose your dishes from the poster above and message our kitchen directly on either active line:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={posterWhatsApp1}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#1b7a43] hover:bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider shadow-sm border border-gold/40 hover:border-gold transition-all min-h-[48px] active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Line 1: {businessInfo.phone1.display}</span>
            </a>

            <a
              href={posterWhatsApp2}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#1b7a43] hover:bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider shadow-sm border border-gold/40 hover:border-gold transition-all min-h-[48px] active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Line 2: {businessInfo.phone2.display}</span>
            </a>
          </div>

          <div className="mt-4 pt-3.5 border-t border-wood-800/10 dark:border-white/10 flex items-center justify-center gap-4 text-xs text-wood-700/70 dark:text-cream-300/60">
            <span>Prefer to call?</span>
            <a
              href={businessInfo.phone1.tel}
              className="hover:text-gold-700 dark:hover:text-gold font-semibold flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-gold" /> {businessInfo.phone1.display}
            </a>
            <span>•</span>
            <a
              href={businessInfo.phone2.tel}
              className="hover:text-gold-700 dark:hover:text-gold font-semibold flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-gold" /> {businessInfo.phone2.display}
            </a>
          </div>
        </div>

      </div>

      {/* ============================================================ */}
      {/* FULLSCREEN LIGHTBOX / ZOOM MODAL                             */}
      {/* ============================================================ */}
      {isZoomOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu Card Zoom Lightbox"
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 animate-fade-in"
          onClick={() => setIsZoomOpen(false)}
        >
          {/* Top Bar with Controls */}
          <div
            className="flex items-center justify-between gap-2 max-w-4xl mx-auto w-full z-20 bg-forest-950/90 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl border border-gold/30 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-sm sm:text-base text-gold hidden xs:inline">
                ARFU Menu Card
              </span>
              <span className="text-xs text-cream-300/70 font-mono">
                {Math.round(zoomLevel * 100)}%
              </span>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={handleZoomIn}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                title="Zoom In"
                aria-label="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <button
                onClick={handleZoomOut}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                title="Zoom Out"
                aria-label="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <button
                onClick={handleResetZoom}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                title="Reset Zoom"
                aria-label="Reset Zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <a
                href={MENU_CARD_IMAGE}
                download="ARFU-HOMEMADE-FOODS-Menu-Card.jpeg"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                title="Download"
                aria-label="Download"
              >
                <Download className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsZoomOpen(false)}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gold text-forest-950 hover:bg-gold-400 flex items-center justify-center font-bold transition-colors ml-1"
                title="Close"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Centered Scrollable Zoom Viewport */}
          <div
            className="flex-1 overflow-auto flex items-center justify-center my-2 p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: 'center center',
                transition: 'transform 0.2s ease-out',
              }}
              className="max-w-2xl w-full flex items-center justify-center"
            >
              <img
                src={MENU_CARD_IMAGE}
                alt="ARFU HOMEMADE FOODS Official Menu Card"
                className="max-h-[80vh] w-auto h-auto object-contain rounded-xl shadow-2xl border border-gold/40"
              />
            </div>
          </div>

          {/* Bottom Bar: WhatsApp Order Actions */}
          <div
            className="max-w-md mx-auto w-full z-20 flex items-center justify-center gap-2.5"
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href={posterWhatsApp1}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-[#1b7a43] hover:bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider shadow-lg min-h-[44px] border border-gold/40"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Order Line 1</span>
            </a>
            <a
              href={posterWhatsApp2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-[#1b7a43] hover:bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider shadow-lg min-h-[44px] border border-gold/40"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Order Line 2</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
