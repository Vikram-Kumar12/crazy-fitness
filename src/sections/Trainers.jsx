import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";
import { trainers } from "../data/content";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import { fadeUp } from "../lib/motion";

export default function Trainers() {
  return (
    <section id="trainers" className="section-y relative overflow-hidden bg-secondary text-white">
      {/* Decorative giant text */}
      <span className="pointer-events-none absolute -top-6 left-0 select-none whitespace-nowrap font-display text-[18vw] leading-none text-white/[0.03]">
        THE COACHES
      </span>

      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Meet the team"
            title="Coaches who move mountains"
            className="max-w-2xl"
            light
          />
          <Reveal className="max-w-xs text-white/60">
            Internationally certified specialists who build the plan, track the
            progress and push you past every limit.
          </Reveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
        >
          {trainers.map((t) => (
            <motion.article
              key={t.name}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-white/10"
              data-cursor="hover"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={t.image}
                  alt={`${t.name}, ${t.role}`}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Specialty tag slides up on hover */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="mb-2 inline-block translate-y-3 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {t.specialty}
                </span>
                <h3 className="font-display text-2xl tracking-wide text-white">
                  {t.name}
                </h3>
                <p className="text-sm text-white/60">{t.role}</p>
              </div>

              <a
                href="#"
                aria-label={`${t.name} on Instagram`}
                className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-500 hover:bg-brand group-hover:opacity-100"
              >
                <FaInstagram className="size-4" />
              </a>
            </motion.article>
          ))}
        </motion.div>

        <Reveal className="mt-12 flex items-center justify-center">
          <a
            href="/about"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white"
          >
            View all trainers
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
