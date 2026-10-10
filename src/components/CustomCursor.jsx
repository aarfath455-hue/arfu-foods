import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with pointer fine (disable on touch devices)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check hovered element
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const text = target.getAttribute('data-cursor');
        setCursorText(text || '');
        setIsHovering(true);
      } else {
        setIsHovering(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="custom-cursor hidden md:flex items-center justify-center rounded-full"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {isHovering ? (
        <div className="px-3 py-1.5 rounded-full bg-limeAccent text-forest-950 font-bold text-[10px] uppercase tracking-widest shadow-glow-lime backdrop-blur-md animate-scale border border-white/40 flex items-center justify-center">
          {cursorText}
        </div>
      ) : (
        <div className="w-3.5 h-3.5 rounded-full bg-white/70 border border-white/90 shadow-sm" />
      )}
    </div>
  );
}
