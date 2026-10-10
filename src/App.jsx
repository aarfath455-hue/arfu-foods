import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroKitchenTable from './components/HeroKitchenTable';
import MenuTransition from './components/MenuTransition';
import MenuSection from './components/MenuSection';
import HowToOrder from './components/HowToOrder';
import WhyUs from './components/WhyUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ContactModal from './components/ContactModal';
import FoodDetailModal from './components/FoodDetailModal';
import EditorialNavOverlay from './components/EditorialNavOverlay';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [navOverlayOpen, setNavOverlayOpen] = useState(false);
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
    <div className="min-h-screen bg-forest-950 text-cream flex flex-col font-sans selection:bg-limeAccent selection:text-forest-950 overflow-x-hidden">
      {/* Desktop Custom Interactive Cursor */}
      <CustomCursor />

      {/* Unconventional Minimal Header */}
      <Navbar
        onOpenNavOverlay={() => setNavOverlayOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Full-Screen Editorial Navigation Index Overlay */}
      <EditorialNavOverlay
        isOpen={navOverlayOpen}
        onClose={() => setNavOverlayOpen(false)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Experience */}
      <main className="flex-1">
        {/* 1. ARFU HOMEMADE FOODS — The 3D Kitchen Table Hero */}
        <HeroKitchenTable
          onOpenContact={handleOpenContact}
          onOpenPreview={(item) => setPreviewItem(item)}
        />

        {/* 2. Cinematic Transition: 01 — EXPLORE THE MENU */}
        <MenuTransition />

        {/* 3. Complete Structured Food Menu (Breakfast, Veg, Non-Veg, Lunch, Dinner, Rice & Extras) */}
        <MenuSection
          onOpenPreview={(item) => setPreviewItem(item)}
        />

        {/* 5. 3-Step Simple Order Guide */}
        <HowToOrder />

        {/* 6. Why Choose ARFU Homemade Foods */}
        <WhyUs />

        {/* 7. Dramatic "FEELING HUNGRY?" Contact Section */}
        <ContactSection
          onOpenContact={handleOpenContact}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button (Desktop WhatsApp + Mobile Sticky Bottom Bar) */}
      <FloatingActions
        onOpenContact={handleOpenContact}
      />

      {/* Direct Contact Modal (Displays both +91 94427 91057 and +91 95859 91057) */}
      <ContactModal
        isOpen={contactModal.isOpen}
        onClose={handleCloseContact}
        mode={contactModal.mode}
      />

      {/* Full-Screen Food Detail Modal Preview with Direct WhatsApp Ordering */}
      <FoodDetailModal
        item={previewItem}
        onClose={() => setPreviewItem(null)}
      />
    </div>
  );
}
