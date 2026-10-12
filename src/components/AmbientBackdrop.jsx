import React from 'react';

/**
 * AmbientBackdrop provides the 3D South Indian atmosphere:
 * - Deep forest green & warm mahogany radial gradients
 * - Warm amber lantern-like glows
 * - Subtle floating spice particles and curry leaf silhouettes
 * Completely non-interactive (pointer-events-none) and lightweight CSS only.
 */
export default function AmbientBackdrop() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden transition-colors duration-500">
      {/* 1. Base Gradient Atmosphere */}
      <div className="absolute inset-0 bg-cream-50 dark:bg-forest-950 transition-colors duration-500" />

      {/* 2. Top-Center Warm Amber & Antique Gold Lantern Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[650px] lg:w-[1000px] h-[350px] sm:h-[550px] bg-gradient-radial from-amberGlow/15 via-gold/10 to-transparent dark:from-amberGlow/20 dark:via-gold/15 dark:to-transparent rounded-full blur-3xl opacity-75 animate-amber-breathe" />

      {/* 3. Deep Forest Green Ambient Node (Right Side) */}
      <div className="absolute top-1/4 -right-24 sm:-right-40 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-forest-750/15 dark:bg-forest-750/30 rounded-full blur-3xl opacity-60" />

      {/* 4. Warm Wood / Dark Mahogany Ambient Node (Left Side) */}
      <div className="absolute top-2/3 -left-20 sm:-left-36 w-[260px] sm:w-[480px] h-[260px] sm:h-[480px] bg-wood-750/10 dark:bg-wood-850/40 rounded-full blur-3xl opacity-50" />

      {/* 5. Floating Spice Silhouette 1: Curry Leaf (Top Left) */}
      <div className="absolute top-24 left-[8%] w-10 sm:w-14 h-10 sm:h-14 opacity-20 dark:opacity-30 animate-spice-1 text-gold-600 dark:text-gold">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full drop-shadow-sm">
          <path d="M10,90 Q30,40 85,15 Q60,60 10,90 Z" />
          <path d="M15,85 Q40,55 80,20" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
        </svg>
      </div>

      {/* 6. Floating Spice Silhouette 2: Star Anise (Middle Right) */}
      <div className="absolute top-1/3 right-[10%] w-8 sm:w-12 h-8 sm:h-12 opacity-15 dark:opacity-25 animate-spice-2 text-amberGlow dark:text-gold">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          {/* 8-pointed star anise silhouette */}
          <path d="M50,10 Q55,35 50,45 Q45,35 50,10 Z" />
          <path d="M50,90 Q55,65 50,55 Q45,65 50,90 Z" />
          <path d="M10,50 Q35,55 45,50 Q35,45 10,50 Z" />
          <path d="M90,50 Q65,55 55,50 Q65,45 90,50 Z" />
          <path d="M22,22 Q43,38 47,47 Q38,43 22,22 Z" />
          <path d="M78,78 Q57,62 53,53 Q62,57 78,78 Z" />
          <path d="M22,78 Q43,62 47,53 Q38,57 22,78 Z" />
          <path d="M78,22 Q57,38 53,47 Q62,43 78,22 Z" />
          <circle cx="50" cy="50" r="8" />
        </svg>
      </div>

      {/* 7. Floating Spice Silhouette 3: Peppercorn / Cardamom (Lower Center) */}
      <div className="absolute top-3/4 left-[15%] w-6 sm:w-9 h-6 sm:h-9 opacity-15 dark:opacity-25 animate-spice-3 text-gold-700 dark:text-gold">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          {/* Cardamom pod shape */}
          <path d="M50,15 C65,30 65,70 50,85 C35,70 35,30 50,15 Z" />
        </svg>
      </div>

      {/* 8. Subtle Golden Grid Texture Overlay (Very Soft) */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(rgba(197, 160, 89, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
}
