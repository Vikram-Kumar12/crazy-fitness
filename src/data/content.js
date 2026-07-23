// ============================================================
// SITE CONTENT — stats, facilities, plans, trainers, testimonials,
// FAQs, gallery. All imagery uses remote placeholders that can be
// swapped for local WebP files in /public/images.
// ============================================================

import {
  Dumbbell,
  HeartPulse,
  Timer,
  Users,
  Flame,
  Bike,
  Waves,
  Sparkles,
  ShieldCheck,
  Salad,
  Music,
  ParkingCircle,
} from "lucide-react";

// ---- Hero / headline stats -------------------------------------------
export const stats = [
  { value: 12, suffix: "K+", label: "Members Transformed" },
  { value: 45, suffix: "+", label: "Expert Trainers" },
  { value: 8, suffix: "", label: "Years of Excellence" },
  { value: 100, suffix: "+", label: "Weekly Classes" },
];

// ---- Value props / About --------------------------------------------
export const pillars = [
  {
    icon: Dumbbell,
    title: "Elite Equipment",
    text: "Hammer Strength, Rogue & Technogym machines maintained to competition standard.",
  },
  {
    icon: Users,
    title: "Certified Coaches",
    text: "Every trainer is internationally certified with a proven transformation record.",
  },
  {
    icon: HeartPulse,
    title: "Data-Driven Plans",
    text: "InBody scans and progress tracking so every session moves the needle.",
  },
  {
    icon: ShieldCheck,
    title: "Recovery First",
    text: "Ice baths, sauna and physio on-site to keep you training, not straining.",
  },
];

// ---- Facilities ------------------------------------------------------
export const facilities = [
  {
    icon: Dumbbell,
    title: "Strength Zone",
    text: "3,000 sq ft of free weights, racks and platforms for serious lifting.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80&auto=format&fit=crop",
    tall: true,
  },
  {
    icon: Bike,
    title: "Cardio Theatre",
    text: "Curved treadmills, assault bikes and stair-climbers facing a media wall.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Flame,
    title: "HIIT Arena",
    text: "Functional turf, sleds and rigs built for high-intensity conditioning.",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Waves,
    title: "Recovery Spa",
    text: "Sauna, cold plunge and massage suites for full-body recovery.",
    image:
      "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=1200&q=80&auto=format&fit=crop",
    tall: true,
  },
  {
    icon: Music,
    title: "Studio X",
    text: "Yoga, spin and dance classes in an acoustically-tuned immersive studio.",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Salad,
    title: "Fuel Bar",
    text: "Protein shakes, cold-pressed juices and macro-balanced meals on demand.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80&auto=format&fit=crop",
  },
];

export const amenities = [
  { icon: ParkingCircle, label: "Free Parking" },
  { icon: ShieldCheck, label: "24/7 Security" },
  { icon: Sparkles, label: "Towel Service" },
  { icon: Timer, label: "24-Hour Access" },
];

// ---- Membership plans ------------------------------------------------
export const plans = [
  {
    name: "Starter",
    tagline: "Get moving",
    monthly: 1499,
    yearly: 14990,
    highlight: false,
    features: [
      "Full gym floor access",
      "2 group classes / week",
      "Locker & shower access",
      "Fitness assessment",
      "Mobile app tracking",
    ],
    cta: "Start Now",
  },
  {
    name: "Pro",
    tagline: "Most popular",
    monthly: 2999,
    yearly: 29990,
    highlight: true,
    features: [
      "Everything in Starter",
      "Unlimited group classes",
      "2 PT sessions / month",
      "InBody body composition scan",
      "Recovery spa access",
      "Nutrition guidance",
    ],
    cta: "Go Pro",
  },
  {
    name: "Elite",
    tagline: "All-access",
    monthly: 5499,
    yearly: 54990,
    highlight: false,
    features: [
      "Everything in Pro",
      "Unlimited personal training",
      "Custom nutrition plan",
      "Priority class booking",
      "Guest passes (2/month)",
      "Dedicated locker",
    ],
    cta: "Go Elite",
  },
];

// ---- Trainers --------------------------------------------------------
export const trainers = [
  {
    name: "Arjun Mehra",
    role: "Head Strength Coach",
    specialty: "Powerlifting · Hypertrophy",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "Sara Kapoor",
    role: "Performance Coach",
    specialty: "HIIT · Mobility",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "Dev Sharma",
    role: "Conditioning Specialist",
    specialty: "Athletic · Fat Loss",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "Nisha Rao",
    role: "Yoga & Recovery Lead",
    specialty: "Yoga · Breathwork",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=80&auto=format&fit=crop",
  },
];

