import Seo from "../components/Seo";
import PageHero from "../components/ui/PageHero";
import GalleryPreview from "../sections/GalleryPreview";
import Contact from "../sections/Contact";

export default function GalleryPage() {
  return (
    <>
      <Seo
        title="Gallery"
        path="/gallery"
        description="Step inside Crazy Fitness Gym. Browse our strength floor, cardio theatre, classes and recovery spaces."
      />
      <PageHero
        eyebrow="Gallery"
        title="See it for yourself"
        subtitle="A visual tour of the space, the energy and the community."
        crumb="Gallery"
        image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600&q=80&auto=format&fit=crop"
      />
      <GalleryPreview />
      <Contact />
    </>
  );
}
