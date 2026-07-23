import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { facilities, amenities } from "../data/content";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import { fadeUp } from "../lib/motion";
import { cn } from "../utils/cn";

function FacilityCard({ item, className }) {
  return (
    <motion.article
      variants={fadeUp}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-line",
        className
      )}
      data-cursor="hover"
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
      />
      {/* Legibility gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
      {/* Brand wash on hover */}
      <div className="absolute inset-0 bg-brand/0 transition-colors duration-500 group-hover:bg-brand/15" />

      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        <span className="mb-3 grid size-11 place-items-center rounded-xl bg-white/10 text-white backdrop-blur-md transition-colors group-hover:bg-brand">
          <item.icon className="size-5" />
        </span>
        <h3 className="font-display text-3xl tracking-wide text-white">
          {item.title}
        </h3>
        <p className="mt-1 max-w-xs translate-y-2 text-sm text-white/70 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {item.text}
        </p>
        <ArrowUpRight className="absolute right-6 top-6 size-6 text-white opacity-0 transition-all duration-500 group-hover:opacity-100" />
      </div>
    </motion.article>
  );
}

export default function Facilities() {
  return (
    <section id="facilities" className="section-y relative overflow-hidden bg-bg-soft">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-60" />
      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="World-class facilities"
            title="Every zone engineered to perform"
            className="max-w-2xl"
          />
          <Reveal className="hidden max-w-xs text-muted md:block">
            <p>
              22,000 sq ft of purpose-built space across six distinct training
              environments.
            </p>
          </Reveal>
        </div>

        {/* Bento grid — mixed heights for a custom, non-template feel */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:auto-rows-[240px]"
        >
          <FacilityCard item={facilities[0]} className="col-span-2 row-span-2 lg:col-span-2" />
          <FacilityCard item={facilities[1]} className="col-span-2 lg:col-span-2" />
          <FacilityCard item={facilities[2]} className="col-span-1 lg:col-span-1" />
          <FacilityCard item={facilities[4]} className="col-span-1 lg:col-span-1" />
          <FacilityCard item={facilities[3]} className="col-span-2 row-span-2 lg:col-span-1 lg:row-span-2" />
          <FacilityCard item={facilities[5]} className="col-span-2 lg:col-span-1" />
        </motion.div>

        {/* Amenities strip */}
        <Reveal className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-2xl border border-line bg-bg p-6">
          {amenities.map((a) => (
            <div key={a.label} className="flex items-center gap-2.5 text-muted">
              <a.icon className="size-5 text-brand" />
              <span className="text-sm font-medium">{a.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
