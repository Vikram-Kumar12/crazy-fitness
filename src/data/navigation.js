// Primary navigation. Home-page anchors use hash links; pages use routes.
export const navLinks = [
  { label: "Home", href: "/", section: "home" },
  { label: "About", href: "/about", section: "about" },
  { label: "Membership", href: "/membership", section: "membership" },
  { label: "Facilities", href: "/facilities", section: "facilities" },
  { label: "Gallery", href: "/gallery", section: "gallery" },
  { label: "Testimonials", href: "/#testimonials", section: "testimonials" },
  { label: "Contact", href: "/contact", section: "contact" },
];

// Anchor targets present on the home page, in scroll order — used by the
// navbar active-section indicator.
export const homeSections = [
  "home",
  "about",
  "facilities",
  "membership",
  "trainers",
  "gallery",
  "testimonials",
  "faq",
  "contact",
];
