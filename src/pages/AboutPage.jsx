import Seo from "../components/Seo";
import PageHero from "../components/ui/PageHero";
import About from "../sections/About";
import Trainers from "../sections/Trainers";
import Testimonials from "../sections/Testimonials";
import { stats } from "../data/content";
import Counter from "../components/ui/Counter";
import Reveal from "../components/ui/Reveal";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        path="/about"
        description="Discover the story behind Crazy Fitness Gym — our mission, our coaches, and the premium environment built for the relentless."
      />
      <PageHero
        eyebrow="Our story"
        title="Built for the relentless"
        subtitle="What started as one room and a barbell is now a movement of thousands. This is who we are."
        crumb="About"
        image="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1600&q=80&auto=format&fit=crop"
      />

      {/* Stat band */}
      <section className="border-b border-line bg-bg-soft">
        <div className="container-x grid grid-cols-2 gap-8 py-14 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i} className="text-center">
              <p className="font-display text-5xl text-brand">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-muted">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <About />
      <Trainers />
      <Testimonials />
    </>
  );
}
