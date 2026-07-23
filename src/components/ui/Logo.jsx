import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";
import { business } from "../../data/business";

// Wordmark logo with a lightning/kettlebell mark. Swap the SVG for a real
// logo file in /public/logo when available.
export default function Logo({ className, onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label={`${business.name} — home`}
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl bg-brand text-white shadow-[0_6px_20px_-6px_rgba(255,77,0,0.8)] transition-transform duration-500 group-hover:rotate-[10deg]">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
          <path
            d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"
            fill="currentColor"
            className="drop-shadow"
          />
        </svg>
        <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-700 group-hover:translate-x-full" />
      </span>
      <span className="font-display text-2xl leading-none tracking-wide text-content">
        CRAZY<span className="text-brand">FITNESS</span>
      </span>
    </Link>
  );
}
