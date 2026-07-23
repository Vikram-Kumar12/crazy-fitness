// ============================================================
// BUSINESS INFO — single source for NAP, contact & socials.
// Replace placeholder values with real business data.
// ============================================================

export const business = {
  name: "Crazy Fitness Gym",
  shortName: "Crazy Fitness",
  tagline: "Train Insane. Or Remain The Same.",
  description:
    "A premium strength & conditioning gym engineered for people who refuse average. State-of-the-art equipment, elite coaching, and an atmosphere built to make you unstoppable.",
  foundedYear: 2016,

  phoneDisplay: "+91 98765 43210",
  phone: "+919876543210",
  whatsapp: "919876543210",
  email: "hello@crazyfitnessgym.com",

  address: {
    line1: "3rd Floor, Iron Peak Tower",
    line2: "MG Road, Sector 14",
    city: "Gurugram",
    state: "Haryana",
    zip: "122001",
    country: "India",
  },

  // Approx coordinates for the embedded map (placeholder)
  geo: { lat: 28.4595, lng: 77.0266 },
  mapEmbed:
    "https://www.google.com/maps?q=Gurugram%2C%20Haryana&output=embed",
  mapLink: "https://maps.google.com/?q=Crazy+Fitness+Gym+Gurugram",

  hours: [
    { day: "Mon – Fri", time: "5:00 AM – 11:00 PM" },
    { day: "Saturday", time: "6:00 AM – 10:00 PM" },
    { day: "Sunday", time: "7:00 AM – 2:00 PM" },
  ],

  socials: [
    { label: "Instagram", href: "https://www.instagram.com/crazyfitnessgym_ranchi/", icon: "instagram" },
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
    { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
    { label: "X", href: "https://x.com", icon: "twitter" },
  ],

  rating: { score: 4.9, count: 1280, source: "Google Reviews" },
};

export const whatsappLink = (
  text = "Hi Crazy Fitness Gym! I'd like to know more about your memberships."
) => `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;

export const telLink = `tel:${business.phone}`;
export const mailLink = `mailto:${business.email}`;
