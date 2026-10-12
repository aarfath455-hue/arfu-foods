/**
 * Business Configuration for ARFU HOMEMADE FOODS
 * 
 * - Homemade Food in Ooty
 * - Two Primary Contact Numbers: 9442791057 and 9585991057
 * - STRICT PROHIBITION: ABSOLUTELY NO ADDRESS OR MAP.
 */

export const businessInfo = {
  name: "ARFU HOMEMADE FOODS",
  tagline: "Authentic Taste • Made With Love",
  heroHeadline: "Homemade Goodness. Authentic Taste.",
  heroSubheadline: "Freshly prepared favourites for your stay in Ooty.",

  // Dual Primary Contact Phone Numbers
  phone1: {
    display: "+91 94427 91057",
    tel: "tel:+919442791057",
    number: "9442791057",
    whatsappUrl: "https://wa.me/919442791057",
  },
  phone2: {
    display: "+91 95859 91057",
    tel: "tel:+919585991057",
    number: "9585991057",
    whatsappUrl: "https://wa.me/9585991057",
  },

  // Official Logo asset path
  logo: "/assets/logo.jpg",

  // Truthful Benefits for "Why Choose Us"
  benefits: [
    {
      title: "100% Homemade Preparation",
      desc: "Every dish is cooked fresh with authentic recipes, pure spices, and traditional care — just like home.",
      icon: "UtensilsCrossed",
    },
    {
      title: "Authentic South Indian Flavours",
      desc: "From fluffy steamed idlis to fragrant slow-dum biryanis and roasted gravies, experience genuine homestyle taste.",
      icon: "Sparkles",
    },
    {
      title: "Freshly Cooked to Order",
      desc: "Food is prepared hot and fresh specifically for your order, ensuring optimal flavour, aroma, and hygiene.",
      icon: "Flame",
    },
    {
      title: "Direct WhatsApp Ordering",
      desc: "No complicated apps, carts, or online accounts. Connect directly with our kitchen to confirm your meal in minutes.",
      icon: "MessageCircle",
    },
  ],

  // 3-Step Simple Order Guide
  orderSteps: [
    {
      step: "01",
      title: "Browse the Menu",
      desc: "Choose from our breakfast, lunch, or dinner favourites.",
    },
    {
      step: "02",
      title: "Tap WhatsApp to Order",
      desc: "Send your prefilled dish details directly to our kitchen.",
    },
    {
      step: "03",
      title: "Confirm & Enjoy",
      desc: "We confirm preparation and availability for your order.",
    },
  ],
};

/**
 * Builds pre-filled WhatsApp ordering link for a specific food item
 * Matches: "Hello ARFU HOMEMADE FOODS, I would like to enquire about [Item] ([Quantity]) priced at ₹[Price]. Please confirm availability."
 */
export function getItemWhatsAppUrl(item, whatsappNumber = businessInfo.phone1.number) {
  const quantityInfo = item.quantity ? ` (${item.quantity})` : '';
  const formattedPrice = Number(item.price).toLocaleString('en-IN');
  const message = `Hello ARFU HOMEMADE FOODS, I would like to enquire about ${item.name}${quantityInfo} priced at ₹${formattedPrice}. Please confirm availability.`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * General WhatsApp inquiry link
 */
export function getGeneralWhatsAppUrl(whatsappNumber = businessInfo.phone1.number) {
  const message = `Hello ARFU HOMEMADE FOODS, I would like to enquire about homemade food for my stay in Ooty. Please share today's menu availability. Thank you!`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
