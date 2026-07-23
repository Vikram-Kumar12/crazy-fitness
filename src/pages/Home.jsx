import Seo, { localBusinessSchema, faqSchema } from "../components/Seo";
import { faqs } from "../data/content";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Facilities from "../sections/Facilities";
import Membership from "../sections/Membership";
import Trainers from "../sections/Trainers";
import GalleryPreview from "../sections/GalleryPreview";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        schema={[localBusinessSchema, faqSchema(faqs)]}
      />
      <Hero />
      <About />
      <Facilities />
      <Membership />
      <Trainers />
      <GalleryPreview />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
