import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, MessageCircle, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/business';
import { allMenuItems } from '../data/menu';

export default function Hero3DWorld({ onOpenContact, onOpenPreview }) {
  const containerRef = useRef(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Smooth lerp tracking for 60fps parallax
  const targetOffset = useRef({ x: 0, y: 0 });
  const currentOffset = useRef({ x: 0, y: 0 });
  const animFrameId = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Normalized between -1 and 1 from center
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
      // Smooth interpolation (lerp factor 0.055)
      currentOffset.current.x += (targetOffset.current.x - currentOffset.current.x) * 0.055;
      currentOffset.current.y += (targetOffset.current.y - currentOffset.current.y) * 0.055;

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

  // Selected dishes
  const chickenBiryani = allMenuItems.find((i) => i.id === 'nv-6') || allMenuItems[0];
  const chickenFry = allMenuItems.find((i) => i.id === 'nv-1') || allMenuItems[1];
  const dosa = allMenuItems.find((i) => i.id === 'bf-4') || allMenuItems[2];
  const idly = allMenuItems.find((i) => i.id === 'bf-1') || allMenuItems[3];
  const fishFry = allMenuItems.find((i) => i.id === 'nv-9') || allMenuItems[4];
  const vada = allMenuItems.find((i) => i.id === 'bf-5') || allMenuItems[5];
  const paneer = allMenuItems.find((i) => i.id === 're-4') || allMenuItems[6];

  // Parallax calculations opposite to cursor direction
  // Layer 1: Background (2–5px)
  const l1X = mouseOffset.x * -4;
  const l1Y = mouseOffset.y * -4 + scrollY * 0.15;

  // Layer 2: Midground (8–15px)
  const l2X = mouseOffset.x * -14;
  const l2Y = mouseOffset.y * -14 + scrollY * 0.35;
  const l2RotX = mouseOffset.y * 3;
  const l2RotY = mouseOffset.x * -3;

  // Layer 3: Foreground (16–25px)
  const l3X = mouseOffset.x * -24;
  const l3Y = mouseOffset.y * -24 + scrollY * 0.6;
  const l3RotX = mouseOffset.y * 6;
  const l3RotY = mouseOffset.x * -6;

  // Scroll opacity fade for headline
  const headlineOpacity = Math.max(0, 1 - scrollY / 600);
  const headlineY = scrollY * 0.25;

  const scrollToMenu = () => {
    const el = document.getElementById('menu-intro') || document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[100svh] min-h-[760px] h-screen w-full flex items-center justify-center overflow-hidden bg-forest-950 select-none"
      style={{ perspective: '1100px' }}
    >
      {/* ============================================================ */}
      {/* 3D LIGHTING & CINEMATIC ATMOSPHERE                           */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Very Dark Forest Green with Espresso, Olive & Sage Tones */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 45%, rgba(20, 38, 26, 0.5) 0%, rgba(14, 25, 18, 0.7) 45%, #060F0A 85%)',
          }}
        />

        {/* Subtle Warm Espresso Glow from Bottom-Right */}
        <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(38,22,14,0.4)_0%,_transparent_70%)] blur-3xl" />

        {/* Subtle Sage Glow from Top-Left */}
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(22,42,28,0.45)_0%,_transparent_70%)] blur-3xl" />

        {/* Global Cinematic Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_#060F0A_95%)]" />
      </div>

      {/* ============================================================ */}
      {/* LAYER 1 — BACKGROUND (Z: -180px, Blurred, Low Opacity)        */}
      {/* ============================================================ */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] will-change-transform"
        style={{
          transform: `translate3d(${l1X}px, ${l1Y}px, -180px) scale(1.18)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Giant Biryani: Far-Right Background */}
        <div className="absolute -top-24 -right-28 sm:-right-16 w-80 sm:w-[480px] md:w-[600px] aspect-square rounded-full overflow-hidden opacity-20 filter blur-[8px] brightness-[0.35] saturate-[0.65] rotate-[-12deg]">
          <img
            src="/assets/food/chicken-biryani.webp"
            onError={(e) => { e.currentTarget.src = '/assets/food/chicken-biryani.jpg'; }}
            alt="Biryani environmental backdrop"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Giant Curry: Far-Left Background */}
        <div className="absolute -top-20 -left-28 sm:-left-20 w-80 sm:w-[440px] md:w-[560px] aspect-square rounded-full overflow-hidden opacity-18 filter blur-[8px] brightness-[0.32] saturate-[0.6] rotate-[14deg]">
          <img
            src="/assets/food/chicken-gravy.webp"
            onError={(e) => { e.currentTarget.src = '/assets/food/chicken-gravy.jpg'; }}
            alt="Curry environmental backdrop"
            className="w-full h-full object-cover"
          />
        </div>

        {/* South Indian Meals Texture: Bottom-Left Edge */}
        <div className="absolute -bottom-32 -left-24 sm:-left-16 w-80 sm:w-[500px] md:w-[620px] aspect-square rounded-full overflow-hidden opacity-20 filter blur-[8px] brightness-[0.32] saturate-[0.6] rotate-[-8deg]">
          <img
            src="/assets/food/meals.webp"
            onError={(e) => { e.currentTarget.src = '/assets/food/meals.jpg'; }}
            alt="Meals environmental backdrop"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ============================================================ */}
      {/* LAYER 2 — MIDGROUND (Z: 0px, Outside Center Safe Zone)        */}
      {/* Strictly occupies Left 25% and Right 25%. Never covers text. */}
      {/* ============================================================ */}
      <div
        className="absolute inset-0 pointer-events-none z-[5] will-change-transform"
        style={{
          transform: `translate3d(${l2X}px, ${l2Y}px, 0px) rotateX(${l2RotX}deg) rotateY(${l2RotY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* 1. CHICKEN FRY: Large, Top-Left (around 10 o'clock) */}
        <div
          className="absolute left-[2%] sm:left-[5%] lg:left-[8%] top-[14%] sm:top-[18%] pointer-events-auto"
          onClick={() => onOpenPreview(chickenFry)}
        >
          <div className="group relative cursor-pointer animate-float-1 transition-transform duration-500 hover:scale-105">
            <div className="w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 drop-shadow-3d-lg overflow-hidden organic-food-mask rotate-[-5deg] group-hover:rotate-0 transition-all duration-700">
              <img
                src="/assets/food/chicken-fry.webp"
                onError={(e) => { e.currentTarget.src = '/assets/food/chicken-fry.jpg'; }}
                alt="Chicken Fry"
                className="w-full h-full object-cover brightness-[0.92] contrast-[1.08] group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* 2. CRISPY DOSA: Large, Bottom-Left (around 8 o'clock) */}
        <div
          className="absolute left-[2%] sm:left-[6%] lg:left-[9%] bottom-[12%] sm:bottom-[16%] pointer-events-auto"
          onClick={() => onOpenPreview(dosa)}
        >
          <div className="group relative cursor-pointer animate-float-2 transition-transform duration-500 hover:scale-105">
            <div className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 drop-shadow-3d-lg overflow-hidden organic-food-mask rotate-[5deg] group-hover:rotate-0 transition-all duration-700">
              <img
                src="/assets/food/dosa.webp"
                onError={(e) => { e.currentTarget.src = '/assets/food/dosa.jpg'; }}
                alt="Dosa"
                className="w-full h-full object-cover brightness-[0.9] contrast-[1.05] group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* 3. CHICKEN BIRYANI: Large, Right Side (around 3:30 o'clock) */}
        <div
          className="absolute right-[2%] sm:left-auto sm:right-[5%] lg:right-[8%] top-[38%] sm:top-[42%] pointer-events-auto"
          onClick={() => onOpenPreview(chickenBiryani)}
        >
          <div className="group relative cursor-pointer animate-float-3 transition-transform duration-500 hover:scale-105">
            <div className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 drop-shadow-3d-lg overflow-hidden organic-food-mask rotate-[-4deg] group-hover:rotate-0 transition-all duration-700">
              <img
                src="/assets/food/chicken-biryani.webp"
                onError={(e) => { e.currentTarget.src = '/assets/food/chicken-biryani.jpg'; }}
                alt="Chicken Biryani"
                className="w-full h-full object-cover brightness-[0.92] contrast-[1.08] group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* 4. FISH FRY: Medium, Top-Right (around 1:30 o'clock) */}
        <div
          className="hidden sm:block absolute right-[4%] lg:right-[8%] top-[14%] sm:top-[16%] pointer-events-auto"
          onClick={() => onOpenPreview(fishFry)}
        >
          <div className="group relative cursor-pointer animate-float-2 transition-transform duration-500 hover:scale-105">
            <div className="w-32 h-32 md:w-44 md:h-44 drop-shadow-3d-md overflow-hidden organic-food-mask rotate-[6deg] group-hover:rotate-0 transition-all duration-700">
              <img
                src="/assets/food/fish-fry.webp"
                onError={(e) => { e.currentTarget.src = '/assets/food/fish-fry.jpg'; }}
                alt="Fish Fry"
                className="w-full h-full object-cover brightness-[0.88] contrast-[1.05] group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* 5. IDLY: Medium, Bottom-Right (around 5 o'clock) */}
        <div
          className="hidden sm:block absolute right-[4%] lg:right-[9%] bottom-[12%] sm:bottom-[15%] pointer-events-auto"
          onClick={() => onOpenPreview(idly)}
        >
          <div className="group relative cursor-pointer animate-float-1 transition-transform duration-500 hover:scale-105">
            <div className="w-28 h-28 md:w-40 md:h-40 drop-shadow-3d-md overflow-hidden organic-food-mask rotate-[-3deg] group-hover:rotate-0 transition-all duration-700">
              <img
                src="/assets/food/idly.webp"
                onError={(e) => { e.currentTarget.src = '/assets/food/idly.jpg'; }}
                alt="Idly"
                className="w-full h-full object-cover brightness-[0.9] contrast-[1.05] group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* 6. PANEER BUTTER MASALA: Small, Upper-Right Edge */}
        <div
          className="hidden lg:block absolute right-[22%] top-[8%] pointer-events-auto"
          onClick={() => onOpenPreview(paneer)}
        >
          <div className="group relative cursor-pointer animate-float-3 transition-transform duration-500 hover:scale-105">
            <div className="w-28 h-28 drop-shadow-3d-md overflow-hidden organic-food-mask rotate-[4deg]">
              <img
                src="/assets/food/paneer-butter-masala.webp"
                onError={(e) => { e.currentTarget.src = '/assets/food/paneer-butter-masala.jpg'; }}
                alt="Paneer Butter Masala"
                className="w-full h-full object-cover brightness-[0.88] contrast-[1.05]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* LAYER 3 — FOREGROUND (Z: +70px, Small Peripheral Elements)    */}
      {/* ============================================================ */}
      <div
        className="absolute inset-0 pointer-events-none z-[8] will-change-transform hidden md:block"
        style={{
          transform: `translate3d(${l3X}px, ${l3Y}px, 70px) rotateX(${l3RotX}deg) rotateY(${l3RotY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Small Crisp Medu Vada: Bottom-Left Periphery */}
        <div
          className="absolute left-[18%] bottom-[6%] pointer-events-auto"
          onClick={() => onOpenPreview(vada)}
        >
          <div className="group relative cursor-pointer animate-float-3 transition-transform duration-500 hover:scale-110">
            <div className="w-20 h-20 lg:w-26 lg:h-26 drop-shadow-3d-fg overflow-hidden organic-food-mask rotate-[8deg]">
              <img
                src="/assets/food/vada.webp"
                onError={(e) => { e.currentTarget.src = '/assets/food/vada.jpg'; }}
                alt="Crispy Vada"
                className="w-full h-full object-cover brightness-[0.95] contrast-[1.1]"
              />
            </div>
          </div>
        </div>

        {/* Small Chicken piece / Ghee Rice accent: Bottom-Right Periphery */}
        <div
          className="absolute right-[22%] bottom-[7%] pointer-events-auto"
          onClick={() => onOpenPreview(chickenFry)}
        >
          <div className="group relative cursor-pointer animate-float-1 transition-transform duration-500 hover:scale-110">
            <div className="w-20 h-20 lg:w-26 lg:h-26 drop-shadow-3d-fg overflow-hidden organic-food-mask rotate-[-10deg]">
              <img
                src="/assets/food/chicken-fry.webp"
                onError={(e) => { e.currentTarget.src = '/assets/food/chicken-fry.jpg'; }}
                alt="Chicken Specialty"
                className="w-full h-full object-cover brightness-[0.95] contrast-[1.1]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MAIN TEXT — PERFECTLY CENTERED IN DEDICATED SAFE ZONE        */}
      {/* Reserve center 45-50% of viewport. Zero food collisions.     */}
      {/* ============================================================ */}
      <div
        className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center pointer-events-auto"
        style={{
          opacity: headlineOpacity,
          transform: `translate3d(0, ${headlineY}px, 20px)`,
        }}
      >
        {/* Subtle Dark Atmospheric Backing Gradient Behind Safe Zone */}
        <div className="absolute -inset-8 sm:-inset-16 bg-[radial-gradient(ellipse_at_center,_rgba(6,15,10,0.85)_0%,_rgba(6,15,10,0.65)_50%,_transparent_80%)] -z-10 pointer-events-none rounded-full blur-xl" />

        {/* Brand Tagline: Small Editorial Pill Above Headline */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900/70 border border-white/15 text-limeAccent text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] mb-6 backdrop-blur-md shadow-sm">
          <Sparkles className="w-3 h-3 text-limeAccent" />
          <span>AUTHENTIC TASTE • MADE WITH LOVE</span>
        </div>

        {/* The Headline (Strictly: GOOD FOOD. / FEELS LIKE HOME.) */}
        <h1 className="font-serif text-cream uppercase select-none mb-6">
          {/* Line 1: GOOD FOOD. (Slightly larger, high contrast bold) */}
          <span className="block font-bold tracking-tight text-[clamp(3.5rem,8.5vw,8.5rem)] leading-[0.9] drop-shadow-lg text-cream">
            GOOD FOOD.
          </span>

          {/* Line 2: FEELS LIKE HOME. (Italic editorial serif) */}
          <span className="block font-normal italic tracking-tight text-[clamp(3rem,7.5vw,7.5rem)] leading-[0.94] drop-shadow-lg text-cream/90 mt-1 sm:mt-2">
            FEELS LIKE HOME.
          </span>
        </h1>

        {/* Subtitle: Maximum 2 Lines, Warm Cream, 85% Opacity */}
        <p className="text-base sm:text-lg md:text-xl text-cream/85 max-w-md mx-auto font-light leading-snug mb-8 drop-shadow">
          Authentic homemade food,
          <br className="hidden sm:inline" /> prepared fresh with care.
        </p>

        {/* Two Clean, Elegant CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
          {/* EXPLORE MENU Button (Cream/Transparent border) */}
          <button
            onClick={scrollToMenu}
            data-cursor="MENU"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/15 text-cream font-semibold text-xs uppercase tracking-widest border border-white/25 hover:border-limeAccent/60 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            <span>EXPLORE MENU</span>
            <ArrowDown className="w-3.5 h-3.5 text-limeAccent group-hover:translate-y-0.5 transition-transform" />
          </button>

          {/* WHATSAPP Button (Subtle Green Accent, Sleek) */}
          <button
            onClick={() => onOpenContact('whatsapp')}
            data-cursor="ORDER"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-cream hover:text-white font-bold text-xs uppercase tracking-wider border border-[#25D366]/40 hover:border-transparent backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            <MessageCircle className="w-4 h-4 fill-current text-limeAccent group-hover:text-white transition-colors" />
            <span>ORDER VIA WHATSAPP</span>
          </button>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt at the Bottom */}
      <div
        onClick={scrollToMenu}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-cream/40 hover:text-limeAccent cursor-pointer transition-colors"
      >
        <span className="text-[10px] tracking-widest uppercase font-mono">Scroll to Explore</span>
        <ArrowDown className="w-3 h-3 animate-bounce" />
      </div>
    </section>
  );
}
