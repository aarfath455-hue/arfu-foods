import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, MessageCircle, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/business';
import { allMenuItems } from '../data/menu';

export default function HeroKitchenTable({ onOpenContact, onOpenPreview }) {
  const containerRef = useRef(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Smooth lerp tracking for natural camera parallax
  const targetOffset = useRef({ x: 0, y: 0 });
  const currentOffset = useRef({ x: 0, y: 0 });
  const animFrameId = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Normalized between -1 and 1
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      targetOffset.current = {
        x: Math.max(-1, Math.min(1, x)),
        y: Math.max(-1, Math.min(1, y)),
      };
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const updatePhysics = () => {
      // Very smooth, subtle camera response (lerp 0.05)
      currentOffset.current.x += (targetOffset.current.x - currentOffset.current.x) * 0.05;
      currentOffset.current.y += (targetOffset.current.y - currentOffset.current.y) * 0.05;

      setMouseOffset({
        x: currentOffset.current.x,
        y: currentOffset.current.y,
      });

      animFrameId.current = requestAnimationFrame(updatePhysics);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    animFrameId.current = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  // Dishes for the table
  const biryani = allMenuItems.find((i) => i.id === 'lu-1') || allMenuItems[0];
  const chickenFry = allMenuItems.find((i) => i.id === 'din-1') || allMenuItems[1];
  const paneer = allMenuItems.find((i) => i.id === 'din-9') || allMenuItems[2];
  const dosa = allMenuItems.find((i) => i.id === 'bf-4') || allMenuItems[3];
  const idly = allMenuItems.find((i) => i.id === 'bf-1') || allMenuItems[4];
  const meals = allMenuItems.find((i) => i.id === 'lu-5') || allMenuItems[5];
  const fishFry = allMenuItems.find((i) => i.id === 'din-7') || allMenuItems[6];

  // Subtle camera tilt calculations (2–3 degrees)
  const camRotateY = mouseOffset.x * 2.8;
  const camRotateX = -mouseOffset.y * 2.2;
  const camTranslateX = mouseOffset.x * -8;
  const camTranslateY = mouseOffset.y * -6 + scrollY * 0.2;

  const scrollToMenu = () => {
    const el = document.getElementById('menu-intro') || document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[100svh] min-h-[760px] h-screen w-full flex flex-col justify-between overflow-hidden bg-forest-950 select-none"
      style={{ perspective: '1100px' }}
    >
      {/* ============================================================ */}
      {/* 1. CINEMATIC KITCHEN ATMOSPHERE & WARM PENDANT LIGHTING      */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Deep Dark Forest Green Kitchen Wall */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060F0A] via-[#09150E] to-[#0D1C13]" />

        {/* Warm Overhead Dining Lamp Beam shining onto the table */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[750px] opacity-75 blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 15%, rgba(255, 185, 90, 0.22) 0%, rgba(200, 140, 60, 0.1) 45%, transparent 75%)',
          }}
        />

        {/* Subtle Green Kitchen Ambient Light */}
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(25,50,32,0.35)_0%,_transparent_70%)] blur-3xl" />
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(25,50,32,0.35)_0%,_transparent_70%)] blur-3xl" />

        {/* Room Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_45%,_#050C08_95%)]" />
      </div>

      {/* ============================================================ */}
      {/* 2. UPPER-MIDDLE AREA: COMPACT ELEGANT BRAND MESSAGE          */}
      {/* The food is the hero. Typography is elegant and focused.      */}
      {/* ============================================================ */}
      <div className="relative z-10 pt-28 sm:pt-24 px-4 sm:px-6 text-center max-w-2xl mx-auto flex flex-col items-center">
        {/* Brand Tagline Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-white/15 text-limeAccent text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] mb-3 backdrop-blur-md">
          <Sparkles className="w-3 h-3 text-limeAccent" />
          <span>AUTHENTIC TASTE • MADE WITH LOVE</span>
        </div>

        {/* Clean, Elegant Serif Heading: AUTHENTIC TASTE. MADE WITH LOVE. */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cream uppercase leading-[0.95] drop-shadow-md">
          AUTHENTIC TASTE. <br />
          <span className="font-normal italic text-cream/90 font-serif">
            MADE WITH LOVE.
          </span>
        </h1>

        {/* Short Subtitle */}
        <p className="text-xs sm:text-sm text-cream/80 max-w-sm mx-auto font-light leading-relaxed mt-2.5 drop-shadow">
          Freshly prepared homemade favourites.
        </p>

        {/* Minimal CTAs */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <button
            onClick={scrollToMenu}
            data-cursor="MENU"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/15 text-cream font-medium text-xs uppercase tracking-widest border border-white/20 hover:border-limeAccent/60 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
          >
            <span>EXPLORE MENU</span>
            <ArrowDown className="w-3 h-3 text-limeAccent" />
          </button>

          <button
            onClick={() => onOpenContact('whatsapp')}
            data-cursor="ORDER"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-cream hover:text-white font-bold text-xs uppercase tracking-wider border border-[#25D366]/40 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current text-limeAccent" />
            <span>WHATSAPP</span>
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. THE 3D KITCHEN DINING TABLE (Bottom 50% of the viewport)   */}
      {/* Dishes physically sit ON the wooden table with contact shadow*/}
      {/* ============================================================ */}
      <div
        className="relative z-10 w-full flex-1 max-h-[58vh] min-h-[380px] overflow-visible will-change-transform mt-auto"
        style={{
          transform: `translate3d(${camTranslateX}px, ${camTranslateY}px, 0px) rotateX(${camRotateX}deg) rotateY(${camRotateY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Dark Aged Wood Table Surface extending from bottom toward center */}
        <div className="absolute inset-x-0 bottom-0 top-12 dining-table-surface rounded-t-[40px] sm:rounded-t-[80px] border-t border-amber-900/30 overflow-hidden">
          {/* Warm center table highlight reflecting overhead lamp */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[radial-gradient(ellipse_at_top,_rgba(240,170,80,0.18)_0%,_transparent_75%)] pointer-events-none" />
          {/* Subtle wood grain runner glow */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-48 sm:w-80 bg-gradient-to-b from-amber-950/20 via-transparent to-black/30 pointer-events-none" />
          {/* Table edge rim drop shadow */}
          <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        </div>

        {/* DISHES PHYSICALLY ARRANGED ON THE DINING TABLE */}
        <div className="relative max-w-6xl mx-auto h-full px-4 sm:px-8">

          {/* -------------------------------------------------------- */}
          {/* 1. CENTER BACK (HERO DISH): CHICKEN BIRYANI + STEAM      */}
          {/* -------------------------------------------------------- */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-[4%] sm:top-[6%] cursor-pointer group z-20"
            onClick={() => onOpenPreview(biryani)}
            style={{ transform: 'scale(0.88)' }}
            title="Chicken Biryani"
          >
            {/* Animated Rising Steam Wisps */}
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 pointer-events-none flex items-center justify-center">
              <div className="w-10 h-16 bg-white/25 rounded-full filter blur-md animate-steam-1 -mr-2" />
              <div className="w-12 h-20 bg-white/20 rounded-full filter blur-lg animate-steam-2" />
              <div className="w-8 h-14 bg-white/25 rounded-full filter blur-md animate-steam-3 -ml-2" />
            </div>

            {/* Oval Contact Shadow beneath plate */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/90 rounded-[50%] blur-md pointer-events-none" />

            {/* Dish Plate on Table */}
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden plate-contact-shadow-lg transition-transform duration-500 group-hover:scale-105">
              <img
                src={biryani.image}
                alt="Chicken Biryani"
                className="w-full h-full object-cover rounded-full brightness-[0.96] contrast-[1.06]"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 via-transparent to-white/10 pointer-events-none" />
            </div>

            {/* Elegant Mini Tag on Hover */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1 rounded-full bg-forest-950/90 border border-white/20 shadow-xl text-[11px] font-serif text-cream whitespace-nowrap">
              Chicken Biryani • ₹{biryani.price}
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* 2. MIDGROUND LEFT: CHICKEN FRY                           */}
          {/* -------------------------------------------------------- */}
          <div
            className="absolute left-[4%] sm:left-[12%] top-[20%] sm:top-[22%] cursor-pointer group z-15"
            onClick={() => onOpenPreview(chickenFry)}
            style={{ transform: 'scale(0.95)' }}
            title="Chicken Fry"
          >
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4/5 h-7 bg-black/90 rounded-[50%] blur-md pointer-events-none" />
            <div className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden plate-contact-shadow transition-transform duration-500 group-hover:scale-105">
              <img
                src={chickenFry.image}
                alt="Chicken Fry"
                className="w-full h-full object-cover rounded-full brightness-[0.94] contrast-[1.08]"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 via-transparent to-white/10 pointer-events-none" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1 rounded-full bg-forest-950/90 border border-white/20 shadow-xl text-[11px] font-serif text-cream whitespace-nowrap">
              Chicken Fry • ₹{chickenFry.price}
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* 3. MIDGROUND RIGHT: PANEER BUTTER MASALA                 */}
          {/* -------------------------------------------------------- */}
          <div
            className="absolute right-[4%] sm:right-[12%] top-[20%] sm:top-[22%] cursor-pointer group z-15"
            onClick={() => onOpenPreview(paneer)}
            style={{ transform: 'scale(0.95)' }}
            title="Paneer Butter Masala"
          >
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4/5 h-7 bg-black/90 rounded-[50%] blur-md pointer-events-none" />
            <div className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden plate-contact-shadow transition-transform duration-500 group-hover:scale-105">
              <img
                src={paneer.image}
                alt="Paneer Butter Masala"
                className="w-full h-full object-cover rounded-full brightness-[0.94] contrast-[1.06]"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 via-transparent to-white/10 pointer-events-none" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1 rounded-full bg-forest-950/90 border border-white/20 shadow-xl text-[11px] font-serif text-cream whitespace-nowrap">
              Paneer Masala • ₹{paneer.price}
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* 4. BACK RIGHT: FISH FRY (Desktop / Tablet)               */}
          {/* -------------------------------------------------------- */}
          <div
            className="hidden sm:block absolute right-[22%] top-[10%] cursor-pointer group z-10"
            onClick={() => onOpenPreview(fishFry)}
            style={{ transform: 'scale(0.82)' }}
            title="Fish Fry"
          >
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-black/90 rounded-[50%] blur-md pointer-events-none" />
            <div className="relative w-32 h-32 sm:w-38 sm:h-38 rounded-full overflow-hidden plate-contact-shadow transition-transform duration-500 group-hover:scale-105">
              <img
                src={fishFry.image}
                alt="Fish Fry"
                className="w-full h-full object-cover rounded-full brightness-[0.9] contrast-[1.05]"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 via-transparent to-white/10 pointer-events-none" />
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* 5. FOREGROUND LEFT (CLOSEST): CRISPY DOSA                */}
          {/* -------------------------------------------------------- */}
          <div
            className="absolute left-[2%] sm:left-[6%] bottom-[4%] sm:bottom-[8%] cursor-pointer group z-30"
            onClick={() => onOpenPreview(dosa)}
            style={{ transform: 'scale(1.15)' }}
            title="Crispy Dosa"
          >
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-5/6 h-9 bg-black/95 rounded-[50%] blur-lg pointer-events-none" />
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden plate-contact-shadow-lg transition-transform duration-500 group-hover:scale-105">
              <img
                src={dosa.image}
                alt="Crispy Dosa"
                className="w-full h-full object-cover rounded-full brightness-[0.95] contrast-[1.08]"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/35 via-transparent to-white/15 pointer-events-none" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1 rounded-full bg-forest-950/90 border border-white/20 shadow-xl text-[11px] font-serif text-cream whitespace-nowrap">
              Roast Dosa • ₹{dosa.price}
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* 6. FOREGROUND CENTER (CLOSEST): FRESH STEAMED IDLY       */}
          {/* -------------------------------------------------------- */}
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-[2%] sm:bottom-[5%] cursor-pointer group z-30"
            onClick={() => onOpenPreview(idly)}
            style={{ transform: 'scale(1.15)' }}
            title="Fresh Idly"
          >
            {/* Subtle idly steam */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 pointer-events-none flex items-center justify-center">
              <div className="w-8 h-12 bg-white/20 rounded-full filter blur-md animate-steam-2" />
            </div>

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-5/6 h-9 bg-black/95 rounded-[50%] blur-lg pointer-events-none" />
            <div className="relative w-36 h-36 sm:w-46 sm:h-46 rounded-full overflow-hidden plate-contact-shadow-lg transition-transform duration-500 group-hover:scale-105">
              <img
                src={idly.image}
                alt="Idly"
                className="w-full h-full object-cover rounded-full brightness-[0.98] contrast-[1.06]"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/30 via-transparent to-white/15 pointer-events-none" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1 rounded-full bg-forest-950/90 border border-white/20 shadow-xl text-[11px] font-serif text-cream whitespace-nowrap">
              Idly (2) • ₹{idly.price}
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* 7. FOREGROUND RIGHT (CLOSEST): SOUTH INDIAN MEALS        */}
          {/* -------------------------------------------------------- */}
          <div
            className="absolute right-[2%] sm:right-[6%] bottom-[4%] sm:bottom-[8%] cursor-pointer group z-30"
            onClick={() => onOpenPreview(meals)}
            style={{ transform: 'scale(1.12)' }}
            title="South Indian Meals"
          >
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-5/6 h-9 bg-black/95 rounded-[50%] blur-lg pointer-events-none" />
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden plate-contact-shadow-lg transition-transform duration-500 group-hover:scale-105">
              <img
                src={meals.image}
                alt="Meals"
                className="w-full h-full object-cover rounded-full brightness-[0.95] contrast-[1.08]"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/35 via-transparent to-white/15 pointer-events-none" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1 rounded-full bg-forest-950/90 border border-white/20 shadow-xl text-[11px] font-serif text-cream whitespace-nowrap">
              South Indian Meals • ₹{meals.price}
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Hint */}
      <div
        onClick={scrollToMenu}
        className="relative z-10 pb-3 flex flex-col items-center gap-1 text-cream/40 hover:text-limeAccent cursor-pointer transition-colors"
      >
        <span className="text-[10px] tracking-widest uppercase font-mono">Scroll for Menu</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
}
