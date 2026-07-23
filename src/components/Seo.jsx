import { Helmet } from "react-helmet-async";
import { business } from "../data/business";

const SITE_URL = "https://www.crazyfitnessgym.com"; // replace with real domain
const DEFAULT_OG =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80&auto=format&fit=crop";

// Reusable head manager: title/description, canonical, Open Graph, Twitter,
// plus optional JSON-LD structured data blocks.
export default function Seo({
  title,
  description = business.description,
  path = "/",
  image = DEFAULT_OG,
  schema,
}) {
  const fullTitle = title
    ? `${title} — ${business.name}`
    : `${business.name} — ${business.tagline}`;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={business.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}

// ---- Structured data builders --------------------------------------
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: business.name,
  description: business.description,
  image: DEFAULT_OG,
  url: SITE_URL,
  telephone: business.phone,
  email: business.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${business.address.line1}, ${business.address.line2}`,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.zip,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.geo.lat,
    longitude: business.geo.lng,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating.score,
    reviewCount: business.rating.count,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "05:00",
      closes: "23:00",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "06:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "07:00", closes: "14:00" },
  ],
};

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});
