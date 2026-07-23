import Seo from "../components/Seo";
import PageHero from "../components/ui/PageHero";
import Membership from "../sections/Membership";
import FAQ from "../sections/FAQ";
import Contact from "../sections/Contact";

export default function MembershipPage() {
  return (
    <>
      <Seo
        title="Membership & Pricing"
        path="/membership"
        description="Flexible, transparent membership plans at Crazy Fitness Gym. Start with a free trial — no contracts, cancel anytime."
      />
      <PageHero
        eyebrow="Plans & pricing"
        title="Pick your level of crazy"
        subtitle="Transparent pricing, zero lock-in. Every plan starts with a free assessment."
        crumb="Membership"
        image="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1600&q=80&auto=format&fit=crop"
      />
      <Membership />
      <FAQ />
      <Contact />
    </>
  );
}