// ---- Testimonials ----------------------------------------------------
export const testimonials = [
  {
    name: "Rohan Verma",
    role: "Member since 2021",
    rating: 5,
    quote:
      "Lost 18kg in six months. The coaching is on another level — they track everything and never let you plateau.",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    name: "Ananya Singh",
    role: "Marathon Runner",
    rating: 5,
    quote:
      "The recovery spa alone is worth the membership. Cold plunge after leg day is life-changing.",
    avatar: "https://i.pravatar.cc/120?img=45",
  },
  {
    name: "Karan Malhotra",
    role: "Member since 2019",
    rating: 5,
    quote:
      "Cleanest, best-equipped gym I've trained in across three cities. Feels like a premium brand, not a local gym.",
    avatar: "https://i.pravatar.cc/120?img=33",
  },
  {
    name: "Priya Nair",
    role: "New Mom · Transformation",
    rating: 5,
    quote:
      "Got my strength back post-pregnancy with a plan built just for me. The trainers genuinely care.",
    avatar: "https://i.pravatar.cc/120?img=20",
  },
  {
    name: "Aditya Joshi",
    role: "Powerlifter",
    rating: 5,
    quote:
      "Competition-grade platforms and calibrated plates. Finally a gym that takes strength seriously.",
    avatar: "https://i.pravatar.cc/120?img=51",
  },
];

// ---- FAQ -------------------------------------------------------------
export const faqs = [
  {
    q: "Do you offer a free trial?",
    a: "Yes. Every new visitor gets a complimentary day pass including a facility tour and a fitness assessment. Just book through the contact form or WhatsApp us.",
  },
  {
    q: "What are your operating hours?",
    a: "We're open 5:00 AM – 11:00 PM on weekdays, 6:00 AM – 10:00 PM on Saturdays, and 7:00 AM – 2:00 PM on Sundays. Elite members enjoy 24-hour access.",
  },
  {
    q: "Can I freeze my membership?",
    a: "Absolutely. Pro and Elite plans can be frozen for up to 60 days per year at no cost — perfect for travel or recovery.",
  },
  {
    q: "Do you provide personal training?",
    a: "Yes. Personal training is included in Pro and Elite plans, and available as add-ons for Starter members. All our trainers are internationally certified.",
  },
  {
    q: "Is there parking available?",
    a: "We offer free, secure covered parking for all members, with dedicated valet during peak hours.",
  },
  {
    q: "What safety and hygiene measures are in place?",
    a: "The facility is sanitised multiple times daily, equipment stations have wipe dispensers, and we maintain 24/7 security with medical staff on call.",
  },
];

// ---- Gallery ---------------------------------------------------------
// Items are either images (default) or videos (type: "video" with a poster).
export const galleryCategories = ["All", "Videos", "Strength", "Cardio", "Classes", "Recovery"];

export const gallery = [
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&q=80&auto=format&fit=crop", category: "Strength", w: 4, h: 5, alt: "Athlete lifting a loaded barbell in the strength zone" },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/3125907/3125907-uhd_2560_1440_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1000&q=80&auto=format&fit=crop",
    category: "Strength",
    w: 4, h: 4,
    alt: "Battle rope conditioning workout",
  },
  { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1000&q=80&auto=format&fit=crop", category: "Classes", w: 4, h: 3, alt: "Group fitness class in session" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000&q=80&auto=format&fit=crop", category: "Cardio", w: 4, h: 4, alt: "Rows of treadmills in the cardio theatre" },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/2795750/2795750-hd_1920_1080_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1000&q=80&auto=format&fit=crop",
    category: "Cardio",
    w: 4, h: 5,
    alt: "Cardio training session in progress",
  },
  { src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1000&q=80&auto=format&fit=crop", category: "Strength", w: 4, h: 3, alt: "Dumbbell rack in the free-weights area" },
  { src: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=1000&q=80&auto=format&fit=crop", category: "Recovery", w: 4, h: 5, alt: "Recovery spa and sauna" },
  { src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=1000&q=80&auto=format&fit=crop", category: "Classes", w: 4, h: 4, alt: "Yoga studio class" },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/4804789/4804789-hd_1920_1080_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=1000&q=80&auto=format&fit=crop",
    category: "Classes",
    w: 4, h: 3,
    alt: "Members working out together in a training session",
  },
  { src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1000&q=80&auto=format&fit=crop", category: "Cardio", w: 4, h: 3, alt: "Member training on an assault bike" },
  { src: "https://images.unsplash.com/photo-1596357395217-80de13130e92?w=1000&q=80&auto=format&fit=crop", category: "Strength", w: 4, h: 4, alt: "Kettlebells lined up on the functional floor" },
];

// ---- Programs / Classes marquee -------------------------------------
export const programsMarquee = [
  "Strength",
  "Powerlifting",
  "HIIT",
  "CrossFit",
  "Boxing",
  "Yoga",
  "Spin",
  "Mobility",
  "Bodybuilding",
  "Functional",
  "Conditioning",
  "Recovery",
];
