import React, { useState, useMemo } from 'react';
import { Search, MessageCircle, Maximize2 } from 'lucide-react';
import { allMenuItems } from '../data/menu';
import CategoryTabs from './CategoryTabs';
import MenuCard from './MenuCard';
import { getItemWhatsAppUrl } from '../data/business';

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
        (item.description && item.description.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  // Filtered items when a single category tab is selected
  const filteredCategoryItems = useMemo(() => {
    if (activeCategory === 'breakfast') return breakfastItems;
    if (activeCategory === 'lunch') return lunchItems;
    if (activeCategory === 'dinner') return dinnerItems;
    return allMenuItems;
  }, [activeCategory, breakfastItems, lunchItems, dinnerItems]);

  // Lead highlight dishes for editorial showcases
  const leadDosa = allMenuItems.find((i) => i.id === 'bf-4') || breakfastItems[0];
  const otherBreakfast = breakfastItems.filter((i) => i.id !== 'bf-4');

  const leadBiryani = allMenuItems.find((i) => i.id === 'lu-1') || lunchItems[0];
  const leadMuttonBiryani = allMenuItems.find((i) => i.id === 'lu-2') || lunchItems[1];
  const otherLunch = lunchItems.filter((i) => i.id !== 'lu-1' && i.id !== 'lu-2');

  const leadChickenFry = allMenuItems.find((i) => i.id === 'din-1') || dinnerItems[0];
  const leadPaneer = allMenuItems.find((i) => i.id === 'din-9') || dinnerItems[1];
  const otherDinner = dinnerItems.filter((i) => i.id !== 'din-1' && i.id !== 'din-9');

  return (
    <section id="menu" className="bg-forest-950 relative pb-28">
      {/* Category Navigation Bar (Sticky) */}
      {!searchQuery && (
        <CategoryTabs
          activeCategory={activeCategory}
          onSelectCategory={(catId) => {
            setActiveCategory(catId);
            const el = document.getElementById('menu');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8">
        {/* Quick Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-cream/40" />
          <input
            type="text"
            placeholder="Search idly, biryani, chicken fry, dosa..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-12 py-3 rounded-full bg-forest-900 border border-white/15 text-sm text-cream placeholder-cream/40 focus:outline-none focus:border-limeAccent focus:ring-1 focus:ring-limeAccent transition-colors shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-limeAccent hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* ============================================================ */}
        {/* VIEW 1: SEARCH ACTIVE                                        */}
        {/* ============================================================ */}
        {searchQuery.trim() ? (
          <div>
            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="font-serif text-2xl text-cream font-bold">
                Search Results for "{searchQuery}" ({searchResults?.length || 0})
              </h3>
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-limeAccent hover:underline font-bold"
              >
                Clear Search & View All
              </button>
            </div>

            {searchResults && searchResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((item) => (
                  <MenuCard
                    key={`search-${item.id}`}
                    item={item}
                    onOpenPreview={onOpenPreview}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-forest-900 rounded-3xl border border-white/10 max-w-md mx-auto">
                <p className="font-serif text-xl text-cream mb-2 font-bold">
                  No matching dishes found
                </p>
                <p className="text-xs text-cream/50 mb-5 font-light">
                  Try searching for another dish or browse the full menu.
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-6 py-2.5 rounded-full bg-cream text-forest-950 font-bold text-xs uppercase tracking-wider"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        ) : activeCategory !== 'all' ? (
          /* ============================================================ */
          /* VIEW 2: FILTERED SINGLE CATEGORY                             */
          /* ============================================================ */
          <div>
            <div className="mb-8 pb-4 border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-limeAccent font-bold block mb-1">
                  CATEGORY VIEW
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-cream uppercase">
                  {activeCategory}
                </h3>
              </div>
              <button
                onClick={() => setActiveCategory('all')}
                className="text-xs text-limeAccent font-bold hover:underline"
              >
                View Full Menu →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          /* VIEW 3: FULL EDITORIAL MAGAZINE MENU SPREAD                  */
          /* ============================================================ */
          <div className="space-y-32">
            
            {/* ---------------------------------------------------------- */}
            {/* 1. BREAKFAST: Large Dosa Showcase + Asymmetric Dishes     */}
            {/* ---------------------------------------------------------- */}
            <section id="breakfast" className="scroll-mt-32">
              <div className="mb-8 pb-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-limeAccent font-bold block mb-1">
                    MORNING SPECIALTIES
                  </span>
                  <h3 className="font-serif font-black text-4xl sm:text-5xl text-cream uppercase tracking-tight">
                    BREAKFAST
                  </h3>
                  <p className="font-editorial italic text-cream/70 text-base mt-1">
                    "Start your day with freshly steamed homestyle favourites."
                  </p>
                </div>
                <span className="text-xs text-cream/60 bg-white/5 px-3 py-1 rounded-full border border-white/10 self-start sm:self-auto font-mono">
                  {breakfastItems.length} Dishes
                </span>
              </div>

              {/* Asymmetric Breakfast Spread */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
                {/* Large Featured Dosa Showcase (Spans 6 cols) */}
                {leadDosa && (
                  <div className="lg:col-span-6 rounded-3xl overflow-hidden bg-forest-900 border border-white/15 shadow-2xl flex flex-col group">
                    <div
                      className="relative h-72 sm:h-88 w-full overflow-hidden bg-forest-950 cursor-pointer"
                      onClick={() => onOpenPreview(leadDosa)}
                      data-cursor="VIEW"
                    >
                      <img
                        src={leadDosa.image}
                        alt={leadDosa.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
                      
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-forest-950/80 text-limeAccent border border-limeAccent/30 backdrop-blur-md">
                          SIGNATURE CRISP
                        </span>
                      </div>

                      <div className="absolute bottom-5 left-5 right-5 text-cream">
                        <div className="flex items-baseline justify-between gap-4">
                          <h4 className="font-serif text-3xl font-bold uppercase tracking-tight">
                            {leadDosa.name}
                          </h4>
                          <span className="font-serif text-3xl font-black text-cream">
                            ₹{leadDosa.price}
                          </span>
                        </div>
                        {leadDosa.quantity && (
                          <span className="text-[11px] uppercase tracking-widest text-limeAccent font-mono block mt-1">
                            {leadDosa.quantity}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-6 flex items-center justify-between gap-4 border-t border-white/10 bg-forest-900">
                      <p className="text-xs text-cream/70 font-light max-w-sm">
                        {leadDosa.description}
                      </p>
                      <a
                        href={getItemWhatsAppUrl(leadDosa)}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="ORDER"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-cream hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-[#25D366]/40 flex-shrink-0 active:scale-95"
                      >
                        <MessageCircle className="w-4 h-4 fill-current text-limeAccent" />
                        <span>WHATSAPP →</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Idly & Vada & Poori 2-Column Grid Beside Hero */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {otherBreakfast.slice(0, 4).map((item) => (
                    <MenuCard
                      key={`bf-grid-${item.id}`}
                      item={item}
                      onOpenPreview={onOpenPreview}
                    />
                  ))}
                </div>
              </div>

              {/* Remaining Breakfast Dishes */}
              {otherBreakfast.length > 4 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherBreakfast.slice(4).map((item) => (
                    <MenuCard
                      key={`bf-rem-${item.id}`}
                      item={item}
                      onOpenPreview={onOpenPreview}
                    />
                  ))}
                </div>
              )}
            </section>

            {/* ---------------------------------------------------------- */}
            {/* 2. LUNCH: Biryanis, Ghee Rice, Meals, Gravies             */}
            {/* ---------------------------------------------------------- */}
            <section id="lunch" className="scroll-mt-32">
              <div className="mb-8 pb-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-limeAccent font-bold block mb-1">
                    AFTERNOON FEAST
                  </span>
                  <h3 className="font-serif font-black text-4xl sm:text-5xl text-cream uppercase tracking-tight">
                    LUNCH
                  </h3>
                  <p className="font-editorial italic text-cream/70 text-base mt-1">
                    "Royal slow-cooked biryanis, homestyle full meals, and rich country gravies."
                  </p>
                </div>
                <span className="text-xs text-limeAccent bg-white/5 px-3 py-1 rounded-full border border-limeAccent/30 self-start sm:self-auto font-mono">
                  {lunchItems.length} Dishes
                </span>
              </div>

              {/* Highlight Cards: Chicken Biryani & Mutton Biryani */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {leadBiryani && (
                  <div className="rounded-3xl overflow-hidden bg-forest-900 border border-white/15 shadow-2xl flex flex-col group">
                    <div
                      className="relative h-72 sm:h-80 w-full overflow-hidden bg-forest-950 cursor-pointer"
                      onClick={() => onOpenPreview(leadBiryani)}
                      data-cursor="VIEW"
                    >
                      <img
                        src={leadBiryani.image}
                        alt={leadBiryani.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
                      
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-forest-950/80 text-limeAccent border border-limeAccent/30 backdrop-blur-md">
                          SIGNATURE DUM
                        </span>
                      </div>

                      <div className="absolute bottom-5 left-5 right-5 text-cream">
                        <div className="flex items-baseline justify-between gap-4">
                          <h4 className="font-serif text-3xl font-bold uppercase tracking-tight">
                            {leadBiryani.name}
                          </h4>
                          <span className="font-serif text-3xl font-black text-cream">
                            ₹{leadBiryani.price}
                          </span>
                        </div>
                        <span className="text-[11px] uppercase tracking-widest text-limeAccent font-mono block mt-1">
                          {leadBiryani.quantity}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex items-center justify-between gap-4 border-t border-white/10 bg-forest-900">
                      <p className="text-xs text-cream/70 font-light max-w-sm line-clamp-2">
                        {leadBiryani.description}
                      </p>
                      <a
                        href={getItemWhatsAppUrl(leadBiryani)}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="ORDER"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-cream hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-[#25D366]/40 flex-shrink-0 active:scale-95"
                      >
                        <MessageCircle className="w-4 h-4 fill-current text-limeAccent" />
                        <span>WHATSAPP →</span>
                      </a>
                    </div>
                  </div>
                )}

                {leadMuttonBiryani && (
                  <div className="rounded-3xl overflow-hidden bg-forest-900 border border-white/15 shadow-2xl flex flex-col group">
                    <div
                      className="relative h-72 sm:h-80 w-full overflow-hidden bg-forest-950 cursor-pointer"
                      onClick={() => onOpenPreview(leadMuttonBiryani)}
                      data-cursor="VIEW"
                    >
                      <img
                        src={leadMuttonBiryani.image}
                        alt={leadMuttonBiryani.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
                      
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-forest-950/80 text-terracotta border border-terracotta/30 backdrop-blur-md">
                          ROYAL SLOW COOK
                        </span>
                      </div>

                      <div className="absolute bottom-5 left-5 right-5 text-cream">
                        <div className="flex items-baseline justify-between gap-4">
                          <h4 className="font-serif text-3xl font-bold uppercase tracking-tight">
                            {leadMuttonBiryani.name}
                          </h4>
                          <span className="font-serif text-3xl font-black text-cream">
                            ₹{leadMuttonBiryani.price}
                          </span>
                        </div>
                        <span className="text-[11px] uppercase tracking-widest text-limeAccent font-mono block mt-1">
                          {leadMuttonBiryani.quantity}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex items-center justify-between gap-4 border-t border-white/10 bg-forest-900">
                      <p className="text-xs text-cream/70 font-light max-w-sm line-clamp-2">
                        {leadMuttonBiryani.description}
                      </p>
                      <a
                        href={getItemWhatsAppUrl(leadMuttonBiryani)}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="ORDER"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-cream hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-[#25D366]/40 flex-shrink-0 active:scale-95"
                      >
                        <MessageCircle className="w-4 h-4 fill-current text-limeAccent" />
                        <span>WHATSAPP →</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Other Lunch Dishes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherLunch.map((item) => (
                  <MenuCard
                    key={`lu-grid-${item.id}`}
                    item={item}
                    onOpenPreview={onOpenPreview}
                  />
                ))}
              </div>
            </section>

            {/* ---------------------------------------------------------- */}
            {/* 3. DINNER: Chicken/Mutton/Fish Fries, Gravies, Naans      */}
            {/* ---------------------------------------------------------- */}
            <section id="dinner" className="scroll-mt-32">
              <div className="mb-8 pb-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-bold block mb-1">
                    EVENING DELIGHTS
                  </span>
                  <h3 className="font-serif font-black text-4xl sm:text-5xl text-cream uppercase tracking-tight">
                    DINNER
                  </h3>
                  <p className="font-editorial italic text-cream/70 text-base mt-1">
                    "Sizzling pan-roasts, rich butter gravies, fresh naans, and homestyle specials."
                  </p>
                </div>
                <span className="text-xs text-terracotta bg-white/5 px-3 py-1 rounded-full border border-terracotta/30 self-start sm:self-auto font-mono">
                  {dinnerItems.length} Dishes
                </span>
              </div>

              {/* Highlight Cards: Chicken Fry & Paneer Butter Masala */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {leadChickenFry && (
                  <div className="rounded-3xl overflow-hidden bg-forest-900 border border-white/15 shadow-2xl flex flex-col group">
                    <div
                      className="relative h-72 sm:h-80 w-full overflow-hidden bg-forest-950 cursor-pointer"
                      onClick={() => onOpenPreview(leadChickenFry)}
                      data-cursor="VIEW"
                    >
                      <img
                        src={leadChickenFry.image}
                        alt={leadChickenFry.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
                      
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-forest-950/80 text-limeAccent border border-limeAccent/30 backdrop-blur-md">
                          KITCHEN SPECIAL
                        </span>
                      </div>

                      <div className="absolute bottom-5 left-5 right-5 text-cream">
                        <div className="flex items-baseline justify-between gap-4">
                          <h4 className="font-serif text-3xl font-bold uppercase tracking-tight">
                            {leadChickenFry.name}
                          </h4>
                          <span className="font-serif text-3xl font-black text-cream">
                            ₹{leadChickenFry.price}
                          </span>
                        </div>
                        <span className="text-[11px] uppercase tracking-widest text-limeAccent font-mono block mt-1">
                          {leadChickenFry.quantity}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex items-center justify-between gap-4 border-t border-white/10 bg-forest-900">
                      <p className="text-xs text-cream/70 font-light max-w-sm line-clamp-2">
                        {leadChickenFry.description}
                      </p>
                      <a
                        href={getItemWhatsAppUrl(leadChickenFry)}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="ORDER"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-cream hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-[#25D366]/40 flex-shrink-0 active:scale-95"
                      >
                        <MessageCircle className="w-4 h-4 fill-current text-limeAccent" />
                        <span>WHATSAPP →</span>
                      </a>
                    </div>
                  </div>
                )}

                {leadPaneer && (
                  <div className="rounded-3xl overflow-hidden bg-forest-900 border border-white/15 shadow-2xl flex flex-col group">
                    <div
                      className="relative h-72 sm:h-80 w-full overflow-hidden bg-forest-950 cursor-pointer"
                      onClick={() => onOpenPreview(leadPaneer)}
                      data-cursor="VIEW"
                    >
                      <img
                        src={leadPaneer.image}
                        alt={leadPaneer.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
                      
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-forest-950/80 text-limeAccent border border-limeAccent/30 backdrop-blur-md">
                          PURE VEGETARIAN
                        </span>
                      </div>

                      <div className="absolute bottom-5 left-5 right-5 text-cream">
                        <div className="flex items-baseline justify-between gap-4">
                          <h4 className="font-serif text-3xl font-bold uppercase tracking-tight">
                            {leadPaneer.name}
                          </h4>
                          <span className="font-serif text-3xl font-black text-cream">
                            ₹{leadPaneer.price}
                          </span>
                        </div>
                        <span className="text-[11px] uppercase tracking-widest text-limeAccent font-mono block mt-1">
                          {leadPaneer.quantity}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex items-center justify-between gap-4 border-t border-white/10 bg-forest-900">
                      <p className="text-xs text-cream/70 font-light max-w-sm line-clamp-2">
                        {leadPaneer.description}
                      </p>
                      <a
                        href={getItemWhatsAppUrl(leadPaneer)}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="ORDER"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-cream hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-[#25D366]/40 flex-shrink-0 active:scale-95"
                      >
                        <MessageCircle className="w-4 h-4 fill-current text-limeAccent" />
                        <span>WHATSAPP →</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Other Dinner Dishes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherDinner.map((item) => (
                  <MenuCard
                    key={`din-grid-${item.id}`}
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
