import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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

  const handleOpenContact = (mode = 'call') => {
    setContactModal({ isOpen: true, mode });
  };

  const handleCloseContact = () => {
    setContactModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-cream-100 dark:bg-charcoal-900 text-cocoa-900 dark:text-cream-50 flex flex-col font-sans selection:bg-gold selection:text-charcoal-950 overflow-x-hidden transition-colors duration-200">
      {/* Header / Navbar with Light/Dark Mode Toggle & Brand */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Experience */}
      <main className="flex-1">
        {/* 1. Master Redesign Hero */}
        <Hero onOpenContact={handleOpenContact} />

        {/* 2. Structured Food Menu (Breakfast, Lunch, Dinner with Category Tabs & Search) */}
        <MenuSection onOpenPreview={(item) => setPreviewItem(item)} />

        {/* 3. 3-Step Simple Order Guide */}
        <HowToOrder />

        {/* 4. Why Choose ARFU Homemade Foods */}
        <WhyUs />

        {/* 5. Contact Lines Section (Dual Numbers, Zero Address) */}
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
