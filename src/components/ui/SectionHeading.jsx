import { cn } from "../../utils/cn";
import Reveal from "./Reveal";
import AnimatedText from "./AnimatedText";

// Consistent section header: eyebrow kicker + masked-reveal title + optional
// lead paragraph. `align` controls composition per section for variety.
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
  titleClassName,
  light = false,
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "right" && "ml-auto text-right",
        className
      )}
    >
      {eyebrow && (
        <Reveal
          className={cn(
            "mb-5 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em]",
            light ? "text-white/70" : "text-muted"
          )}
        >
          <span className="h-px w-8 bg-brand" />
          {eyebrow}
        </Reveal>
      )}

      <AnimatedText
        as="h2"
        text={title}
        className={cn(
          "font-display text-section leading-[0.92]",
          align === "center" && "justify-center",
          align === "right" && "justify-end",
          light ? "text-white" : "text-content",
          titleClassName
        )}
      />

      {lead && (
        <Reveal
          delay={2}
          className={cn(
            "mt-6 text-lg leading-relaxed text-balance",
            light ? "text-white/70" : "text-muted",
            align === "center" && "mx-auto"
          )}
        >
          {lead}
        </Reveal>
      )}
    </div>
  );
}
