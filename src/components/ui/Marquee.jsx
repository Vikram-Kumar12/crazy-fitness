import { cn } from "../../utils/cn";

// Infinite CSS marquee. Duplicates children so the loop is seamless.
export default function Marquee({ items, className, itemClassName, separator = "✦" }) {
  const row = (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden>
      {items.map((item, i) => (
        <li key={i} className={cn("flex items-center gap-10", itemClassName)}>
          <span>{item}</span>
          <span className="text-brand">{separator}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={cn("flex overflow-hidden select-none", className)}
      style={{ maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}
    >
      <div className="flex animate-marquee">
        {row}
        {row}
      </div>
    </div>
  );
}
