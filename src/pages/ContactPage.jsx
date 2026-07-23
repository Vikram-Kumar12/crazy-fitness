import Seo from "../components/Seo";
import PageHero from "../components/ui/PageHero";
import Contact from "../sections/Contact";
import FAQ from "../sections/FAQ";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        path="/contact"
        description="Get in touch with Crazy Fitness Gym. Call, WhatsApp, or book your free trial online today."
      />
      <PageHero
        eyebrow="Say hello"
        title="Let's get you started"
        subtitle="Book a free trial or ask us anything — we reply fast."
        crumb="Contact"
        image="https://images.unsplash.com/photo-1517964706852-4b7d7e0d0f1e?w=1600&q=80&auto=format&fit=crop"
      />
      <Contact />
      <FAQ />
    </>
  );
}
