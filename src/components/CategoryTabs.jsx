import React from 'react';

const CATEGORIES = [
  { id: 'all', label: 'ALL' },
  { id: 'breakfast', label: 'BREAKFAST' },
  { id: 'lunch', label: 'LUNCH' },
  { id: 'dinner', label: 'DINNER' },
];

export default function CategoryTabs({ activeCategory, onSelectCategory }) {
  return (
    <nav
      aria-label="Menu categories"
      className="sticky top-[60px] z-30 bg-forest-950/90 backdrop-blur-xl py-3 border-y border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-1.5 sm:gap-2.5 py-1">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex-shrink-0 inline-flex items-center px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200 border whitespace-nowrap ${
                  isActive
                    ? 'bg-cream text-forest-950 border-cream shadow-md'
                    : 'bg-transparent text-cream/70 hover:text-cream border-transparent hover:border-white/20'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
