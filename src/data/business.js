/**
 * Business Configuration for ARFU HOMEMADE FOODS
 * 
 * - Digital Menu Only
 * - Two Primary Contact Numbers
 * - CRITICAL: ABSOLUTELY NO ADDRESS ANYWHERE ON THIS SITE.
 */

export const businessInfo = {
  name: "ARFU HOMEMADE FOODS",
  tagline: "Authentic Taste • Made With Love",
  headline: "Homemade Food, Made With Love.",
  subheadline: "Freshly prepared food for your next meal, gathering or special occasion.",

  // Two Primary Contact Phone Numbers
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

  // FSSAI Configuration: Keep empty string until registration number is officially issued.
  fssaiNumber: "",

  // Highlights
  highlights: [
    { title: "Fresh Ingredients", desc: "Prepared with carefully selected ingredients." },
    { title: "Homemade Taste", desc: "Traditional homemade-style preparation." },
    { title: "Made With Care", desc: "Prepared with attention to taste and quality." },
    { title: "Freshly Prepared", desc: "Food prepared fresh for your order." },
  ],

  // 3-Step Simple Order Guide
  orderSteps: [
    {
      step: "01",
      title: "Browse the Menu",
      desc: "Choose your favourite homemade dishes.",
    },
    {
      step: "02",
      title: "Call or WhatsApp",
      desc: "Send us your order directly.",
    },
    {
      step: "03",
      title: "Enjoy Your Food",
      desc: "We'll confirm your order and preparation.",
    },
  ],
};

/**
 * Builds pre-filled WhatsApp ordering link for a food item
 */
export function getItemWhatsAppUrl(item, whatsappNumber = businessInfo.phone1.number) {
  const quantityInfo = item.quantity ? ` (${item.quantity})` : '';
  const message = `Hello ARFU HOMEMADE FOODS,

I would like to order:
${item.name}${quantityInfo}

Price: ₹${item.price}

Please confirm availability.

Thank you.`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * General WhatsApp inquiry link
 */
export function getGeneralWhatsAppUrl(whatsappNumber = businessInfo.phone1.number) {
  const message = `Hello ARFU HOMEMADE FOODS,

I would like to enquire and place an order.

Thank you.`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
