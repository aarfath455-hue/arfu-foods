import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuCardPoster from './components/MenuCardPoster';
import MenuSection from './components/MenuSection';
import HowToOrder from './components/HowToOrder';
import WhyUs from './components/WhyUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ContactModal from './components/ContactModal';
import FoodDetailModal from './components/FoodDetailModal';

export default function App() {
  const [contactModal, setContactModal] = useState({
    isOpen: false,
    mode: 'call', // 'call' or 'whatsapp'
  });

  const [previewItem, setPreviewItem] = useState(null);

  // Handle direct navigation to #menu-card or /menu-card
  useEffect(() => {
    const handleHashOrPath = () => {
      if (
        window.location.hash === '#menu-card' ||
        window.location.pathname === '/menu-card'
      ) {
        setTimeout(() => {
          const el = document.getElementById('menu-card');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
    };

    handleHashOrPath();
    window.addEventListener('hashchange', handleHashOrPath);
    return () => window.removeEventListener('hashchange', handleHashOrPath);
  }, []);

  const handleOpenContact = (mode = 'call') => {
    setContactModal({ isOpen: true, mode });
  };

  const handleCloseContact = () => {
    setContactModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-cream-100 dark:bg-charcoal-900 text-cocoa-900 dark:text-cream-50 flex flex-col font-sans selection:bg-gold selection:text-charcoal-950 overflow-x-hidden transition-colors duration-200">
      {/* Header / Navbar with Light/Dark Mode Toggle & Menu Card Link */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Experience */}
      <main className="flex-1">
        {/* 1. Master Redesign Hero */}
        <Hero onOpenContact={handleOpenContact} />

        {/* 2. Official Menu Card Poster (Zoom Lightbox, Download, Share, Timings) */}
        <MenuCardPoster onOpenContact={handleOpenContact} />

        {/* 3. Structured Food Menu (Breakfast, Lunch, Dinner with Individual Dish Cards & Search) */}
        <MenuSection onOpenPreview={(item) => setPreviewItem(item)} />

        {/* 4. 3-Step Simple Order Guide */}
        <HowToOrder />

        {/* 5. Why Choose ARFU Homemade Foods */}
        <WhyUs />

        {/* 6. Contact Lines Section (Dual Numbers, Zero Address) */}
        <ContactSection onOpenContact={handleOpenContact} />
      </main>

      {/* Footer with Menu Links & Brand Details */}
      <Footer />

      {/* Non-intrusive Floating WhatsApp & Call Quick Actions */}
      <FloatingActions onOpenContact={handleOpenContact} />

      {/* Direct Contact Modal (Call or WhatsApp on both active numbers) */}
      <ContactModal
        isOpen={contactModal.isOpen}
        onClose={handleCloseContact}
        mode={contactModal.mode}
      />

      {/* Food Detail Modal Preview with Direct WhatsApp Ordering */}
      <FoodDetailModal
        item={previewItem}
        onClose={() => setPreviewItem(null)}
      />
    </div>
  );
}
