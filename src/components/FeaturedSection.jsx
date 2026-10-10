import React from 'react';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { featuredPicks } from '../data/menu';
import { getItemWhatsAppUrl } from '../data/business';

export default function FeaturedSection({ onOpenPreview }) {
  if (!featuredPicks || featuredPicks.length === 0) return null;

  const leadDish = featuredPicks[0]; // e.g. Chicken Fry
  const secondaryDishes = featuredPicks.slice(1, 4); // Chicken Biriyani, Mutton Biriyani, Paneer Butter Masala

  return (
    <section id="featured" className="py-20 bg-forest-900 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/15 text-limeAccent text-xs font-bold tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Signature Highlights</span>
            </div>
            <h2 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-cream tracking-tight uppercase">
              Chef’s Picks
            </h2>
          </div>
          <p className="text-sm text-cream/70 max-w-md font-light leading-relaxed">
            Our most requested homemade specialties, prepared fresh with traditional family recipes and authentic spices.
          </p>
        </div>

        {/* Asymmetrical Editorial Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Hero Featured Card (Spans 7 cols on lg) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-forest-850 border border-white/15 shadow-2xl flex flex-col group">
            <div 
              className="relative h-80 sm:h-96 w-full overflow-hidden cursor-pointer bg-forest-950"
              onClick={() => onOpenPreview(leadDish)}
              data-cursor="VIEW"
              title="Click to view image"
            >
              <img
                src={leadDish.image}
                alt={leadDish.alt || leadDish.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-forest-950/80 text-limeAccent shadow-md border border-limeAccent/40 backdrop-blur-md">
                  Signature Dish
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-cream">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                    {leadDish.name}
                  </h3>
                  <span className="font-serif text-2xl sm:text-3xl font-black text-limeAccent">
                    ₹{leadDish.price}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-cream/70 line-clamp-2 mt-1 font-light">
                  {leadDish.description}
                </p>
              </div>
            </div>

            <div className="p-6 bg-forest-850 flex items-center justify-between gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-cream/50">
                Portion: {leadDish.quantity}
              </span>
              <a
                href={getItemWhatsAppUrl(leadDish)}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="ORDER"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp to Order</span>
              </a>
            </div>
          </div>

          {/* Side Editorial Stack (Spans 5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {secondaryDishes.map((dish) => (
              <div
                key={dish.id}
                className="p-4 sm:p-5 rounded-3xl bg-forest-850 border border-white/10 hover:border-limeAccent/40 shadow-lg transition-all flex items-center gap-4 group"
              >
                <div 
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden flex-shrink-0 bg-forest-950 cursor-pointer relative"
                  onClick={() => onOpenPreview(dish)}
                  data-cursor="VIEW"
                >
                  <img
                    src={dish.image}
                    alt={dish.alt || dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-cream group-hover:text-limeAccent transition-colors truncate">
                      {dish.name}
                    </h4>
                  </div>
                  <span className="text-xs text-cream/50 block mb-1">
                    {dish.quantity}
                  </span>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-serif text-lg font-bold text-cream">
                      ₹{dish.price}
                    </span>
                    <a
                      href={getItemWhatsAppUrl(dish)}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="ORDER"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#25D366] text-cream hover:text-white text-[11px] font-bold tracking-wide uppercase transition-colors border border-white/15"
                      title={`Order ${dish.name} on WhatsApp`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Order</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
