import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowRight, Play, Star, MousePointer2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { business, telLink, whatsappLink } from "../data/business";
import { stats, programsMarquee } from "../data/content";
import { useHasFinePointer } from "../hooks/useMediaQuery";
import { EASE } from "../lib/motion";
import Button from "../components/ui/Button";
import Counter from "../components/ui/Counter";
import Marquee from "../components/ui/Marquee";

// Headline is split into lines → words for a staggered mask reveal.
const line1 = ["TRAIN", "INSANE"];
const line2 = ["OR", "REMAIN", "THE", "SAME"];

const wordVariants = {
  hidden: { y: "115%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 1, ease: EASE, delay: 0.35 + i * 0.08 },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const fine = useHasFinePointer();

  // Scroll-driven parallax for background layers.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Mouse parallax.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 20 });
  const py = useSpring(my, { stiffness: 60, damping: 20 });
  const layerA = useTransform(px, [-0.5, 0.5], [-28, 28]);
  const layerAy = useTransform(py, [-0.5, 0.5], [-20, 20]);
  const layerB = useTransform(px, [-0.5, 0.5], [22, -22]);
  const layerBy = useTransform(py, [-0.5, 0.5], [16, -16]);

  const onMouseMove = (e) => {
    if (!fine) return;
    const { innerWidth, innerHeight } = window;
    mx.set(e.clientX / innerWidth - 0.5);
    my.set(e.clientY / innerHeight - 0.5);
  };

  let wordIndex = 0;

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMouseMove}
      className="noise relative flex min-h-[100svh] flex-col overflow-hidden bg-ink"
    >
      {/* ---- Background video with parallax + zoom (image poster fallback) ---- */}
      <motion.div style={{ y: yBg, scale: scaleImg }} className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80&auto=format&fit=crop"
          aria-label="Athletes training at Crazy Fitness Gym"
          className="h-full w-full object-cover object-center opacity-55"
        >
          {/* Swap for a local /videos/hero.mp4 when available */}
          <source
            src="https://videos.pexels.com/video-files/5319759/5319759-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Gradient overlays for depth + legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-transparent to-ink/50" />
      </motion.div>

      {/* ---- Animated glow blobs ---- */}
      <motion.div
        style={{ x: layerA, y: layerAy }}
        className="pointer-events-none absolute -left-24 top-24 z-0 h-[32rem] w-[32rem] rounded-full bg-brand/30 blur-[120px] animate-pulse-glow"
      />
      <motion.div
        style={{ x: layerB, y: layerBy }}
        className="pointer-events-none absolute -right-20 bottom-10 z-0 h-[26rem] w-[26rem] rounded-full bg-accent/20 blur-[120px] animate-pulse-glow"
      />

      {/* ---- Floating shapes ---- */}
      <motion.div
        style={{ x: layerB, y: layerBy }}
        className="pointer-events-none absolute right-[12%] top-[22%] z-[1] hidden lg:block"
      >
        <div className="size-24 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md animate-float" />
      </motion.div>
      <motion.div
        style={{ x: layerA, y: layerAy }}
        className="pointer-events-none absolute left-[8%] bottom-[26%] z-[1] hidden lg:block"
      >
        <div className="aura size-16 rounded-full opacity-70 blur-[2px] animate-spin-slow" />
      </motion.div>

      {/* ---- Content ---- */}
      <motion.div
        style={{ y: yContent, opacity }}
        className="container-x relative z-10 flex flex-1 flex-col justify-center pt-32 pb-16"
      >
        {/* Rating pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          className="mb-7 inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <span className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3.5 fill-accent text-accent" />
            ))}
          </span>
          <span className="text-sm text-white/80">
            {business.rating.score} · {business.rating.count.toLocaleString("en-IN")}+ member reviews
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display text-hero text-white">
          <span className="sr-only">{business.tagline}</span>
          <span aria-hidden className="block">
            <span className="flex flex-wrap gap-x-[0.22em]">
              {line1.map((w) => (
                <span key={w} className="overflow-hidden">
                  <motion.span
                    className="inline-block"
                    custom={wordIndex++}
                    variants={wordVariants}
                    initial="hidden"
                    animate="show"
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </span>
            <span className="flex flex-wrap gap-x-[0.22em]">
              {line2.map((w, i) => (
                <span key={w} className="overflow-hidden">
                  <motion.span
                    className={
                      "inline-block " +
                      (i === 0 ? "text-gradient-brand" : "text-white/25")
                    }
                    custom={wordIndex++}
                    variants={wordVariants}
                    initial="hidden"
                    animate="show"
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </span>
          </span>
        </h1>

        {/* Sub copy */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 1 }}
          className="mt-7 max-w-xl text-lg text-white/70 sm:text-xl"
        >
          Elite equipment. World-class coaching. A recovery spa that brings you
          back stronger. This is fitness, engineered for the relentless.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 1.15 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Button href={telLink} size="lg" icon={ArrowRight} iconRight>
            Start Free Trial
          </Button>
          <Button
            href={whatsappLink()}
            variant="glass"
            size="lg"
            icon={FaWhatsapp}
            className="text-white"
          >
            Chat on WhatsApp
          </Button>
          <button
            type="button"
            className="group flex items-center gap-3 text-white"
            data-cursor="hover"
          >
            <span className="grid size-12 place-items-center rounded-full border border-white/20 transition-all group-hover:border-brand group-hover:bg-brand">
              <Play className="size-4 fill-white" />
            </span>
            <span className="text-sm font-medium">Watch Tour</span>
          </button>
        </motion.div>

        {/* Stats */}
        <motion.dl
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 1.35 } } }}
          className="mt-14 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
            >
              <dt className="font-display text-4xl text-white sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-white/50">
                {s.label}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </motion.div>

      {/* ---- Scroll indicator ---- */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 lg:flex"
      >
        <div className="flex flex-col items-center gap-2 text-white/50">
          <MousePointer2 className="size-4" />
          <div className="relative h-10 w-[1px] overflow-hidden bg-white/20">
            <motion.span
              className="absolute inset-x-0 top-0 h-3 bg-brand"
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        </div>
      </motion.div>

      {/* ---- Programs marquee at the base ---- */}
      <div className="relative z-10 border-y border-white/10 bg-white/5 py-4 backdrop-blur-md">
        <Marquee
          items={programsMarquee}
          className="font-display text-xl tracking-wide text-white/80"
        />
      </div>
    </section>
  );
}
