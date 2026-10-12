import React, { useState, useMemo } from 'react';
import { Search, UtensilsCrossed, Sparkles } from 'lucide-react';
import { allMenuItems } from '../data/menu';
import CategoryTabs from './CategoryTabs';
import MenuCard from './MenuCard';

export default function MenuSection({ onOpenPreview }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Slices by 3 main categories
  const breakfastItems = useMemo(() => allMenuItems.filter((i) => i.category === 'breakfast'), []);
  const lunchItems = useMemo(() => allMenuItems.filter((i) => i.category === 'lunch'), []);
  const dinnerItems = useMemo(() => allMenuItems.filter((i) => i.category === 'dinner'), []);

  // Search filter
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase().trim();
    return allMenuItems.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        (item.quantity && item.quantity.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  // Filtered items when a single category tab is selected
  const filteredCategoryItems = useMemo(() => {
    if (activeCategory === 'breakfast') return breakfastItems;
    if (activeCategory === 'lunch') return lunchItems;
    if (activeCategory === 'dinner') return dinnerItems;
    return allMenuItems;
  }, [activeCategory, breakfastItems, lunchItems, dinnerItems]);

  return (
    <section id="menu" className="relative pb-20 sm:pb-28 transition-colors duration-200">
      
      {/* Category Navigation Bar (Sticky) */}
      {!searchQuery && (
        <CategoryTabs
          activeCategory={activeCategory}
          onSelectCategory={(catId) => {
            setActiveCategory(catId);
            const el = document.getElementById('menu');
            if (el) {
              const yOffset = -70;
              const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        
        {/* Quick Search Bar */}
        <div className="max-w-md mx-auto mb-10 sm:mb-12 relative">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-cocoa-700/50 dark:text-cream-300/50" />
          <input
            type="text"
            placeholder="Search idly, biryani, chicken fry, dosa..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-12 py-3 rounded-full bg-white dark:bg-charcoal-850 border border-cocoa-800/15 dark:border-white/15 text-sm text-cocoa-900 dark:text-cream-50 placeholder-cocoa-700/50 dark:placeholder-cream-300/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 shadow-card-light dark:shadow-card-dark transition-colors min-h-[44px]"
            aria-label="Search food menu"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gold hover:text-gold-600 dark:hover:text-cream-50 p-1"
              aria-label="Clear search"
            >
              Clear
            </button>
          )}
        </div>

        {/* ============================================================ */}
        {/* VIEW 1: ACTIVE SEARCH                                         */}
        {/* ============================================================ */}
        {searchQuery.trim() ? (
          <div>
            <div className="mb-6 flex items-center justify-between border-b border-cocoa-800/10 dark:border-white/10 pb-4">
              <h2 className="font-serif text-xl sm:text-2xl text-cocoa-900 dark:text-cream-50 font-bold">
                Search Results for "{searchQuery}" ({searchResults?.length || 0})
              </h2>
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-gold hover:underline font-bold"
              >
                Clear Search
              </button>
            </div>

            {searchResults && searchResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {searchResults.map((item) => (
                  <MenuCard
                    key={`search-${item.id}`}
                    item={item}
                    onOpenPreview={onOpenPreview}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white dark:bg-charcoal-850 rounded-3xl border border-cocoa-800/10 dark:border-white/10 max-w-md mx-auto shadow-sm p-6">
                <UtensilsCrossed className="w-10 h-10 text-gold mx-auto mb-3" />
                <p className="font-serif text-lg text-cocoa-900 dark:text-cream-50 font-bold mb-1">
                  No matching dishes found
                </p>
                <p className="text-xs text-cocoa-700/70 dark:text-cream-300/70 mb-5">
                  Try searching for another dish or browse the full menu.
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-6 py-2.5 rounded-full bg-cocoa-900 dark:bg-gold text-cream-50 dark:text-charcoal-950 font-bold text-xs uppercase tracking-wider"
                >
                  View All Dishes
                </button>
              </div>
            )}
          </div>
        ) : activeCategory !== 'all' ? (
          /* ============================================================ */
          /* VIEW 2: SINGLE FILTERED CATEGORY                             */
          /* ============================================================ */
          <div>
            <div className="mb-6 sm:mb-8 pb-4 border-b border-cocoa-800/10 dark:border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-gold-600 dark:text-gold font-bold block mb-1">
                  Menu Category
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-cocoa-900 dark:text-cream-50 uppercase tracking-tight">
                  {activeCategory} ({filteredCategoryItems.length})
                </h2>
              </div>
              <button
                onClick={() => setActiveCategory('all')}
                className="text-xs text-gold hover:underline font-bold"
              >
                View Full Menu →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filteredCategoryItems.map((item) => (
                <MenuCard
                  key={`filtered-${item.id}`}
                  item={item}
                  onOpenPreview={onOpenPreview}
                />
              ))}
            </div>
          </div>
        ) : (
          /* ============================================================ */
          /* VIEW 3: FULL ORGANISED MENU SPREAD (BREAKFAST, LUNCH, DINNER) */
          /* ============================================================ */
          <div className="space-y-16 sm:space-y-24">
            
            {/* 1. BREAKFAST SECTION */}
            <section id="breakfast" className="scroll-mt-32">
              <div className="mb-6 sm:mb-8 pb-4 border-b border-cocoa-800/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-gold-600 dark:text-gold font-bold block mb-1">
                    01 — Morning Specialties
                  </span>
                  <h2 className="font-serif font-black text-2xl sm:text-4xl text-cocoa-900 dark:text-cream-50 uppercase tracking-tight">
                    Breakfast
                  </h2>
                  <p className="text-xs sm:text-sm text-cocoa-700/80 dark:text-cream-200/80 mt-1 italic font-serif">
                    "Start your morning with freshly steamed homestyle favourites."
                  </p>
                </div>
                <span className="text-xs text-cocoa-800 dark:text-cream-200 bg-cream-200/80 dark:bg-charcoal-800 px-3 py-1 rounded-full border border-cocoa-800/10 dark:border-white/10 self-start sm:self-auto font-mono">
                  {breakfastItems.length} Dishes
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {breakfastItems.map((item) => (
                  <MenuCard
                    key={`bf-${item.id}`}
                    item={item}
                    onOpenPreview={onOpenPreview}
                  />
                ))}
              </div>
            </section>

            {/* 2. LUNCH SECTION */}
            <section id="lunch" className="scroll-mt-32">
              <div className="mb-6 sm:mb-8 pb-4 border-b border-cocoa-800/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-gold-600 dark:text-gold font-bold block mb-1">
                    02 — Afternoon Feast
                  </span>
                  <h2 className="font-serif font-black text-2xl sm:text-4xl text-cocoa-900 dark:text-cream-50 uppercase tracking-tight">
                    Lunch
                  </h2>
                  <p className="text-xs sm:text-sm text-cocoa-700/80 dark:text-cream-200/80 mt-1 italic font-serif">
                    "Royal slow-dum biryanis, wholesome meals, and rich simmering gravies."
                  </p>
                </div>
                <span className="text-xs text-cocoa-800 dark:text-cream-200 bg-cream-200/80 dark:bg-charcoal-800 px-3 py-1 rounded-full border border-cocoa-800/10 dark:border-white/10 self-start sm:self-auto font-mono">
                  {lunchItems.length} Dishes
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {lunchItems.map((item) => (
                  <MenuCard
                    key={`lu-${item.id}`}
                    item={item}
                    onOpenPreview={onOpenPreview}
                  />
                ))}
              </div>
            </section>

            {/* 3. DINNER SECTION */}
            <section id="dinner" className="scroll-mt-32">
              <div className="mb-6 sm:mb-8 pb-4 border-b border-cocoa-800/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-gold-600 dark:text-gold font-bold block mb-1">
                    03 — Evening Delights
                  </span>
                  <h2 className="font-serif font-black text-2xl sm:text-4xl text-cocoa-900 dark:text-cream-50 uppercase tracking-tight">
                    Dinner
                  </h2>
                  <p className="text-xs sm:text-sm text-cocoa-700/80 dark:text-cream-200/80 mt-1 italic font-serif">
                    "Sizzling pan roasts, hot wok fried rice, naans, and homestyle specials."
                  </p>
                </div>
                <span className="text-xs text-cocoa-800 dark:text-cream-200 bg-cream-200/80 dark:bg-charcoal-800 px-3 py-1 rounded-full border border-cocoa-800/10 dark:border-white/10 self-start sm:self-auto font-mono">
                  {dinnerItems.length} Dishes
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {dinnerItems.map((item) => (
                  <MenuCard
                    key={`din-${item.id}`}
                    item={item}
                    onOpenPreview={onOpenPreview}
                  />
                ))}
              </div>
            </section>

          </div>
        )}

      </div>
    </section>
  );
}
