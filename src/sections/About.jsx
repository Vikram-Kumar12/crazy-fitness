import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { pillars } from "../data/content";
import { business } from "../data/business";
import Reveal from "../components/ui/Reveal";
import AnimatedText from "../components/ui/AnimatedText";
import Button from "../components/ui/Button";
import { fadeUp } from "../lib/motion";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yImg1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yImg2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section id="about" className="section-y relative overflow-hidden bg-bg">
      <div className="container-x grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Left: image collage */}
        <div ref={ref} className="relative order-2 lg:order-1">
          <motion.div style={{ y: yImg1 }} className="relative z-10 will-transform">
            <div className="overflow-hidden rounded-[2rem] border border-line">
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=80&auto=format&fit=crop"
                alt="Members training in the HIIT arena"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          <motion.div
            style={{ y: yImg2 }}
            className="absolute -bottom-10 -right-4 z-20 w-2/5 will-transform sm:-right-8"
          >
            <div className="overflow-hidden rounded-2xl border-4 border-bg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80&auto=format&fit=crop"
                alt="Group class energy at Crazy Fitness Gym"
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Floating experience badge */}
          <div className="absolute -left-4 -top-8 z-30 sm:-left-8">
            <div className="glass flex size-28 flex-col items-center justify-center rounded-full text-center">
              <span className="font-display text-4xl leading-none text-brand">
                {new Date().getFullYear() - business.foundedYear}
              </span>
              <span className="text-[10px] uppercase leading-tight tracking-wider text-muted">
                Years<br />Strong
              </span>
            </div>
          </div>

          <div className="pointer-events-none absolute -inset-10 -z-10 bg-brand/10 blur-[100px]" />
        </div>

        {/* Right: copy */}
        <div className="order-1 lg:order-2">
          <Reveal className="mb-5 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            <span className="h-px w-8 bg-brand" /> Who we are
          </Reveal>

          <AnimatedText
            as="h2"
            text="More than a gym. A movement."
            className="font-display text-section leading-[0.95] text-content"
          />

          <Reveal delay={1} className="mt-6 text-lg leading-relaxed text-muted">
            Since {business.foundedYear}, {business.name} has redefined what a
            neighbourhood gym can be. We fused competition-grade equipment,
            internationally certified coaches and a design-led space into one
            relentless environment — built to make every rep count.
          </Reveal>

          {/* Pillars */}
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
          >
            {pillars.map((p) => (
              <motion.li key={p.title} variants={fadeUp} className="group flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-line bg-bg-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <p.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-content">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{p.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <Reveal delay={2} className="mt-10">
            <Button to="/about" variant="outline" icon={ArrowUpRight} iconRight>
              Our full story
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
