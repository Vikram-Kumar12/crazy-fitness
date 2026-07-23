import Seo from "../components/Seo";
import PageHero from "../components/ui/PageHero";
import Facilities from "../sections/Facilities";
import GalleryPreview from "../sections/GalleryPreview";
import Contact from "../sections/Contact";

export default function FacilitiesPage() {
  return (
    <>
      <Seo
        title="Facilities"
        path="/facilities"
        description="Explore 22,000 sq ft of premium training space — strength zone, cardio theatre, HIIT arena, recovery spa and more."
      />
      <PageHero
        eyebrow="The space"
        title="Every zone engineered to perform"
        subtitle="Six distinct training environments, built to competition standard."
        crumb="Facilities"
        image="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1600&q=80&auto=format&fit=crop"
      />
      <Facilities />
      <GalleryPreview />
      <Contact />
    </>
  );
}
