import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import AnimatedText from "./AnimatedText";
import Reveal from "./Reveal";
import { cn } from "../../utils/cn";

// Compact page header used by inner pages, with breadcrumb + eyebrow.
export default function PageHero({ eyebrow, title, subtitle, crumb, image }) {
  return (
    <header className="relative flex min-h-[52vh] items-end overflow-hidden bg-ink pt-28 pb-14 text-white">
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            aria-hidden
            className="h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        </div>
      )}
      <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-brand/25 blur-[110px]" />

      <div className="container-x relative z-10">
        <Reveal className="mb-5 flex items-center gap-2 text-sm text-white/60">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="text-white">{crumb ?? title}</span>
        </Reveal>

        {eyebrow && (
          <Reveal className="mb-4 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-brand">
            <span className="h-px w-8 bg-brand" /> {eyebrow}
          </Reveal>
        )}

        <AnimatedText
          as="h1"
          text={title}
          className={cn("font-display text-display leading-[0.9] text-white")}
        />

        {subtitle && (
          <Reveal delay={2} className="mt-5 max-w-2xl text-lg text-white/70">
            {subtitle}
          </Reveal>
        )}
      </div>
    </header>
  );
}
