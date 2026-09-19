// Centralized Aqua Clear Company Information & Configuration
export const COMPANY_CONFIG = {
  name: "Aqua Clear",
  tagline: "Pure Water. Clear Choice.",
  heroSubtext: "Fresh, clean and reliable drinking water delivered to your doorstep.",
  phone: "+92 300 1234567",
  phoneRaw: "+923001234567",
  whatsapp: "+92 300 1234567",
  whatsappRaw: "923001234567",
  whatsappMessage: encodeURIComponent(
    "Hello Aqua Clear, I would like to inquire about your drinking water products and delivery service."
  ),
  email: "support@aquaclear.com",
  address: "Plot 42, Water Industrial Zone, Phase 5, DHA, Karachi, Pakistan",
  businessHours: "Mon - Sat: 8:00 AM - 8:00 PM (Sun: Closed)",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115810.123456!2d67.012345!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM4LjUiTiA2N8KwMDAnNDQuNCJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s",
  socials: {
    facebook: "https://facebook.com/aquaclearwater",
    instagram: "https://instagram.com/aquaclearwater",
    tiktok: "https://tiktok.com/@aquaclearwater",
    linkedin: "https://linkedin.com/company/aquaclearwater",
  },
  products: [
    {
      id: "19l",
      name: "19L Water Bottle",
      size: "19 Liters (5 Gallon)",
      description: "Ideal for homes and offices with convenient refill and delivery options. Compatible with standard water dispensers.",
      suitable: "Homes, Executive Offices, Clinics & Large Families",
      icon: "/Images/b19l.svg",
    },
    {
      id: "12l",
      name: "12L Water Bottle",
      size: "12 Liters (3 Gallon)",
      description: "Compact size with ergonomic handle for easy lifting and convenient kitchen or desk placement.",
      suitable: "Small Apartments, Small Offices, Senior Citizens",
      icon: "/Images/b12l.svg",
    },
    {
      id: "1.5l",
      name: "1.5L Bottled Water",
      size: "1.5 Liters (Pack of 6/12)",
      description: "Convenient drinking water for homes, workplaces, travel, dining tables, and everyday hydration.",
      suitable: "Dining, Travel, Gym, Daily Home Use",
      icon: "/Images/b1_5l.svg",
    },
    {
      id: "500ml",
      name: "500ml Bottled Water",
      size: "500ml (Pack of 12/24)",
      description: "Easy-to-carry single-serve bottled water for individuals, office meetings, conferences, and events.",
      suitable: "On-the-go, Events, Conferences, Hospitality",
      icon: "/Images/b500ml.svg",
    },
  ],
};
