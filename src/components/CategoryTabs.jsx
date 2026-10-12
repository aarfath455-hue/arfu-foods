import React from 'react';
import { MENU_CATEGORIES } from '../data/menu';

export default function CategoryTabs({ activeCategory, onSelectCategory }) {
  return (
    <nav
      aria-label="Menu categories"
      className="sticky top-[58px] sm:top-[64px] z-30 bg-cream-100/95 dark:bg-charcoal-950/95 backdrop-blur-md py-2.5 sm:py-3 border-y border-cocoa-800/10 dark:border-white/10 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-3 py-0.5">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex-shrink-0 inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 border whitespace-nowrap min-h-[44px] focus:outline-none focus:ring-2 focus:ring-gold active:scale-95 ${
                  isActive
                    ? 'bg-cocoa-900 text-cream-50 dark:bg-gold dark:text-charcoal-950 border-cocoa-900 dark:border-gold shadow-md'
                    : 'bg-cream-200/60 dark:bg-charcoal-800/60 text-cocoa-800/80 dark:text-cream-200/80 hover:text-cocoa-950 dark:hover:text-gold border-cocoa-800/10 dark:border-white/10 hover:border-gold/40'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                  isActive
                    ? 'bg-gold/30 text-gold-200 dark:bg-charcoal-900/30 dark:text-charcoal-950'
                    : 'bg-black/5 dark:bg-white/10 text-cocoa-700 dark:text-cream-300'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
